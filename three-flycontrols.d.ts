// Type definitions for three.js (OrbitControls.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js
// Definitions by: Hou Chunlei <https://github.com/omni360>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace THREE {
  class FlyControls {
    constructor(object: Camera, domElement?: HTMLElement);

    object: Camera;
    domElement: HTMLElement | HTMLDocument;

    // API
    enabled: boolean;
    movementSpeed:number;
    rollSpeed:number;
    delta:number;

    dragToLook:boolean;
    autoForward:boolean;

    rollOn:boolean;
    isEnd:boolean;

    tmpQuaternion:THREE.Quaternion;
    mouseStatus:number;

    moveState:any;
    moveVector:THREE.Vector3;
    rotationVector:THREE.Vector3;

    handleEvent(event:THREE.Event):any;

    keydown(event:Event):any;
    keyup(event:Event):any;
    mousedown(event:MouseEvent):any;
    mouseup(event:MouseEvent):any;
    mousemove(event:MouseEvent):any;
    update():any;
    updateMovementVector():any;
    updateRotationVector():any;
    getContainerDimensions():any;
    dispose():any;

    // EventDispatcher mixins
    addEventListener(type: string, listener: (event: any) => void): void;

    hasEventListener(type: string, listener: (event: any) => void): void;

    removeEventListener(type: string, listener: (event: any) => void): void;

    dispatchEvent(event: {type: string; target: any;}): void;
  }
}

