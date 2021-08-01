var xhr = new XMLHttpRequest();
xhr.open("GET", "./js/main.js", true);
xhr.onreadystatechange = () =>
{
    if (xhr.readyState === XMLHttpRequest.DONE)
    {
        if (xhr.status === 200)
        {
            result = xhr.responseText;


            // patch the main.js and then store it into the storage
            patchedMainJs = patchMainJs(result);

            eval(patchedMainJs);

            KCS.init();
        }
    }
};
xhr.send();



function patchMainJs(contents) {

    contents = contents.toString();

    contents = contents.replace(/(return .{0,99}\!\=.{0,99}\|\|null\!\=\(.{0,99}\=.{0,99}\(.{0,99}\)\)&&\(.{0,99}\='_'\+.{0,99}\),.{0,99}\+\(.{0,99}\+.{0,99}\+'\/'\+\(.{0,99}\+.{0,99}\(.{0,99},.{0,99}\)\)\+'_'\+.{0,99}\+.{0,99}\+.{0,99}\+.{0,99}\(0x0,parseInt\(.{0,99}\)\)\);)/g, 
        "\n return window.displacementPath = (function () {\n$1\n})();\n");


    contents = contents.replace(/(new PIXI\[.{0,99}\]\(.{0,99}\[.{0,99}\]\[.{0,99}\],.{0,99},.{0,99}\);document)/g, 
        "\n window.pixiApp = $1");

    contents = contents.replace(/(\=[^=]{0,99}\[[^\[]{0,99}\]\[[^\[]{0,99}\]\([^\(]{0,99}\),[^,]{0,99}\=0x0\=\=.{0,99}\?0x0\:.{0,99},.{0,99}\=.{0,99}\[.{0,99}\]\[.{0,99}\]\[.{0,99}\]\(.{0,99}\);)/g, 
        "\n = window.charar $1");

    contents = contents.replace(/(var .{0,99}\=new PIXI\[\(.{0,99}\)\]\(.{0,99}\);this\[.{0,99}\]\=.{0,99}\[.{0,99}\]\[.{0,99}\]\[.{0,99}\]\[.{0,99}\]\[.{0,99}\]\(.{0,99}\),this\[.{0,99}\]\[.{0,99}]\[.{0,99}\]\(.{0,99},\-.{0,99}\);var [^=]{0,99}=)/g, 
        "$1 window.charal = \n");

    contents = contents.replace(/(\=[^=]{0,99}\[[^=]{0,99}\]\[[^=]{0,99}\]\[.{0,99}\]\[.{0,99}\]\(.{0,99}\)\[.{0,99}\]\(.{0,99}\);this\[.{0,99}\]\[.{0,99}\]\[.{0,99}\]\(\-.{0,99}\+.{0,99}\['x'\]\+.{0,99},\-.{0,99}\+.{0,99}\['y'\]\),)/g, 
        "\n = window.charah $1");

    contents = contents.replace(/(\['y'\]\),this\[.{0,99}\('.{0,99}'\)\]\[.{0,99}\('.{0,99}'\)\]\(.{0,99}\+.{0,99},.{0,99}\-.{0,99}\);)/g, 
        "$1 " + `
window.portOffset = -window.charal + window.charah.x;//-l+h.x
window.portOffsetR = window.charar;//r

window.displacementSprite = PIXI.Sprite.fromImage(window.displacementPath.replace(/resources\\/ship\\/full\\/([0-9]*)_([0-9_a-z]*).png(\\?version=)?([0-9]*)/g, \"https://cdn.jsdelivr.net/gh/laplamgor/kantai3d-depth-maps@master/source/$$1/$$1_$$2_v$$4.png\"));
window.displacementFilter = PIXI.DepthPerspectiveFilter;

window.displacementFilter.uniforms.textureWidth = this._chara.texture.width;
window.displacementFilter.uniforms.textureHeight = this._chara.texture.height;

window.displacementSprite.visible = false;

window.displacementFilter.padding = 150;

window.currentChara = this._chara;

if (window.displacementSprite.width != 1) {
    // The depth map is already loaded
    window.displacementFilter.uniforms.displacementMap = window.displacementSprite.texture;
    window.displacementFilter.uniforms.scale = 1.0;
    window.displacementFilter.uniforms.focus = 0.5;
    window.displacementFilter.uniforms.offset = [0.0, 0.0];
    window.currentChara.filters = [window.displacementFilter];
    window.currentChara.addChild(window.displacementSprite);
} else {
    // The depth map is not loaded yet, and may not exist in server at all
    // Disable the filter first
    this._chara.filters = [];
    window.currentChara.filters = [];
    window.displacementSprite.texture.baseTexture.on('loaded', function(){
        // Re-enable the filter when resource loaded
        window.displacementFilter.uniforms.displacementMap = window.displacementSprite.texture;
        window.displacementFilter.uniforms.scale = 1.0;
        window.displacementFilter.uniforms.focus = 0.5;
        window.displacementFilter.uniforms.offset = [0.0, 0.0];
        window.currentChara.filters = [window.displacementFilter];
        window.currentChara.addChild(window.displacementSprite);
    });
}
`);

    contents = contents.replace(/(\=Math\[.{0,99}\]\(.{0,99}\),.{0,99}\=0x1\+0\.012\*\(0\.5\+0\.5\*.{0,99}\);this\[.{0,99}\]\[.{0,99}\]\(.{0,99}\),)/g, 
        "\n = window.charasin $1");

    contents = contents.replace(/(this\['y'\]=this\[.{0,99}\('.{0,99}'\)]-1.5\*.{0,99}\*1.8;)/g, 
        `$1
var mousex2 = (window.pixiApp.renderer.plugins.interaction.mouse.global.x);
var mousey2 = (window.pixiApp.renderer.plugins.interaction.mouse.global.y);

if (!mouseoutside) {
    if (!window.mousex1) window.mousex1 = mousex2;
    if (!window.mousey1) window.mousey1 = mousey2;

    if (!window.mousex) window.mousex = 0;
    if (!window.mousey) window.mousey = 0;
    if (!window.mouset) window.mouset = Date.now();

    window.mousex += (mousex2 - window.mousex1) * (Date.now() - window.mouset);
    window.mousey += (mousey2 - window.mousey1) * (Date.now() - window.mouset);

    window.mousex1 = mousex2;
    window.mousey1 = mousey2;
}

window.displacementFilter.uniforms.textureScale = this.scale.x;

var flip = (this.parent._chara.transform.position.x - window.portOffset) / (window.portOffsetR) - 0.5;
window.displacementFilter.uniforms.offset = [flip * (window.mousex / 1200.0 * 0.05) *1.3
,0.02 * window.charasin - 0.01 + (window.mousey / 720.0 * 0.05) * 0.6];


window.mousex = window.mousex * Math.pow(0.9, (Date.now() - window.mouset) / 30.0);
window.mousey = window.mousey * Math.pow(0.9, (Date.now() - window.mouset) / 30.0);
window.mouset = Date.now();
`);

    return contents + `;



document.addEventListener('mouseleave', e => {
    window.mouseoutside = true;
    window.mousex1 = null;
    window.mousey1 = null;
});

document.addEventListener('mouseenter', e => {
    window.mouseoutside = false;
});




'use strict';
PIXI.DepthPerspectiveFilter = new PIXI.Filter(null, \`` + frag + `\`);

PIXI.DepthPerspectiveFilter.apply = function(filterManager, input, output)
{
  this.uniforms.dimensions = {};
  this.uniforms.dimensions[0] = input.sourceFrame.width;
  this.uniforms.dimensions[1] = input.sourceFrame.height;

  this.uniforms.padding = this.padding;
  
  this.uniforms.frameWidth = input.size.width;
  this.uniforms.frameHeight = input.size.height;

  // draw the filter...
  filterManager.applyFilter(this, input, output);
}

`;
}

let frag = `precision mediump float;
uniform vec2 offset;




uniform sampler2D uSampler;
uniform sampler2D displacementMap;

uniform float textureScale;

uniform float textureWidth;
uniform float textureHeight;
uniform float frameWidth;
uniform float frameHeight;

uniform float padding;
uniform vec4 filterArea;
uniform vec4 filterClamp;


varying vec2 vTextureCoord;
varying vec4 vColor;
uniform vec4 dimensions;
uniform vec2 mapDimensions;
uniform float scale;
uniform float focus;


vec2 mapCoordDepth(vec2 coord)
{
    return vec2((coord[0] * frameWidth - padding) / textureWidth / textureScale,
                (coord[1] * frameHeight - padding) / textureHeight / textureScale);
}

vec2 mapCoord2(vec2 coord)
{
    return vec2(coord[0] * frameWidth / textureWidth / textureScale,
                coord[1] * frameHeight / textureHeight / textureScale);
}

const float compression = 1.0;
const float dmin = 0.0;
const float dmax = 1.0;

#define MAXSTEPS 600.0
float steps = max(MAXSTEPS *length(offset), 30.0);






















































































void main(void)
{

    float aspect = dimensions.x / dimensions.y;
    vec2 scale2 =
        vec2(scale * min(1.0, 1.0 / aspect), scale * min(1.0, aspect)) * vec2(1, -1);
    mat2 baseVector =
        mat2(vec2((0.5 - focus) * (offset) - (offset) / 2.0) * scale2,
             vec2((0.5 - focus) * (offset) + (offset) / 2.0) * scale2);

    vec2 pos = (vTextureCoord);
    mat2 vector = baseVector;

    float dstep = compression / (steps - 1.0);
    vec2 vstep = (vector[1] - vector[0]) / vec2((steps - 1.0));

    vec2 posSumLast = vec2(0.0);
    vec2 posSum = vec2(0.0);

    float weigth = 1.0;
    float dpos;
    float dposLast;

    for (float i = 0.0; i < MAXSTEPS; ++i)
    {
        vec2 vpos = pos + vector[1] - i * vstep;
        dpos = 1.0 - i * dstep;
        float depth = texture2D(displacementMap, mapCoordDepth(vpos)).r;


        if (texture2D(uSampler, vpos)[3] == 0.0)
        {
            depth = 0.0;
        }

        depth = clamp(depth, dmin, dmax);

        if (dpos > depth)
        {
            posSumLast = vpos;
            dposLast = dpos;
        }
        else
        {
            posSum = vpos;
            weigth = (depth - dposLast) / dstep;
            break;
        }
    };

    gl_FragColor = texture2D(
                       uSampler,
                       (posSum - posSumLast) * -clamp(weigth * 0.5 + 0.5, 0.0, 1.5) + posSum);

}`;