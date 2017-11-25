
// Type definitions for three.js (SAOPass.js)
// Project: https://github.com/mrdoob/three.js/blob/r68/examples/js/postprocessing/ShaderPass.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace THREE {
    export class SAOPass extends Pass {
        constructor(shader: Shader, textureID?: string);
        params:any;
   }
}
