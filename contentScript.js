var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log("---------------------------" + window.self.location);

$('body').prepend("<script>" +
    // this is same script in index.js but minified and scaped
    "var xhr=new XMLHttpRequest;function patchMainJs(n){return(n=(n=(n=(n=(n=(n=(n=(n=(n=n.toString()).replace(\/(return .{0,99}\\!\\=.{0,99}\\|\\|null\\!\\=\\(.{0,99}\\=.{0,99}\\(.{0,99}\\)\\)&&\\(.{0,99}\\=\'_\'\\+.{0,99}\\),.{0,99}\\+\\(.{0,99}\\+.{0,99}\\+\'\\\/\'\\+\\(.{0,99}\\+.{0,99}\\(.{0,99},.{0,99}\\)\\)\\+\'_\'\\+.{0,99}\\+.{0,99}\\+.{0,99}\\+.{0,99}\\(0x0,parseInt\\(.{0,99}\\)\\)\\);)\/g,\"\\n return window.displacementPath = (function () {\\n$1\\n})();\\n\")).replace(\/(new PIXI\\[.{0,99}\\]\\(.{0,99}\\[.{0,99}\\]\\[.{0,99}\\],.{0,99},.{0,99}\\);document)\/g,\"\\n window.pixiApp = $1\")).replace(\/(\\=[^=]{0,99}\\[[^\\[]{0,99}\\]\\[[^\\[]{0,99}\\]\\([^\\(]{0,99}\\),[^,]{0,99}\\=0x0\\=\\=.{0,99}\\?0x0\\:.{0,99},.{0,99}\\=.{0,99}\\[.{0,99}\\]\\[.{0,99}\\]\\[.{0,99}\\]\\(.{0,99}\\);)\/g,\"\\n = window.charar $1\")).replace(\/(var .{0,99}\\=new PIXI\\[\\(.{0,99}\\)\\]\\(.{0,99}\\);this\\[.{0,99}\\]\\=.{0,99}\\[.{0,99}\\]\\[.{0,99}\\]\\[.{0,99}\\]\\[.{0,99}\\]\\[.{0,99}\\]\\(.{0,99}\\),this\\[.{0,99}\\]\\[.{0,99}]\\[.{0,99}\\]\\(.{0,99},\\-.{0,99}\\);var [^=]{0,99}=)\/g,\"$1 window.charal = \\n\")).replace(\/(\\=[^=]{0,99}\\[[^=]{0,99}\\]\\[[^=]{0,99}\\]\\[.{0,99}\\]\\[.{0,99}\\]\\(.{0,99}\\)\\[.{0,99}\\]\\(.{0,99}\\);this\\[.{0,99}\\]\\[.{0,99}\\]\\[.{0,99}\\]\\(\\-.{0,99}\\+.{0,99}\\[\'x\'\\]\\+.{0,99},\\-.{0,99}\\+.{0,99}\\[\'y\'\\]\\),)\/g,\"\\n = window.charah $1\")).replace(\/(\\[\'y\'\\]\\),this\\[.{0,99}\\(\'.{0,99}\'\\)\\]\\[.{0,99}\\(\'.{0,99}\'\\)\\]\\(.{0,99}\\+.{0,99},.{0,99}\\-.{0,99}\\);)\/g,\"$1 \\nwindow.portOffset = -window.charal + window.charah.x;\/\/-l+h.x\\nwindow.portOffsetR = window.charar;\/\/r\\n\\nwindow.displacementSprite = PIXI.Sprite.fromImage(window.displacementPath.replace(\/resources\\\\\/ship\\\\\/full[_dmg]*\\\\\/([0-9]*)_([0-9_a-z]*).png(\\\\?version=)?([0-9]*)\/g, \\\"https:\/\/cdn.jsdelivr.net\/gh\/laplamgor\/kantai3d-depth-maps@master\/source\/$$1\/$$1_$$2_v$$4.png\\\"));\\nwindow.displacementFilter = PIXI.DepthPerspectiveFilter;\\n\\nwindow.displacementFilter.uniforms.textureSize = {\\n  0: this._chara.texture.width,\\n  1: this._chara.texture.height\\n};\\n\\nwindow.displacementSprite.visible = false;\\n\\nwindow.displacementFilter.padding = 150;\\n\\nwindow.currentChara = this._chara;\\n\\nif (window.displacementSprite.width != 1) {\\n    console.log(\'The depth map for this secretary is already loaded.\');\\n    \/\/ The depth map is already loaded\\n    window.displacementFilter.uniforms.displacementMap = window.displacementSprite.texture;\\n    window.displacementFilter.uniforms.scale = 1.0;\\n    window.displacementFilter.uniforms.focus = 0.5;\\n    window.displacementFilter.uniforms.offset = [0.0, 0.0];\\n    window.currentChara.filters = [window.displacementFilter];\\n    window.currentChara.addChild(window.displacementSprite);\\n\\n    window.mousex1 = null;\\n    window.mousey1 = null;\\n    prepareJiggle(window.currentChara.texture, window.displacementSprite.texture);\\n    window.displacementFilter.uniforms.displacementMap = window.jiggledDepthMapRT.texture;\\n} else {\\n    \/\/ The depth map is not loaded yet, and may not exist in server at all\\n    \/\/ Disable the filter first\\n    this._chara.filters = [];\\n    window.currentChara.filters = [];\\n    window.displacementSprite.texture.baseTexture.on(\'loaded\', function(){\\n\\n        console.log(\'The depth map for this secretary is now loaded.\');\\n        \/\/ Re-enable the filter when resource loaded\\n        window.displacementFilter.uniforms.displacementMap = window.displacementSprite.texture;\\n        window.displacementFilter.uniforms.scale = 1.0;\\n        window.displacementFilter.uniforms.focus = 0.5;\\n        window.displacementFilter.uniforms.offset = [0.0, 0.0];\\n        window.currentChara.filters = [window.displacementFilter];\\n        window.currentChara.addChild(window.displacementSprite);\\n\\n        window.mousex1 = null;\\n        window.mousey1 = null;\\n        prepareJiggle(window.currentChara.texture, window.displacementSprite.texture);\\n        window.displacementFilter.uniforms.displacementMap = window.jiggledDepthMapRT.texture;\\n    });\\n\\n    window.displacementSprite.texture.baseTexture.on(\'error\', function(){\\n        console.log(\'The depth map for this secretary is not available. Please visit https:\/\/github.com\/laplamgor\/kantai3d to check the supported CG list and consider to contribute your own depth map.\');\\n    })\\n}\\n\\n\\n\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\n\\nfunction prepareJiggle(baseMap, depthMap) {\\n\\n    window.jigglePositions = [];\\n    window.jiggleVelocities = [];\\n    window.jiggleForces = [];\\n\\n    window.jiggleStaticFlags = [];\\n    window.jiggleMovement = [];\\n\\n    window.damping = [];\\n    window.springiness = [];\\n    \\n\\n    var depthImg = depthMap.baseTexture.source;\\n    var tempCanvas = document.createElement(\'canvas\');\\n    tempCanvas.width = depthImg.width;\\n    tempCanvas.height = depthImg.height;\\n    let tmCtx = tempCanvas.getContext(\'2d\');\\n    tmCtx.drawImage(depthImg, 0, 0);\\n    var dmData = tmCtx.getImageData(0, 0, depthImg.width, depthImg.height).data;\\n\\n\\n    window.jiggleMeshW = Math.ceil(baseMap.width \/ 10.0);\\n    window.jiggleMeshH = Math.ceil(baseMap.height \/ 10.0);\\n\\n    \/\/ This is the jiggled mseh\\n    window.jiggledDepthMapMesh = new PIXI.mesh.Plane(window.displacementSprite.texture, window.jiggleMeshW, window.jiggleMeshH);\\n    window.jiggledDepthMapMesh.visible = false;\\n\\n    \/\/ This is the render texture of the jiggled mseh\\n    window.jiggledDepthMapRT = new PIXI.Sprite(PIXI.RenderTexture.create(baseMap.width, baseMap.height));\\n    window.jiggledDepthMapRT.visible = false;\\n\\n    \\n    window.jiggledBaseMapMesh = new PIXI.mesh.Plane(baseMap, window.jiggleMeshW, window.jiggleMeshH);\\n    \\n    window.pixiApp.stage.addChild(window.jiggledDepthMapMesh);\\n    window.pixiApp.stage.addChild(window.jiggledDepthMapRT);\\n    window.currentChara.addChild(window.jiggledBaseMapMesh);\\n    \\n    window.gridW = baseMap.width \/ (window.jiggleMeshW - 1.0);\\n    window.gridH = baseMap.height \/ (window.jiggleMeshH - 1.0);\\n    for (var y = 0; y < window.jiggleMeshH; y++) {\\n        for (var x = 0; x < window.jiggleMeshW; x++) {\\n            window.jigglePositions.push({ x: window.gridW * x, y: y * window.gridH });\\n            window.jiggleVelocities.push({ x: 0, y: 0 });\\n            window.jiggleForces.push({ x: 0, y: 0 });\\n\\n            var r = dmData[(Math.floor(y * window.gridH) * baseMap.width + Math.floor(x * window.gridW)) * 4 + 0];\\n            var b = dmData[(Math.floor(y * window.gridH) * baseMap.width + Math.floor(x * window.gridW)) * 4 + 2];\\n\\n            window.damping.push(1.0 \/ (b \/ 255.0 * 16.0 + 1));\\n            window.springiness.push(1.0 \/ ( b \/ 255.0 * 32.0 + 1));\\n        \\n\\n            window.jiggleStaticFlags.push(b == 0);\\n            window.jiggleMovement.push((r - 127.0) \/ 128.0);\\n        }\\n    }\\n    \\n    window.Mx = null;\\n    window.My = null;\\n    window.Mx2 = null;\\n    window.My2 = null;\\n}\\n\")).replace(\/(\\=Math\\[.{0,99}\\]\\(.{0,99}\\),.{0,99}\\=0x1\\+0\\.012\\*\\(0\\.5\\+0\\.5\\*.{0,99}\\);this\\[.{0,99}\\]\\[.{0,99}\\]\\(.{0,99}\\),)\/g,\"\\n = window.charasin $1\")).replace(\/(this\\[\'y\'\\]=this\\[.{0,99}\\(\'.{0,99}\'\\)]-1.5\\*.{0,99}\\*1.8;)\/g,\"$1\\n\\nwindow.displacementFilter.uniforms.textureScale = this.scale.x;\\n\\n\"))+\";\\n\\n\\n    document.addEventListener(\'mouseleave\', e => {\\n        window.mouseoutside = true;\\n        window.mousex1 = null;\\n        window.mousey1 = null;\\n    });\\n    \\n    document.addEventListener(\'mouseenter\', e => {\\n        window.mouseoutside = false;\\n    });\\n    \\n    \\n    \\n    \\n    \'use strict\';\\n    PIXI.DepthPerspectiveFilter = new PIXI.Filter(null, `\"+frag+\"`);\\n    \\n    PIXI.DepthPerspectiveFilter.apply = function(filterManager, input, output)\\n    {\\n      this.uniforms.dimensions = {\\n        0: input.sourceFrame.width,\\n        1: input.sourceFrame.height\\n      };\\n\\n      this.uniforms.padding = this.padding;\\n      \\n      this.uniforms.frameSize = { \\n        0: input.size.width, \\n        1: input.size.height\\n      };\\n\\n      this.uniforms.filterAreaOffset = { \\n        0: Math.min(window.currentChara.worldTransform.tx, 0.0), \\n        1: Math.min(window.currentChara.worldTransform.ty, 0.0)\\n      };\\n\\n\\n      \/\/\/\/\/\/\/\/ mouse\\n      var mousex2 = (window.pixiApp.renderer.plugins.interaction.mouse.global.x);\\n      var mousey2 = (window.pixiApp.renderer.plugins.interaction.mouse.global.y);\\n    \\n      if (!window.mouseoutside) {\\n          if (!window.mousex1)\\n              window.mousex1 = mousex2;\\n          if (!window.mousey1)\\n              window.mousey1 = mousey2;\\n    \\n          if (!window.mousex)\\n              window.mousex = 0;\\n          if (!window.mousey)\\n              window.mousey = 0;\\n          if (!window.mouset)\\n              window.mouset = Date.now();\\n    \\n          window.mousex += (mousex2 - window.mousex1) * (Date.now() - window.mouset);\\n          window.mousey += (mousey2 - window.mousey1) * (Date.now() - window.mouset);\\n    \\n          window.mousex1 = mousex2;\\n          window.mousey1 = mousey2;\\n      }\\n    \\n      var flip = (window.currentChara.transform.position.x - window.portOffset) \/ (window.portOffsetR) - 0.5;\\n      window.displacementFilter.uniforms.offset = [flip * (window.mousex \/ 1200.0 * 0.05) * 1.3, 0.02 * window.charasin - 0.01 + (window.mousey \/ 720.0 * 0.05) * 0.6];\\n    \\n      window.mousex = window.mousex * Math.pow(0.9, (Date.now() - window.mouset) \/ 30.0);\\n      window.mousey = window.mousey * Math.pow(0.9, (Date.now() - window.mouset) \/ 30.0);\\n      window.mouset = Date.now();\\n    \\n    \\n      \/\/\/\/\/\/\/\/\\n      \\n      var vertices = window.jiggledBaseMapMesh.vertices;\\n      var vertices2 = window.jiggledDepthMapMesh.vertices;\\n    \\n      var newMx = window.displacementFilter.uniforms.offset[0];\\n      var newMy = window.displacementFilter.uniforms.offset[1];\\n      \\n      var baseMap = window.currentChara.texture;\\n      var depthMap = window.displacementSprite.texture;\\n      if (baseMap && baseMap.baseTexture && depthMap && depthMap.baseTexture) {\\n    \\n          window.My2 = window.My;\\n          window.Mx2 = window.Mx;\\n          window.My = newMy;\\n          window.Mx = newMx;\\n          for (var y = 0; y < window.jiggleMeshH; y++) {\\n              for (var x = 0; x < window.jiggleMeshW; x++) {\\n                  resetForce(x, y);\\n              }\\n          }\\n    \\n          if (window.Mx && window.My && window.Mx2 && window.My2 && newMx != -999999 && window.Mx != -999999 && window.Mx2 != -999999) {\\n      \\n              var aX = (window.Mx2 - window.Mx) - (window.Mx - newMx);\\n              var aY = (window.My2 - window.My) - (window.My - newMy);\\n      \\n              for (var y = 0; y < window.jiggleMeshH; y++) {\\n                  for (var x = 0; x < window.jiggleMeshW; x++) {\\n                      var m = window.jiggleMovement[y * window.jiggleMeshW + x];\\n                      window.jiggleForces[y * window.jiggleMeshW + x].x += aX * m * -50;\\n                      window.jiggleForces[y * window.jiggleMeshW + x].y += aY * m * 50;\\n                  }\\n              }\\n          }\\n      \\n    \\n          for (var y = 0; y < window.jiggleMeshH; y++) {\\n              for (var x = 0; x < window.jiggleMeshW; x++) {\\n                  if (x != 0) {\\n                      springUpdate(x - 1, y, x, y);\\n                  }\\n                  if (y != 0) {\\n                      springUpdate(x, y - 1, x, y);\\n                  }\\n              }\\n          }\\n      \\n      \\n          for (var y = 0; y < window.jiggleMeshH; y++) {\\n              for (var x = 0; x < window.jiggleMeshW; x++) {\\n                  addDampingForce(x, y);\\n                  update(x, y);\\n              }\\n          }\\n    \\n      \\n          for (var i = 0; i < window.jigglePositions.length; i++) {\\n              var pos = window.jigglePositions[i];\\n              vertices[i * 2] = Math.min(Math.max(pos.x, 0), baseMap.width);\\n              vertices[i * 2 + 1] = Math.min(Math.max(pos.y, 0), baseMap.height);\\n      \\n              vertices2[i * 2] = vertices[i * 2];\\n              vertices2[i * 2 + 1] = vertices[i * 2 + 1];\\n          }\\n      }\\n      \/\/\/\/\/\/\/\/\\n    \\n    \\n    \\n    \\n    \\n    \\n    \\n    \\n    \\n      window.jiggledDepthMapMesh.visible = true;\\n      window.pixiApp.renderer.render(window.jiggledDepthMapMesh, window.jiggledDepthMapRT.texture);\\n      window.jiggledDepthMapMesh.visible = false;\\n    \\n    \\n      \/\/ draw the filter...\\n      filterManager.applyFilter(this, input, output);\\n    }\\n    \\n    \\n    function resetForce(x, y) {\\n        window.jiggleForces[y * window.jiggleMeshW + x] = { x: 0, y: 0 };\\n    }\\n    \\n    function addForce(x, y, addX, addY) {\\n        var f = window.jiggleForces[y * window.jiggleMeshW + x];\\n        f.x += addX;\\n        f.y += addY;\\n    }\\n    \\n    function addDampingForce(x, y) {\\n        var v = jiggleVelocities[y * window.jiggleMeshW + x];\\n        var f = window.jiggleForces[y * window.jiggleMeshW + x];\\n        f.x -= v.x * window.damping[y * window.jiggleMeshW + x];\\n        f.y -= v.y * window.damping[y * window.jiggleMeshW + x];\\n    }\\n    \\n    \\n    function update(x, y) {\\n        var p = window.jigglePositions[y * window.jiggleMeshW + x];\\n        var v = window.jiggleVelocities[y * window.jiggleMeshW + x];\\n        var f = window.jiggleForces[y * window.jiggleMeshW + x];\\n    \\n        if (window.jiggleStaticFlags[y * window.jiggleMeshW + x] == false) {\\n            v.x += f.x;\\n            v.y += f.y;\\n            p.x += v.x;\\n            p.y += v.y;\\n        }\\n    }\\n    \\n    \\n    \\n    function springUpdate(x1, y1, x2, y2) {\\n        if (window.jiggleStaticFlags[x1 + y1 * window.jiggleMeshW.w] && window.jiggleStaticFlags[x2 + y2 * window.jiggleMeshW.w]) \\n            return;\\n    \\n        var distanceOrigin = (x2 - x1) * window.gridW + (y2 - y1) * window.gridH;\\n        \\n        \\n    \\n        var p1 = window.jigglePositions[y1 * window.jiggleMeshW + x1];\\n        var p2 = window.jigglePositions[y2 * window.jiggleMeshW + x2];\\n    \\n        var distance = len(sub(p1, p2));\\n    \\n        var springiness = (window.springiness[y1 * window.jiggleMeshW + x1] + window.springiness[y2 * window.jiggleMeshW + x2]) \/ 2;\\n    \\n        var springForce = springiness * (distanceOrigin - distance);\\n        var frcToAdd = tim(normalize(sub(p1, p2)), springForce);\\n    \\n        addForce(x1, y1, frcToAdd.x, frcToAdd.y);\\n        addForce(x2, y2, -frcToAdd.x, -frcToAdd.y);\\n    }\\n    \\n    \\n    function len(v) {\\n        return Math.sqrt(v.x * v.x + v.y * v.y);\\n    }\\n    \\n    function normalize(v) {\\n        var l = len(v);\\n        return { x: v.x \/ l, y: v.y \/ l };\\n    }\\n    \\n    function sub(v1, v2) {\\n        return { x: v1.x - v2.x, y: v1.y - v2.y }\\n    }\\n    \\n    function tim(v1, s) {\\n        return { x: v1.x * s, y: v1.y * s }\\n    }\\n\"}xhr.open(\"GET\",\".\/js\/main.js\",!0),xhr.onreadystatechange=(()=>{if(xhr.readyState===XMLHttpRequest.DONE&&200===xhr.status){result=xhr.responseText,patchedMainJs=patchMainJs(result);Function(patchedMainJs+\";KCS.init();\")()}}),xhr.send();let frag=\"precision mediump float;\\nuniform vec2 offset;\\n\\nuniform sampler2D uSampler;\\nuniform sampler2D displacementMap;\\n\\nuniform float textureScale;\\n\\nuniform vec2 textureSize;\\nuniform vec2 frameSize;\\nuniform vec2 filterAreaOffset;\\n\\nuniform float padding;\\nuniform vec4 filterArea;\\nuniform vec4 filterClamp;\\n\\n\\nvarying vec2 vTextureCoord;\\nvarying vec4 vColor;\\nuniform vec4 dimensions;\\nuniform vec2 mapDimensions;\\nuniform float scale;\\nuniform float focus;\\n\\n\\nvec2 mapCoordDepth(vec2 coord)\\n{\\n    return (coord * (frameSize) - filterAreaOffset - padding) \/ textureSize \/ textureScale;\\n}\\n\\nconst float compression = 1.0;\\nconst float dmin = 0.0;\\nconst float dmax = 1.0;\\n\\n#define MAXSTEPS 600.0\\nfloat steps = max(MAXSTEPS *length(offset), 30.0);\\n\\n\\n\\nvoid main(void)\\n{\\n\\n    float aspect = dimensions.x \/ dimensions.y;\\n    vec2 scale2 =\\n        vec2(scale * min(1.0, 1.0 \/ aspect), scale * min(1.0, aspect)) * vec2(1, -1);\\n    mat2 baseVector =\\n        mat2(vec2((0.5 - focus) * (offset) - (offset) \/ 2.0) * scale2,\\n             vec2((0.5 - focus) * (offset) + (offset) \/ 2.0) * scale2);\\n\\n    vec2 pos = (vTextureCoord);\\n    mat2 vector = baseVector;\\n\\n    float dstep = compression \/ (steps - 1.0);\\n    vec2 vstep = (vector[1] - vector[0]) \/ vec2((steps - 1.0));\\n\\n    vec2 posSumLast = vec2(0.0);\\n    vec2 posSum = vec2(0.0);\\n\\n    float weigth = 1.0;\\n    float dpos;\\n    float dposLast;\\n\\n    for (float i = 0.0; i < MAXSTEPS; ++i)\\n    {\\n        vec2 vpos = pos + vector[1] - i * vstep;\\n        dpos = 1.0 - i * dstep;\\n        float depth = texture2D(displacementMap, mapCoordDepth(vpos)).r;\\n\\n\\n        if (texture2D(uSampler, vpos)[3] == 0.0)\\n        {\\n            depth = 0.0;\\n        }\\n\\n        depth = clamp(depth, dmin, dmax);\\n\\n        if (dpos > depth)\\n        {\\n            posSumLast = vpos;\\n            dposLast = dpos;\\n        }\\n        else\\n        {\\n            posSum = vpos;\\n            weigth = (depth - dposLast) \/ dstep;\\n            break;\\n        }\\n    };\\n\\n    gl_FragColor = texture2D(\\n                       uSampler,\\n                       (posSum - posSumLast) * -clamp(weigth * 0.5 + 0.5, 0.0, 1.5) + posSum);\\n\\n}\";"
    + "</script>");
