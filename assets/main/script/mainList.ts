// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainList extends cc.Component {

    @property(cc.Node)
    listLayout: cc.Node = null;
    @property(cc.Prefab)
    NewButton: cc.Prefab = null;

    targets = [
        "demo1",
        "demo2",
        "demo3",
        "demo4"
    ];
    targetDemoName = [
        "火焰效果",
        "电视机雪花",
        "动态光影",
        "震动波"
    ];

    onLoad() {
        this.targets.forEach((arg, i) => {
            let button = cc.instantiate(this.NewButton);
            button.setParent(this.listLayout);
            button.getComponentInChildren(cc.Label).string = this.targetDemoName[i];
            this.bindButton(button, arg);
        });
    }
    onClick(e: cc.Event, data: string) {
        console.log(data);
        cc.director.loadScene(data);
    }
    bindButton(node: cc.Node, data: string) {
        let event: cc.Component.EventHandler = new cc.Component.EventHandler();
        event.target = this.node;
        event.component = 'mainList';
        event.handler = 'onClick';
        event.customEventData = data;

        let compButton = node.getComponent(cc.Button);
        compButton.clickEvents = [];
        compButton.clickEvents.push(event);
    }

}
