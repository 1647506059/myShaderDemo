// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property,executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    NewSprite: cc.Sprite = null;

    u_time = 0;
    onLoad() {
        let materials = this.NewSprite.getMaterials();
        console.log(materials);
    }
    update(dt) {
        this.u_time +=dt;
        this.NewSprite.getMaterial(0).setProperty('u_time', this.u_time);
    }
}
