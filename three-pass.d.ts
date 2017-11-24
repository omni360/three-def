declare namespace THREE {
    export class Pass {
        constructor();

        enabled:boolean;
        needsSwap:boolean;
        clear:boolean;
        renderToScreen:boolean;

        setSize(width:number,height:number);
        render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget, delta: number): void;
    }
}