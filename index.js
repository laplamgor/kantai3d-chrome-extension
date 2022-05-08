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

            // Better performance than using eval
            var f = Function(patchedMainJs + ";KCS.init();")();
        }
    }
};
xhr.send();



function patchMainJs(contents) {

    contents = contents.toString();

    // Change the create.js ticker mode from Timer to to RAF
    contents = contents.replace(
        /(createjs(?:\[\w+\('\w+'\)\]){2})\=createjs(?:\[\w+\('\w+'\)\]){2},/g,
        "$1=createjs.Ticker.RAF,");

    contents = contents.replace(/(=.{0,20}\[.{0,20}\('.{0,20}'\)\]\(this\)\|\|this;return (.{0,20}\[.{0,20}\('.{0,20}'\)\]=new PIXI\[\(.{0,20}\('.{0,20}'\)\)\]\(\),){6}.{0,20}\[.{0,20}\('.{0,20}'\)\]=new .{0,20}\(\),.{0,20}\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\(0x4f,0xa4\),)/g,
    `= window.sound_options $1`);

    var setting_text1 = 'Kantai3D v3.0\\n\\nExtra Depth Maps';
    var setting_text2 = 'Extra depth maps are generated by AI \\nfor all CGs without a painted depth map.\\n3D Effects are usually rougher.\\n\\nChanges will be effective on next return \\nto Home Port.';
    for (i = 0; i < window.navigator.languages.length; i++) {
        if (window.navigator.languages[i].startsWith('ja')) {
            setting_text1 = 'Kantai3D v3.0\\n\\n追加の深度マップ';
            setting_text2 = '追加の深度マップはAIによって生成され、\\nカスタム手描き深度マップなしでCGに\\nよって使用されます。3D効果の品質は、\\n比較すると粗くなります。\\n\\n変更は、次回母港に戻ったときに有効に\\nなります。';
            break;
        } else if (['zh-HK', 'zh-TW'].indexOf(window.navigator.languages[i]) != -1) {
            setting_text1 = 'Kantai3D v3.0\\n\\nExtra Depth Maps';
            setting_text2 = '額外深度圖由深度學習生成，\\n可以支持未有手繪深度圖的立繪。\\n但立體效果品質普遍較粗糙。\\n\\n變更會在下次返回母港時生效。';
            break;
        } else if (['zh-CN'].indexOf(window.navigator.languages[i]) != -1) {
            setting_text1 = 'Kantai3D v3.0\\n\\n使用额外深度图';
            setting_text2 = '额外深度图由深度学习生成，\\n可以支持未有手绘深度图的立绘。\\n但立体效果品质普遍较粗糙。\\n\\n变更会在下次返回母港时生效。';
            break;
        } else if (window.navigator.languages[i].startsWith('en')) {
            break;
        }
    }

    contents = contents.replace(/(=new )(.{0,20})(\(\),.{0,20}\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\(0x5a,0x18e\),)/g,
    `$1$2$3

    window.sound_options._toggle3d = new $2(),
    window.sound_options._toggle3d.position.set(-120, 150),
    window.sound_options._toggle3d_ai = new $2(),
    window.sound_options._toggle3d_ai.position.set(-120, 215),
    window.sound_options._toggle3d_text = new PIXI.Text('` + setting_text1 + `', new PIXI.TextStyle({fontFamily: "Georgia", fontSize: 28, fill: '#ffffff'})),
    window.sound_options._toggle3d_text.position.set(-360, 150),
    window.sound_options._toggle3d_ai_text = new PIXI.Text('` + setting_text2 + `', new PIXI.TextStyle({fontFamily: "Georgia", fontSize: 18, fill: '#ffffff'})),
    window.sound_options._toggle3d_ai_text.position.set(-360, 290),
    window.sound_options._toggle3d_bg = new PIXI.Graphics(),
    window.sound_options._toggle3d_bg.beginFill(0x202020, 0.8).lineStyle(2, 0xd1b44b, 0.8).drawRect(7-373-15, 56, 373, 413),
    window.sound_options.addChild(window.sound_options._toggle3d_bg),
    window.sound_options.addChild(window.sound_options._toggle3d),
    window.sound_options.addChild(window.sound_options._toggle3d_ai),
    window.sound_options.addChild(window.sound_options._toggle3d_text),
    window.sound_options.addChild(window.sound_options._toggle3d_ai_text),`);


    contents = contents.replace(/(\(0x26,0x18e\),this\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\(0xc6,0x18e\),)/g,
    `$1
    this._toggle3d.initialize(),
    this._toggle3d_ai.initialize(),`);

    
    contents = contents.replace(/(function\(\)\{this\[.{0,20}\('.{0,20}'\)\]\(\)(,this\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\(\),this\[.{0,20}\('.{0,20}'\)\]=null){11};)/g,
    `$1
    this._toggle3d.dispose();
    this._toggle3d = null;
    this._toggle3d_ai.dispose();
    this._toggle3d_ai = null;`);

        
    contents = contents.replace(/(,.{0,20}\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\(\),0x0==this\[.{0,20}\('.{0,20}'\)\]&&0x0<.{0,20}?.{0,20}\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\(.{0,20}\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\):0x0<this\[.{0,20}\('.{0,20}'\)\]&&0x0)/g,
    `,window.isDepthEnabled = this._sound._toggle3d.value, 
    window.isDepthAiEnabled = this._sound._toggle3d_ai.value
    $1`);

    contents = contents.replace(/((null==this\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]&&\(this\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]=.{0,20}\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\),this\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]=.{0,20}\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\]\[.{0,20}\('.{0,20}'\)\],){2})/g,
    `$1
    this._toggle3d.value = window.isDepthEnabled != false,
    this._toggle3d_ai.value = window.isDepthAiEnabled != false,`);

    
    









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


var url1 = window.displacementPath.replace(/resources\\/ship\\/full[_dmg]*\\/([0-9]*)_([0-9_a-z]*).png(\\?version=)?([0-9]*)/g, \"https://cdn.jsdelivr.net/gh/laplamgor/kantai3d-depth-maps@master/source/$$1/$$1_$$2_v$$4.png\");
var url2 = window.displacementPath.replace(/resources\\/ship\\/full[_dmg]*\\/([0-9]*)_([0-9_a-z]*).png(\\?version=)?([0-9]*)/g, \"https://kantai3d.com/midas/$$1_$$2_v$$4.png\");
var triedUrl2 = false;

const loadDepthUrl = function(url, chara) {
window.displacementSprite = PIXI.Sprite.fromImage(url);
window.displacementFilter = PIXI.DepthPerspectiveFilter;

window.displacementFilter.uniforms.textureSize = {
    0: chara.texture.width,
    1: chara.texture.height
};

window.displacementSprite.visible = false;

window.displacementFilter.padding = 150;

window.currentChara = chara;

if (window.displacementSprite.width != 1) {
    console.log('The depth map for this secretary is already loaded.');
    // The depth map is already loaded
    window.displacementFilter.uniforms.displacementMap = window.displacementSprite.texture;
    window.displacementFilter.uniforms.scale = 1.0;
    window.displacementFilter.uniforms.focus = 0.5;
    window.displacementFilter.uniforms.offset = [0.0, 0.0];
    window.currentChara.filters = [window.displacementFilter];
    window.currentChara.addChild(window.displacementSprite);

    window.mousex1 = null;
    window.mousey1 = null;
    prepareJiggle(window.currentChara.texture, window.displacementSprite.texture);
    window.displacementFilter.uniforms.displacementMap = window.jiggledDepthMapRT.texture;
} else {
    // The depth map is not loaded yet, and may not exist in server at all
    // Disable the filter first
    chara.filters = [];
    window.currentChara.filters = [];
    window.displacementSprite.texture.baseTexture.on('loaded', function() {

        console.log('The depth map for this secretary is now loaded.');
        // Re-enable the filter when resource loaded
        window.displacementFilter.uniforms.displacementMap = window.displacementSprite.texture;
        window.displacementFilter.uniforms.scale = 1.0;
        window.displacementFilter.uniforms.focus = 0.5;
        window.displacementFilter.uniforms.offset = [0.0, 0.0];
        window.currentChara.filters = [window.displacementFilter];
        window.currentChara.addChild(window.displacementSprite);

        window.mousex1 = null;
        window.mousey1 = null;
        prepareJiggle(window.currentChara.texture, window.displacementSprite.texture);
        window.displacementFilter.uniforms.displacementMap = window.jiggledDepthMapRT.texture;
    });
    window.displacementSprite.texture.baseTexture.on('error', function() {
        if (!triedUrl2 && window.isDepthAiEnabled != false) {
            triedUrl2 = true;
            loadDepthUrl(url2, chara);
        }
        console.log('The depth map for this secretary is not available. Please visit https://github.com/laplamgor/kantai3d to check the supported CG list and consider to contribute your own depth map.');
    });

    if (!window.displacementSprite.texture.baseTexture.isLoading) {
        if (!triedUrl2 && window.isDepthAiEnabled != false) {
            triedUrl2 = true;
            loadDepthUrl(url2, chara);
        }
    }
}
}
if (window.isDepthEnabled != false) {
    loadDepthUrl(url1, this._chara);
} else {
    this._chara.filters = [];
    window.currentChara.filters = [];
}


///////////////////////////////////

function prepareJiggle(baseMap, depthMap) {

    window.jigglePositions = [];
    window.jiggleVelocities = [];
    window.jiggleForces = [];

    window.jiggleStaticFlags = [];
    window.jiggleMovement = [];

    window.damping = [];
    window.springiness = [];
    

    var depthImg = depthMap.baseTexture.source;
    var tempCanvas = document.createElement('canvas');
    tempCanvas.width = depthImg.width;
    tempCanvas.height = depthImg.height;
    let tmCtx = tempCanvas.getContext('2d');
    tmCtx.drawImage(depthImg, 0, 0);
    var dmData = tmCtx.getImageData(0, 0, depthImg.width, depthImg.height).data;


    window.jiggleMeshW = Math.ceil(baseMap.width / 10.0);
    window.jiggleMeshH = Math.ceil(baseMap.height / 10.0);

    // This is the jiggled mseh
    window.jiggledDepthMapMesh = new PIXI.mesh.Plane(window.displacementSprite.texture, window.jiggleMeshW, window.jiggleMeshH);
    window.jiggledDepthMapMesh.visible = false;

    // This is the render texture of the jiggled mseh
    window.jiggledDepthMapRT = new PIXI.Sprite(PIXI.RenderTexture.create(baseMap.width, baseMap.height));
    window.jiggledDepthMapRT.visible = false;

    
    window.jiggledBaseMapMesh = new PIXI.mesh.Plane(baseMap, window.jiggleMeshW, window.jiggleMeshH);
    
    window.pixiApp.stage.addChild(window.jiggledDepthMapMesh);
    window.pixiApp.stage.addChild(window.jiggledDepthMapRT);
    window.currentChara.addChild(window.jiggledBaseMapMesh);
    
    window.gridW = baseMap.width / (window.jiggleMeshW - 1.0);
    window.gridH = baseMap.height / (window.jiggleMeshH - 1.0);
    for (var y = 0; y < window.jiggleMeshH; y++) {
        for (var x = 0; x < window.jiggleMeshW; x++) {
            window.jigglePositions.push({ x: window.gridW * x, y: y * window.gridH });
            window.jiggleVelocities.push({ x: 0, y: 0 });
            window.jiggleForces.push({ x: 0, y: 0 });

            var r = dmData[(Math.floor(y * window.gridH) * baseMap.width + Math.floor(x * window.gridW)) * 4 + 0];
            var b = dmData[(Math.floor(y * window.gridH) * baseMap.width + Math.floor(x * window.gridW)) * 4 + 2];

            window.damping.push(1.0 / (b / 255.0 * 16.0 + 1));
            window.springiness.push(1.0 / ( b / 255.0 * 32.0 + 1));
        

            window.jiggleStaticFlags.push(b == 0);
            window.jiggleMovement.push((r - 127.0) / 128.0);
        }
    }
    
    window.Mx = null;
    window.My = null;
    window.Mx2 = null;
    window.My2 = null;
}
`);

    contents = contents.replace(/(\=Math\[.{0,99}\]\(.{0,99}\),.{0,99}\=0x1\+0\.012\*\(0\.5\+0\.5\*.{0,99}\);this\[.{0,99}\]\[.{0,99}\]\(.{0,99}\),)/g, 
        "\n = window.charasin $1");

    contents = contents.replace(/(this\['y'\]=this\[.{0,99}\('.{0,99}'\)]-1.5\*.{0,99}\*1.8;)/g, 
        `$1

window.displacementFilter.uniforms.textureScale = this.scale.x;

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
      this.uniforms.dimensions = {
        0: input.sourceFrame.width,
        1: input.sourceFrame.height
      };

      this.uniforms.padding = this.padding;
      
      this.uniforms.frameSize = { 
        0: input.size.width, 
        1: input.size.height
      };

      this.uniforms.filterAreaOffset = { 
        0: Math.min(window.currentChara.worldTransform.tx, 0.0), 
        1: Math.min(window.currentChara.worldTransform.ty, 0.0)
      };


      //////// mouse
      var mousex2 = (window.pixiApp.renderer.plugins.interaction.mouse.global.x);
      var mousey2 = (window.pixiApp.renderer.plugins.interaction.mouse.global.y);
    
      if (!window.mouseoutside) {
          if (!window.mousex1)
              window.mousex1 = mousex2;
          if (!window.mousey1)
              window.mousey1 = mousey2;
    
          if (!window.mousex)
              window.mousex = 0;
          if (!window.mousey)
              window.mousey = 0;
          if (!window.mouset)
              window.mouset = Date.now();
    
          window.mousex += (mousex2 - window.mousex1) * (Date.now() - window.mouset);
          window.mousey += (mousey2 - window.mousey1) * (Date.now() - window.mouset);
    
          window.mousex1 = mousex2;
          window.mousey1 = mousey2;
      }
    
      var flip = (window.currentChara.transform.position.x - window.portOffset) / (window.portOffsetR) - 0.5;
      window.displacementFilter.uniforms.offset = [flip * (window.mousex / 1200.0 * 0.05) * 1.3, 0.02 * window.charasin - 0.01 + (window.mousey / 720.0 * 0.05) * 0.6];
    
      window.mousex = window.mousex * Math.pow(0.9, (Date.now() - window.mouset) / 30.0);
      window.mousey = window.mousey * Math.pow(0.9, (Date.now() - window.mouset) / 30.0);
      window.mouset = Date.now();
    
    
      ////////
      
      var vertices = window.jiggledBaseMapMesh.vertices;
      var vertices2 = window.jiggledDepthMapMesh.vertices;
    
      var newMx = window.displacementFilter.uniforms.offset[0];
      var newMy = window.displacementFilter.uniforms.offset[1];
      
      var baseMap = window.currentChara.texture;
      var depthMap = window.displacementSprite.texture;
      if (baseMap && baseMap.baseTexture && depthMap && depthMap.baseTexture) {
    
          window.My2 = window.My;
          window.Mx2 = window.Mx;
          window.My = newMy;
          window.Mx = newMx;
          for (var y = 0; y < window.jiggleMeshH; y++) {
              for (var x = 0; x < window.jiggleMeshW; x++) {
                  resetForce(x, y);
              }
          }
    
          if (window.Mx && window.My && window.Mx2 && window.My2 && newMx != -999999 && window.Mx != -999999 && window.Mx2 != -999999) {
      
              var aX = (window.Mx2 - window.Mx) - (window.Mx - newMx);
              var aY = (window.My2 - window.My) - (window.My - newMy);
      
              for (var y = 0; y < window.jiggleMeshH; y++) {
                  for (var x = 0; x < window.jiggleMeshW; x++) {
                      var m = window.jiggleMovement[y * window.jiggleMeshW + x];
                      window.jiggleForces[y * window.jiggleMeshW + x].x += aX * m * -50;
                      window.jiggleForces[y * window.jiggleMeshW + x].y += aY * m * 50;
                  }
              }
          }
      
    
          for (var y = 0; y < window.jiggleMeshH; y++) {
              for (var x = 0; x < window.jiggleMeshW; x++) {
                  if (x != 0) {
                      springUpdate(x - 1, y, x, y);
                  }
                  if (y != 0) {
                      springUpdate(x, y - 1, x, y);
                  }
              }
          }
      
      
          for (var y = 0; y < window.jiggleMeshH; y++) {
              for (var x = 0; x < window.jiggleMeshW; x++) {
                  addDampingForce(x, y);
                  update(x, y);
              }
          }
    
      
          for (var i = 0; i < window.jigglePositions.length; i++) {
              var pos = window.jigglePositions[i];
              vertices[i * 2] = Math.min(Math.max(pos.x, 0), baseMap.width);
              vertices[i * 2 + 1] = Math.min(Math.max(pos.y, 0), baseMap.height);
      
              vertices2[i * 2] = vertices[i * 2];
              vertices2[i * 2 + 1] = vertices[i * 2 + 1];
          }
      }
      ////////
    
    
    
    
    
    
    
    
    
      window.jiggledDepthMapMesh.visible = true;
      window.pixiApp.renderer.render(window.jiggledDepthMapMesh, window.jiggledDepthMapRT.texture);
      window.jiggledDepthMapMesh.visible = false;
    
    
      // draw the filter...
      filterManager.applyFilter(this, input, output);
    }
    
    
    function resetForce(x, y) {
        window.jiggleForces[y * window.jiggleMeshW + x] = { x: 0, y: 0 };
    }
    
    function addForce(x, y, addX, addY) {
        var f = window.jiggleForces[y * window.jiggleMeshW + x];
        f.x += addX;
        f.y += addY;
    }
    
    function addDampingForce(x, y) {
        var v = jiggleVelocities[y * window.jiggleMeshW + x];
        var f = window.jiggleForces[y * window.jiggleMeshW + x];
        f.x -= v.x * window.damping[y * window.jiggleMeshW + x];
        f.y -= v.y * window.damping[y * window.jiggleMeshW + x];
    }
    
    
    function update(x, y) {
        var p = window.jigglePositions[y * window.jiggleMeshW + x];
        var v = window.jiggleVelocities[y * window.jiggleMeshW + x];
        var f = window.jiggleForces[y * window.jiggleMeshW + x];
    
        if (window.jiggleStaticFlags[y * window.jiggleMeshW + x] == false) {
            v.x += f.x;
            v.y += f.y;
            p.x += v.x;
            p.y += v.y;
        }
    }
    
    
    
    function springUpdate(x1, y1, x2, y2) {
        if (window.jiggleStaticFlags[x1 + y1 * window.jiggleMeshW.w] && window.jiggleStaticFlags[x2 + y2 * window.jiggleMeshW.w]) 
            return;
    
        var distanceOrigin = (x2 - x1) * window.gridW + (y2 - y1) * window.gridH;
        
        
    
        var p1 = window.jigglePositions[y1 * window.jiggleMeshW + x1];
        var p2 = window.jigglePositions[y2 * window.jiggleMeshW + x2];
    
        var distance = len(sub(p1, p2));
    
        var springiness = (window.springiness[y1 * window.jiggleMeshW + x1] + window.springiness[y2 * window.jiggleMeshW + x2]) / 2;
    
        var springForce = springiness * (distanceOrigin - distance);
        var frcToAdd = tim(normalize(sub(p1, p2)), springForce);
    
        addForce(x1, y1, frcToAdd.x, frcToAdd.y);
        addForce(x2, y2, -frcToAdd.x, -frcToAdd.y);
    }
    
    
    function len(v) {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    }
    
    function normalize(v) {
        var l = len(v);
        return { x: v.x / l, y: v.y / l };
    }
    
    function sub(v1, v2) {
        return { x: v1.x - v2.x, y: v1.y - v2.y }
    }
    
    function tim(v1, s) {
        return { x: v1.x * s, y: v1.y * s }
    }
`;
}

let frag = `precision mediump float;
uniform vec2 offset;

uniform sampler2D uSampler;
uniform sampler2D displacementMap;

uniform float textureScale;

uniform vec2 textureSize;
uniform vec2 frameSize;
uniform vec2 filterAreaOffset;

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
    return (coord * (frameSize) - filterAreaOffset - padding) / textureSize / textureScale;
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