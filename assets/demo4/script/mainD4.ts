// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property, executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class MainD4 extends cc.Component {

    @property(cc.Sprite)
    NewSprite: cc.Sprite = null;

    u_time = 0;
    onLoad() {
        this.NewSprite.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    }
    touchStart(e: cc.Event.EventTouch) {
        let size = this.NewSprite.node.getContentSize();
        let touch_position = e.getLocation();
        let _inSprteWorldVec2 = this.NewSprite.node.convertToNodeSpaceAR(touch_position);
        let convert_uv_x = (_inSprteWorldVec2.x + size.width / 2) / size.width;
        let convert_uv_y = Math.abs((_inSprteWorldVec2.y - size.height / 2) / size.height);
        console.log(convert_uv_x.toFixed(2), convert_uv_y.toFixed(2));
        this.NewSprite.getMaterial(0).setProperty('touch_pos', cc.v2(convert_uv_x, convert_uv_y));
    }
    update(dt) {
        this.u_time += dt;
        this.NewSprite.getMaterial(0).setProperty('u_time', this.u_time);
        if (this.u_time >= 1) {
            this.u_time = 0;
        }
    }

}
