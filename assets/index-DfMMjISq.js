const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./style-BLxYzcqS.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Qh="modulepreload",jh=function(s,e){return new URL(s,e).href},hl={},ed=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=jh(h,n),h in hl)return;hl[h]=!0;const d=h.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(n)for(let f=a.length-1;f>=0;f--){const _=a[f];if(_.href===h&&(!d||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Qh,d||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((f,_)=>{m.addEventListener("load",f),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},yo={projection:"orthographic",fov:35,height:11.6,distance:18,centerX:.15,centerY:2.05,follow:"adaptive",offsetX:0,offsetY:1.3,smoothing:3,near:.1,far:100},td={height:[2,80],distance:[3,100],centerX:[-1e3,1e3],centerY:[-1e3,1e3],offsetX:[-100,100],offsetY:[-100,100],smoothing:[0,20],near:[.01,2],far:[20,2e3]},_r=s=>({...yo,...s}),nd=["original","none","tile-0","tile-1","tile-2","tile-3","tile-4","tile-5"],gt=s=>{throw new Error(s)},Xt=(s,e,t)=>typeof s=="number"&&Number.isFinite(s)&&s>=e&&s<=t,Jt=(s,e=100)=>typeof s=="string"&&s.length>0&&s.length<=e,dl=s=>typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s);function id(s){if(!s||typeof s!="object")return gt("Файл не содержит сцену.");const e=s;if(e.format!=="shelter-scene"||![1,2].includes(e.version)||!Jt(e.template)||e.units!=="m")return gt("Неподдерживаемый формат или версия сцены.");if(!Jt(e.name)||!Array.isArray(e.nodes)||e.nodes.length>2e3||!Array.isArray(e.textures)||e.textures.length>24)return gt("Некорректное имя или слишком большая сцена.");const t=e.environment;if(!t||!Xt(t.time,0,1439)||!Xt(t.haze,0,.2)||!Xt(t.exposure,.2,3)||typeof t.flashlight!="boolean")return gt("Некорректные настройки окружения.");if(e.camera!==void 0&&(!e.camera||!["orthographic","perspective"].includes(e.camera.projection)||!Xt(e.camera.fov,15,100)))return gt("Некорректная камера. FOV должен быть от 15° до 100°.");if(e.camera){const o=_r(e.camera);if(!["adaptive","fixed","horizontal","player"].includes(o.follow)||Object.entries(td).some(([l,[c,h]])=>!Xt(o[l],c,h))||o.near>=o.far||o.distance>=o.far)return gt("Некорректные параметры камеры: проверьте размеры, слежение и дальность видимости.")}const n=new Set;let i=0;for(const o of e.textures){if(!o||!Jt(o.id)||!Jt(o.name)||n.has(o.id)||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(o.data)||o.data.length>4e6)return gt("Некорректная текстура. Поддерживаются PNG, JPEG и WebP до 3 МБ.");n.add(o.id),i+=o.data.length}if(i>16e6)return gt("Общий размер текстур превышает 12 МБ.");if(e.nodes.filter(o=>o?.light&&o.visible&&o.light.intensity>0&&o.light.shadows).length>6)return gt("Одновременно поддерживается до 6 источников с тенями. Отключите тени у остальных.");const r=new Set,a=new Set;if(e.groups!==void 0){if(!Array.isArray(e.groups)||e.groups.length>500)return gt("Некорректный список групп.");for(const o of e.groups){if(!o||!Jt(o.id)||!Jt(o.name)||a.has(o.id))return gt("Некорректная или повторяющаяся группа.");a.add(o.id)}}for(const o of e.nodes){if(!o||!Jt(o.id)||r.has(o.id)||!Jt(o.name)||!["source","prefab","box","sphere","plane","point-light","spot-light","model","camera"].includes(o.kind)||!["architecture","props","lights","details"].includes(o.layer))return gt("Некорректный или повторяющийся объект сцены.");if(r.add(o.id),a.has(o.id)||o.groupId!==void 0&&!a.has(o.groupId))return gt("Объект ссылается на неизвестную группу или имеет конфликтующий ID.");if(typeof o.visible!="boolean"||typeof o.locked!="boolean")return gt("Некорректное состояние объекта.");if(o.gameId!==void 0&&!Jt(o.gameId))return gt("Некорректная игровая привязка.");for(const l of["position","rotation","scale"]){const c=o.transform?.[l];if(!Array.isArray(c)||c.length!==3||!c.every(h=>Xt(h,l==="scale"?.01:-1e3,l==="scale"?100:1e3)))return gt("Координаты должны быть конечными числами; масштаб — от 0,01 до 100.")}if(["source","model","prefab"].includes(o.kind)&&!Jt(o.asset,200))return gt("Не указан ресурс объекта.");if(o.folder!==void 0&&!Jt(o.folder))return gt("Некорректная папка.");if(o.components!==void 0&&(!Array.isArray(o.components)||o.components.length>32||o.components.some(l=>!l||!Jt(l.type)||!l.values||typeof l.values!="object"||Object.values(l.values).some(c=>!["string","boolean","number"].includes(typeof c)||typeof c=="number"&&!Number.isFinite(c)))))return gt("Некорректные компоненты.");if(o.surface){const l=o.surface;if(!l||!dl(l.color)||!Xt(l.roughness,0,1)||!Xt(l.metalness,0,1)||!Xt(l.repeat,.1,20)||!(nd.includes(l.texture)||n.has(l.texture)||/^asset:[a-zA-Z0-9_-]+$/.test(l.texture)))return gt("Некорректный материал объекта.")}if(o.kind.endsWith("-light")){const l=o.light;if(!l||!dl(l.color)||!Xt(l.intensity,0,150)||!Xt(l.range,.1,30)||!Xt(l.angle,5,85)||!Xt(l.penumbra,0,1)||typeof l.shadows!="boolean")return gt("Некорректный источник света.")}}if(e.activeCamera&&!e.nodes.some(o=>o.id===e.activeCamera&&o.kind==="camera"))return gt("Активная камера отсутствует в сцене.");if(e.moduleData&&JSON.stringify(e.moduleData).length>1e6)return gt("Данные модулей превышают 1 МБ.");for(const o of a)if(!e.nodes.some(l=>l.groupId===o))return gt("Группа не содержит объектов.");return structuredClone(e)}function ul(s="Новая сцена",e="empty-3d"){return{format:"shelter-scene",version:2,id:crypto.randomUUID(),template:e,name:s,units:"m",nodes:[],textures:[],camera:{...yo,follow:"fixed"},environment:{time:720,haze:0,exposure:1.3,flashlight:!1}}}function Wc(s,e,t=""){return`shelter:${s}:${e}:${t}`}const Mo=(s,e)=>Math.hypot(s.x-e.x,s.y-e.y),sd=(s,e)=>Math.atan2(Math.sin(s-e),Math.cos(s-e)),_t={fire:"#ffac6b",ice:"#a3eaff",lightning:"#bcb7ff",steel:"#f6dfa1",arrow:"#f8df9d"};function fl(){return{charge:-1,chargeFull:!1,parry:0,riposte:0,flame:0,motion:"none",motionTime:0,motionAngle:0,motionHits:new Set,fx:[],recoil:0}}function Vt(s,e,t,n,i=60,r=.4,a=0){s.combat.fx.push({kind:e,points:t.map(o=>({x:o.x,y:o.y})),life:r,max:r,color:n,size:i,angle:a,seed:s.uid++}),s.combat.fx.length>80&&s.combat.fx.splice(0,s.combat.fx.length-80)}function xr(s,e,t,n){Vt(s,"impact",[e],t,n,.45),s.burst(e,t,12)}function vr(s,e,t,n){if(e.hp<=0||e.birth>0)return;const i=s.damageScale();n==="fire"?(e.frozen>0&&(e.frozen=0,t+=65*i,Vt(s,"steam",[e],_t.ice,75,.6),s.text(e,"ТЕРМОУДАР",_t.fire),s.onSound("steam")),s.hit(e,t,!0),e.burn=3,e.burnPower=14*i):n==="ice"?(e.burn>0&&(e.burn=0,t+=60*i,Vt(s,"steam",[e],_t.ice,75,.6),s.text(e,"ТЕРМОУДАР",_t.ice),s.onSound("steam")),s.hit(e,t,!0,!0),e.slow=3.5,e.kind!=="lord"&&e.controlGuard<=0&&(e.frozen=1.6,e.controlGuard=5,e.windup=0),xr(s,e,_t.ice,38)):(e.frozen>0&&(e.frozen=0,t+=90*i,Vt(s,"shatter",[e],_t.ice,90,.55),s.text(e,"РАСКОЛ",_t.ice),s.onSound("shatter")),s.hit(e,t,!0,!0))}function hs(s,e=!0){s.combat.charge<0||(s.combat.charge=-1,s.combat.chargeFull=!1,e&&(s.player.arrows=Math.min(s.maxArrows,s.player.arrows+3)),s.player.precisionCD=Math.max(s.player.precisionCD,1))}function rd(s){const e=s.combat,t=s.player;if(e.charge<0||s.phase!=="playing")return!1;const n=Math.min(1,e.charge/1.2),i=n>=.98;return e.charge=-1,e.chargeFull=!1,t.precisionCD=s.attacks[1].cooldown,t.cooldown=Math.max(.3,t.cooldown),s.shot(t.angle,80+200*n*n,{kind:"arrow",vx:Math.cos(t.angle)*1700,vy:Math.sin(t.angle)*1700,life:.7,pierce:i?3:1,armorPiercing:n>=.75,aimed:!0,color:i?"#fff4c6":"#e9cf99",charge:n}),e.recoil=.35,Vt(s,"shot",[t],_t.arrow,i?160:80,.35,t.angle),s.onSound(i?"snipe":"bow"),i&&(s.shake=Math.max(s.shake,3)),!0}function ad(s,e,t){const n=s.player,i=s.combat;return s.classId!=="knight"||i.parry<=0||!e||!t||Math.abs(sd(Math.atan2(e.y-n.y,e.x-n.x),n.angle))>1.1?!1:(i.parry=0,i.riposte=2.2,n.shield=Math.min(s.maxShield,n.shield+25),n.invincible=.12,s.shake=4,Vt(s,"parry",[n],_t.steel,110,.55,n.angle),s.text(n,"ПАРИРОВАНИЕ · Q",_t.steel),s.onSound("parry"),!0)}function od(s){return s.fields.some(e=>e.kind==="banner"&&e.time>0&&Mo(e,s.player)<e.r&&s.sight(e,s.player))}function Ns(s,e,t,n,i,r,a=0){s.fields.push({x:t.x,y:t.y,kind:e,r:n,time:i,max:i,damage:r,hit:new Set,origin:{x:t.x,y:t.y},angle:a,tick:0,stage:0})}function ld(s,e,t){const n=s.player,i=s.combat;if(s.classId==="knight"&&e===1&&i.riposte>0&&s.phase==="playing"){i.riposte=0,n.cooldown=.45,n.swing=.3,s.slash(210,_t.steel);const o=s.targets(n,210,2,n.angle,.5);for(const l of o)s.hit(l,145*s.damageScale(),!1,!0),l.kind!=="lord"&&(l.stun=.45,l.windup=0),xr(s,l,_t.steel,80);return Vt(s,"shot",[n],_t.steel,190,.4,n.angle),s.move(n,Math.cos(n.angle)*45,Math.sin(n.angle)*45,18),s.onSound("riposte"),s.shake=4,!0}if(!s.ready(e)||i.motionTime>0||i.parry>0)return!1;if(s.classId==="archer"&&i.charge>=0){if(e===0||e===1)return!1;hs(s)}const r=s.attacks[e];n[r.resource]-=r.cost,n.weapon=s.classInfo.weapon,e===0?n.cooldown=s.classId==="mage"?r.cooldown:r.cooldown/s.rate:(e===1&&(n.precisionCD=r.cooldown),e===2&&(n.novaCD=r.cooldown),e===3&&(n.finisherCD=r.cooldown),n.cooldown=Math.max(n.cooldown,.22));const a=s.damageScale();if(s.classId==="mage"){if(e===0){i.flame=.19;for(const o of s.targets(n,265,4,n.angle,.43))vr(s,o,22*a,"fire");s.seconds-s.lastFlameSound>.2&&(s.onSound("flame"),s.lastFlameSound=s.seconds)}if(e===1){let o=n;const l=new Set;let c=s.targets(n,580,1,n.angle,.3)[0];for(let h=0;h<5&&c;h++){const d=c;l.add(d.id),Vt(s,"lightning",[o,d],_t.lightning,18,.4),vr(s,d,195*Math.pow(.76,h)*a,"lightning"),o=d,c=s.targets(d,230,80).find(u=>!l.has(u.id))}l.size||Vt(s,"lightning",[n,s.aimPoint(t,520)],_t.lightning,11,.25),s.onSound("lightning"),i.recoil=.2}if(e===2){const o=s.aimPoint({x:n.x+Math.cos(n.angle)*460,y:n.y+Math.sin(n.angle)*460},460);Ns(s,"frost",n,Mo(n,o),.72,30*a,n.angle),s.onSound("ice")}e===3&&(Ns(s,"meteor",s.aimPoint(t,490),145,.9,250*a),s.onSound("meteor"))}else if(s.classId==="archer"){if(e===0&&(s.shot(n.angle,66),i.recoil=.12,s.onSound("bow")),e===1&&(i.charge=0,i.chargeFull=!1,n.precisionCD=0,s.onSound("draw")),e===2){const o=new Set;for(let l=-1;l<=1;l++)s.shot(n.angle+l*.22,46,{hit:o,life:.36});i.motion="vault",i.motionTime=.22,i.motionAngle=n.angle+Math.PI,i.motionHits.clear(),n.invincible=Math.max(n.invincible,.14),s.onSound("vault")}if(e===3){const o=s.fields.filter(l=>l.kind==="trap");o.length>=2&&(s.fields=s.fields.filter(l=>l!==o[0])),Ns(s,"trap",s.aimPoint(t,360),50,12,35*a),s.onSound("trapSet")}}else{if(e===0){n.combo=n.comboTime>0?(n.combo+1)%3:0,n.comboTime=1.1;const o=n.combo===2,l=(o?155:120)+Math.min(45,s.count("steel")*9);n.cooldown=(o?.58:.34)/s.rate,s.slash(l,o?"#fff3c9":_t.steel);for(const c of s.targets(n,l,o?3:2,n.angle,o?1.3:1.05))s.hit(c,(o?60:n.combo===1?36:28)*a),s.move(c,Math.cos(n.angle)*(o?34:12),Math.sin(n.angle)*(o?34:12),c.r),n.stamina=Math.min(s.maxStamina,n.stamina+3),o&&xr(s,c,_t.steel,50);o&&(s.shake=2.5,s.onSound("heavy"))}e===1&&(i.parry=.4,i.riposte=0,s.onSound("guard")),e===2&&(i.motion="ram",i.motionTime=.34,i.motionAngle=n.angle,i.motionHits.clear(),s.onSound("ram")),e===3&&(Ns(s,"banner",n,190,5,28*a),s.onSound("banner"),s.shake=2)}return!0}function cd(s,e,t){const n=s.combat,i=s.player;if(n.flame=Math.max(0,n.flame-e),n.parry=Math.max(0,n.parry-e),n.riposte=Math.max(0,n.riposte-e),n.recoil=Math.max(0,n.recoil-e),n.charge>=0&&(n.charge+=e,n.charge>=1.2&&!n.chargeFull&&(n.chargeFull=!0,s.onSound("drawFull")),(t.aimHeld===!1||t.aimHeld===void 0||n.charge>=1.65)&&rd(s)),n.motionTime>0){if(n.motionTime=Math.max(0,n.motionTime-e),Math.floor((s.seconds-e)*35)!==Math.floor(s.seconds*35)&&Vt(s,"afterimage",[i],n.motion==="vault"?"#b6dbac":"#d4c28c",24,.3,i.angle),n.motion==="ram")for(const r of s.targets(i,65,80))n.motionHits.has(r.id)||n.motionHits.size>=3||(n.motionHits.add(r.id),s.hit(r,42*s.damageScale()),r.exposed=3.5,r.kind!=="lord"&&(r.stun=.6,r.windup=0),s.move(r,Math.cos(n.motionAngle)*70,Math.sin(n.motionAngle)*70,r.r),xr(s,r,_t.steel,65),s.onSound("heavy"),s.shake=3);n.motionTime<=0&&(n.motion="none")}for(const r of s.enemies)if(r.frozen=Math.max(0,r.frozen-e),r.root=Math.max(0,r.root-e),r.stun=Math.max(0,r.stun-e),r.controlGuard=Math.max(0,r.controlGuard-e),r.marked=Math.max(0,r.marked-e),r.burn>0&&r.hp>0){const a=Math.min(e,r.burn);r.burn-=a,r.burnTick+=a,(r.burnTick>=.4||r.burn<=0)&&(s.hit(r,r.burnPower*r.burnTick,!0,!0,!0),r.burnTick=0)}for(const r of s.fields)if(r.time-=e,r.tick+=e,r.kind==="meteor"&&r.time<=0){Vt(s,"impact",[r],_t.fire,180,.65),s.burst(r,_t.fire,35);for(const a of s.targets(r,r.r,6)){vr(s,a,r.damage,"fire");const o=Math.atan2(a.y-r.y,a.x-r.x);s.move(a,Math.cos(o)*40,Math.sin(o)*40,a.r)}r.kind="embers",r.time=r.max=4,r.tick=0,r.hit.clear(),s.shake=7,s.onSound("meteorImpact")}else if(r.kind==="embers"&&r.time>0&&r.tick>=.4){r.tick=0;for(const a of s.targets(r,r.r,6))!r.hit.has(a.id)&&r.hit.size>=6||(r.hit.add(a.id),a.burn=Math.max(a.burn,1),a.burnPower=14*s.damageScale())}else if(r.kind==="frost"){const a=Math.min(r.r,460*(1-Math.max(0,r.time)/r.max));for(const o of s.enemies){const l=o.x-r.x,c=o.y-r.y,h=l*Math.cos(r.angle)+c*Math.sin(r.angle),d=Math.abs(-l*Math.sin(r.angle)+c*Math.cos(r.angle));r.hit.size<6&&!r.hit.has(o.id)&&o.hp>0&&o.birth<=0&&h>=0&&h<=a+o.r&&d<48+o.r&&s.sight(r,o)&&(r.hit.add(o.id),vr(s,o,r.damage,"ice"))}r.time<=0&&(r.kind="frostwake",r.time=r.max=1.6)}else if(r.kind==="trap"&&r.time>0&&r.max-r.time>.45){const a=s.targets(r,r.r,1)[0];a&&(s.hit(a,r.damage,!1,!0),a.root=a.kind==="lord"?.3:2.2,a.slow=3,a.marked=6,a.kind!=="lord"&&(a.windup=0),r.kind="sprung",r.time=r.max=1,Vt(s,"impact",[a],"#e9cd9e",50,.4),s.text(a,"МЕТКА","#e4bd86"),s.onSound("trapSnap"))}else if(r.kind==="banner"&&r.time>0&&(Mo(r,i)<r.r&&s.sight(r,i)&&(i.shield=Math.min(s.maxShield,i.shield+18*e)),r.stage<3&&r.max-r.time>=.35+r.stage*1.6)){r.stage++,Vt(s,"impact",[r],_t.steel,r.r,.6);for(const a of s.targets(r,r.r,4)){s.hit(a,r.damage);const o=Math.atan2(a.y-r.y,a.x-r.x);s.move(a,Math.cos(o)*16,Math.sin(o)*16,a.r)}s.onSound("bannerPulse")}s.fields=s.fields.filter(r=>r.time>0).slice(-12);for(const r of n.fx)r.life-=e;n.fx=n.fx.filter(r=>r.life>0)}const Xc={mage:[{name:"Дыхание дракона",key:"ЛКМ",role:"Огонь · удержание",detail:"Удерживай: короткая струя огня обжигает до 4 целей и оставляет горение. Плавит лёд с термоударом. На дистанции не достаёт.",cooldown:.14,cost:3,resource:"mana",icon:"♨",color:"#ffae70",gesture:"УДЕРЖИВАЙ"},{name:"Цепная молния",key:"Q",role:"Молния · цепь",detail:"Разряд перескакивает между 5 видимыми врагами с потерей силы. Раскалывает замороженную цель с бонусом урона. Пробивает броню.",cooldown:6,cost:32,resource:"mana",icon:"ϟ",color:"#b6b4ff"},{name:"Ледяной разлом",key:"ПРОБЕЛ",role:"Лёд · волна",detail:"Волна ледяных шипов движется вперёд, замораживает до 6 врагов на 1.6 с. Полководца только замедляет. Тушит горение с термоударом.",cooldown:8,cost:30,resource:"mana",icon:"❄",color:"#a7e9fa"},{name:"Печать метеора",key:"R",role:"Огонь · область",detail:"Метеор падает через 0.9 с, поражает до 6 целей и оставляет огненную землю на 4 с. Сначала удержи врагов льдом.",cooldown:14,cost:55,resource:"mana",icon:"☄",color:"#ff9b69"}],archer:[{name:"Быстрый выстрел",key:"ЛКМ",role:"Стрела · на ходу",detail:"Быстрая одиночная стрела без остановки. Подходит для добивания; тяжёлая броня снижает урон.",cooldown:.43,cost:1,resource:"arrows",icon:"➶",color:"#d8dca5"},{name:"Соколиный глаз",key:"Q",role:"Прицельный · заряд",detail:"Удерживай Q, наведи и отпусти. Полный натяг за 1.2 с: 280 урона, бронебойный выстрел через 3 цели. В прицеле движение медленнее. Попадание врага или рывок сбивают натяг.",cooldown:4.5,cost:3,resource:"arrows",icon:"◎",color:"#ffe29c",gesture:"ДЕРЖИ → ОТПУСТИ"},{name:"Отскок сокола",key:"ПРОБЕЛ",role:"Уход · ближний залп",detail:"Прыжок назад с тремя короткими стрелами вперёд. Помогает разорвать дистанцию. Одна цель получает лишь одно попадание.",cooldown:7,cost:3,resource:"arrows",icon:"»",color:"#c7e9bd"},{name:"Капкан егеря",key:"R",role:"Ловушка · метка",detail:"Взводится за 0.45 с, ждёт до 12 с. Ловит одного врага, обездвиживает и ставит метку: прицельный выстрел +45%. Не более двух капканов. Полководец сопротивляется удержанию.",cooldown:6,cost:4,resource:"arrows",icon:"⋈",color:"#debf91"}],knight:[{name:"Связка меча",key:"ЛКМ",role:"Сталь · три удара",detail:"Два быстрых рубящих удара и тяжёлый завершающий. До 2 / 2 / 3 целей. Попадания возвращают силы. Следи за направлением.",cooldown:.36,cost:0,resource:"stamina",icon:"⚔",color:"#e9d39a"},{name:"Парирование",key:"Q",role:"Реакция → ответ",detail:"Поймай удар спереди в окно 0.4 с. Успех восстанавливает 25 щита; повтори Q за 2.2 с для бронебойной контратаки. Удары сзади и магия земли не парируются.",cooldown:5,cost:18,resource:"stamina",icon:"◈",color:"#fff0b6",gesture:"ПОЙМАЙ → Q"},{name:"Щитовой таран",key:"ПРОБЕЛ",role:"Прорыв · движение",detail:"Короткий рывок по направлению взгляда: сбивает до 3 врагов и раскрывает их броню. Стены останавливают таран. Спереди входящий урон снижен.",cooldown:8,cost:35,resource:"stamina",icon:"⬡",color:"#dec68a"},{name:"Знамя Ордена",key:"R",role:"Позиция · защита",detail:"Знамя на 5 с: три ударные волны по 4 цели. Рядом щит восстанавливается даже в бою, входящий урон ниже на 20%. Не спасает от окружения само по себе.",cooldown:16,cost:45,resource:"stamina",icon:"⚑",color:"#e4b780"}]},pl=s=>s.cost===0?"БЕЗ ЗАТРАТ":s.resource==="mana"&&s.cooldown<.2?"21 МАНЫ/С":`${s.cost} ${s.resource==="mana"?"МАНЫ":s.resource==="arrows"?s.cost===1?"СТРЕЛА":s.cost<5?"СТРЕЛЫ":"СТРЕЛ":"СИЛ"}`,hd=s=>s.resource==="mana"?"МАЛО МАНЫ":s.resource==="arrows"?"МАЛО СТРЕЛ":"МАЛО СИЛ",Ra=["mage","archer","knight"],qc={mage:{name:"Маг",title:"Пламя Ордена",weapon:2,hp:65,shield:0,mana:160,arrows:0,speed:170,damage:2.8,dashSpeed:500,dashDuration:.15,dashCooldown:2.2,dashCost:45,staminaRegen:18,manaRegen:12,color:"#a9d7df",description:"Управляет тремя стихиями: поджигает, замораживает и раскалывает лёд молнией. Уязвим вблизи.",specialty:"Удерживаемое пламя, цепная молния, ледяная волна и метеор с огненным следом.",damageLabel:"Очень высокий",mobilityLabel:"Низкая",upgrades:["ember","flow","vitality","stride","leech","haste"]},archer:{name:"Лучник",title:"Тень ясеней",weapon:1,hp:80,shield:0,mana:0,arrows:60,speed:300,damage:1.2,dashSpeed:1050,dashDuration:.2,dashCooldown:.5,dashCost:22,staminaRegen:30,manaRegen:0,color:"#bad39a",description:"Охотится на сильные цели. Выбирает позицию, ставит капкан и ловит момент для полного натяга.",specialty:"Прицельный выстрел с зарядом, отскок со стрельбой и капкан с меткой.",damageLabel:"Средний",mobilityLabel:"Высокая",upgrades:["fletching","vitality","stride","leech","haste"]},knight:{name:"Рыцарь",title:"Железная клятва",weapon:0,hp:140,shield:160,mana:0,arrows:0,speed:225,damage:.75,dashSpeed:720,dashDuration:.18,dashCooldown:.9,dashCost:30,staminaRegen:22,manaRegen:0,color:"#dfc184",description:"Читает замахи врага, парирует и отвечает. Прорывается щитом и удерживает позицию у знамени.",specialty:"Парирование в окно 0.4 с открывает контратаку. Щит — отдельный запас защиты.",damageLabel:"Невысокий",mobilityLabel:"Средняя",upgrades:["steel","bulwark","vitality","stride","leech","haste"]}};function Yc(s){return typeof s=="string"&&Ra.includes(s)}const Hr={bulwark:{name:"Стена Ордена",icon:"⬡",detail:"+40 к запасу щита. Полностью восстановить щит."},steel:{name:"Закалённая сталь",icon:"⚔",detail:"Меч и приёмы: +25% урона, +10 к дальности рубящего удара."},fletching:{name:"Королевский лучник",icon:"➶",detail:"Все стрелы: +25% урона. +20 стрел в колчан."},ember:{name:"Живое пламя",icon:"✧",detail:"Все заклинания: +25% урона, взрыв искры шире. Лимит целей не растёт."},vitality:{name:"Несломленная клятва",icon:"✚",detail:"+25 к здоровью. Восстановить 45 здоровья."},flow:{name:"Исток",icon:"◈",detail:"+20 к мане, +1.5 маны в секунду. Восполнить ману."},stride:{name:"Лёгкий шаг",icon:"»",detail:"+7% к скорости, рывок тратит меньше выносливости."},leech:{name:"Цена крови",icon:"♥",detail:"Каждое убийство возвращает 1.5 здоровья."},haste:{name:"Боевая память",icon:"⌁",detail:"+12% к скорости обычной атаки (до ×2). +20 выносливости. Откат приёмов не меняется."}},dd=[{name:"КЛЯТВА",type:"Меч",hint:"Размашистые удары · третий сильнее",color:"#e6c582"},{name:"ТИС",type:"Длинный лук",hint:"Стрелы пробивают врагов",color:"#b7d49a"},{name:"УГОЛЬ",type:"Огненный посох",hint:"Взрыв по площади · расход маны",color:"#9ddcda"}],dn={well:{name:"Колодец клятвы",effect:"+50 здоровья",cooldown:55,color:"#bde0aa"},arrows:{name:"Кузница",effect:"+32 стрелы",cooldown:28,color:"#e9ba7b"},mana:{name:"Алтарь истока",effect:"Восполнить ману",cooldown:38,color:"#96d9dc"},bell:{name:"Колокол",effect:"Отвлечь врагов на 9 секунд",cooldown:42,color:"#e2c789"}},Ht=(s,e,t)=>Math.max(e,Math.min(t,s)),Dt=(s,e)=>Math.hypot(s.x-e.x,s.y-e.y),Vr=(s,e)=>Math.atan2(Math.sin(s-e),Math.cos(s-e));function Kc(s){const e=s.moduleData?.bastion;if(!e||e.version!==1||!Number.isFinite(e.width)||e.width<800||!Number.isFinite(e.height)||e.height<800)throw new Error("Бастион: некорректная карта");const t=l=>s.nodes.filter(c=>c.components?.some(h=>h.type==="bastion."+l)),n=l=>({x:l.transform.position[0]*64,y:-l.transform.position[1]*64}),i=t("cover").map(l=>({...n(l),w:l.transform.scale[0]*64,h:l.transform.scale[1]*64,style:String(l.components.find(c=>c.type==="bastion.cover").values.style)})),r=t("spawn")[0],a=t("gate").map(n),o=t("station").map(l=>({...n(l),kind:l.components.find(c=>c.type==="bastion.station").values.kind,cooldown:0}));if(!r||a.length<4||o.some(l=>!(l.kind in dn))||i.some(l=>l.w<=0||l.h<=0))throw new Error("Бастион: проверьте укрытия, врата и места силы");return{width:e.width,height:e.height,cover:i,spawn:n(r),gates:a,stations:o,zones:e.zones||[]}}function ps(s,e,t,n=0){let i=0,r=1;for(const[a,o,l,c]of[[s.x,e.x-s.x,t.x-t.w/2-n,t.x+t.w/2+n],[s.y,e.y-s.y,t.y-t.h/2-n,t.y+t.h/2+n]])if(Math.abs(o)<1e-8){if(a<l||a>c)return 1/0}else{const h=(l-a)/o,d=(c-a)/o;if(i=Math.max(i,Math.min(h,d)),r=Math.min(r,Math.max(h,d)),i>r)return 1/0}return i}function cr(s){return s=Math.max(0,s),{tier:1+Math.floor(s/45),interval:Math.max(.28,2.5/(1+s/70)),cap:Math.min(76,10+Math.floor(s/5)),health:1+s/330,damage:1+s/420,speed:1+Math.min(.45,s/900)}}const ml={skeleton:[65,77,18,6],wolf:[46,135,15,7],archer:[65,68,18,9],guard:[155,61,23,13],witch:[95,60,19,14],ogre:[420,54,32,26],lord:[1500,58,37,80]};class ud{combat=fl();lastFlameSound=-1;classId="knight";quiverTime=0;level;phase="title";seed=247;uid=1;seconds=0;kills=0;bosses=0;xp=0;nextXP=24;rank=1;nextBoss=120;spawnClock=2;navClock=0;nav=new Map;navTarget={x:0,y:0};player={x:0,y:0,angle:-Math.PI/2,hp:140,shield:160,shieldDelay:0,mana:0,stamina:100,arrows:0,weapon:0,cooldown:0,dash:0,dashCD:0,invincible:0,novaCD:0,precisionCD:0,finisherCD:0,combo:0,comboTime:0,swing:0,stride:0,dx:0,dy:0};enemies=[];bullets=[];hazards=[];fields=[];particles=[];pickups=[];upgrades=[];choices=[];stations=[];lure={x:0,y:0,time:0};banner="";bannerTime=0;damageFlash=0;shake=0;hitFlash=0;onSound=()=>{};constructor(e){this.level=e,this.reset(),this.phase="title"}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223>>>0,this.seed/4294967296}count(e){return this.upgrades.filter(t=>t===e).length}get classInfo(){return qc[this.classId]}get maxHP(){return this.classInfo.hp+25*this.count("vitality")}get maxShield(){return this.classId==="knight"?this.classInfo.shield+40*this.count("bulwark"):0}get maxMana(){return this.classId==="mage"?this.classInfo.mana+20*this.count("flow"):0}get maxStamina(){return 100+20*this.count("haste")}get maxArrows(){return this.classId==="archer"?72+10*this.count("fletching"):0}get dashCost(){return Math.max(12,this.classInfo.dashCost-this.count("stride")*3)}get availableUpgrades(){return this.classInfo.upgrades}get attacks(){return Xc[this.classId]}cooldown(e){const t=this.player;return e===0?t.cooldown:e===1?t.precisionCD:e===2?t.novaCD:t.finisherCD}ready(e){const t=this.attacks[e];return this.phase==="playing"&&(this.classId==="knight"&&e===1&&this.combat.riposte>0||this.cooldown(e)<=0&&this.player[t.resource]>=t.cost)&&!(this.classId==="archer"&&this.combat.charge>=0&&e<2)}get abilityReady(){return this.ready(2)}stationEffect(e){return e.kind==="arrows"&&this.classId==="knight"?"Полностью восстановить щит":e.kind==="arrows"&&this.classId==="mage"?"Стрелы нужны лучнику":e.kind==="mana"&&this.classId!=="mage"?"Алтарь доступен магу":dn[e.kind].effect}get speed(){return this.classInfo.speed*(1+Math.min(.7,this.count("stride")*.07))}get rate(){return Math.min(2,1+this.count("haste")*.12)}get boss(){return this.enemies.find(e=>e.kind==="lord"&&e.hp>0)}reset(e=this.classId){if(!Yc(e))throw new Error("Выберите класс стража");this.classId=e,this.combat=fl(),this.lastFlameSound=-1,this.quiverTime=0,this.phase="playing",this.seed=247,this.uid=1,this.seconds=this.kills=this.bosses=this.xp=0,this.rank=1,this.nextXP=24,this.nextBoss=120,this.spawnClock=2,this.navClock=0,this.nav.clear(),this.enemies=[],this.bullets=[],this.hazards=[],this.fields=[],this.particles=[],this.pickups=[],this.upgrades=[],this.choices=[],this.lure.time=0,this.damageFlash=this.shake=this.hitFlash=0,this.stations=this.level.stations.map(t=>({...t,cooldown:0})),Object.assign(this.player,{...this.level.spawn,angle:-Math.PI/2,hp:this.maxHP,shield:this.maxShield,shieldDelay:0,mana:this.maxMana,stamina:this.maxStamina,arrows:this.classInfo.arrows,weapon:this.classInfo.weapon,cooldown:0,dash:0,dashCD:0,invincible:1.5,novaCD:0,precisionCD:0,finisherCD:0,combo:0,comboTime:0,swing:0,stride:0,dx:0,dy:0}),this.announce("ДЕРЖИСЬ ДО ПОСЛЕДНЕГО");for(const t of[0,2,5])this.spawn("skeleton",this.level.gates[t])}announce(e){this.banner=e,this.bannerTime=3.2}pause(e){e&&this.phase==="playing"?(hs(this),this.combat.parry=0,this.combat.flame=0,this.phase="paused"):!e&&this.phase==="paused"&&(this.phase="playing")}blocked(e,t,n=18){return e<80+n||t<80+n||e>this.level.width-80-n||t>this.level.height-80-n||this.level.cover.some(i=>Math.hypot(e-Ht(e,i.x-i.w/2,i.x+i.w/2),t-Ht(t,i.y-i.h/2,i.y+i.h/2))<n)}move(e,t,n,i){const r=Math.max(1,Math.ceil(Math.hypot(t,n)/9));for(let a=0;a<r;a++)this.blocked(e.x+t/r,e.y,i)||(e.x+=t/r),this.blocked(e.x,e.y+n/r,i)||(e.y+=n/r)}sight(e,t,n=0){return!this.level.cover.some(i=>ps(e,t,i,n)!==1/0)}buildNav(){const t=this.lure.time>0?this.lure:this.player;this.navTarget={x:t.x,y:t.y};const n=Math.floor(t.x/40),i=Math.floor(t.y/40),r=[[n,i]];this.nav.clear(),this.nav.set(`${n},${i}`,0);for(let a=0;a<r.length;a++){const[o,l]=r[a],c=this.nav.get(`${o},${l}`);for(const[h,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const u=o+h,m=l+d,f=`${u},${m}`;this.nav.has(f)||this.blocked(u*40+20,m*40+20,40)||this.level.cover.some(_=>Math.abs(u*40+20-_.x)<_.w/2+40&&Math.abs(m*40+20-_.y)<_.h/2+40)||(this.nav.set(f,c+1),r.push([u,m]))}}}direction(e){let t=this.lure.time>0?this.lure:this.player;if(!this.sight(e,t,e.r+3)){const i=Math.floor(e.x/40),r=Math.floor(e.y/40);let a=1/0;for(const[o,l]of[[0,0],[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]]){const c={x:(i+o)*40+20,y:(r+l)*40+20},h=this.nav.get(`${i+o},${r+l}`);h!==void 0&&h<a&&this.sight(e,c,e.r+2)&&(a=h,t=c)}}const n=Dt(e,t)||1;return{x:(t.x-e.x)/n,y:(t.y-e.y)/n}}spawn(e,t){const n=cr(this.seconds),i=this.random();e??=this.seconds>180&&i<.12?"ogre":this.seconds>75&&i<.24?"witch":this.seconds>45&&i<.42?"guard":this.seconds>20&&i<.59?"archer":this.seconds>10&&i<.77?"wolf":"skeleton";const r=this.level.gates.filter(h=>Dt(h,this.player)>500),a=r.length?r:this.level.gates,o=t||a[Math.floor(this.random()*a.length)],l=ml[e],c={...o,id:this.uid++,kind:e,hp:l[0]*n.health,maxHP:l[0]*n.health,r:l[2],speed:l[1]*n.speed,angle:0,attack:1.4,windup:0,locked:0,birth:1.2,flash:0,slow:0,exposed:0,frozen:0,root:0,stun:0,controlGuard:0,burn:0,burnPower:0,burnTick:0,marked:0,stride:0};if(this.enemies.length>=80){const h=this.enemies.filter(d=>d.kind!=="lord").sort((d,u)=>Dt(u,this.player)-Dt(d,this.player))[0];if(h)this.enemies=this.enemies.filter(d=>d!==h);else return}return this.enemies.push(c),c}ring(e,t,n){this.particles.push({...e,vx:0,vy:0,life:.5,max:.5,color:t,size:n,kind:"ring"})}text(e,t,n="#e8d6a6"){this.particles.push({...e,vx:0,vy:-30,life:.9,max:.9,color:n,size:15,kind:"text",text:t})}burst(e,t,n=10){for(let i=0;i<n;i++){const r=this.random()*Math.PI*2,a=25+this.random()*170;this.particles.push({...e,vx:Math.cos(r)*a,vy:Math.sin(r)*a,life:.2+this.random()*.4,max:.6,color:t,size:2+this.random()*3,kind:"spark"})}this.particles.length>400&&this.particles.splice(0,this.particles.length-400)}hit(e,t,n=!1,i=!1,r=!1){if(e.hp<=0||e.birth>0)return;const a=Math.atan2(this.player.y-e.y,this.player.x-e.x);if(e.exposed>0?t*=1.25:i||(e.kind==="guard"&&Math.abs(Vr(a,e.angle))<1.05?(t*=.3,!r&&e.flash<=0&&this.text(e,"БЛОК","#c4c9c6")):(e.kind==="ogre"||e.kind==="lord")&&(t*=.45,!r&&e.flash<=0&&this.text(e,"БРОНЯ","#c4c9c6"))),e.hp-=t,r||(t>=100&&this.text(e,String(Math.round(t)),n?"#b9e9f4":"#f1d69d"),e.flash=.12,this.hitFlash=.09,this.burst(e,n?"#98dcd7":"#e4bb82",4),this.onSound("hit")),e.hp<=0){if(this.kills++,this.xp+=ml[e.kind][3],this.player.hp=Math.min(this.maxHP,this.player.hp+1.5*this.count("leech")),this.burst(e,e.kind==="witch"?"#bc9ad0":"#b59e7b",13),this.onSound("kill"),e.kind==="lord")this.bosses++,this.xp+=45,this.pickups.push({...e,kind:"health",life:50},{x:e.x+28,y:e.y,kind:"arrows",life:50},{x:e.x-28,y:e.y,kind:"mana",life:50}),this.announce("ПОЛКОВОДЕЦ ПАЛ. НОЧЬ ПРОДОЛЖАЕТСЯ.");else if(this.kills%3===0){const o=this.random();this.pickups.push({...e,kind:o<.3?"health":o<.67?"arrows":"mana",life:30})}}}hurt(e,t,n=!0){const i=this.player,r=this.combat;if(this.phase!=="playing"||i.invincible>0||i.dash>0||ad(this,t,n))return;od(this)&&(e*=.8),r.motion==="ram"&&r.motionTime>0&&t&&Math.abs(Vr(Math.atan2(t.y-i.y,t.x-i.x),i.angle))<1.2&&(e*=.5),r.charge>=0&&(hs(this),this.text(i,"НАТЯГ СБИТ","#e9b38e"));const a=Math.min(i.shield,e);i.shield-=a,i.shieldDelay=5,i.hp=Math.max(0,i.hp-(e-a)),a>0&&(this.ring(i,"#dec691",42),this.onSound("shield")),i.invincible=.42,this.damageFlash=.4,this.shake=7,this.onSound("hurt"),i.hp<=0&&(this.phase="dead",r.charge=-1,r.parry=0,r.flame=0,this.announce("КЛЯТВА ИСПОЛНЕНА"),this.onSound("dead"))}targets(e,t,n,i,r=Math.PI){return this.enemies.filter(a=>a.hp>0&&a.birth<=0&&Dt(e,a)<t+a.r&&(i===void 0||Math.abs(Vr(Math.atan2(a.y-e.y,a.x-e.x),i))<r)&&this.sight(e,a)).sort((a,o)=>Dt(e,a)-Dt(e,o)||a.id-o.id).slice(0,n)}damageScale(){return 1+.25*this.count(this.classId==="mage"?"ember":this.classId==="archer"?"fletching":"steel")}aimPoint(e,t){const n=this.player,i=e&&Number.isFinite(e.x)&&Number.isFinite(e.y),r=i?e:this.targets(n,t,1,n.angle,.32)[0]||{x:n.x+Math.cos(n.angle)*t,y:n.y+Math.sin(n.angle)*t},a=Dt(n,r)||1,o=Math.min(1,t/a),l={x:n.x+(r.x-n.x)*o,y:n.y+(r.y-n.y)*o};let c=1;for(const d of this.level.cover)c=Math.min(c,ps(n,l,d,8));const h=Math.max(0,c-8/Math.max(8,a*o));return{x:n.x+(l.x-n.x)*h,y:n.y+(l.y-n.y)*h}}shot(e,t,n={}){const i=this.player,r=this.classId==="mage",a=r?620:890;this.bullets.push({id:this.uid++,x:i.x+Math.cos(e)*25,y:i.y+Math.sin(e)*25,vx:Math.cos(e)*a,vy:Math.sin(e)*a,life:r?1.3:1.1,damage:t*this.damageScale(),enemy:!1,kind:r?"fire":"arrow",pierce:1,hit:new Set,...n})}slash(e,t,n=!1){const i=this.player;i.swing=.23,this.particles.push({...i,vx:0,vy:0,life:.25,max:.25,color:t,size:e,kind:n?"ring":"slash",angle:i.angle}),this.onSound("sword")}attack(e=0,t){return ld(this,e,t)}explode(e,t){const n=75+Math.min(40,this.count("ember")*8);this.ring(e,"#efac70",n),this.burst(e,"#ffc68a",18);for(const i of this.targets(e,n,3))this.hit(i,t,!0);this.onSound("blast")}nova(){return this.attack(2)}get nearStation(){return this.stations.find(e=>Dt(e,this.player)<110)}interact(){const e=this.nearStation,t=this.player;if(!e||this.phase!=="playing")return;if(e.kind==="mana"&&this.classId!=="mage"||e.kind==="arrows"&&this.classId==="mage"){this.text(t,"ДЛЯ ДРУГОГО КЛАССА");return}if(e.cooldown>0){this.text(t,`${Math.ceil(e.cooldown)} СЕК`);return}if(e.kind==="well"?t.hp>=this.maxHP:e.kind==="mana"?t.mana>=this.maxMana:e.kind==="arrows"?this.classId==="knight"?t.shield>=this.maxShield:t.arrows>=this.maxArrows:!1){this.text(t,"ЗАПАС ПОЛОН");return}e.cooldown=dn[e.kind].cooldown,e.kind==="well"&&(t.hp=Math.min(this.maxHP,t.hp+50)),e.kind==="mana"&&(t.mana=this.maxMana),e.kind==="arrows"&&(this.classId==="knight"?t.shield=this.maxShield:t.arrows=Math.min(this.maxArrows,t.arrows+32)),e.kind==="bell"&&(this.lure={x:e.x,y:e.y,time:9},this.navClock=0,this.announce("КОЛОКОЛ ОТВЛЕКАЕТ ОРДУ")),this.ring(e,dn[e.kind].color,130),this.onSound(e.kind==="bell"?"bell":"pickup")}choose(e){return this.phase!=="upgrade"||!this.choices.includes(e)||!this.availableUpgrades.includes(e)?!1:(this.upgrades.push(e),e==="bulwark"&&(this.player.shield=this.maxShield),e==="vitality"&&(this.player.hp=Math.min(this.maxHP,this.player.hp+45)),e==="flow"&&(this.player.mana=this.maxMana),e==="fletching"&&(this.player.arrows=Math.min(this.maxArrows,this.player.arrows+20)),e==="haste"&&(this.player.stamina=this.maxStamina),this.rank++,this.xp-=this.nextXP,this.nextXP=Math.round(24+this.rank*12+this.rank*this.rank*1.6),this.choices=[],this.phase="playing",this.player.invincible=Math.max(.7,this.player.invincible),this.onSound("upgrade"),!0)}enemyAttack(e){const t=this.player,n=cr(this.seconds);if(e.kind==="archer")this.bullets.push({id:this.uid++,x:e.x,y:e.y,vx:Math.cos(e.locked)*365,vy:Math.sin(e.locked)*365,life:2.5,damage:15*n.damage,enemy:!0,kind:"arrow",pierce:1,hit:new Set}),this.onSound("bow");else if(e.kind==="witch")this.hazards.push({x:t.x,y:t.y,r:83,time:1.1,max:1.1,damage:22*n.damage});else if(e.kind==="ogre"||e.kind==="lord"){const i=e.kind==="lord";if(this.ring(e,"#e2a06f",i?155:115),Dt(t,e)<(i?155:115)&&this.sight(e,t)&&this.hurt((i?30:24)*n.damage,e),i)for(let r=0;r<8;r++){const a=r*Math.PI/4+e.locked;this.bullets.push({id:this.uid++,x:e.x,y:e.y,vx:Math.cos(a)*210,vy:Math.sin(a)*210,life:3.5,damage:17*n.damage,enemy:!0,kind:"curse",pierce:1,hit:new Set})}}else Dt(e,t)<e.r+48&&this.sight(e,t)&&this.hurt((e.kind==="guard"?18:11)*n.damage,e);e.attack=e.kind==="archer"?2.25:e.kind==="witch"?3.3:e.kind==="lord"?2.3:1.15}step(e,t){if(this.phase!=="playing")return;e=Ht(e,0,.04),this.seconds+=e;const n=this.player,i=cr(this.seconds);for(const _ of["cooldown","dash","dashCD","invincible","novaCD","precisionCD","finisherCD","comboTime","swing"])n[_]=Math.max(0,n[_]-e);n.mana=Math.min(this.maxMana,n.mana+(this.classInfo.manaRegen+this.count("flow")*1.5)*e),n.stamina=Math.min(this.maxStamina,n.stamina+this.classInfo.staminaRegen*e);const r=Math.max(0,e-n.shieldDelay);if(n.shieldDelay=Math.max(0,n.shieldDelay-e),this.maxShield>0&&(n.shield=Math.min(this.maxShield,n.shield+r*20)),this.classId==="archer")for(this.quiverTime+=e;this.quiverTime>=1.5;)this.quiverTime-=1.5,n.arrows=Math.min(this.maxArrows,n.arrows+1);this.bannerTime=Math.max(0,this.bannerTime-e),this.damageFlash=Math.max(0,this.damageFlash-e),this.hitFlash=Math.max(0,this.hitFlash-e),this.shake=Math.max(0,this.shake-e*24),this.lure.time=Math.max(0,this.lure.time-e);for(const _ of this.stations)_.cooldown=Math.max(0,_.cooldown-e);Number.isFinite(t.angle)&&(n.angle=t.angle),n.weapon=this.classInfo.weapon;const a=Math.max(1,Math.hypot(t.x,t.y)),o=t.x/a,l=t.y/a,c=this.dashCost;t.dash&&n.dashCD<=0&&n.stamina>=c&&this.combat.motionTime<=0&&(hs(this),this.combat.parry=0,n.stamina-=c,n.dash=this.classInfo.dashDuration,n.dashCD=this.classInfo.dashCooldown,n.dx=o||l?o:Math.cos(n.angle),n.dy=o||l?l:Math.sin(n.angle),this.onSound("dash"));const h=this.combat,d=h.charge>=0?.28:h.parry>0?.35:h.flame>0?.72:1;let u=n.dash>0?n.dx*this.classInfo.dashSpeed:o*this.speed*d,m=n.dash>0?n.dy*this.classInfo.dashSpeed:l*this.speed*d;if(h.motionTime>0){const _=h.motion==="ram"?790:690;u=Math.cos(h.motionAngle)*_,m=Math.sin(h.motionAngle)*_,h.motion==="ram"&&(n.angle=h.motionAngle)}const f={x:n.x,y:n.y};this.move(n,u*e,m*e,18),h.motionTime>0&&Dt(f,n)<Math.hypot(u,m)*e*.3&&(h.motionTime=0,h.motion="none",this.burst(n,"#d9c79b",8)),n.stride+=Math.hypot(u,m)*e*.04,t.skill?this.attack(t.skill,t.target):t.nova?this.nova():t.fire&&this.attack(),t.interact&&this.interact(),cd(this,e,t),this.spawnClock-=e,this.spawnClock<=0&&(this.spawnClock=i.interval,this.enemies.length<i.cap&&this.spawn()),this.seconds>=this.nextBoss&&(this.nextBoss+=120,this.spawn("lord"),this.announce("ПОЛКОВОДЕЦ ПРАХА ВСТУПАЕТ В БОЙ"),this.onSound("boss")),this.navClock-=e,this.navClock<=0&&(this.navClock=.4,this.buildNav());for(const _ of this.enemies){if(_.hp<=0||(_.birth=Math.max(0,_.birth-e),_.flash=Math.max(0,_.flash-e),_.slow=Math.max(0,_.slow-e),_.exposed=Math.max(0,_.exposed-e),_.birth>0||_.frozen>0||_.stun>0))continue;_.attack-=e;const p=this.lure.time>0?this.lure:n,g=Dt(_,p);if(_.angle=Math.atan2(p.y-_.y,p.x-_.x),_.windup>0){_.windup-=e,_.windup<=0&&this.enemyAttack(_);continue}const S=_.kind==="archer"||_.kind==="witch",T=S?470:_.kind==="lord"?130:_.kind==="ogre"?95:48;if(_.root<=0&&(g>T||!this.sight(_,p))){const y=this.direction(_);let E=y.x,b=y.y;for(const w of this.enemies){if(w===_||w.hp<=0)continue;const C=Dt(_,w),L=_.r+w.r+5;C>0&&C<L&&(E+=(_.x-w.x)/C*(1-C/L)*1.8,b+=(_.y-w.y)/C*(1-C/L)*1.8)}const R=Math.max(1,Math.hypot(E,b)),v=_.speed*(_.slow>0?.45:1);this.move(_,E/R*v*e,b/R*v*e,_.r),_.stride+=v*e*.04}if(_.attack<=0&&g<T+15&&this.sight(_,p)){if(this.lure.time>0){_.attack=1;continue}_.windup=_.kind==="archer"?.8:_.kind==="witch"?.85:_.kind==="lord"?.95:_.kind==="ogre"?.9:.42,_.locked=_.angle}}this.enemies=this.enemies.filter(_=>_.hp>0);for(const _ of this.bullets){const p={x:_.x,y:_.y},g={x:_.x+_.vx*e,y:_.y+_.vy*e};_.life-=e;let S=1;for(const b of this.level.cover)S=Math.min(S,ps(p,g,b,2));const T={x:p.x+(g.x-p.x)*S,y:p.y+(g.y-p.y)*S},y=[],E=(b,R)=>{const v=T.x-p.x,w=T.y-p.y,C=Ht(((b.x-p.x)*v+(b.y-p.y)*w)/(v*v+w*w||1),0,1);return Math.hypot(p.x+v*C-b.x,p.y+w*C-b.y)<R?C:1/0};if(_.enemy)E(n,22)<1/0&&(this.hurt(_.damage,{x:n.x-_.vx,y:n.y-_.vy},_.kind!=="curse"),_.life=0);else for(const b of this.enemies)if(b.hp>0&&b.birth<=0&&!_.hit.has(b.id)){const R=E(b,b.r+6);R<1/0&&y.push({t:R,e:b})}y.sort((b,R)=>b.t-R.t);for(const b of y){if(_.pierce<=0)break;_.hit.add(b.e.id),_.pierce--,_.kind==="fire"?(_.x=p.x+(T.x-p.x)*b.t,_.y=p.y+(T.y-p.y)*b.t,this.explode(_,_.damage),_.life=0):(this.hit(b.e,_.damage*(_.aimed&&b.e.marked>0?1.45:1),!1,_.armorPiercing),_.aimed&&(Vt(this,"impact",[b.e],_.color||"#e8d09c",65,.35),this.onSound("snipeHit"),this.shake=Math.max(this.shake,2),b.e.marked>0&&this.text(b.e,"ТОЧНО В ЦЕЛЬ","#ffe5a9"))),_.pierce<=0&&(_.life=0)}_.life>0&&S<1&&(!_.enemy&&_.kind==="fire"?this.explode(T,_.damage):this.burst(T,_.enemy?"#d9a188":"#cbd1b3",3),_.life=0),_.x=T.x,_.y=T.y,(_.x<80||_.y<80||_.x>this.level.width-80||_.y>this.level.height-80)&&(_.life=0)}this.bullets=this.bullets.filter(_=>_.life>0).slice(-260);for(const _ of this.hazards)_.time-=e,_.time<=0&&(this.ring(_,"#cda1d1",_.r),this.burst(_,"#c7a2d6",12),Dt(_,n)<_.r+16&&this.sight(_,n)&&this.hurt(_.damage,_,!1));this.hazards=this.hazards.filter(_=>_.time>0);for(const _ of this.pickups)if(_.life-=e,Dt(n,_)<43&&this.sight(n,_)){if(_.kind==="health"){if(n.hp>=this.maxHP)continue;n.hp=Math.min(this.maxHP,n.hp+22)}else if(_.kind==="arrows"){if(n.arrows>=this.maxArrows)continue;n.arrows=Math.min(this.maxArrows,n.arrows+9)}else{if(n.mana>=this.maxMana)continue;n.mana=Math.min(this.maxMana,n.mana+26)}this.text(_,_.kind==="health"?"+22":_.kind==="arrows"?"+9":"+26",dn[_.kind==="health"?"well":_.kind].color),_.life=0,this.onSound("pickup")}this.pickups=this.pickups.filter(_=>_.life>0).slice(-80);for(const _ of this.particles)_.life-=e,_.x+=_.vx*e,_.y+=_.vy*e;if(this.particles=this.particles.filter(_=>_.life>0),this.phase==="playing"&&this.xp>=this.nextXP){const _=[...this.availableUpgrades];for(let p=_.length-1;p>0;p--){const g=Math.floor(this.random()*(p+1));[_[p],_[g]]=[_[g],_[p]]}this.choices=_.slice(0,3),hs(this),this.combat.parry=0,this.phase="upgrade",this.onSound("upgrade")}}}const ln=Math.PI*2;function Us(s,e,t,n){const i={x:e.x+Math.cos(t)*n,y:e.y+Math.sin(t)*n};let r=1;for(const a of s.world.level.cover)r=Math.min(r,ps(e,i,a,3));return{x:e.x+(i.x-e.x)*r,y:e.y+(i.y-e.y)*r}}function $c(s,e,t,n,i,r=0){const a=s.ctx;a.save(),a.translate(e,t),a.rotate(r),s.poly([[0,-n],[-n*.32,0],[0,n*.55],[n*.35,0]],i,"#edffffbb"),a.restore()}function Gr(s,e,t,n,i=1){const r=s.ctx;r.save(),r.translate(e.x,e.y),r.rotate(-s.clock*.15),r.strokeStyle=n,r.lineWidth=2,r.beginPath(),r.arc(0,0,t,0,ln*i),r.stroke();for(let a=0;a<8;a++){const o=a*ln/8;s.line(Math.cos(o)*(t-10),Math.sin(o)*(t-10),Math.cos(o)*(t+6),Math.sin(o)*(t+6),n,2)}r.restore()}function fd(s){const e=s.world,t=s.ctx;for(const n of e.fields){const i=n.max-n.time;if(n.kind==="meteor"){const r=i/n.max;s.glow(n.x,n.y,180,"#ec814b"),s.circle(n.x,n.y,n.r,"#d4774019"),Gr(s,n,n.r,_t.fire),Gr(s,n,n.r*.7,"#ffd3a7aa",r);for(let a=0;a<5;a++){const o=a*ln/5,l=o+ln*2/5;s.line(n.x+Math.cos(o)*n.r*.76,n.y+Math.sin(o)*n.r*.76,n.x+Math.cos(l)*n.r*.76,n.y+Math.sin(l)*n.r*.76,"#e7a57060",1.5)}s.text("ПЕЧАТЬ · "+Math.max(.1,n.time).toFixed(1),n.x,n.y-n.r-18,10,"#ffce98")}else if(n.kind==="embers"){const r=Ht(n.time,0,1);t.globalAlpha=r,s.circle(n.x,n.y,n.r,"#1a1713aa");for(let a=0;a<18;a++){const o=a*2.4,l=22+a*37%120,c=n.x+Math.cos(o)*l,h=n.y+Math.sin(o)*l;s.line(c,h,c+Math.cos(o)*20,h+Math.sin(o)*16,"#d9854255",2),s.glow(c,h,22,"#ea7139");const d=12+Math.sin(s.clock*9+a)*7;s.poly([[c-5,h],[c+2,h-d],[c+6,h+2]],a%2?"#f7b3659f":"#e17246aa")}t.globalAlpha=1}else if(n.kind==="frost"||n.kind==="frostwake"){const r=n.kind==="frost"?Math.min(n.r,460*Ht(i/n.max,0,1)):n.r,a=n.kind==="frost"?1:Math.min(1,n.time);t.save(),t.translate(n.x,n.y),t.rotate(n.angle),t.globalAlpha=a,t.fillStyle="#b5e9fa16",t.fillRect(0,-45,r,90);for(let o=0;o<Math.floor(r/22);o++){const l=15+o*22,c=Math.sin(o*8.7)*30,h=24+o*13%30;s.line(l-14,c+8,l+18,c-7,"#93cddb99",2),$c(s,l,c,h,o%2?"#88c9e0d0":"#d2f4f3d0",Math.PI/2+.2*Math.sin(o))}n.kind==="frost"&&(s.line(r,-48,r+12,0,"#f5ffff",3),s.line(r+12,0,r,48,"#f5ffff",3)),t.restore()}else if(n.kind==="trap"||n.kind==="sprung"){const r=i>.45,a=n.kind==="sprung";t.save(),t.translate(n.x,n.y),t.rotate(n.angle),s.circle(0,0,27,"#17211ad9"),t.strokeStyle=r?"#d6bf91":"#737567",t.lineWidth=4,t.beginPath(),t.ellipse(0,0,a?12:30,a?30:19,0,0,ln),t.stroke();for(let o=0;o<8;o++){const l=o*ln/8,c=Math.cos(l)*(a?13:26),h=Math.sin(l)*(a?28:18);s.poly([[c-4,h],[c,h-9],[c+4,h]],"#c6c2a0")}s.line(-12,0,12,0,"#705d3b",5),s.circle(0,0,6,r?"#f2cb78":"#5c6557"),a||s.text(r?"КАПКАН":"ВЗВОД",0,-40,8,r?"#d9c995":"#9aab99"),t.restore()}else if(n.kind==="banner"){s.circle(n.x,n.y,n.r,"#cebb6f09"),Gr(s,n,n.r,"#d3b97766");for(let r=0;r<8;r++){const a=r*ln/8;s.line(n.x+Math.cos(a)*26,n.y+Math.sin(a)*26,n.x+Math.cos(a)*54,n.y+Math.sin(a)*54,"#d8c38733",3)}s.glow(n.x,n.y,90,"#dfc375")}}}function pd(s,e){if(e.hp<=0||e.birth>0)return;const t=s.ctx;if(e.frozen>0&&(t.globalAlpha=.8,s.poly([[e.x-e.r-4,e.y+12],[e.x-e.r-9,e.y-15],[e.x-4,e.y-e.r-20],[e.x+e.r+7,e.y-14],[e.x+e.r+3,e.y+14],[e.x,e.y+e.r+8]],"#86cce05c","#d1f9fa"),s.line(e.x-12,e.y+8,e.x+7,e.y-e.r-12,"#e0ffff99",2),t.globalAlpha=1),e.burn>0){for(let n=0;n<4;n++){const i=n*1.6+s.clock*.8,r=e.x+Math.cos(i)*e.r*.65,a=e.y+Math.sin(i)*e.r*.35,o=14+Math.sin(s.clock*13+n)*8;s.poly([[r-6,a+7],[r-2,a-o],[r+6,a+7]],n%2?"#ffca7bd0":"#ed874caa")}s.glow(e.x,e.y,e.r+20,"#de7146")}if(e.root>0&&(s.circle(e.x,e.y+8,e.r+7,"#b7986977",!0,3),s.line(e.x-e.r,e.y+12,e.x+e.r,e.y-5,"#e0bf8faa",3)),e.marked>0){const n=e.y-e.r-31;s.line(e.x-7,n-7,e.x+7,n+7,"#ffe0a7",2),s.line(e.x+7,n-7,e.x-7,n+7,"#ffe0a7",2),s.circle(e.x,n,11,"#ddbd82aa",!0)}if(e.stun>0)for(let n=0;n<3;n++){const i=s.clock*7+n*ln/3;s.circle(e.x+Math.cos(i)*16,e.y-e.r-10+Math.sin(i)*5,2,"#f9e7b1")}}function md(s){const e=s.world,t=e.player,n=e.combat,i=s.ctx;if(n.flame>0){const r=s.reduce?7:15,a={x:t.x+Math.cos(t.angle)*22,y:t.y+Math.sin(t.angle)*22};i.save(),i.globalCompositeOperation="lighter";for(let o=0;o<r;o++){const l=t.angle+Math.sin(o*2.4+s.clock*8)*.35,c=Us(s,a,l,180+o*19%80),h=i.createLinearGradient(a.x,a.y,c.x,c.y);h.addColorStop(0,"#fff5c3b0"),h.addColorStop(.32,"#ffb45480"),h.addColorStop(1,"#d74c2200"),i.strokeStyle=h,i.lineWidth=12+o%4*4,i.beginPath(),i.moveTo(a.x,a.y);const d={x:(a.x+c.x)/2+Math.sin(s.clock*11+o)*12,y:(a.y+c.y)/2+Math.cos(s.clock*9+o)*12};i.quadraticCurveTo(d.x,d.y,c.x,c.y),i.stroke()}s.glow(a.x,a.y,75,_t.fire),i.restore()}if(n.charge>=0){const r=Ht(n.charge/1.2,0,1),a=r>=1?"#fff0ad":"#b0b69d",o=Us(s,t,t.angle,950),l=Math.hypot(o.x-t.x,o.y-t.y),c=(1-r)*.1+.006;i.save(),i.setLineDash([8,8]),s.line(t.x,t.y,o.x,o.y,a+"66",1),i.setLineDash([]);for(const d of[-1,1]){const u=Us(s,t,t.angle+c*d,l);s.line(t.x,t.y,u.x,u.y,a+"55",1)}s.circle(o.x,o.y,9-r*5,a,!0,1.5);const h=e.enemies.filter(d=>d.hp>0&&d.birth<=0&&e.sight(t,d)).map(d=>({e:d,x:(d.x-t.x)*Math.cos(t.angle)+(d.y-t.y)*Math.sin(t.angle),y:Math.abs(-(d.x-t.x)*Math.sin(t.angle)+(d.y-t.y)*Math.cos(t.angle))})).filter(d=>d.x>0&&d.x<l&&d.y<d.e.r+5).sort((d,u)=>d.x-u.x)[0]?.e;if(h){s.circle(h.x,h.y,h.r+13,a,!0,2);for(let d=0;d<4;d++){const u=d*Math.PI/2;s.line(h.x+Math.cos(u)*(h.r+10),h.y+Math.sin(u)*(h.r+10),h.x+Math.cos(u)*(h.r+22),h.y+Math.sin(u)*(h.r+22),a,2)}}s.text(r>=1?"ОТПУСТИ Q":"НАТЯГ "+Math.round(r*100)+"%",t.x,t.y-64,11,a),i.fillStyle="#0c1b19",i.fillRect(t.x-34,t.y-53,68,4),i.fillStyle=a,i.fillRect(t.x-34,t.y-53,68*r,4),i.restore()}(n.parry>0||n.riposte>0)&&(i.save(),i.translate(t.x,t.y),i.rotate(t.angle),i.strokeStyle=n.riposte>0?"#fff6c5":"#ddc88d",i.lineWidth=n.parry>0?7:2,i.beginPath(),i.arc(0,0,45,-1.1,1.1),i.stroke(),n.riposte>0&&s.glow(31,0,43,_t.steel),i.restore());for(const r of e.fields){if(r.kind==="meteor"){const a=Math.max(0,r.time/r.max),o=r.x+150*a,l=r.y-410*a;s.line(o+60,l-170,o,l,"#e97c4266",20),s.line(o+25,l-90,o,l,"#ffd797aa",8),s.glow(o,l,66,"#ff9b50"),s.circle(o,l,18,"#e37f42"),s.poly([[o-18,l-6],[o-7,l-19],[o+15,l-9],[o+18,l+12],[o-3,l+19]],"#806045","#ffe0a2")}if(r.kind==="banner"){const a=r.x+15,o=r.y,l=Math.sin(s.clock*5)*5;s.line(a,o+10,a,o-115,"#98876b",5),s.line(a-1,o+10,a-1,o-115,"#ded0a1",1),s.poly([[a,o-110],[a+59,o-103+l],[a+54,o-52+l],[a+25,o-65],[a,o-61]],"#9e5c3e","#e2c187"),s.line(a+25,o-96,a+25,o-71,"#eddaa5",3),s.line(a+15,o-87,a+37,o-85,"#eddaa5",3),s.poly([[a-4,o-115],[a,o-125],[a+4,o-115]],"#e7d7a3"),s.text("ЗНАМЯ · "+Math.ceil(r.time)+"с",a,o+38,9,"#e4d4a0")}}for(const r of n.fx){const a=Ht(r.life/r.max,0,1),o=1-a,l=r.points[0];if(i.save(),i.globalAlpha=a,r.kind==="lightning"){const c=r.points[1];i.globalCompositeOperation="lighter";for(const[h,d]of[[12,r.color+"2b"],[4,r.color],[1.5,"#f6f4ff"]]){i.strokeStyle=d,i.lineWidth=h,i.beginPath(),i.moveTo(l.x,l.y);for(let u=1;u<13;u++){const m=u/12,f=u===12?0:Math.sin(u*9.2+r.seed*4)*17;i.lineTo(l.x+(c.x-l.x)*m+f,l.y+(c.y-l.y)*m+Math.cos(u*4.3+r.seed)*f)}i.stroke()}s.glow(c.x,c.y,40,r.color)}else if(r.kind==="shatter")for(let c=0;c<12;c++){const h=c*ln/12+r.seed,d=o*r.size;$c(s,l.x+Math.cos(h)*d,l.y+Math.sin(h)*d,12*a+5,r.color,h)}else if(r.kind==="steam")for(let c=0;c<8;c++){const h=c*ln/8;s.circle(l.x+Math.cos(h)*o*r.size,l.y+Math.sin(h)*o*r.size-o*24,12+o*15,"#dcece969")}else if(r.kind==="afterimage")i.translate(l.x,l.y),i.rotate(r.angle),s.poly([[-17,-13],[7,-17],[19,0],[7,17],[-17,13]],r.color+"55"),s.line(-20,0,-55,0,r.color+"55",6);else if(r.kind==="shot"){const c=Us(s,l,r.angle,r.size);s.line(l.x,l.y,c.x,c.y,r.color,7*a),s.glow(l.x,l.y,40,r.color)}else if(r.kind==="parry"){for(let c=0;c<11;c++){const h=r.angle+(c-5)*.18,d=25+o*r.size;s.line(l.x+Math.cos(h)*d*.5,l.y+Math.sin(h)*d*.5,l.x+Math.cos(h)*d,l.y+Math.sin(h)*d,r.color,3*a)}s.glow(l.x,l.y,80,r.color)}else{s.circle(l.x,l.y,r.size*o,r.color,!0,5*a+1);for(let c=0;c<8;c++){const h=c*ln/8+r.seed;s.line(l.x+Math.cos(h)*o*r.size*.6,l.y+Math.sin(h)*o*r.size*.6,l.x+Math.cos(h)*o*r.size,l.y+Math.sin(h)*o*r.size,r.color,2*a)}}i.restore()}}const Ji=Math.PI*2;class gd{canvas;ctx;world;floor=document.createElement("canvas");w=0;h=0;dpr=1;scale=.8;baseScale=.8;cameraX=1200;cameraY=960;clock=0;map=!1;pointer={x:0,y:0,visible:!1};reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;constructor(e,t){this.canvas=e,this.ctx=e.getContext("2d",{alpha:!1}),this.world=t,this.bake(),this.resize(),this.snap()}resize(){const e=this.canvas.getBoundingClientRect();this.w=Math.max(1,e.width),this.h=Math.max(1,e.height),this.dpr=Math.min(2,devicePixelRatio||1),this.canvas.width=Math.round(this.w*this.dpr),this.canvas.height=Math.round(this.h*this.dpr),this.scale=this.baseScale=Ht(Math.min(this.w/1440,this.h/930),.52,1.08)}snap(){this.cameraX=this.world.player.x,this.cameraY=this.world.player.y}screenToWorld(e,t){return{x:(e-this.w/2)/this.scale+this.cameraX,y:(t-this.h/2)/this.scale+this.cameraY}}screen(e){return{x:(e.x-this.cameraX)*this.scale+this.w/2,y:(e.y-this.cameraY)*this.scale+this.h/2}}circle(e,t,n,i,r=!1,a=1){const o=this.ctx;o.beginPath(),o.arc(e,t,Math.max(0,n),0,Ji),r?(o.strokeStyle=i,o.lineWidth=a,o.stroke()):(o.fillStyle=i,o.fill())}line(e,t,n,i,r,a=1){const o=this.ctx;o.beginPath(),o.moveTo(e,t),o.lineTo(n,i),o.strokeStyle=r,o.lineWidth=a,o.stroke()}poly(e,t,n){const i=this.ctx;i.beginPath(),e.forEach(([r,a],o)=>o?i.lineTo(r,a):i.moveTo(r,a)),i.closePath(),i.fillStyle=t,i.fill(),n&&(i.strokeStyle=n,i.lineWidth=1.5,i.stroke())}text(e,t,n,i,r,a="center",o=!1){const l=this.ctx;l.font=`${o?"":"600 "}${i}px ${o?"Georgia":"system-ui"}`,l.textAlign=a,l.fillStyle=r,l.fillText(e,t,n)}glow(e,t,n,i){const r=this.ctx,a=r.createRadialGradient(e,t,0,e,t,n);a.addColorStop(0,i+"40"),a.addColorStop(1,i+"00"),r.fillStyle=a,r.fillRect(e-n,t-n,n*2,n*2)}bake(){const e=this.world.level,t=this.floor;t.width=e.width,t.height=e.height;const n=this.ctx,i=t.getContext("2d");this.ctx=i,i.fillStyle="#182524",i.fillRect(0,0,e.width,e.height),i.fillStyle="#28332d",i.fillRect(76,76,e.width-152,e.height-152);let r=1447;const a=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);for(let l=0;l<1500;l++){const c=80+a()*(e.width-160),h=80+a()*(e.height-160);this.circle(c,h,4+a()*35,["#3a473129","#7881660b","#0b171720","#6b68410b"][l%4])}const o=[[690,490,1020,970],[165,935,2070,125],[1120,100,160,1720],[280,1420,1920,130],[1720,270,420,870],[250,300,520,850]];for(const[l,c,h,d]of o)i.fillStyle="#706e5830",i.fillRect(l,c,h,d);i.fillStyle="#565d502f",i.fillRect(872,654,656,612);for(let l=90;l<e.height-90;l+=29)for(let c=90;c<e.width-90;c+=43){const h=c+Math.floor(l/29)%2*21;o.some(([d,u,m,f])=>h>d&&h<d+m&&l>u&&l<u+f)&&(i.fillStyle=["#77807418","#a49c7c12","#b0a2820c","#111e2022"][Math.floor(a()*4)],i.fillRect(h+2,l+2,36+a()*4,22),i.fillStyle="#07181a16",i.fillRect(h+2,l+24,38,2))}this.circle(1200,950,230,"#92a39320",!0,3),this.circle(1200,950,217,"#a0aa8620",!0);for(let l=0;l<16;l++){const c=l*Ji/16;this.line(1200+Math.cos(c)*205,950+Math.sin(c)*205,1200+Math.cos(c)*230,950+Math.sin(c)*230,"#a9b39822",2)}for(let l=0;l<8;l++){const c=l*Ji/8;this.poly([[1200+Math.cos(c)*156,950+Math.sin(c)*156],[1200+Math.cos(c+.16)*72,950+Math.sin(c+.16)*72],[1200+Math.cos(c)*98,950+Math.sin(c)*98],[1200+Math.cos(c-.16)*72,950+Math.sin(c-.16)*72]],"#9caa8730")}for(let l=0;l<8500;l++){const c=90+a()*(e.width-180),h=90+a()*(e.height-180);i.fillStyle=l%3?"#c5c6a013":"#06182035",i.fillRect(c,h,1+a()*3,1+a()*2)}for(let l=0;l<280;l++){const c=120+a()*2160,h=130+a()*1620;this.world.blocked(c,h,35)||(this.line(c,h,c-2,h-7,"#8b9b583d",1),this.line(c,h,c+4,h-5,"#778a4c4d",1))}for(const l of[{x:1200,y:50,w:2320,h:60,style:"wall"},{x:1200,y:1870,w:2320,h:60,style:"wall"},{x:50,y:960,w:60,h:1760,style:"wall"},{x:2350,y:960,w:60,h:1760,style:"wall"}])this.cover(l);for(const[l,c]of[[755,585],[1650,585],[755,1340],[1650,1340],[1080,430],[1320,430],[300,1380],[650,1390],[1070,1700],[1330,1700]])this.glow(l,c,150,"#d8a25d"),this.circle(l,c,7,"#3b3930"),this.circle(l,c,3,"#e9b573");for(const l of e.zones)this.text(l.name,l.x,l.y+105,17,"#c5cbb829");this.ctx=n}cover(e){const t=this.ctx,n=e.x-e.w/2,i=e.y-e.h/2,r=e.w,a=e.h,o=e.style;if(o==="tree"){this.circle(e.x+25,e.y+22,61,"#07141448"),this.line(e.x,e.y+10,e.x-5,e.y-25,"#665d44",19);for(let l=0;l<7;l++){const c=l*Ji/7;this.circle(e.x+Math.cos(c)*30,e.y-22+Math.sin(c)*24,29,l%2?"#3e5040":"#48563b"),this.circle(e.x+Math.cos(c)*32-4,e.y-29+Math.sin(c)*25,18,"#5f6d4629")}return}if(o==="fountain"){this.glow(e.x,e.y,95,"#74aeb0"),this.circle(e.x+10,e.y+12,62,"#07151466"),this.circle(e.x,e.y,61,"#353f3b"),this.circle(e.x,e.y-8,59,"#697464"),this.circle(e.x,e.y-8,47,"#202f30"),this.circle(e.x,e.y-8,41,"#557570"),this.circle(e.x,e.y-9,30,"#91bfb333",!0,2),this.circle(e.x,e.y-22,17,"#7c8d77"),this.circle(e.x,e.y-26,11,"#b0b8a0");return}if(o==="grave"){t.fillStyle="#0c1c1b65",t.fillRect(n+10,i+12,r,a),t.fillStyle="#414c45",t.fillRect(n,i,r,a),t.fillStyle="#79816b",t.fillRect(n+4,i-9,r-8,a-5),t.strokeStyle="#9eaa853d",t.strokeRect(n+9,i-4,r-18,a-16),this.line(e.x,i+8,e.x,i+48,"#394b40",5),this.line(e.x-13,i+23,e.x+13,i+23,"#394b40",5);return}if(t.fillStyle="#07151665",t.fillRect(n+14,i+15,r+6,a+10),t.fillStyle="#343e36",t.fillRect(n,i,r,a),t.fillStyle="#596453",t.fillRect(n,i-18,r,a),t.fillStyle="#838d70",t.fillRect(n+2,i-18,r-4,4),o==="chapel"||o==="forge"||o==="ruin"){const l=o==="chapel"?"#4e655e":o==="forge"?"#745d46":"#555d50";this.poly([[n-10,i-15],[e.x,i-61],[n+r+10,i-15],[n+r+10,i+a-20],[e.x,i+a-57],[n-10,i+a-20]],l,"#9d9c7666"),this.line(e.x,i-61,e.x,i+a-57,"#aaaf8a77",3);for(let c=12;c<a;c+=18)this.line(n,i+c-17,e.x,i+c-57,"#17292588",2),this.line(e.x,i+c-57,n+r,i+c-17,"#14252188",2);o==="forge"&&(t.fillStyle="#9c9a7b",t.fillRect(n+36,i-45,43,67),t.fillStyle="#202b28",t.fillRect(n+40,i-47,35,21),this.glow(n+r-28,i+a,85,"#ed9f60"),t.fillStyle="#dc9955",t.fillRect(n+r-46,i+a-10,31,15)),o==="chapel"&&(this.line(e.x,i-90,e.x,i-60,"#c0b588",5),this.line(e.x-10,i-79,e.x+10,i-79,"#c0b588",4));return}for(let l=i-14;l<i+a-18;l+=22)for(let c=n+4;c<n+r-4;c+=44)t.fillStyle=Math.floor(c+l)%3?"#76806455":"#2b3b3266",t.fillRect(c,l,Math.min(40,n+r-c-3),18);if(r>a)for(let l=n+3;l<n+r-4;l+=38)t.fillStyle="#8a9275",t.fillRect(l,i-26,23,16),t.fillStyle="#4b5848",t.fillRect(l,i-12,23,7);else for(let l=i;l<i+a-5;l+=38)t.fillStyle="#859074",t.fillRect(n-7,l-18,r+14,21);o==="tower"&&(t.fillStyle="#263a34",t.fillRect(n+22,i+4,r-44,a-43),t.strokeStyle="#a7ac8366",t.strokeRect(n+16,i-2,r-32,a-31),this.poly([[e.x-16,i+a-19],[e.x+16,i+a-19],[e.x+16,i+a+34],[e.x,i+a+24],[e.x-16,i+a+34]],"#8d5f44","#ba986555"),this.line(e.x,i+a-10,e.x,i+a+20,"#dac696",3),this.line(e.x-9,i+a+1,e.x+9,i+a+1,"#dac696",3),this.line(e.x-22,i+a-20,e.x+22,i+a-20,"#a39f7a",3))}actor(e,t=!1){const n=this.ctx,i=this.world.player,r=t?"hero":e.kind,a=t?20:e.r,o=e.angle,l=Math.sin(e.stride)*4;if(this.circle(e.x+7,e.y+11,a+7,"#07131388"),!t&&e.birth>0){const T=e.birth;this.circle(e.x,e.y,45+20*T,"#bf94ab55",!0,2),n.globalAlpha=1-T/1.3}if(n.save(),n.translate(e.x,e.y),n.rotate(o),n.scale(a/20,a/20),t){const T=this.world.combat;n.translate(-T.recoil*15,T.motionTime>0?Math.sin(this.clock*28)*2:0)}const c=!t&&e.flash>0;if(r==="wolf"){this.poly([[-25,-9],[-5,-13],[17,-10],[28,-4],[24,6],[10,11],[-18,9]],c?"#efe5c7":"#8b8270","#b6ae8d");for(const T of[-1,1])this.line(-12,T*7,-18+l,T*17,"#aaa48b",5),this.line(10,T*6,17-l,T*15,"#b7b49a",4);this.poly([[9,-10],[12,-21],[19,-11]],"#b4ac8f"),this.poly([[9,8],[13,18],[19,10]],"#b4ac8f"),this.circle(20,-5,2,"#f6c07d"),n.restore(),n.globalAlpha=1;return}const h=r==="skeleton"||r==="archer",d=t&&this.world.classId==="mage",u=t&&this.world.classId==="archer",m=t&&this.world.classId==="knight",f=r==="witch"||d,_=r==="lord",p=t?d?"#556a83":u?"#577349":"#ba774c":_?"#664051":f?"#675774":r==="guard"?"#8b5747":"#625c47";h||this.poly([[-9,-15],[-26,-22-l*.3],[-32,4],[-24,21+l*.3],[-8,15]],p),this.line(-9,-11,-16+l,-14,h?"#c0bba0":"#263331",7),this.line(-9,11,-16-l,14,h?"#c0bba0":"#263331",7);const g=c?"#fff3d5":t?d?"#7893a3":u?"#8da77b":"#a7b7ac":h?"#b4b299":f?"#71607c":r==="ogre"?"#a29770":"#838b7c";if(this.poly([[-12,-13],[4,-17],[14,-8],[13,10],[1,17],[-13,10]],g,"#c5c7a355"),h){for(let T=-8;T<5;T+=5)this.line(T,-9,T,9,"#414b42",2);this.line(-10,0,5,0,"#d7d3b1",3),this.circle(8,0,9,c?"#fff8da":"#d5cfb0"),n.fillStyle="#33453b",n.fillRect(11,-6,4,4),n.fillRect(11,2,4,4)}else if(this.circle(5,0,11,f?"#302d3a":"#445a53"),this.poly([[0,-11],[11,-8],[16,-2],[12,10],[2,11],[5,0]],c?"#fff5ce":t?"#d0d7bd":"#a2aa90"),this.line(11,-6,12,7,t?"#43625c":"#3f473f",3),_)for(const T of[-8,0,8])this.poly([[-1,T-3],[-9,T],[-1,T+3]],"#debe78");d&&(this.poly([[-8,-13],[13,-10],[-2,0],[14,10],[-8,14],[-19,0]],"#7f9eb0","#b9d6d4"),this.circle(-2,0,3,"#e9d899")),u&&(this.poly([[-7,-10],[11,-7],[14,0],[11,7],[-7,10],[-13,0]],"#6b865d"),this.line(10,-5,10,5,"#d7c4a0",4));const S=t?i.weapon:r==="archer"?1:f?2:0;if(this.line(2,13,16,18,g,7),S===1){const T=u&&this.world.combat.charge>=0?Math.min(1,this.world.combat.charge/1.2):0;n.beginPath(),n.moveTo(26,-24),n.quadraticCurveTo(52+T*4,2,26,28),n.strokeStyle="#bc9261",n.lineWidth=4,n.stroke();const y=23-T*25;this.line(26,-24,y,2,"#e9dcb2",1.5),this.line(y,2,26,28,"#e9dcb2",1.5),this.line(y-4,2,49,2,T>=1?"#fff2bf":"#d6c49a",2),this.poly([[48,-2],[57,2],[48,6]],"#d3dcca"),this.line(-3,-8,y,2,g,6),T>=1&&this.glow(51,2,25,"#ffe9a3")}else if(S===2){const T=d&&this.world.combat.flame>0,y=T?"#ffc578":"#a7e1d5";this.line(0,18,39,18,"#aa926b",5),this.poly([[29,13],[41,7],[49,18],[41,29],[29,23]],"#b8a778"),this.circle(40,18,6,y),this.glow(40,18,T?48:24,y)}else n.save(),n.translate(16,17),t&&i.swing>0&&n.rotate(-1.5+i.swing*9),r==="ogre"||_?(this.line(-6,0,35,0,"#967857",6),this.poly([[26,-11],[43,-15],[46,12],[28,11]],"#b3b29a","#d3c797")):(this.poly([[2,-3],[39,-3],[49,0],[39,3],[2,3]],t?"#e4e9d5":"#acb7a1"),this.line(5,-9,5,9,"#c5a465",4)),n.restore();if((r==="guard"||m)&&(n.save(),m&&(this.world.combat.parry>0||this.world.combat.motion==="ram")&&(n.translate(14,10),n.rotate(.35)),this.poly([[5,-21],[27,-24],[29,-7],[17,4],[5,-5]],m?i.shield>0?"#7a704c":"#43483b":"#7c5444",m?"#e3c987":"#c5a575"),this.line(16,-18,17,-3,"#e1c988",3),this.line(10,-12,24,-13,"#e1c988",2),m&&i.shield>0&&this.circle(15,-9,27,"#dbc38522",!0,2),n.restore()),t&&i.dash>0&&this.circle(-12,0,27,"#b6e3d444",!0,3),n.restore(),n.globalAlpha=1,!t){const T=e;pd(this,T),T.exposed>0?(this.poly([[e.x,e.y-a-36],[e.x+5,e.y-a-30],[e.x,e.y-a-24],[e.x-5,e.y-a-30]],"#bcebd7"),this.circle(e.x,e.y,a+7,"#bcebd755",!0,2)):(T.kind==="ogre"||T.kind==="lord")&&this.circle(e.x,e.y,a+5,"#b9b5a766",!0,2),T.hp<T.maxHP&&(n.fillStyle="#142523",n.fillRect(e.x-a,e.y-a-19,a*2,4),n.fillStyle=_?"#ddbd7e":"#c7a87f",n.fillRect(e.x-a,e.y-a-19,a*2*Ht(T.hp/T.maxHP,0,1),4))}}station(e){const t=dn[e.kind].color,n=e.cooldown<=0,i=this.ctx;if(this.glow(e.x,e.y,n?74:35,t),this.circle(e.x,e.y,31,n?t+"88":t+"35",!0,1),i.save(),i.translate(e.x,e.y-5),e.kind==="well")this.poly([[-14,4],[0,-12],[14,4],[0,18]],"#668b81",t),this.line(0,-4,0,10,t,3),this.line(-7,3,7,3,t,3);else if(e.kind==="arrows"){i.fillStyle="#705640",i.fillRect(-20,-7,40,28),this.line(-18,-8,18,18,"#b2915e",3),this.line(-18,18,18,-8,"#b2915e",3);for(let r=-8;r<12;r+=8)this.line(r,-12,r+6,-34,"#dccea1",2)}else e.kind==="mana"?(this.poly([[-19,13],[19,13],[14,3],[-14,3]],"#879280"),this.poly([[0,-33],[13,-13],[0,7],[-13,-13]],"#6daba8",t)):(this.line(-24,18,-24,-41,"#ae9571",5),this.line(24,18,24,-41,"#ae9571",5),this.line(-28,-41,28,-41,"#b7a07b",6),this.poly([[-13,-29],[12,-29],[20,-4],[-20,-4]],"#ba9b5f","#e1c481"),this.circle(0,0,5,"#e5cc88"));i.restore(),this.world.nearStation===e?this.text(n?"E  ·  "+dn[e.kind].name:Math.ceil(e.cooldown)+" СЕК",e.x,e.y+54,14,t):this.text(e.cooldown>0?Math.ceil(e.cooldown)+"с":e.kind==="well"?"ЛЕЧЕНИЕ":e.kind==="mana"?"МАНА":e.kind==="arrows"?this.world.classId==="knight"?"ПОЧИНИТЬ ЩИТ":"СТРЕЛЫ":"КОЛОКОЛ",e.x,e.y+52,11,t+"b0")}draw(e){this.clock+=e;const t=this.ctx,n=this.world,i=n.player,r=n.phase==="title",a=n.combat.charge>=0;this.scale+=(this.baseScale*(a?.92:1)-this.scale)*Math.min(1,e*5);const o=r?1270:i.x+Math.cos(i.angle)*(a?165:60),l=r?910:i.y+Math.sin(i.angle)*(a?120:40),c=this.w/this.scale/2,h=this.h/this.scale/2;this.cameraX+=(Ht(o,Math.min(c,n.level.width/2),Math.max(n.level.width-c,n.level.width/2))-this.cameraX)*Math.min(1,e*7),this.cameraY+=(Ht(l,Math.min(h,n.level.height/2),Math.max(n.level.height-h,n.level.height/2))-this.cameraY)*Math.min(1,e*7),t.setTransform(this.dpr,0,0,this.dpr,0,0),t.fillStyle="#142322",t.fillRect(0,0,this.w,this.h),t.save(),t.translate(this.w/2,this.h/2),t.scale(this.scale,this.scale);const d=this.reduce?0:n.shake;t.translate(-this.cameraX+Math.sin(this.clock*80)*d,-this.cameraY+Math.cos(this.clock*97)*d*.7),t.drawImage(this.floor,0,0);for(const f of n.level.gates){this.circle(f.x,f.y,42,"#ac8c9d35",!0,2),this.glow(f.x,f.y,65,"#998aa8");for(let _=0;_<6;_++){const p=_*Ji/6+this.clock*.16;this.line(f.x+Math.cos(p)*32,f.y+Math.sin(p)*32,f.x+Math.cos(p)*43,f.y+Math.sin(p)*43,"#bf9cad60",2)}}for(const f of n.stations)this.station(f);n.lure.time>0&&this.circle(n.lure.x,n.lure.y,70+this.clock*50%130,"#ebd49044",!0,2),fd(this);for(const f of n.hazards)this.circle(f.x,f.y,f.r,"#d59ab530"),this.circle(f.x,f.y,f.r,"#dca6be",!0,2),this.circle(f.x,f.y,f.r*(1-f.time/f.max),"#e5bac585",!0,3),this.line(f.x-9,f.y,f.x+9,f.y,"#f6d9c8",2),this.line(f.x,f.y-9,f.x,f.y+9,"#f6d9c8",2);for(const f of n.enemies)if(f.windup>0)if(f.kind==="archer"){let _={x:f.x+Math.cos(f.locked)*800,y:f.y+Math.sin(f.locked)*800},p=1;for(const g of n.level.cover)p=Math.min(p,ps(f,_,g));t.setLineDash([9,8]),this.line(f.x,f.y,f.x+(_.x-f.x)*p,f.y+(_.y-f.y)*p,"#e7b879aa",2),t.setLineDash([])}else f.kind==="ogre"||f.kind==="lord"?this.circle(f.x,f.y,f.kind==="lord"?155:115,"#ecb07e77",!0,3):this.circle(f.x,f.y,f.r+15,"#f0ba7788",!0,2);for(const f of n.pickups){const _=f.kind==="health"?"#bce0a1":f.kind==="arrows"?"#e5c48b":"#9bded8";this.glow(f.x,f.y,34,_),this.circle(f.x,f.y-3,9,"#273f38"),this.circle(f.x,f.y-3,10,_,!0,1),this.text(f.kind==="health"?"+":f.kind==="arrows"?"↗":"◇",f.x,f.y+2,16,_)}[...n.level.cover.map(f=>({y:f.y+f.h/2,draw:()=>this.cover(f)})),...n.enemies.map(f=>({y:f.y+f.r,draw:()=>this.actor(f)})),{y:i.y+20,draw:()=>this.actor(i,!0)}].sort((f,_)=>f.y-_.y).forEach(f=>f.draw());for(const f of n.bullets){const _=f.color||(f.enemy?"#eda48a":f.kind==="fire"?"#f6c486":"#dedcbb");if(this.line(f.x-f.vx*.027,f.y-f.vy*.027,f.x,f.y,_,f.aimed?4+(f.charge||0)*3:f.kind==="arrow"?2:5),f.aimed&&this.glow(f.x,f.y,25+(f.charge||0)*20,_),f.kind!=="arrow")this.glow(f.x,f.y,24,_),this.circle(f.x,f.y,4,"#fff1c4");else{const p=Math.atan2(f.vy,f.vx);t.save(),t.translate(f.x,f.y),t.rotate(p),this.poly([[5,0],[-4,-3],[-3,3]],_),t.restore()}}for(const f of n.particles){const _=Ht(f.life/f.max,0,1);t.globalAlpha=_,f.kind==="ring"?this.circle(f.x,f.y,f.size*(1-_*.8),f.color,!0,2+_*4):f.kind==="text"?this.text(f.text||"",f.x,f.y-27,f.size,f.color):f.kind==="slash"?(t.save(),t.translate(f.x,f.y),t.rotate(f.angle||0),n.classId==="knight"&&i.combo===1&&t.scale(1,-1),t.beginPath(),t.arc(0,0,f.size,-1.25+(1-_)*.5,1.25+(1-_)*.3),t.strokeStyle=f.color,t.lineWidth=7*_+2,t.stroke(),t.restore()):this.line(f.x,f.y,f.x-f.vx*.03,f.y-f.vy*.03,f.color,f.size)}t.globalAlpha=1,md(this);for(let f=0;f<35;f++){const _=(f*257+Math.sin(this.clock*.2+f)*55)%n.level.width,p=(f*181+this.clock*(3+f%3))%n.level.height;this.circle(_,p,1.5,"#c9d4b324")}t.restore();const m=t.createRadialGradient(this.w/2,this.h/2,this.h*.2,this.w/2,this.h/2,this.w*.7);if(m.addColorStop(0,"#0b171d00"),m.addColorStop(1,"#08171c95"),t.fillStyle=m,t.fillRect(0,0,this.w,this.h),n.damageFlash>0&&(t.fillStyle=`rgba(152,55,42,${n.damageFlash*.6})`,t.fillRect(0,0,this.w,this.h)),!r&&(this.minimap(),this.offscreen(),this.pointer.visible&&n.phase==="playing")){const{x:f,y:_}=this.pointer,p=n.hitFlash>0?"#f4ba81":dd[i.weapon].color;this.circle(f,_,8,p,!0,1),this.line(f-14,_,f-10,_,p),this.line(f+10,_,f+14,_,p),this.line(f,_-14,f,_-10,p),this.line(f,_+10,f,_+14,p),this.circle(f,_,1.5,p)}this.map&&this.bigMap()}mapContent(e,t,n){const i=this.ctx,r=this.world,a=n/r.level.width;i.fillStyle="#22352f",i.fillRect(e,t,n,r.level.height*a);for(const o of r.level.cover)i.fillStyle=o.style==="tree"?"#57613e":"#818775",i.fillRect(e+(o.x-o.w/2)*a,t+(o.y-o.h/2)*a,o.w*a,o.h*a);for(const o of r.level.gates)this.circle(e+o.x*a,t+o.y*a,3,"#b2869f",!0,1);for(const o of r.enemies)this.circle(e+o.x*a,t+o.y*a,o.kind==="lord"?4:1.8,"#e1a387");for(const o of r.stations)this.circle(e+o.x*a,t+o.y*a,3,dn[o.kind].color);return this.circle(e+r.player.x*a,t+r.player.y*a,4,"#f3e3b4"),a}minimap(){if(this.w<780)return;const e=164,t=this.w-e-28,n=112,i=this.ctx;i.fillStyle="#102420e8",i.fillRect(t-9,n-9,e+18,e*.8+38),i.strokeStyle="#aca98055",i.strokeRect(t-9,n-9,e+18,e*.8+38),this.mapContent(t,n,e),this.text("TAB  ·  КАРТА КРЕПОСТИ",t+e/2,n+e*.8+19,9,"#b3bda5")}bigMap(){const e=this.ctx;e.fillStyle="#0b1c1bf2",e.fillRect(0,0,this.w,this.h);const t=Math.min(this.w-80,(this.h-200)/.8,880),n=(this.w-t)/2,i=(this.h-t*.8)/2,r=this.mapContent(n,i,t);for(const a of this.world.level.zones)this.text(a.name,n+a.x*r,i+(a.y+90)*r,this.w<600?8:12,"#d7d9bd");for(const a of this.world.stations)this.text(a.cooldown>0?`${Math.ceil(a.cooldown)}с`:a.kind==="well"?"✚":a.kind==="arrows"?"↗":a.kind==="mana"?"◇":"♧",n+a.x*r,i+a.y*r-9,14,dn[a.kind].color);this.text("КРЕПОСТЬ СЕРОГО ОРДЕНА",this.w/2,this.w<600?115:45,this.w<600?16:22,"#e4d8b4","center",!0),this.text(this.w<600?"Пауза · нажми ◇, чтобы вернуться":"Игра на паузе · TAB / ESC — вернуться",this.w/2,this.h-50,14,"#bdc9b5"),this.text("✚ Колодец    ↗ Кузница    ◇ Алтарь    ♧ Колокол",this.w/2,this.h-26,12,"#adbbac")}offscreen(){if(this.world.phase==="playing")for(const e of this.world.enemies){if(Dt(e,this.world.player)>1100)continue;const t=this.screen(e);if(t.x>25&&t.x<this.w-25&&t.y>90&&t.y<this.h-105)continue;const n=Math.atan2(t.y-this.h/2,t.x-this.w/2);this.ctx.save(),this.ctx.translate(Ht(t.x,18,this.w-18),Ht(t.y,100,this.h-120)),this.ctx.rotate(n),this.poly([[6,0],[-5,-4],[-5,4]],e.kind==="lord"?"#eac37a":"#c68f78"),this.ctx.restore()}}dispose(){this.floor.width=this.floor.height=1}}class _d{noiseBuffer=null;context=null;master=null;muted=!1;next=0;beat=0;lastHit=0;async unlock(){try{this.context||(this.context=new AudioContext,this.master=this.context.createGain(),this.master.gain.value=this.muted?0:.28,this.master.connect(this.context.destination)),await this.context.resume()}catch{}}setMuted(e){this.muted=e,this.context&&this.master&&this.master.gain.setTargetAtTime(e?0:.28,this.context.currentTime,.04)}tone(e,t,n,i,r="sine",a=0){const o=this.context;if(!o||!this.master||this.muted)return;const l=o.currentTime+a,c=o.createOscillator(),h=o.createGain();c.type=r,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,t),l+n),h.gain.setValueAtTime(.001,l),h.gain.exponentialRampToValueAtTime(i,l+.01),h.gain.exponentialRampToValueAtTime(.001,l+n),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+n+.05),c.onended=()=>{c.disconnect(),h.disconnect()}}noise(e,t,n,i="lowpass"){const r=this.context;if(!r||!this.master||this.muted)return;if(!this.noiseBuffer){this.noiseBuffer=r.createBuffer(1,r.sampleRate,r.sampleRate);const h=this.noiseBuffer.getChannelData(0);for(let d=0;d<h.length;d++)h[d]=Math.random()*2-1}const a=r.currentTime,o=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain();o.buffer=this.noiseBuffer,l.type=i,l.frequency.value=n,c.gain.setValueAtTime(.001,a),c.gain.exponentialRampToValueAtTime(t,a+.01),c.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(l),l.connect(c),c.connect(this.master),o.start(a),o.stop(a+e+.02),o.onended=()=>{o.disconnect(),l.disconnect(),c.disconnect()}}play(e){if(!(!this.context||this.muted))if(e==="flame")this.noise(.22,.2,1100),this.tone(95,58,.2,.055,"sawtooth");else if(e==="lightning")this.noise(.28,.23,4400,"bandpass"),this.tone(680,120,.22,.08,"sawtooth"),this.tone(1800,380,.12,.045,"square",.06);else if(e==="ice"||e==="shatter")this.noise(.28,.12,6100,"highpass"),[1100,1630,2190].forEach((t,n)=>this.tone(t,t*.55,.32,.045,"sine",n*.045));else if(e==="steam")this.noise(.4,.15,3500),this.tone(320,55,.32,.065);else if(e==="meteor")this.noise(.75,.11,700),this.tone(220,55,.8,.11,"sawtooth");else if(e==="meteorImpact")this.noise(.65,.26,850),this.tone(82,26,.55,.24),this.tone(155,50,.3,.1,"triangle");else if(e==="draw")this.tone(160,400,1.1,.045,"triangle"),this.noise(.12,.025,2400);else if(e==="drawFull")this.tone(880,880,.22,.065),this.tone(1320,1320,.22,.035);else if(e==="snipe")this.noise(.16,.17,3800,"bandpass"),this.tone(540,65,.19,.16,"triangle");else if(e==="snipeHit")this.noise(.09,.14,2400),this.tone(90,32,.13,.15);else if(e==="trapSet"||e==="trapSnap")this.noise(.08,e==="trapSnap"?.18:.08,4200,"highpass"),this.tone(720,190,.1,.08,"triangle");else if(e==="parry")this.noise(.1,.2,4500,"highpass"),[640,970,1720].forEach(t=>this.tone(t,t*.95,.5,.075));else if(e==="guard")this.tone(380,180,.15,.08,"triangle");else if(e==="riposte"||e==="heavy")this.noise(.16,.14,1600),this.tone(130,36,.25,.17,"triangle");else if(e==="ram"||e==="vault")this.noise(.2,.14,950),this.tone(100,260,.18,.07,"triangle");else if(e==="banner"||e==="bannerPulse")this.tone(70,32,.45,.16),this.tone(220,220,.8,.05,"triangle");else if(e==="shield")this.tone(190,80,.18,.12,"triangle"),this.tone(860,430,.12,.04);else if(e==="hit"){if(this.context.currentTime-this.lastHit<.07)return;this.lastHit=this.context.currentTime,this.tone(470,180,.06,.1,"triangle")}else e==="sword"?(this.tone(420,60,.18,.12,"triangle"),this.tone(1600,500,.06,.035,"sawtooth")):e==="bow"?this.tone(310,95,.13,.09,"triangle"):e==="fire"||e==="nova"||e==="blast"?(this.tone(e==="nova"?130:250,35,.38,.16,"triangle"),this.tone(570,140,.2,.05,"sawtooth")):e==="hurt"?this.tone(100,38,.22,.22,"sawtooth"):e==="dash"?this.tone(120,500,.12,.06,"triangle"):e==="kill"?this.tone(85,30,.14,.1):e==="boss"||e==="dead"?this.tone(85,31,1.2,.18,"sawtooth"):e==="bell"?[220,440,660].forEach(t=>this.tone(t,t*.995,2.8,.12)):(e==="pickup"||e==="upgrade")&&[0,3,7].forEach((t,n)=>this.tone(330*2**(t/12),330*2**(t/12),.5,.07,"sine",n*.1))}update(e){const t=this.context;if(!t||!e||this.muted){this.next=0;return}if(t.currentTime<this.next)return;const n=this.beat++%16,i=[73.416,65.406,55,65.406][Math.floor(n/4)];n%4===0&&(this.tone(i,i,1.8,.04,"triangle"),this.tone(i*1.5,i*1.5,1.7,.018)),n%2===0&&this.tone(125,43,.2,.055),n%4===1&&this.tone(i*4,i*4,.8,.022,"triangle"),this.next=t.currentTime+.4}dispose(){this.context?.close(),this.context=null}}const Qi=s=>`${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`,gl='<svg viewBox="0 0 44 52" fill="none"><path d="M3 3h38v25c0 10-19 21-19 21S3 38 3 28V3Z" stroke="currentColor" stroke-width="2"/><path d="M22 10v28M12 20h20M17 12l5-5 5 5" stroke="currentColor" stroke-width="2"/></svg>',_l=s=>`<svg viewBox="0 0 100 110" fill="none" aria-hidden="true"><circle cx="50" cy="48" r="40" fill="currentColor" opacity=".08"/>${s==="mage"?'<path d="M23 100 34 58h32l14 42Z" fill="#536b78"/><path d="m29 42 22-34 21 34Z" fill="#839eab"/><path d="M24 43h54" stroke="currentColor" stroke-width="4"/><path d="M41 48v14l9 9 10-9V48" fill="#d1c6a7"/><path d="m80 95 5-62" stroke="#b9a47a" stroke-width="5"/><path d="m86 16 8 13-8 13-9-13Z" fill="currentColor"/><path d="m49 73 1 20" stroke="currentColor" stroke-width="3"/>':s==="archer"?'<path d="M23 100 34 58h30l13 42Z" fill="#50684c"/><path d="M31 49c0-35 38-35 38 0l-9 18H40Z" fill="#78936b"/><path d="M39 44h23l-2 14-10 8-10-8Z" fill="#ccb996"/><path d="m34 69 31 25" stroke="#baa37a" stroke-width="6"/><path d="M77 19q32 40 0 78" stroke="#d1b47b" stroke-width="4"/><path d="M77 19v78M69 57h25" stroke="currentColor" stroke-width="2"/><path d="m90 53 7 4-7 4" stroke="currentColor" stroke-width="2"/>':'<path d="M25 100 29 62h43l8 38Z" fill="#77867a"/><path d="M34 26 51 17l18 9v27L51 65 34 53Z" fill="#b3bcac"/><path d="M39 39h25M51 22v36" stroke="#445850" stroke-width="5"/><path d="m14 63 32-5v28L29 101 14 87Z" fill="#655c42" stroke="currentColor" stroke-width="3"/><path d="M29 67v21m-9-12h18M84 23v71m-9-23h18" stroke="currentColor" stroke-width="3"/>'}</svg>`;async function xd(s){await ed(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const e=s.container,t=document.title;document.title=s.snapshot.manifest.name,e.classList.add("bastion");const n=new ud(Kc(s.snapshot.scenes[s.sceneId]));e.innerHTML=`<canvas tabindex="0" aria-label="Последний бастион: WASD движение, мышь прицел, ЛКМ обычная атака, Q особый приём (лучник: удерживай и отпусти), пробел второй приём, R третий приём, Shift рывок, H приёмы, E взаимодействие."></canvas>
 <header class="b-hud" hidden><div class="b-brand">${gl}<div><small>КРЕПОСТЬ СЕРОГО ОРДЕНА</small><strong data-zone>Двор клятвы</strong></div></div><div class="b-time"><small>ВРЕМЯ ВЫЖИВАНИЯ</small><b data-time>00:00</b><span data-threat>НАТИСК I</span></div><div class="b-tools"><span class="b-kills"><b data-kills>0</b><small>ПОВЕРЖЕНО</small></span><button data-arsenal aria-label="Приёмы класса (H)">H</button><button data-map aria-label="Карта крепости">◇</button><button data-sound aria-label="Выключить звук">♫</button><button data-pause aria-label="Пауза">Ⅱ</button></div></header>
 <div class="b-boss" hidden><span>ПОЛКОВОДЕЦ ПРАХА</span><i><b></b></i></div><div class="b-banner" role="status"></div>
 <div class="b-tip" hidden><b>ТВОЯ КЛЯТВА — ВЫЖИТЬ</b><span>WASD · движение &nbsp; ЛКМ · атака &nbsp; Q · особый приём</span><small>Shift · рывок &nbsp; Пробел / R · приёмы &nbsp; H · все 4 атаки</small></div>
 <div class="b-combat-status" hidden><b data-combat-status></b><span data-combat-hint></span></div><div class="b-interact" hidden><kbd>E</kbd><div><b></b><span></span></div></div>
 <footer class="b-bottom" hidden><div class="b-vitals"><div class="b-bar-label"><span><span data-class-name>РЫЦАРЬ</span> <b data-rank>01</b></span><strong data-health>120 / 120</strong></div><div class="b-track hp"><i></i></div><div class="b-resource"><span data-resource-label>ЩИТ</span><div class="b-track mana"><i></i></div><b data-mana>100</b></div><div class="b-resource"><span>СИЛЫ</span><div class="b-track stamina"><i></i></div><b data-stamina>100</b></div></div><div class="b-combat">${[0,1,2,3].map(K=>`<button class="b-attack" data-attack="${K}"><span class="b-attack-top"><kbd>${["ЛКМ","Q","ПРОБЕЛ","R"][K]}</kbd><i data-attack-icon></i></span><strong data-attack-name></strong><small data-attack-role></small><b data-attack-status></b></button>`).join("")}</div><div class="b-movement"><button data-dash><kbd>SHIFT</kbd><span>РЫВОК</span><b data-dash-value>ГОТОВ</b></button><span data-class-icon></span></div></footer><div class="b-xp" hidden><i></i></div>
 <section class="b-title"><nav><span>SHELTER <i>/</i> ARCADE</span><small>ОДИН СТРАЖ. БЕСКОНЕЧНАЯ НОЧЬ.</small><button data-sound aria-label="Выключить звук">♫</button></nav><div class="b-title-main"><div class="b-eyebrow"><i></i> НОЧЬ БЕЗ РАССВЕТА</div><h1>Последний<br><em>бастион</em></h1><p>За стенами больше нет живых.<br>В твоих руках — сталь, огонь и старая клятва.<br><b>Пусть эта ночь запомнит твоё имя.</b></p><button class="b-primary" data-start>Принять клятву <span>→</span></button><button class="b-help" data-help>Управление и крепость <span>↗</span></button><div class="b-record"><span>ТВОЙ ЛУЧШИЙ ДОЗОР</span><b data-record>—</b></div></div><div class="b-title-seal">${gl}<span>СЕРЫЙ ОРДЕН</span><small>ДО ПОСЛЕДНЕГО</small></div><div class="b-title-bottom"><div><b>01</b><span>КРЕПОСТЬ СЕРОГО ОРДЕНА</span></div><div><b>03</b><span>КЛАССА СТРАЖЕЙ</span></div><div><b>∞</b><span>ВРАГОВ ДО РАССВЕТА</span></div><small>ВИД СВЕРХУ · ВЫЖИВАНИЕ</small></div></section>
 <section class="b-modal" hidden role="dialog" aria-modal="true" aria-labelledby="b-modal-title"><div class="b-panel"></div></section>
 <div class="b-touch" hidden><div class="b-stick" data-stick="move"><i></i><span>ДВИЖЕНИЕ</span></div><button data-interact>E</button><div class="b-stick" data-stick="aim"><i></i><span>ПРИЦЕЛ / АТАКА</span></div></div>`;const i=K=>e.querySelector(K),r=i("canvas"),a=new gd(r,n),o=new _d,l=new AbortController,c=new Set;let h=!1,d=0,u=performance.now(),m=0,f=0,_="",p="",g=!1,S=!1,T=!1,y=!1,E=!1,b=!1,R=[],v=-1,w=!1,C={x:0,y:0},L={x:0,y:0},U={x:0,y:0},k=!1,P=0,H=0,V=!1;const G=matchMedia("(pointer: coarse), (max-width: 600px)").matches;e.classList.toggle("b-mobile",G);const ee=Wc(s.snapshot.manifest.projectId,"progress","records");if(s.savePolicy==="persistent")try{const K=JSON.parse(localStorage.getItem(ee)||"null");K&&(Number.isFinite(K.seconds)&&K.seconds>=0&&(P=K.seconds),Number.isFinite(K.kills)&&K.kills>=0&&(H=K.kills),o.setMuted(!!K.muted))}catch{}function Y(){if(s.savePolicy==="persistent")try{localStorage.setItem(ee,JSON.stringify({version:1,seconds:P,kills:H,muted:o.muted}))}catch{}}const X=(K,ie,ve)=>K.addEventListener(ie,ve,{signal:l.signal});function Z(){c.clear(),g=S=T=y=E=b=k=!1,v=-1,R=[],L={x:0,y:0},U={x:0,y:0},e.querySelectorAll(".b-stick i").forEach(K=>K.style.transform="translate(-50%,-50%)")}function Ee(){r.focus({preventScroll:!0})}function me(){p="",i(".b-modal").hidden=!0,Z(),Ee()}function We(K){o.unlock(),n.reset(K),V=!1,a.map=!1,a.snap(),w=!1,me(),et()}function Ye(){n.phase!=="playing"&&n.phase!=="paused"||(n.pause(!0),a.map=!1,Ne("arsenal"),et())}function Je(){n.pause(!0),a.map=!1,Ne("classes"),et()}function J(){n.phase==="paused"?Ne("pause"):n.phase==="dead"?Ne("dead"):me()}function te(){n.phase==="playing"&&(n.pause(!0),Z(),Ne("pause"))}function ge(){a.map=!1,n.pause(!1),me(),et()}function Fe(){if(a.map){ge();return}n.phase==="playing"&&(n.pause(!0),Z(),a.map=!0,me(),et())}const de=(K,ie,ve=!1)=>`<button data-action="${K}" class="${ve?"b-primary":"b-secondary"}">${ie}${ve?" <span>→</span>":""}</button>`;function Ne(K){p=K,Z(),i(".b-modal").hidden=!1;const ie=i(".b-panel");ie.classList.toggle("b-wide",K==="help"||K==="arsenal"||K==="upgrade"||K==="classes"),K==="classes"&&(ie.innerHTML=`<div class="b-eyebrow">ТРИ СУДЬБЫ · ОДНА КРЕПОСТЬ</div><h2 id="b-modal-title">Кем ты встретишь ночь?</h2><p>Выбери стража на этот дозор. Три разных искусства боя: реакции стихий, охотничья точность и щитовая контратака.</p><div class="b-class-grid">${Ra.map((ve,ht)=>{const Ie=qc[ve];return`<button class="b-class-card" data-class="${ve}" aria-label="Выбрать класс: ${Ie.name}" style="--class-color:${Ie.color}"><div class="b-class-art">${_l(ve)}<kbd>${ht+1}</kbd></div><small>${Ie.title}</small><h3>${Ie.name}</h3><p>${Ie.description}</p><dl><div><dt>Урон</dt><dd>${Ie.damageLabel}</dd></div><div><dt>Мобильность</dt><dd>${Ie.mobilityLabel}</dd></div><div><dt>Здоровье</dt><dd>${Ie.hp}${Ie.shield?" + "+Ie.shield+" щит":""}</dd></div></dl><span class="b-class-trait">${Ie.specialty}</span><span class="b-class-arsenal">${Xc[ve].map(st=>st.name).join(" · ")}</span><span class="b-class-pick">Выбрать ${ve==="mage"?"мага":ve==="archer"?"лучника":"рыцаря"} <b>→</b></span></button>`}).join("")}</div><div class="b-class-back">${de("back","Назад")}</div>`),K==="pause"&&(ie.innerHTML=`<div class="b-eyebrow">ДОЗОР ПРИОСТАНОВЛЕН</div><h2 id="b-modal-title">Тишина перед боем.</h2><p>${Qi(n.seconds)} · ${n.kills} повержено · ${n.classInfo.name.toLowerCase()} ${n.rank} уровня</p><div class="b-actions">${de("resume","Продолжить дозор",!0)}${de("help","Управление и крепость")}${de("restart","Начать новый дозор")}${de("title","Главное меню")}</div><small>Рекорд сохраняется. Текущий бой действует до закрытия страницы.</small>`),(K==="arsenal"||K==="help")&&(ie.innerHTML=`<div class="b-eyebrow">${n.classInfo.title} · ЧЕТЫРЕ ПРИЁМА</div><h2 id="b-modal-title">${n.classInfo.name}: сочетай атаки.</h2><div class="b-attack-guide">${n.attacks.map(ve=>`<article style="--attack-color:${ve.color}"><kbd>${ve.key}</kbd><div><h3>${ve.icon} ${ve.name}</h3><strong>${ve.role}</strong><p>${ve.detail}</p><small>${pl(ve)} · восстановление ${ve.cooldown} с</small></div></article>`).join("")}</div><p class="b-combo-note">${n.classId==="mage"?"Лёд → молния: раскол льда (+90 урона). Лёд ↔ огонь: термоудар. Ледяной разлом удерживает врагов под метеором. У пламени малая дальность — следи за дистанцией.":n.classId==="archer"?"Капкан → полный натяг → выстрел по метке (+45% урона). Отскок разрывает дистанцию. Удерживай Q и отпускай для выстрела; кнопку на панели нажми для прицеливания и ещё раз для выстрела. Полный натяг за 1.2 с, автовыстрел через 1.65 с.":"Поймай удар спереди на Q → повтори Q для контратаки. Таран раскрывает броню, знамя возвращает щит в своей зоне. Удар сзади и магия земли пробивают парирование."}<br>Полководцы сопротивляются заморозке и удержанию. Сильные приёмы ограничены числом целей.</p><div class="b-help-grid"><div><h3>Управление</h3><p>WASD / стрелки — идти<br>Мышь + ЛКМ — обычная атака<br>Q / Пробел / R — остальные три приёма<br>Shift / ПКМ — рывок · E — место силы<br>H — приёмы · Tab — карта · Esc — пауза</p><p>Метеор и капкан ставятся к курсору в пределах дальности. На телефоне — к ближайшему врагу по направлению правого стика; отпусти стик, затем нажми кнопку приёма.</p></div><div><h3>Используй крепость</h3><p>Колодец во дворе лечит. Кузница на юго-западе пополняет стрелы или чинит щит. Алтарь на севере возвращает ману. Колокол на юге отвлекает орду.</p><p>Щитоносцы блокируют спереди. Тяжёлая броня гасит обычный урон на 55%. Молния, полный натяг и контратака пробивают её. Таран раскрывает броню на 3.5 с.</p></div></div>${de(n.phase==="paused"?"resume":"back","В бой",!0)}`),K==="upgrade"&&(ie.innerHTML=`<div class="b-eyebrow">СТРАЖ ${n.rank+1} УРОВНЯ · ВРЕМЯ ОСТАНОВЛЕНО</div><h2 id="b-modal-title">Сделай клятву сильнее.</h2><p>Одно благословение до конца этого дозора.</p><div class="b-upgrades">${n.choices.map((ve,ht)=>`<button data-upgrade="${ve}"><div><b>${Hr[ve].icon}</b><small>0${ht+1}</small></div><h3>${Hr[ve].name}</h3><p>${Hr[ve].detail}</p><span>Принять благословение →</span></button>`).join("")}</div>`),K==="dead"&&(ie.innerHTML=`<div class="b-eyebrow">ПОСЛЕДНЯЯ КЛЯТВА ИСПОЛНЕНА</div><h2 id="b-modal-title">Ночь запомнит тебя.</h2><div class="b-result"><div><b>${Qi(n.seconds)}</b><span>ВРЕМЯ ДОЗОРА</span></div><div><b>${n.kills}</b><span>ПОВЕРЖЕНО</span></div><div><b>${n.bosses}</b><span>ПОЛКОВОДЦЕВ</span></div></div><p>${n.seconds>=P?"Твой лучший дозор.":"Лучший дозор: "+Qi(P)}<br>${n.classInfo.name} · уходи от окружения и используй места силы.</p><div class="b-actions">${de("restart","Встать на новый дозор",!0)}${de("title","Главное меню")}</div>`),queueMicrotask(()=>{const ve=ie.querySelector("h2");K==="arsenal"||K==="help"?(ve?.setAttribute("tabindex","-1"),ve?.focus({preventScroll:!0})):ie.querySelector("button")?.focus({preventScroll:!0}),ie.scrollTop=0})}function et(){const K=n.phase==="title",ie=n.player,ve=n.classInfo;e.dataset.class=n.classId,i(".b-title").hidden=!K,i(".b-hud").hidden=K,i(".b-bottom").hidden=K||a.map,i(".b-xp").hidden=K||a.map,i(".b-combat-status").hidden=n.phase!=="playing"||a.map,i(".b-touch").hidden=!G||n.phase!=="playing",e.classList.toggle("b-playing",n.phase==="playing"),e.classList.toggle("b-map",a.map),i("[data-time]").textContent=Qi(n.seconds),i("[data-kills]").textContent=String(n.kills),i("[data-threat]").textContent=`НАТИСК ${cr(n.seconds).tier} · ${n.enemies.length} ВРАГОВ`;const ht=[...n.level.zones].sort((Le,A)=>Math.hypot(Le.x-ie.x,Le.y-ie.y)-Math.hypot(A.x-ie.x,A.y-ie.y))[0];i("[data-zone]").textContent=ht?.name.toLocaleLowerCase("ru-RU")||"Крепость",i("[data-health]").textContent=`${Math.ceil(ie.hp)} / ${n.maxHP}`,i("[data-rank]").textContent=String(n.rank).padStart(2,"0"),i(".hp i").style.width=ie.hp/n.maxHP*100+"%",i(".mana i").style.width=(n.classId==="mage"?ie.mana/n.maxMana:n.classId==="knight"?ie.shield/n.maxShield:ie.arrows/n.maxArrows)*100+"%",i(".stamina i").style.width=ie.stamina/n.maxStamina*100+"%",i("[data-mana]").textContent=String(Math.floor(n.classId==="mage"?ie.mana:n.classId==="knight"?ie.shield:ie.arrows)),i("[data-resource-label]").textContent=n.classId==="mage"?"МАНА":n.classId==="knight"?"ЩИТ":"СТРЕЛЫ",i("[data-class-name]").textContent=ve.name.toUpperCase(),i("[data-class-icon]").dataset.id!==n.classId&&(i("[data-class-icon]").dataset.id=n.classId,i("[data-class-icon]").innerHTML=_l(n.classId)),i("[data-stamina]").textContent=String(Math.floor(ie.stamina)),i(".b-xp i").style.width=Math.min(100,n.xp/n.nextXP*100)+"%",i(".b-vitals").classList.toggle("low",ie.hp<n.maxHP*.3),i("[data-dash-value]").textContent=ie.dashCD>0?ie.dashCD.toFixed(1)+" С":ie.stamina<n.dashCost?"МАЛО СИЛ":"ГОТОВ";for(const Le of e.querySelectorAll("[data-attack]")){const A=Number(Le.dataset.attack),x=n.attacks[A],F=n.cooldown(A),W=ie[x.resource]>=x.cost;Le.querySelector("[data-attack-name]").textContent=x.name,Le.querySelector("[data-attack-icon]").textContent=x.icon,Le.querySelector("[data-attack-role]").textContent=x.role;const $=A===1&&n.combat.charge>=0,re=A===1&&n.combat.riposte>0,ae=A===1&&n.combat.parry>0,Q=$?n.combat.charge>=1.2?"ОТПУСТИ · ПОЛНЫЙ":`НАТЯГ ${Math.round(Math.min(1,n.combat.charge/1.2)*100)}%`:re?"Q · КОНТРАТАКА":ae?"ОКНО "+n.combat.parry.toFixed(1)+" С":F>0?(F<1?Math.max(.1,Math.ceil(F*10)/10).toFixed(1):Math.ceil(F))+" С":W?pl(x):hd(x);Le.querySelector("[data-attack-status]").textContent=Q,Le.classList.toggle("b-cooling",F>0&&!re),Le.classList.toggle("b-charging",$||re||ae),Le.style.setProperty("--attack-color",x.color),Le.classList.toggle("b-empty",!W&&!$&&!re),Le.style.setProperty("--cooldown",Math.min(100,F/x.cooldown*100)+"%"),Le.title=x.detail,Le.setAttribute("aria-label",x.key+" · "+x.name+" · "+Q)}const Ie=n.combat,st=Ie.charge>=0?Ie.charge>=1.2?"СОКОЛИНЫЙ ГЛАЗ · ГОТОВ":"СОКОЛИНЫЙ ГЛАЗ · НАТЯГ":Ie.riposte>0?"КОНТРАТАКА · НАЖМИ Q":Ie.parry>0?"ПАРИРОВАНИЕ · ЛИЦОМ К УДАРУ":n.classId==="mage"?"ОГОНЬ  ·  ЛЁД  ·  МОЛНИЯ":n.classId==="archer"?"ПРИЦЕЛ  ·  ОТСКОК  ·  КАПКАН":"ПАРИРОВАНИЕ  ·  ТАРАН  ·  ЗНАМЯ";i("[data-combat-status]").textContent=st,i("[data-combat-hint]").textContent=Ie.charge>=0?"Отпусти Q или нажми приём повторно — выстрел":n.classId==="mage"?"Удерживай огонь · заморозь · расколи молнией":n.classId==="archer"?"Метка капкана усиливает прицельный выстрел":"Поймай удар на Q и ответь · H — приёмы",i(".b-banner").textContent=n.banner,i(".b-banner").classList.toggle("visible",n.bannerTime>0&&n.phase==="playing"),i(".b-tip").hidden=G||n.seconds>14||n.seconds<3||n.phase!=="playing";const I=n.nearStation;i(".b-interact").hidden=!I||n.phase!=="playing",I&&(i(".b-interact b").textContent=dn[I.kind].name,i(".b-interact span").textContent=I.cooldown>0?"Восстановится через "+Math.ceil(I.cooldown)+" с":n.stationEffect(I));const mt=n.boss;i(".b-boss").hidden=!mt||K||a.map,mt&&(i(".b-boss i b").style.width=Math.max(0,mt.hp/mt.maxHP)*100+"%"),i("[data-record]").textContent=P>0?`${Qi(P)} · ${H} повержено`:"Твоя история ещё не написана",e.querySelectorAll("[data-sound]").forEach(Le=>{Le.textContent=o.muted?"♩":"♫",Le.setAttribute("aria-label",o.muted?"Включить звук":"Выключить звук")}),n.phase==="dead"&&!V&&(V=!0,n.seconds>=P&&(P=n.seconds,H=n.kills),Y()),n.phase==="upgrade"&&p!=="upgrade"&&Ne("upgrade"),n.phase==="dead"&&!["dead","classes"].includes(p)&&Ne("dead")}X(e,"click",(K=>{const ie=K.target.closest("button");if(ie){if(ie.hasAttribute("data-sound")){o.unlock(),o.setMuted(!o.muted),Y(),et();return}if(ie.hasAttribute("data-start")&&Je(),Yc(ie.dataset.class)&&p==="classes"&&We(ie.dataset.class),ie.hasAttribute("data-help")&&Ne("help"),ie.hasAttribute("data-pause")&&(a.map||n.phase==="paused"?ge():te()),ie.hasAttribute("data-map")&&Fe(),ie.hasAttribute("data-arsenal")&&Ye(),ie.hasAttribute("data-attack")&&n.phase==="playing"){const ve=Number(ie.dataset.attack);ve===0?S=!0:ve===1&&n.classId==="archer"?n.combat.charge>=0||T?T=!1:n.ready(1)&&(T=!0,R.push(1)):R.includes(ve)||R.push(ve)}switch(ie.hasAttribute("data-dash")&&(y=!0),ie.hasAttribute("data-nova")&&(E=!0),ie.hasAttribute("data-interact")&&(b=!0),ie.dataset.upgrade&&(n.choose(ie.dataset.upgrade),me(),et()),ie.dataset.action){case"resume":ge();break;case"restart":Je();break;case"help":Ne("help");break;case"back":J();break;case"title":n.phase="title",a.map=!1,me(),et();break}}})),X(window,"keydown",(K=>{if(!e.isConnected)return;const ie=K.code;if(p==="classes"&&/^Digit[123]$/.test(ie)&&!K.repeat){K.preventDefault(),We(Ra[Number(ie.slice(-1))-1]);return}if(ie==="Escape"||ie==="KeyP"){if(K.preventDefault(),K.repeat)return;if(p==="classes"){J();return}a.map?ge():p==="help"||p==="arsenal"?n.phase==="paused"?Ne("pause"):me():n.phase==="paused"?ge():te();return}if(ie==="Tab"&&i(".b-modal").hidden&&!K.repeat&&n.phase!=="title"){K.preventDefault(),Fe();return}if(n.phase==="upgrade"&&/^Digit[123]$/.test(ie)&&!K.repeat){n.choose(n.choices[Number(ie.slice(-1))-1]),me(),et();return}if(ie==="KeyH"&&!K.repeat){K.preventDefault(),p==="arsenal"?ge():Ye();return}if(n.phase==="playing"&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(ie)&&K.preventDefault(),c.add(ie),!K.repeat)){ie.startsWith("Shift")&&(y=!0);const ve=ie==="Space"?2:ie==="KeyQ"?1:ie==="KeyR"?3:void 0;ve&&!R.includes(ve)&&R.push(ve),ie==="KeyE"&&(b=!0)}})),X(e,"pointerdown",(K=>{K.target.closest('[data-attack="0"]')&&n.phase==="playing"&&(g=S=!0,o.unlock())})),X(window,"keyup",(K=>{c.delete(K.code)})),X(r,"pointermove",(K=>{if(K.pointerType==="touch")return;const ie=r.getBoundingClientRect();C={x:K.clientX-ie.left,y:K.clientY-ie.top},a.pointer={...C,visible:!0},w=!0})),X(r,"pointerdown",(K=>{if(K.pointerType==="touch"||n.phase!=="playing")return;K.preventDefault(),Ee(),o.unlock();const ie=r.getBoundingClientRect();C={x:K.clientX-ie.left,y:K.clientY-ie.top},w=!0,K.button===0&&(g=!0,S=!0),K.button===2&&(y=!0)})),X(window,"pointerup",()=>{g=!1}),X(r,"contextmenu",K=>K.preventDefault()),X(r,"pointercancel",()=>{g=!1}),X(window,"blur",()=>{Z(),te()}),X(document,"visibilitychange",()=>{document.hidden&&(Z(),te())});for(const K of e.querySelectorAll(".b-stick")){let ie=-1;const ve=Ie=>{const st=K.getBoundingClientRect(),I=Ie.clientX-st.left-st.width/2,mt=Ie.clientY-st.top-st.height/2,Le=Math.max(32,Math.hypot(I,mt)),A={x:I/Le,y:mt/Le};K.querySelector("i").style.transform=`translate(calc(-50% + ${A.x*28}px),calc(-50% + ${A.y*28}px))`,K.dataset.stick==="move"?L=A:(U=A,k=!0)};X(K,"pointerdown",(Ie=>{Ie.preventDefault(),ie=Ie.pointerId,K.setPointerCapture(ie),o.unlock(),ve(Ie)})),X(K,"pointermove",(Ie=>{Ie.pointerId===ie&&ve(Ie)}));const ht=Ie=>{Ie.pointerId===ie&&(ie=-1,K.dataset.stick==="move"?L={x:0,y:0}:(U={x:0,y:0},k=!1),K.querySelector("i").style.transform="translate(-50%,-50%)")};for(const Ie of["pointerup","pointercancel","lostpointercapture"])X(K,Ie,ht)}X(e,"keydown",(K=>{if(K.key!=="Tab"||i(".b-modal").hidden)return;const ie=[...i(".b-panel").querySelectorAll("button")],ve=ie[0],ht=ie.at(-1);K.shiftKey&&document.activeElement===ve?(K.preventDefault(),ht?.focus()):!K.shiftKey&&document.activeElement===ht&&(K.preventDefault(),ve?.focus())}));const ze=new ResizeObserver(()=>a.resize());ze.observe(r),n.onSound=K=>o.play(K);function Qe(){let K=n.player.angle;if(k&&Math.hypot(U.x,U.y)>.1)K=Math.atan2(U.y,U.x);else if(w){const ie=a.screenToWorld(C.x,C.y);K=Math.atan2(ie.y-n.player.y,ie.x-n.player.x)}return{x:Number(c.has("KeyD")||c.has("ArrowRight"))-Number(c.has("KeyA")||c.has("ArrowLeft"))+L.x,y:Number(c.has("KeyS")||c.has("ArrowDown"))-Number(c.has("KeyW")||c.has("ArrowUp"))+L.y,angle:K,fire:g||S||k,dash:y,nova:E,interact:b,weapon:v,skill:R[0],aimHeld:c.has("KeyQ")||T,target:w&&!G?a.screenToWorld(C.x,C.y):void 0}}function it(K){if(h)return;const ie=Math.min(.05,(K-u)/1e3);for(u=K,m+=ie;m>=1/120;){const ve=Qe(),ht=n.combat.charge>=0;n.step(1/120,ve),ht&&n.combat.charge<0&&(T=!1),ve.skill?R.shift():S=!1,y=E=b=!1,v=-1,m-=1/120}a.draw(ie),o.update(n.phase==="playing"),f+=ie,(f>.08||_!==n.phase)&&(_=n.phase,f=0,et()),d=requestAnimationFrame(it)}return et(),d=requestAnimationFrame(it),{pause(K){K?te():n.phase==="paused"&&ge()},dispose(){h=!0,cancelAnimationFrame(d),l.abort(),ze.disconnect(),o.dispose(),a.dispose(),e.replaceChildren(),e.classList.remove("bastion","b-playing","b-mobile","b-map"),delete e.dataset.class,document.title=t},diagnostics:()=>({game:"bastion",classId:n.classId,phase:n.phase,seconds:n.seconds,kills:n.kills,enemies:n.enemies.length})}}const vd={id:"bastion",sdk:1,components:[{id:"bastion.cover",name:"Препятствие крепости",fields:[{name:"style",label:"Облик",type:"select",default:"wall",options:["wall","tower","tree","fountain","chapel","forge","grave","ruin"].map(s=>({value:s,label:s}))}]},{id:"bastion.spawn",name:"Последний страж",fields:[]},{id:"bastion.gate",name:"Врата орды",fields:[]},{id:"bastion.station",name:"Место силы",fields:[{name:"kind",label:"Назначение",type:"select",default:"well",options:Object.entries(dn).map(([s,e])=>({value:s,label:e.name}))}]}],validateScene(s){Kc(s)},createSession:xd};class yd{components=new Map;modules=new Map;register(e){if(e.sdk!==1||this.modules.has(e.id))throw new Error("Несовместимый или повторяющийся модуль: "+e.id);this.modules.set(e.id,e);for(const t of e.components||[]){if(this.components.has(t.id))throw new Error("Повторяющийся компонент "+t.id);this.components.set(t.id,t)}}validate(e,t){for(const n of this.modules.values())n.validateScene?.(e,t);for(const n of e.nodes)for(const i of n.components||[]){const r=this.components.get(i.type);if(!r)throw new Error("Отсутствует компонент «"+i.type+"» у «"+n.name+"».");for(const a of r.fields){const o=i.values[a.name];if(a.type==="number"&&(typeof o!="number"||!Number.isFinite(o)||o<(a.min??-1/0)||o>(a.max??1/0)))throw new Error(n.name+": проверьте «"+a.label+"».");if(a.type==="boolean"&&typeof o!="boolean")throw new Error("Некорректный переключатель "+a.label);if(a.type==="object"&&o&&!e.nodes.some(l=>l.id===o)||a.type==="scene"&&!t.scenes.some(l=>l.id===o)||a.type==="asset"&&o&&!t.assets.some(l=>l.id===o)||a.type==="select"&&!a.options?.some(l=>l.value===o))throw new Error(n.name+": не найдена связь «"+a.label+"».")}}}}const bo="186",Md=0,xl=1,bd=2,ms=1,Sd=2,ds=3,ri=0,Gt=1,Mn=2,Hn=0,gs=1,vl=2,yl=3,Ml=4,Ed=5,Fi=100,Td=101,wd=102,Ad=103,Rd=104,Cd=200,Pd=201,Id=202,Ld=203,Zc=204,Jc=205,Dd=206,Nd=207,Ud=208,Fd=209,Od=210,kd=211,Bd=212,zd=213,Hd=214,Ca=0,Pa=1,Ia=2,ys=3,La=4,Da=5,Na=6,Ua=7,Qc=0,Vd=1,Gd=2,En=0,jc=1,eh=2,th=3,So=4,nh=5,ih=6,sh=7,bl="attached",Wd="detached",rh=300,gi=301,Vi=302,Wr=303,Xr=304,Nr=306,wn=1e3,bn=1001,yr=1002,wt=1003,ah=1004,us=1005,At=1006,hr=1007,Bn=1008,Kt=1009,oh=1010,lh=1011,Ms=1012,Eo=1013,An=1014,en=1015,Rn=1016,To=1017,wo=1018,bs=1020,ch=35902,hh=35899,dh=1021,uh=1022,tn=1023,Gn=1026,mi=1027,Ao=1028,Ro=1029,_i=1030,Co=1031,Po=1033,dr=33776,ur=33777,fr=33778,pr=33779,Fa=35840,Oa=35841,ka=35842,Ba=35843,za=36196,Ha=37492,Va=37496,Ga=37488,Wa=37489,Mr=37490,Xa=37491,qa=37808,Ya=37809,Ka=37810,$a=37811,Za=37812,Ja=37813,Qa=37814,ja=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,ao=36492,oo=36494,lo=36495,co=36283,ho=36284,br=36285,uo=36286,Ss=2300,Es=2301,qr=2302,Sl=2303,El=2400,Tl=2401,wl=2402,Xd=2500,qd=0,fh=1,fo=2,Yd=3200,po=0,Kd=1,kn="",yt="srgb",$t="srgb-linear",Sr="linear",rt="srgb",Yr=7680,$d=519,Zd=512,Jd=513,Qd=514,Io=515,jd=516,eu=517,Lo=518,tu=519,ph=35044,Al="300 es",Sn=2e3,Ts=2001;function nu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function iu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function su(){const s=ws("canvas");return s.style.display="block",s}const Rl={};function Er(...s){const e="THREE."+s.shift();console.log(e,...s)}function mh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ce(...s){s=mh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Oe(...s){s=mh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Bi(...s){const e=s.join(" ");e in Rl||(Rl[e]=!0,Ce(...s))}function ru(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const au={[Ca]:Pa,[Ia]:Na,[La]:Ua,[ys]:Da,[Pa]:Ca,[Na]:Ia,[Ua]:La,[Da]:ys};class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const _s=Math.PI/180,Gi=180/Math.PI;function un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[s&255]+Ut[s>>8&255]+Ut[s>>16&255]+Ut[s>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ze(s,e,t){return Math.max(e,Math.min(t,s))}function Do(s,e){return(s%e+e)%e}function ou(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function lu(s,e,t){return s!==e?(t-s)/(e-s):0}function xs(s,e,t){return(1-t)*s+t*e}function cu(s,e,t,n){return xs(s,e,1-Math.exp(-t*n))}function hu(s,e=1){return e-Math.abs(Do(s,e*2)-e)}function du(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function uu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function pu(s,e){return s+Math.random()*(e-s)}function mu(s){return s*(.5-Math.random())}function gu(s){s!==void 0&&(Cl=s);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _u(s){return s*_s}function xu(s){return s*Gi}function vu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function yu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bu(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),m=r((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*f,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*f,o*c);break;case"ZYZ":s.set(l*f,l*m,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tr={DEG2RAD:_s,RAD2DEG:Gi,generateUUID:un,clamp:Ze,euclideanModulo:Do,mapLinear:ou,inverseLerp:lu,lerp:xs,damp:cu,pingpong:hu,smoothstep:du,smootherstep:uu,randInt:fu,randFloat:pu,randFloatSpread:mu,seededRandom:gu,degToRad:_u,radToDeg:xu,isPowerOfTwo:vu,ceilPowerOfTwo:yu,floorPowerOfTwo:Mu,setQuaternionFromProperEuler:bu,normalize:at,denormalize:cn},$o=class $o{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$o.prototype.isVector2=!0;let qe=$o;class Wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],m=r[a+1],f=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==m||h!==f){let p=l*u+c*m+h*f+d*_;p<0&&(u=-u,m=-m,f=-f,_=-_,p=-p);let g=1-o;if(p<.9995){const S=Math.acos(p),T=Math.sin(S);g=Math.sin(g*S)/T,o=Math.sin(o*S)/T,l=l*g+u*o,c=c*g+m*o,h=h*g+f*o,d=d*g+_*o}else{l=l*g+u*o,c=c*g+m*o,h=h*g+f*o,d=d*g+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],m=r[a+2],f=r[a+3];return e[t]=o*f+h*d+l*m-c*u,e[t+1]=l*f+h*u+c*d-o*m,e[t+2]=c*f+h*m+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),m=l(i/2),f=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*f,this._y=c*m*d-u*h*f,this._z=c*h*f+u*m*d,this._w=c*h*d-u*m*f;break;case"YXZ":this._x=u*h*d+c*m*f,this._y=c*m*d-u*h*f,this._z=c*h*f-u*m*d,this._w=c*h*d+u*m*f;break;case"ZXY":this._x=u*h*d-c*m*f,this._y=c*m*d+u*h*f,this._z=c*h*f+u*m*d,this._w=c*h*d-u*m*f;break;case"ZYX":this._x=u*h*d-c*m*f,this._y=c*m*d+u*h*f,this._z=c*h*f-u*m*d,this._w=c*h*d+u*m*f;break;case"YZX":this._x=u*h*d+c*m*f,this._y=c*m*d+u*h*f,this._z=c*h*f-u*m*d,this._w=c*h*d-u*m*f;break;case"XZY":this._x=u*h*d-c*m*f,this._y=c*m*d-u*h*f,this._z=c*h*f+u*m*d,this._w=c*h*d+u*m*f;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zo=class Zo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zo.prototype.isVector3=!0;let O=Zo;const Kr=new O,Pl=new Wn,Jo=class Jo{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],f=n[8],_=i[0],p=i[3],g=i[6],S=i[1],T=i[4],y=i[7],E=i[2],b=i[5],R=i[8];return r[0]=a*_+o*S+l*E,r[3]=a*p+o*T+l*b,r[6]=a*g+o*y+l*R,r[1]=c*_+h*S+d*E,r[4]=c*p+h*T+d*b,r[7]=c*g+h*y+d*R,r[2]=u*_+m*S+f*E,r[5]=u*p+m*T+f*b,r[8]=u*g+m*y+f*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,f=t*d+n*u+i*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($r.makeScale(e,t)),this}rotate(e){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($r.makeRotation(-e)),this}translate(e,t){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jo.prototype.isMatrix3=!0;let ke=Jo;const $r=new ke,Il=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){const s={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(i.r=zi(i.r),i.g=zi(i.g),i.b=zi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?Sr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$t]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),s}const $e=Su();function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mi;class Eu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=ws("canvas")),Mi.width=e.width,Mi.height=e.height;const i=Mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tu=0;class No{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Zr(i[a].image)):r.push(Zr(i[a]))}else r=Zr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let wu=0;const Jr=new O;class Rt extends xi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=bn,i=bn,r=At,a=Bn,o=tn,l=Kt,c=Rt.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=un(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=rh;Rt.DEFAULT_ANISOTROPY=1;const Qo=class Qo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],f=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(m+1)/2,E=(g+1)/2,b=(h+u)/4,R=(d+_)/4,v=(f+p)/4;return T>y&&T>E?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=b/n,r=R/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=v/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=v/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-f)*(p-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-f)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qo.prototype.isVector4=!0;let ct=Qo;class Au extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:At,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Rt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:At,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new No(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Au{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ru extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Dr=class Dr{constructor(e,t,n,i,r,a,o,l,c,h,d,u,m,f,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,m,f,_,p)}set(e,t,n,i,r,a,o,l,c,h,d,u,m,f,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=m,g[7]=f,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,m=a*d,f=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+f*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=f+m*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,f=c*h,_=c*d;t[0]=u+_*o,t[4]=f*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=m*o-f,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,f=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=f+m*o,t[1]=m+f*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,m=a*d,f=o*h,_=o*d;t[0]=l*h,t[4]=f*c-m,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=m*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,m=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=f*d+m,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*d+f,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*l,m=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=m*d-f,t[2]=f*d-m,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Pu)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),$n.crossVectors(n,qt),$n.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),$n.crossVectors(n,qt)),$n.normalize(),Fs.crossVectors(qt,$n),i[0]=$n.x,i[4]=Fs.x,i[8]=qt.x,i[1]=$n.y,i[5]=Fs.y,i[9]=qt.y,i[2]=$n.z,i[6]=Fs.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],f=n[2],_=n[6],p=n[10],g=n[14],S=n[3],T=n[7],y=n[11],E=n[15],b=i[0],R=i[4],v=i[8],w=i[12],C=i[1],L=i[5],U=i[9],k=i[13],P=i[2],H=i[6],V=i[10],G=i[14],ee=i[3],Y=i[7],X=i[11],Z=i[15];return r[0]=a*b+o*C+l*P+c*ee,r[4]=a*R+o*L+l*H+c*Y,r[8]=a*v+o*U+l*V+c*X,r[12]=a*w+o*k+l*G+c*Z,r[1]=h*b+d*C+u*P+m*ee,r[5]=h*R+d*L+u*H+m*Y,r[9]=h*v+d*U+u*V+m*X,r[13]=h*w+d*k+u*G+m*Z,r[2]=f*b+_*C+p*P+g*ee,r[6]=f*R+_*L+p*H+g*Y,r[10]=f*v+_*U+p*V+g*X,r[14]=f*w+_*k+p*G+g*Z,r[3]=S*b+T*C+y*P+E*ee,r[7]=S*R+T*L+y*H+E*Y,r[11]=S*v+T*U+y*V+E*X,r[15]=S*w+T*k+y*G+E*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],f=e[3],_=e[7],p=e[11],g=e[15],S=l*m-c*u,T=o*m-c*d,y=o*u-l*d,E=a*m-c*h,b=a*u-l*h,R=a*d-o*h;return t*(_*S-p*T+g*y)-n*(f*S-p*E+g*b)+i*(f*T-_*E+g*R)-r*(f*y-_*b+p*R)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],f=e[12],_=e[13],p=e[14],g=e[15],S=t*o-n*a,T=t*l-i*a,y=t*c-r*a,E=n*l-i*o,b=n*c-r*o,R=i*c-r*l,v=h*_-d*f,w=h*p-u*f,C=h*g-m*f,L=d*p-u*_,U=d*g-m*_,k=u*g-m*p,P=S*k-T*U+y*L+E*C-b*w+R*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/P;return e[0]=(o*k-l*U+c*L)*H,e[1]=(i*U-n*k-r*L)*H,e[2]=(_*R-p*b+g*E)*H,e[3]=(u*b-d*R-m*E)*H,e[4]=(l*C-a*k-c*w)*H,e[5]=(t*k-i*C+r*w)*H,e[6]=(p*y-f*R-g*T)*H,e[7]=(h*R-u*y+m*T)*H,e[8]=(a*U-o*C+c*v)*H,e[9]=(n*C-t*U-r*v)*H,e[10]=(f*b-_*y+g*S)*H,e[11]=(d*y-h*b-m*S)*H,e[12]=(o*w-a*L-l*v)*H,e[13]=(t*L-n*w+i*v)*H,e[14]=(_*T-f*E-p*S)*H,e[15]=(h*E-d*T+u*S)*H,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,f=r*d,_=a*h,p=a*d,g=o*d,S=l*c,T=l*h,y=l*d,E=n.x,b=n.y,R=n.z;return i[0]=(1-(_+g))*E,i[1]=(m+y)*E,i[2]=(f-T)*E,i[3]=0,i[4]=(m-y)*b,i[5]=(1-(u+g))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(f+T)*R,i[9]=(p-S)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=bi.set(i[0],i[1],i[2]).length();const o=bi.set(i[4],i[5],i[6]).length(),l=bi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),rn.copy(this);const c=1/a,h=1/o,d=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Sn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),m=(n+i)/(n-i);let f,_;if(l)f=r/(a-r),_=a*r/(a-r);else if(o===Sn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ts)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Sn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),m=-(n+i)/(n-i);let f,_;if(l)f=1/(a-r),_=a/(a-r);else if(o===Sn)f=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ts)f=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Dr.prototype.isMatrix4=!0;let Ge=Dr;const bi=new O,rn=new Ge,Cu=new O(0,0,0),Pu=new O(1,1,1),$n=new O,Fs=new O,qt=new O,Dl=new Ge,Nl=new Wn;class ai{constructor(e=0,t=0,n=0,i=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iu=0;const Ul=new O,Si=new Wn,Ln=new Ge,Os=new O,ji=new O,Lu=new O,Du=new Wn,Fl=new O(1,0,0),Ol=new O(0,1,0),kl=new O(0,0,1),Bl={type:"added"},Nu={type:"removed"},Ei={type:"childadded",child:null},Qr={type:"childremoved",child:null};class xt extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new O,t=new ai,n=new Wn,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ke}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ji,Os,this.up):Ln.lookAt(Os,ji,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(Ln),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,Lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Du,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),m=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xt.DEFAULT_UP=new O(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nn extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uu={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,f=.005;c.inputState.pinching&&u>m+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Uu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function ea(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Do(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ea(a,r,e+1/3),this.g=ea(a,r,e),this.b=ea(a,r,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return $e.workingToColorSpace(Ft.copy(this),e),Math.round(Ze(Ft.r*255,0,255))*65536+Math.round(Ze(Ft.g*255,0,255))*256+Math.round(Ze(Ft.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=yt){$e.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(ks);const n=xs(Zn.h,ks.h,t),i=xs(Zn.s,ks.s,t),r=xs(Zn.l,ks.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ue;Ue.NAMES=xh;class Uo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Uo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zl extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const an=new O,Dn=new O,ta=new O,Nn=new O,Ti=new O,wi=new O,Hl=new O,na=new O,ia=new O,sa=new O,ra=new ct,aa=new ct,oa=new ct;class hn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),Dn.subVectors(n,t),ta.subVectors(e,t);const a=an.dot(an),o=an.dot(Dn),l=an.dot(ta),c=Dn.dot(Dn),h=Dn.dot(ta),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(c*l-o*h)*u,f=(a*h-o*l)*u;return r.set(1-m-f,f,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ra,r.x),a.addScaledVector(aa,r.y),a.addScaledVector(oa,r.z),a}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),Dn.subVectors(e,t),an.cross(Dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),an.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ti.subVectors(i,n),wi.subVectors(r,n),na.subVectors(e,n);const l=Ti.dot(na),c=wi.dot(na);if(l<=0&&c<=0)return t.copy(n);ia.subVectors(e,i);const h=Ti.dot(ia),d=wi.dot(ia);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ti,a);sa.subVectors(e,r);const m=Ti.dot(sa),f=wi.dot(sa);if(f>=0&&m<=f)return t.copy(r);const _=m*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(wi,o);const p=h*f-m*d;if(p<=0&&d-h>=0&&m-f>=0)return Hl.subVectors(r,i),o=(d-h)/(d-h+(m-f)),t.copy(i).addScaledVector(Hl,o);const g=1/(p+_+u);return a=_*g,o=u*g,t.copy(n).addScaledVector(Ti,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),zs.subVectors(this.max,es),Ai.subVectors(e.a,es),Ri.subVectors(e.b,es),Ci.subVectors(e.c,es),Jn.subVectors(Ri,Ai),Qn.subVectors(Ci,Ri),ci.subVectors(Ai,Ci);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-ci.z,ci.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,ci.z,0,-ci.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-ci.y,ci.x,0];return!la(t,Ai,Ri,Ci,zs)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Ai,Ri,Ci,zs))?!1:(Hs.crossVectors(Jn,Qn),t=[Hs.x,Hs.y,Hs.z],la(t,Ai,Ri,Ci,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new O,new O,new O,new O,new O,new O,new O,new O],on=new O,Bs=new Xn,Ai=new O,Ri=new O,Ci=new O,Jn=new O,Qn=new O,ci=new O,es=new O,zs=new O,Hs=new O,hi=new O;function la(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){hi.fromArray(s,r);const o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Et=new O,Vs=new qe;let Fu=0;class Wt extends xi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vh extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yh extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ou=new Xn,ts=new O,ca=new O;class Pn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ou.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(ca)),this.expandByPoint(ts.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ku=0;const Qt=new Ge,ha=new xt,Pi=new O,Yt=new Xn,ns=new Xn,It=new O;class Ot extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?yh:vh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(Yt.min,ns.min),Yt.expandByPoint(It),It.addVectors(Yt.max,ns.max),Yt.expandByPoint(It)):(Yt.expandByPoint(ns.min),Yt.expandByPoint(ns.max))}Yt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(Pi.fromBufferAttribute(e,c),It.add(Pi)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new O,l[v]=new O;const c=new O,h=new O,d=new O,u=new qe,m=new qe,f=new qe,_=new O,p=new O;function g(v,w,C){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,w),f.fromBufferAttribute(r,C),h.sub(c),d.sub(c),m.sub(u),f.sub(u);const L=1/(m.x*f.y-f.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-f.x).multiplyScalar(L),o[v].add(_),o[w].add(_),o[C].add(_),l[v].add(p),l[w].add(p),l[C].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const C=S[v],L=C.start,U=C.count;for(let k=L,P=L+U;k<P;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new O,y=new O,E=new O,b=new O;function R(v){E.fromBufferAttribute(i,v),b.copy(E);const w=o[v];T.copy(w),T.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(b,w);const L=y.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,L)}for(let v=0,w=S.length;v<w;++v){const C=S[v],L=C.start,U=C.count;for(let k=L,P=L+U;k<P;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let u=0,m=e.count;u<m;u+=3){const f=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,f=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let g=0;g<h;g++)u[f++]=c[m++]}return new Wt(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Bt=new O;class Fo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const da=new O,zu=new O,Hu=new ke;class ti{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=da.subVectors(n,t).cross(zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(da),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hu.getNormalMatrix(e),i=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Vu=0;class Tn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=un(),this.name="",this.type="Material",this.blending=gs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fn=new O,ua=new O,Gs=new O,Ws=new O;class Ur{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ua.copy(e).add(t).multiplyScalar(.5),Gs.copy(t).sub(e).normalize(),Ws.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Gs),o=Ws.dot(this.direction),l=-Ws.dot(Gs),c=Ws.lengthSq(),h=Math.abs(1-a*a);let d,u,m,f;if(h>0)if(d=a*l-o,u=a*o-l,f=r*h,d>=0)if(u>=-f)if(u<=f){const _=1/h;d*=_,u*=_,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ua).addScaledVector(Gs,u),m}intersectSphere(e,t){if(e.radius<0)return null;Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,m=e.z-a.z,f=t.x-a.x,_=t.y-a.y,p=t.z-a.z,g=n.x-a.x,S=n.y-a.y,T=n.z-a.z,y=Math.abs(l),E=Math.abs(c),b=Math.abs(h);let R,v,w,C,L,U,k,P,H,V,G,ee;if(y>=E&&y>=b?(w=l,U=d,H=f,ee=g,l>=0?(R=c,v=h,C=u,L=m,k=_,P=p,V=S,G=T):(R=h,v=c,C=m,L=u,k=p,P=_,V=T,G=S)):E>=b?(w=c,U=u,H=_,ee=S,c>=0?(R=h,v=l,C=m,L=d,k=p,P=f,V=T,G=g):(R=l,v=h,C=d,L=m,k=f,P=p,V=g,G=T)):(w=h,U=m,H=p,ee=T,h>=0?(R=l,v=c,C=d,L=u,k=f,P=_,V=g,G=S):(R=c,v=l,C=u,L=d,k=_,P=f,V=S,G=g)),w===0)return null;const Y=R/w,X=v/w,Z=1/w,Ee=C-Y*U,me=L-X*U,We=k-Y*H,Ye=P-X*H,Je=V-Y*ee,J=G-X*ee,te=Je*Ye-J*We,ge=Ee*J-me*Je,Fe=We*me-Ye*Ee;if(i){if(te<0||ge<0||Fe<0)return null}else if((te<0||ge<0||Fe<0)&&(te>0||ge>0||Fe>0))return null;const de=te+ge+Fe;if(de===0)return null;const Ne=Z*(te*U+ge*H+Fe*ee);return(de>0?Ne<0:Ne>0)?null:this.at(Ne/de,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ii extends Tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vl=new Ge,di=new Ur,Xs=new Pn,Gl=new O,qs=new O,Ys=new O,Ks=new O,fa=new O,$s=new O,Wl=new O,Zs=new O;class Mt extends xt{constructor(e=new Ot,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(fa.fromBufferAttribute(d,e),a?$s.addScaledVector(fa,h):$s.addScaledVector(fa.sub(t),h))}t.add($s)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(Xs.containsPoint(di.origin)===!1&&(di.intersectSphere(Xs,Gl)===null||di.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(Vl.copy(r).invert(),di.copy(e.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){const p=u[f],g=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,E=T;y<E;y+=3){const b=o.getX(y),R=o.getX(y+1),v=o.getX(y+2);i=Js(this,g,e,n,c,h,d,b,R,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const f=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=f,g=_;p<g;p+=3){const S=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);i=Js(this,a,e,n,c,h,d,S,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){const p=u[f],g=a[p.materialIndex],S=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,E=T;y<E;y+=3){const b=y,R=y+1,v=y+2;i=Js(this,g,e,n,c,h,d,b,R,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const f=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=f,g=_;p<g;p+=3){const S=p,T=p+1,y=p+2;i=Js(this,a,e,n,c,h,d,S,T,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Gu(s,e,t,n,i,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ri,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:s}}function Js(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,qs),s.getVertexPosition(l,Ys),s.getVertexPosition(c,Ks);const h=Gu(s,e,t,n,qs,Ys,Ks,Wl);if(h){const d=new O;hn.getBarycoord(Wl,qs,Ys,Ks,d),i&&(h.uv=hn.getInterpolatedAttribute(i,o,l,c,d,new qe)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,l,c,d,new qe)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};hn.getNormal(qs,Ys,Ks,u.normal),h.face=u,h.barycoord=d}return h}const is=new ct,Xl=new ct,ql=new ct,Wu=new ct,Yl=new Ge,Qs=new O,pa=new Pn,Kl=new Ge,ma=new Ur;class Xu extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bl,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingBox.expandByPoint(Qs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qs),this.boundingSphere.expandByPoint(Qs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(i),e.ray.intersectsSphere(pa)!==!1&&(Kl.copy(i).invert(),ma.copy(e.ray).applyMatrix4(Kl),!(this.boundingBox!==null&&ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xl.fromBufferAttribute(i.attributes.skinIndex,e),ql.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(is.copy(t),t.set(0,0,0,0)):(is.set(...t,1),t.set(0,0,0)),is.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=ql.getComponent(r);if(a!==0){const o=Xl.getComponent(r);Yl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Wu.copy(is).applyMatrix4(Yl),a)}}return t.isVector4&&(t.w=is.w),t.applyMatrix4(this.bindMatrixInverse)}}class Mh extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Oo extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=wt,h=wt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $l=new Ge,qu=new Ge;class ko{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:qu;$l.multiplyMatrices(o,t[r]),$l.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ko(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Oo(t,e,e,tn,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new Mh),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class wr extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ii=new Ge,Zl=new Ge,js=[],Jl=new Xn,Yu=new Ge,ss=new Mt,rs=new Pn;class Ku extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),Jl.copy(e.boundingBox).applyMatrix4(Ii),this.boundingBox.union(Jl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ii),rs.copy(e.boundingSphere).applyMatrix4(Ii),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),e.ray.intersectsSphere(rs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ii),Zl.multiplyMatrices(n,Ii),ss.matrixWorld=Zl,ss.raycast(e,js);for(let a=0,o=js.length;a<o;a++){const l=js[a];l.instanceId=r,l.object=this,t.push(l)}js.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oo(new Float32Array(i*this.count),i,this.count,Ao,en));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ui=new Pn,$u=new qe(.5,.5),er=new O;class Bo{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],f=r[8],_=r[9],p=r[10],g=r[11],S=r[12],T=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-a,m-h,g-f,E-S).normalize(),i[1].setComponents(c+a,m+h,g+f,E+S).normalize(),i[2].setComponents(c+o,m+d,g+_,E+T).normalize(),i[3].setComponents(c-o,m-d,g-_,E-T).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,m-u,g-p,E-y).normalize();else if(i[4].setComponents(c-l,m-u,g-p,E-y).normalize(),t===Sn)i[5].setComponents(c+l,m+u,g+p,E+y).normalize();else if(t===Ts)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);const t=$u.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(er.x=i.normal.x>0?e.max.x:e.min.x,er.y=i.normal.y>0?e.max.y:e.min.y,er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bh extends Tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ar=new O,Rr=new O,Ql=new Ge,as=new Ur,tr=new Pn,ga=new O,jl=new O;class zo extends xt{constructor(e=new Ot,t=new bh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ar.fromBufferAttribute(t,i-1),Rr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ar.distanceTo(Rr);e.setAttribute("lineDistance",new Tt(n,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(i),tr.radius+=r,e.ray.intersectsSphere(tr)===!1)return;Ql.copy(i).invert(),as.copy(e.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=m,p=f-1;_<p;_+=c){const g=h.getX(_),S=h.getX(_+1),T=nr(this,e,as,l,g,S,_);T&&t.push(T)}if(this.isLineLoop){const _=h.getX(f-1),p=h.getX(m),g=nr(this,e,as,l,_,p,f-1);g&&t.push(g)}}else{const m=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=m,p=f-1;_<p;_+=c){const g=nr(this,e,as,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=nr(this,e,as,l,f-1,m,f-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Ar.fromBufferAttribute(o,i),Rr.fromBufferAttribute(o,r),t.distanceSqToSegment(Ar,Rr,ga,jl)>n)return;ga.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ga);if(!(c<e.near||c>e.far))return{distance:c,point:jl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const ec=new O,tc=new O;class Zu extends zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ec.fromBufferAttribute(t,i),tc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ec.distanceTo(tc);e.setAttribute("lineDistance",new Tt(n,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ju extends zo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Sh extends Tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nc=new Ge,mo=new Ur,ir=new Pn,sr=new O;class Eh extends xt{constructor(e=new Ot,t=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;nc.copy(i).invert(),mo.copy(e.ray).applyMatrix4(nc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let f=u,_=m;f<_;f++){const p=c.getX(f);sr.fromBufferAttribute(d,p),ic(sr,p,l,i,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let f=u,_=m;f<_;f++)sr.fromBufferAttribute(d,f),ic(sr,f,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ic(s,e,t,n,i,r,a){const o=mo.distanceSqToPoint(s);if(o<t){const l=new O;mo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Th extends Rt{constructor(e=[],t=gi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class As extends Rt{constructor(e,t,n=An,i,r,a,o=wt,l=wt,c,h=Gn,d=1){if(h!==Gn&&h!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new No(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Qu extends As{constructor(e,t=An,n=gi,i,r,a=wt,o=wt,l,c=Gn){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wh extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oi extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,r,4),f("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function f(_,p,g,S,T,y,E,b,R,v,w){const C=y/R,L=E/v,U=y/2,k=E/2,P=b/2,H=R+1,V=v+1;let G=0,ee=0;const Y=new O;for(let X=0;X<V;X++){const Z=X*L-k;for(let Ee=0;Ee<H;Ee++){const me=Ee*C-U;Y[_]=me*S,Y[p]=Z*T,Y[g]=P,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[g]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Ee/R),d.push(1-X/v),G+=1}}for(let X=0;X<v;X++)for(let Z=0;Z<R;Z++){const Ee=u+Z+H*X,me=u+Z+H*(X+1),We=u+(Z+1)+H*(X+1),Ye=u+(Z+1)+H*X;l.push(Ee,me,Ye),l.push(me,We,Ye),ee+=6}o.addGroup(m,ee,w),m+=ee,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ho extends Ot{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,m=2*d+u,f=n*2+r,_=i+1,p=new O,g=new O;for(let S=0;S<=f;S++){let T=0,y=0,E=0,b=0;if(S<=n){const w=S/n,C=w*Math.PI/2;y=-h-e*Math.cos(C),E=e*Math.sin(C),b=-e*Math.cos(C),T=w*d}else if(S<=n+r){const w=(S-n)/r;y=-h+w*t,E=e,b=0,T=d+w*u}else{const w=(S-n-r)/n,C=w*Math.PI/2;y=h+e*Math.sin(C),E=e*Math.cos(C),b=e*Math.sin(C),T=d+u+w*d}const R=Math.max(0,Math.min(1,T/m));let v=0;S===0?v=.5/i:S===f&&(v=-.5/i);for(let w=0;w<=i;w++){const C=w/i,L=C*Math.PI*2,U=Math.sin(L),k=Math.cos(L);g.x=-E*k,g.y=y,g.z=E*U,o.push(g.x,g.y,g.z),p.set(-E*k,b,E*U),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+v,R)}if(S>0){const w=(S-1)*_;for(let C=0;C<i;C++){const L=w+C,U=w+C+1,k=S*_+C,P=S*_+C+1;a.push(L,U,k),a.push(U,P,k)}}}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vo extends Ot{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],m=[];let f=0;const _=[],p=n/2;let g=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(m,2));function S(){const y=new O,E=new O;let b=0;const R=(t-e)/n;for(let v=0;v<=r;v++){const w=[],C=v/r,L=C*(t-e)+e;for(let U=0;U<=i;U++){const k=U/i,P=k*l+o,H=Math.sin(P),V=Math.cos(P);E.x=L*H,E.y=-C*n+p,E.z=L*V,d.push(E.x,E.y,E.z),y.set(H,R,V).normalize(),u.push(y.x,y.y,y.z),m.push(k,1-C),w.push(f++)}_.push(w)}for(let v=0;v<i;v++)for(let w=0;w<r;w++){const C=_[w][v],L=_[w+1][v],U=_[w+1][v+1],k=_[w][v+1];(e>0||w!==0)&&(h.push(C,L,k),b+=3),(t>0||w!==r-1)&&(h.push(L,U,k),b+=3)}c.addGroup(g,b,0),g+=b}function T(y){const E=f,b=new qe,R=new O;let v=0;const w=y===!0?e:t,C=y===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,p*C,0),u.push(0,C,0),m.push(.5,.5),f++;const L=f;for(let U=0;U<=i;U++){const P=U/i*l+o,H=Math.cos(P),V=Math.sin(P);R.x=w*V,R.y=p*C,R.z=w*H,d.push(R.x,R.y,R.z),u.push(0,C,0),b.x=H*.5+.5,b.y=V*.5*C+.5,m.push(b.x,b.y),f++}for(let U=0;U<i;U++){const k=E+U,P=L+U;y===!0?h.push(P,P+1,k):h.push(P+1,P,k),v+=3}c.addGroup(g,v,y===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go extends Vo{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Go(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fr extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,m=[],f=[],_=[],p=[];for(let g=0;g<h;g++){const S=g*u-a;for(let T=0;T<c;T++){const y=T*d-r;f.push(y,-S,0),_.push(0,0,1),p.push(T/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const T=S+c*g,y=S+c*(g+1),E=S+1+c*(g+1),b=S+1+c*g;m.push(T,y,b),m.push(y,E,b)}this.setIndex(m),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wo extends Ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new O,u=new O,m=[],f=[],_=[],p=[];for(let g=0;g<=n;g++){const S=[],T=g/n,y=a+T*o,E=e*Math.cos(y),b=Math.sqrt(e*e-E*E);let R=0;g===0&&a===0?R=.5/t:g===n&&l===Math.PI&&(R=-.5/t);for(let v=0;v<=t;v++){const w=v/t,C=i+w*r;d.x=-b*Math.cos(C),d.y=E,d.z=b*Math.sin(C),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(w+R,1-T),S.push(c++)}h.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const T=h[g][S+1],y=h[g][S],E=h[g+1][S],b=h[g+1][S+1];(g!==0||a>0)&&m.push(T,y,b),(g!==n-1||l<Math.PI)&&m.push(y,E,b)}this.setIndex(m),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Wi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(sc(i))i.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(sc(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=Wi(s[t]);for(const i in n)e[i]=n[i]}return e}function sc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ju(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ah(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const ef={clone:Wi,merge:zt};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(i.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sf extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class si extends Tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rf extends Tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class af extends Tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ni(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function mr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function of(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function lf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class qi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class cf extends qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tl:r=e,o=2*t-n;break;case wl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tl:a=e,l=2*n-t;break;case wl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,f=(n-t)/(i-t),_=f*f,p=_*f,g=-u*p+2*u*_-u*f,S=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*f+1,T=(-1-m)*p+(1.5+m)*_+.5*f,y=m*p-m*_;for(let E=0;E!==o;++E)r[E]=g*a[h+E]+S*a[c+E]+T*a[l+E]+y*a[d+E];return r}}class hf extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class df extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class uf extends qi{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){const f=(n-t)/(i-t),_=1-f;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*f;return r}const u=o*2,m=e-1;for(let f=0;f!==o;++f){const _=a[c+f],p=a[l+f],g=m*u+f*2,S=d[g],T=d[g+1],y=e*u+f*2,E=h[y],b=h[y+1],R=pf(n,t,S,E,i);r[f]=Rh(R,_,T,b,p)}return r}}function Rh(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ff(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function pf(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=Rh(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=ff(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ni(t,this.TimeBufferType),this.values=ni(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ni(e.times,Array),values:ni(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),mr(e.settings)&&(n.settings={inTangents:ni(e.settings.inTangents,Array),outTangents:ni(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new uf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ss:t=this.InterpolantFactoryMethodDiscrete;break;case Es:t=this.InterpolantFactoryMethodLinear;break;case qr:t=this.InterpolantFactoryMethodSmooth;break;case Sl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;mr(this.settings)&&(ac(this.settings.inTangents,e),ac(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&iu(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,m=d+n;for(let f=0;f!==n;++f){const _=t[d+f];if(_!==t[u+f]||_!==t[m+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let m=0;m!==n;++m)t[u+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,mr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function ac(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Es;class Yi extends pn{constructor(e,t,n){super(e,t,n)}}Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ss;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Ch.prototype.ValueTypeName="color";class Rs extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Rs.prototype.ValueTypeName="number";class mf extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Wn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Cs extends pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}}Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends pn{constructor(e,t,n){super(e,t,n)}}Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Ss;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Cr.prototype.ValueTypeName="vector";class gf{constructor(e="",t=-1,n=[],i=Xd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(xf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=of(l);l=rc(l,1,h),c=rc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Rs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function _f(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Rs;case"vector":case"vector2":case"vector3":case"vector4":return Cr;case"color":return Ch;case"quaternion":return Cs;case"bool":case"boolean":return Yi;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function xf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_f(s.type);if(s.times===void 0){const n=[],i=[];lf(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),mr(s.settings)&&(t.settings={inTangents:ni(s.settings.inTangents,Float32Array),outTangents:ni(s.settings.outTangents,Float32Array)}),t}const zn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(oc(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!oc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function oc(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class vf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const m=c[d],f=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yf=new vf;class $i{constructor(e){this.manager=e!==void 0?e:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class Mf extends Error{constructor(e,t){super(e),this.response=t}}class Ph extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=zn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=On[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=u?parseInt(u):0,f=m!==0;let _=0;const p=new ReadableStream({start(g){S();function S(){d.read().then(({done:T,value:y})=>{if(T)g.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:m});for(let b=0,R=h.length;b<R;b++){const v=h[b];v.onProgress&&v.onProgress(E)}g.enqueue(y),S()}},T=>{g.error(T)})}}});return new Response(p)}else throw new Mf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(u);return c.arrayBuffer().then(f=>m.decode(f))}}}).then(c=>{zn.add(`file:${e}`,c);const h=On[e];delete On[e];for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=On[e];if(h===void 0)throw this.manager.itemError(e),c;delete On[e];for(let d=0,u=h.length;d<u;d++){const m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Li=new WeakMap;class bf extends $i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Li.get(a);d===void 0&&(d=[],Li.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=ws("img");function l(){h(),t&&t(this);const d=Li.get(this)||[];for(let u=0;u<d.length;u++){const m=d[u];m.onLoad&&m.onLoad(this)}Li.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),zn.remove(`image:${e}`);const u=Li.get(this)||[];for(let m=0;m<u.length;m++){const f=u[m];f.onError&&f.onError(d)}Li.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Pr extends $i{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new bf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Is extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Sf extends Is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _a=new Ge,lc=new O,cc=new O;class Xo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_a,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rr=new O,ar=new Wn,_n=new O;class Ih extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rr,ar,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rr,ar,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rr,ar,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rr,ar,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jn=new O,hc=new qe,dc=new qe;class Lt extends Ih{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,hc,dc),t.subVectors(dc,hc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ef extends Xo{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Gi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Oi extends Is{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ef}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Tf extends Xo{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ir extends Is{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xi extends Ih{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wf extends Xo{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qo extends Is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new wf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xa=new WeakMap;class Af extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=zn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{xa.has(a)===!0?(i&&i(xa.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return zn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),xa.set(l,c),zn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});zn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Di=-90,Ni=1;class Rf extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(Di,Ni,e,t);i.layers=this.layers,this.add(i);const r=new Lt(Di,Ni,e,t);r.layers=this.layers,this.add(r);const a=new Lt(Di,Ni,e,t);a.layers=this.layers,this.add(a);const o=new Lt(Di,Ni,e,t);o.layers=this.layers,this.add(o);const l=new Lt(Di,Ni,e,t);l.layers=this.layers,this.add(l);const c=new Lt(Di,Ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Cf extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yo="\\[\\]\\.:\\/",Pf=new RegExp("["+Yo+"]","g"),Ko="[^"+Yo+"]",If="[^"+Yo.replace("\\.","")+"]",Lf=/((?:WC+[\/:])*)/.source.replace("WC",Ko),Df=/(WCOD+)?/.source.replace("WCOD",If),Nf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ko),Uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ko),Ff=new RegExp("^"+Lf+Df+Nf+Uf+"$"),Of=["material","materials","bones","map"];class kf{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(e){const t=Ff.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Of.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=kf;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const jo=class jo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};jo.prototype.isMatrix2=!0;let uc=jo;function fc(s,e,t,n){const i=Bf(n);switch(t){case dh:return s*e;case Ao:return s*e/i.components*i.byteLength;case Ro:return s*e/i.components*i.byteLength;case _i:return s*e*2/i.components*i.byteLength;case Co:return s*e*2/i.components*i.byteLength;case uh:return s*e*3/i.components*i.byteLength;case tn:return s*e*4/i.components*i.byteLength;case Po:return s*e*4/i.components*i.byteLength;case dr:case ur:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fr:case pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:case Ba:return Math.max(s,16)*Math.max(e,8)/4;case Fa:case ka:return Math.max(s,8)*Math.max(e,8)/2;case za:case Ha:case Ga:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Va:case Mr:case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case eo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case to:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ao:case oo:case lo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case co:case ho:return Math.ceil(s/4)*Math.ceil(e/4)*8;case br:case uo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bf(s){switch(s){case Kt:case oh:return{byteLength:1,components:1};case Ms:case lh:case Rn:return{byteLength:2,components:1};case To:case wo:return{byteLength:2,components:4};case An:case Eo:case en:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);function Lh(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function zf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((m,f)=>m.start-f.start);let u=0;for(let m=1;m<d.length;m++){const f=d[u],_=d[m];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,d[u]=_)}d.length=u+1;for(let m=0,f=d.length;m<f;m++){const _=d[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,up=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Um=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Hf,alphahash_pars_fragment:Vf,alphamap_fragment:Gf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:Kf,batching_pars_vertex:$f,batching_vertex:Zf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:jf,iridescence_fragment:ep,bumpmap_pars_fragment:tp,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:ap,color_pars_fragment:op,color_pars_vertex:lp,color_vertex:cp,common:hp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:up,displacementmap_pars_vertex:fp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:_p,colorspace_pars_fragment:xp,envmap_fragment:vp,envmap_common_pars_fragment:yp,envmap_pars_fragment:Mp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Dp,envmap_vertex:Sp,fog_vertex:Ep,fog_pars_vertex:Tp,fog_fragment:wp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Lp,lights_toon_fragment:Np,lights_toon_pars_fragment:Up,lights_phong_fragment:Fp,lights_phong_pars_fragment:Op,lights_physical_fragment:kp,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:Hp,lights_fragment_end:Vp,lightprobes_pars_fragment:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:Kp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:jp,morphinstance_vertex:em,morphcolor_vertex:tm,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:sm,normal_fragment_begin:rm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:vm,dithering_pars_fragment:ym,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:Tm,shadowmask_pars_fragment:wm,skinbase_vertex:Am,skinning_pars_vertex:Rm,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Im,specularmap_pars_fragment:Lm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Nm,transmission_fragment:Um,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:km,uv_vertex:Bm,worldpos_vertex:zm,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:Km,distance_vert:$m,distance_frag:Zm,equirect_vert:Jm,equirect_frag:Qm,linedashed_vert:jm,linedashed_frag:e0,meshbasic_vert:t0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:a0,meshnormal_vert:o0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:h0,meshphysical_vert:d0,meshphysical_frag:u0,meshtoon_vert:f0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:_0,shadow_frag:x0,sprite_vert:v0,sprite_frag:y0},fe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},yn={basic:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:zt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:zt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:zt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:zt([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:zt([fe.lights,fe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};yn.physical={uniforms:zt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const or={r:0,b:0,g:0},M0=new Ge,Dh=new ke;Dh.set(-1,0,0,0,1,0,0,0,1);function b0(s,e,t,n,i,r){const a=new Ue(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function m(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function f(S){let T=!1;const y=m(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(S,T){const y=m(T);y&&(y.isCubeTexture||y.mapping===Nr)?(c===void 0&&(c=new Mt(new oi(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Wi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dh),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Mt(new Fr(2,2),new Cn({name:"BackgroundMaterial",uniforms:Wi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(or,Ah(s)),t.buffers.color.setClear(or.r,or.g,or.b,T,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:f,addToRenderList:_,dispose:g}}function S0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(L,U,k,P,H){let V=!1;const G=d(L,P,k,U);r!==G&&(r=G,c(r.object)),V=m(L,P,k,H),V&&f(L,P,k,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,y(L,U,k,P),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,U,k,P){const H=P.wireframe===!0;let V=n[U.id];V===void 0&&(V={},n[U.id]=V);const G=L.isInstancedMesh===!0?L.id:0;let ee=V[G];ee===void 0&&(ee={},V[G]=ee);let Y=ee[k.id];Y===void 0&&(Y={},ee[k.id]=Y);let X=Y[H];return X===void 0&&(X=u(l()),Y[H]=X),X}function u(L){const U=[],k=[],P=[];for(let H=0;H<t;H++)U[H]=0,k[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:P,object:L,attributes:{},index:null}}function m(L,U,k,P){const H=r.attributes,V=U.attributes;let G=0;const ee=k.getAttributes();for(const Y in ee)if(ee[Y].location>=0){const Z=H[Y];let Ee=V[Y];if(Ee===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),Z===void 0||Z.attribute!==Ee||Ee&&Z.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function f(L,U,k,P){const H={},V=U.attributes;let G=0;const ee=k.getAttributes();for(const Y in ee)if(ee[Y].location>=0){let Z=V[Y];Z===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const Ee={};Ee.attribute=Z,Z&&Z.data&&(Ee.data=Z.data),H[Y]=Ee,G++}r.attributes=H,r.attributesNum=G,r.index=P}function _(){const L=r.newAttributes;for(let U=0,k=L.length;U<k;U++)L[U]=0}function p(L){g(L,0)}function g(L,U){const k=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;k[L]=1,P[L]===0&&(s.enableVertexAttribArray(L),P[L]=1),H[L]!==U&&(s.vertexAttribDivisor(L,U),H[L]=U)}function S(){const L=r.newAttributes,U=r.enabledAttributes;for(let k=0,P=U.length;k<P;k++)U[k]!==L[k]&&(s.disableVertexAttribArray(k),U[k]=0)}function T(L,U,k,P,H,V,G){G===!0?s.vertexAttribIPointer(L,U,k,H,V):s.vertexAttribPointer(L,U,k,P,H,V)}function y(L,U,k,P){_();const H=P.attributes,V=k.getAttributes(),G=U.defaultAttributeValues;for(const ee in V){const Y=V[ee];if(Y.location>=0){let X=H[ee];if(X===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const Z=X.normalized,Ee=X.itemSize,me=e.get(X);if(me===void 0)continue;const We=me.buffer,Ye=me.type,Je=me.bytesPerElement,J=Ye===s.INT||Ye===s.UNSIGNED_INT||X.gpuType===Eo;if(X.isInterleavedBufferAttribute){const te=X.data,ge=te.stride,Fe=X.offset;if(te.isInstancedInterleavedBuffer){for(let de=0;de<Y.locationSize;de++)g(Y.location+de,te.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<Y.locationSize;de++)p(Y.location+de);s.bindBuffer(s.ARRAY_BUFFER,We);for(let de=0;de<Y.locationSize;de++)T(Y.location+de,Ee/Y.locationSize,Ye,Z,ge*Je,(Fe+Ee/Y.locationSize*de)*Je,J)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)g(Y.location+te,X.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<Y.locationSize;te++)p(Y.location+te);s.bindBuffer(s.ARRAY_BUFFER,We);for(let te=0;te<Y.locationSize;te++)T(Y.location+te,Ee/Y.locationSize,Ye,Z,Ee*Je,Ee/Y.locationSize*te*Je,J)}}else if(G!==void 0){const Z=G[ee];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(Y.location,Z);break;case 3:s.vertexAttrib3fv(Y.location,Z);break;case 4:s.vertexAttrib4fv(Y.location,Z);break;default:s.vertexAttrib1fv(Y.location,Z)}}}}S()}function E(){w();for(const L in n){const U=n[L];for(const k in U){const P=U[k];for(const H in P){const V=P[H];for(const G in V)h(V[G].object),delete V[G];delete P[H]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const U=n[L.id];for(const k in U){const P=U[k];for(const H in P){const V=P[H];for(const G in V)h(V[G].object),delete V[G];delete P[H]}}delete n[L.id]}function R(L){for(const U in n){const k=n[U];for(const P in k){const H=k[P];if(H[L.id]===void 0)continue;const V=H[L.id];for(const G in V)h(V[G].object),delete V[G];delete H[L.id]}}}function v(L){for(const U in n){const k=n[U],P=L.isInstancedMesh===!0?L.id:0,H=k[P];if(H!==void 0){for(const V in H){const G=H[V];for(const ee in G)h(G[ee].object),delete G[ee];delete H[V]}delete k[P],Object.keys(k).length===0&&delete n[U]}}}function w(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function E0(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function T0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==tn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kt&&R!==en&&!v&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:E,samples:b}}function w0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ti,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const f=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||f===null||f.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,T=S*4;let y=g.clippingState||null;l.value=y,y=h(f,u,T,m);for(let E=0;E!==T;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,f){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,f!==!0||p===null){const g=m+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<g)&&(p=new Float32Array(g));for(let T=0,y=m;T!==_;++T,y+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const ki=4,A0=6,R0=20,C0=256,os=new Xi,pc=new Ue;let va=null,ya=0,Ma=0,ba=!1;const P0=new O,fi=new O;class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=P0}=r;va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(va,ya,Ma),this._renderer.xr.enabled=ba,e.scissorTest=!1,Ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:At,minFilter:At,generateMipmaps:!1,type:Rn,format:tn,colorSpace:$t,depthBuffer:!1},i=gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=I0(r)),this._blurMaterial=D0(r,e,t),this._ggxMaterial=L0(r,e,t)}return i}_compileMaterial(e){const t=new Mt(new Ot,e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,n,i,r){const l=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(pc),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new oi,new ii({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,g=!0):(p.color.copy(pc),g=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const E=this._cubeSize;Ui(i,y*E,T>2?E:0,E,E),d.setRenderTarget(i),g&&d.render(_,l),d.render(e,l)}d.toneMapping=m,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===Vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ui(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,m=d*u,{_lodMax:f}=this,_=this._sizeLods[n],p=3*_*(n>f-ki?n-f+ki:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=f-t,Ui(r,p,g,3*_,2*_),i.setRenderTarget(r),i.render(o,os),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=f-n,Ui(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(o,os)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-ki?i-this._lodMax+ki:0),u=4*(this._cubeSize-h);Ui(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,os)}}function I0(s){const e=[],t=[];let n=s;const i=s-ki+1+A0;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,m=3,f=new Float32Array(m*u*d),_=new Float32Array(m*u*d);for(let g=0;g<d;g++){const S=g%3*2/3-1,T=g>2?0:-1,y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];f.set(y,m*u*g);for(let E=0;E<u;E++){const b=h[E*2]*2-1,R=h[E*2+1]*2-1;g===0?fi.set(1,R,b):g===1?fi.set(-b,1,-R):g===2?fi.set(-b,R,1):g===3?fi.set(-1,R,-b):g===4?fi.set(-b,-1,R):fi.set(b,R,-1),fi.toArray(_,(g*u+E)*m)}}const p=new Ot;p.setAttribute("position",new Wt(f,m)),p.setAttribute("outputDirection",new Wt(_,m)),t.push(new Mt(p,null)),n>ki&&n--}return{lodMeshes:t,sizeLods:e}}function gc(s,e,t){const n=new fn(s,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function L0(s,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Or(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function D0(s,e,t){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Or(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function _c(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Or(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nh extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Th(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oi(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Hn});r.uniforms.tEquirect.value=t;const a=new Mt(i,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=At),new Rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function N0(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Wr||m===Xr)if(e.has(u)){const f=e.get(u).texture;return o(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const _=new Nh(f.height);return _.fromEquirectangularTexture(s,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,f=m===Wr||m===Xr,_=m===gi||m===Vi;if(f||_){let p=t.get(u);const g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new mc(s)),p=f?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{const S=u.image;return f&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new mc(s)),p=f?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Wr?u.mapping=gi:m===Xr&&(u.mapping=Vi),u}function l(u){let m=0;const f=6;for(let _=0;_<f;_++)u[_]!==void 0&&m++;return m===f}function c(u){const m=u.target;m.removeEventListener("dispose",c);const f=e.get(m);f!==void 0&&(e.delete(m),f.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const f=t.get(m);f!==void 0&&(t.delete(m),f.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function U0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bi("WebGLRenderer: "+n+" extension not supported."),i}}}function F0(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const f in u.attributes)e.remove(u.attributes[f]);u.removeEventListener("dispose",a),delete i[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER)}function c(d){const u=[],m=d.index,f=d.attributes.position;let _=0;if(f===void 0)return;if(m!==null){const S=m.array;_=m.version;for(let T=0,y=S.length;T<y;T+=3){const E=S[T+0],b=S[T+1],R=S[T+2];u.push(E,b,b,R,R,E)}}else{const S=f.array;_=f.version;for(let T=0,y=S.length/3-1;T<y;T+=3){const E=T+0,b=T+1,R=T+2;u.push(E,b,b,R,R,E)}}const p=new(f.count>=65535?yh:vh)(u,1);p.version=_;const g=r.get(d);g&&e.remove(g),r.set(d,p)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function O0(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,m){m!==0&&(s.drawElementsInstanced(n,u,r,d*a,m),t.update(u,n,m))}function h(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let _=0;for(let p=0;p<m;p++)_+=u[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function k0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function B0(s,e,t){const n=new WeakMap,i=new ct;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();const m=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),f===!0&&(T=2),_===!0&&(T=3);let y=o.attributes.position.count*T,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*E*4*d),R=new gh(b,y,E,d);R.type=en,R.needsUpdate=!0;const v=T*4;for(let C=0;C<d;C++){const L=p[C],U=g[C],k=S[C],P=y*E*4*C;for(let H=0;H<L.count;H++){const V=H*v;m===!0&&(i.fromBufferAttribute(L,H),b[P+V+0]=i.x,b[P+V+1]=i.y,b[P+V+2]=i.z,b[P+V+3]=0),f===!0&&(i.fromBufferAttribute(U,H),b[P+V+4]=i.x,b[P+V+5]=i.y,b[P+V+6]=i.z,b[P+V+7]=0),_===!0&&(i.fromBufferAttribute(k,H),b[P+V+8]=i.x,b[P+V+9]=i.y,b[P+V+10]=i.z,b[P+V+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new qe(y,E)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const f=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",f),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function z0(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const H0={[jc]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function V0(s,e,t,n,i,r){const a=new fn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ot;c.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const h=new sf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Mt(c,h),u=new Xi(-1,1,1,-1,0,1);let m=null,f=null,_=!1,p,g=null,S=[],T=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let b=0;b<S.length;b++){const R=S[b];R.setSize&&R.setSize(y,E)}},this.setEffects=function(y){S=y,T=S.length>0&&S[0].isRenderPass===!0;const E=a.width,b=a.height;S.length>0&&o===null&&(o=new fn(E,b,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(E,b,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){const v=S[R];v.setSize&&v.setSize(E,b)}},this.begin=function(y,E){if(_||y.toneMapping===En&&S.length===0)return!1;if(g=E,E!==null){const b=E.width,R=E.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return T===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=En,!0},this.hasRenderPass=function(){return T},this.end=function(y,E){y.toneMapping=p,_=!0;let b=a,R=o;for(let v=0;v<S.length;v++){const w=S[v];w.enabled!==!1&&(w.render(y,R,b,E),w.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(m!==y.outputColorSpace||f!==y.toneMapping){m=y.outputColorSpace,f=y.toneMapping,h.defines={},$e.getTransfer(m)===rt&&(h.defines.SRGB_TRANSFER="");const v=H0[f];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(g),y.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Uh=new Rt,go=new As(1,1),Fh=new gh,Oh=new Ru,kh=new Th,vc=[],yc=[],Mc=new Float32Array(16),bc=new Float32Array(9),Sc=new Float32Array(4);function Zi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=vc[i];if(r===void 0&&(r=new Float32Array(i),vc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function kr(s,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function G0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function W0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function X0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function Y0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Sc.set(n),s.uniformMatrix2fv(this.addr,!1,Sc),Pt(t,n)}}function K0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;bc.set(n),s.uniformMatrix3fv(this.addr,!1,bc),Pt(t,n)}}function $0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Mc.set(n),s.uniformMatrix4fv(this.addr,!1,Mc),Pt(t,n)}}function Z0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function J0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function Q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function j0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function sg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(go.compareFunction=t.isReversedDepthBuffer()?Lo:Io,r=go):r=Uh,t.setTexture2D(e||r,i)}function rg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Oh,i)}function ag(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kh,i)}function og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fh,i)}function lg(s){switch(s){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return K0;case 35676:return $0;case 5124:case 35670:return Z0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return j0;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}function cg(s,e){s.uniform1fv(this.addr,e)}function hg(s,e){const t=Zi(e,this.size,2);s.uniform2fv(this.addr,t)}function dg(s,e){const t=Zi(e,this.size,3);s.uniform3fv(this.addr,t)}function ug(s,e){const t=Zi(e,this.size,4);s.uniform4fv(this.addr,t)}function fg(s,e){const t=Zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function pg(s,e){const t=Zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function mg(s,e){const t=Zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gg(s,e){s.uniform1iv(this.addr,e)}function _g(s,e){s.uniform2iv(this.addr,e)}function xg(s,e){s.uniform3iv(this.addr,e)}function vg(s,e){s.uniform4iv(this.addr,e)}function yg(s,e){s.uniform1uiv(this.addr,e)}function Mg(s,e){s.uniform2uiv(this.addr,e)}function bg(s,e){s.uniform3uiv(this.addr,e)}function Sg(s,e){s.uniform4uiv(this.addr,e)}function Eg(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=go:a=Uh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Tg(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Oh,r[a])}function wg(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||kh,r[a])}function Ag(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Fh,r[a])}function Rg(s){switch(s){case 5126:return cg;case 35664:return hg;case 35665:return dg;case 35666:return ug;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return vg;case 5125:return yg;case 36294:return Mg;case 36295:return bg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lg(t.type)}}class Pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rg(t.type)}}class Ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Ec(s,e){s.seq.push(e),s.map[e.id]=e}function Lg(s,e,t){const n=s.name,i=n.length;for(Sa.lastIndex=0;;){const r=Sa.exec(n),a=Sa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ec(t,c===void 0?new Cg(o,s,e):new Pg(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Ig(o),Ec(t,d)),t=d}}}class gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Lg(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Tc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Dg=37297;let Ng=0;function Ug(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const wc=new ke;function Fg(s){$e._getMatrix(wc,$e.workingColorSpace,s);const e=`mat3( ${wc.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case Sr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ac(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ug(s.getShaderSource(e),o)}else return r}function Og(s,e){const t=Fg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kg={[jc]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[So]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function Bg(s,e){const t=kg[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new O;function zg(){$e.getLuminanceCoefficients(lr);const s=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Vg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function fs(s){return s!==""}function Rc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(s){return s.replace(Wg,qg)}const Xg=new Map;function qg(s,e){let t=Ve[e];if(t===void 0){const n=Xg.get(e);if(n!==void 0)t=Ve[n],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _o(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(s){return s.replace(Yg,Kg)}function Kg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ic(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $g={[ms]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function Zg(s){return $g[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Jg={[gi]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE_UV"};function Qg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Jg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const jg={[Vi]:"ENVMAP_MODE_REFRACTION"};function e_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t_={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function n_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":t_[s.combine]||"ENVMAP_BLENDING_NONE"}function i_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Zg(t),c=Qg(t),h=e_(t),d=n_(t),u=i_(t),m=Hg(t),f=Vg(r),_=i.createProgram();let p,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fs).join(`
`),g.length>0&&(g+=`
`)):(p=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),g=[Ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ve.tonemapping_pars_fragment:"",t.toneMapping!==En?Bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Og("linearToOutputTexel",t.outputColorSpace),zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),a=_o(a),a=Rc(a,t),a=Cc(a,t),o=_o(o),o=Rc(o,t),o=Cc(o,t),a=Pc(a),o=Pc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=S+p+a,y=S+g+o,E=Tc(i,i.VERTEX_SHADER,T),b=Tc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,E),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(E)||"",P=i.getShaderInfoLog(b)||"",H=U.trim(),V=k.trim(),G=P.trim();let ee=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,b);else{const X=Ac(i,E,"vertex"),Z=Ac(i,b,"fragment");Oe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+X+`
`+Z)}else H!==""?Ce("WebGLProgram: Program Info Log:",H):(V===""||G==="")&&(Y=!1);Y&&(L.diagnostics={runnable:ee,programLog:H,vertexShader:{log:V,prefix:p},fragmentShader:{log:G,prefix:g}})}i.deleteShader(E),i.deleteShader(b),v=new gr(i,_),w=Gg(i,_)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,Dg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ng++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let r_=0;class a_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new o_(e),t.set(e,n)),n}}class o_{constructor(e){this.id=r_++,this.code=e,this.usedTimes=0}}function l_(s){return s===_i||s===Mr||s===br}function c_(s,e,t,n,i,r){const a=new _h,o=new a_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,L,U,k){const P=L.fog,H=U.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?L.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,ee=e.get(v.envMap||V,G),Y=ee&&ee.mapping===Nr?ee.image.height:null,X=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const Z=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ee=Z!==void 0?Z.length:0;let me=0;H.morphAttributes.position!==void 0&&(me=1),H.morphAttributes.normal!==void 0&&(me=2),H.morphAttributes.color!==void 0&&(me=3);let We,Ye,Je,J;if(X){const ut=yn[X];We=ut.vertexShader,Ye=ut.fragmentShader}else{We=v.vertexShader,Ye=v.fragmentShader;const ut=o.getVertexShaderStage(v),tt=o.getFragmentShaderStage(v);o.update(v,ut,tt),Je=ut.id,J=tt.id}const te=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,de=U.isBatchedMesh===!0,Ne=!!v.map,et=!!v.matcap,ze=!!ee,Qe=!!v.aoMap,it=!!v.lightMap,K=!!v.bumpMap&&v.wireframe===!1,ie=!!v.normalMap,ve=!!v.displacementMap,ht=!!v.emissiveMap,Ie=!!v.metalnessMap,st=!!v.roughnessMap,I=v.anisotropy>0,mt=v.clearcoat>0,Le=v.dispersion>0,A=v.retroreflectivity>0,x=v.iridescence>0,F=v.sheen>0,W=v.transmission>0,$=I&&!!v.anisotropyMap,re=mt&&!!v.clearcoatMap,ae=mt&&!!v.clearcoatNormalMap,Q=mt&&!!v.clearcoatRoughnessMap,ne=x&&!!v.iridescenceMap,oe=x&&!!v.iridescenceThicknessMap,Ae=F&&!!v.sheenColorMap,ue=F&&!!v.sheenRoughnessMap,le=!!v.specularMap,Re=!!v.specularColorMap,De=!!v.specularIntensityMap,Be=W&&!!v.transmissionMap,N=W&&!!v.thicknessMap,ce=!!v.gradientMap,j=!!v.alphaMap,he=v.alphaTest>0,xe=!!v.alphaHash,se=!!v.extensions;let Pe=En;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Pe=s.toneMapping);const Te={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:We,fragmentShader:Ye,defines:v.defines,customVertexShaderID:Je,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:de,batchingColor:de&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ne,matcap:et,envMap:ze,envMapMode:ze&&ee.mapping,envMapCubeUVHeight:Y,aoMap:Qe,lightMap:it,bumpMap:K,normalMap:ie,displacementMap:ve,emissiveMap:ht,normalMapObjectSpace:ie&&v.normalMapType===Kd,normalMapTangentSpace:ie&&v.normalMapType===po,packedNormalMap:ie&&v.normalMapType===po&&l_(v.normalMap.format),metalnessMap:Ie,roughnessMap:st,anisotropy:I,anisotropyMap:$,clearcoat:mt,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:Q,dispersion:Le,retroreflection:A,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:oe,sheen:F,sheenColorMap:Ae,sheenRoughnessMap:ue,specularMap:le,specularColorMap:Re,specularIntensityMap:De,transmission:W,transmissionMap:Be,thicknessMap:N,gradientMap:ce,opaque:v.transparent===!1&&v.blending===gs&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:he,alphaHash:xe,combine:v.combine,mapUv:Ne&&f(v.map.channel),aoMapUv:Qe&&f(v.aoMap.channel),lightMapUv:it&&f(v.lightMap.channel),bumpMapUv:K&&f(v.bumpMap.channel),normalMapUv:ie&&f(v.normalMap.channel),displacementMapUv:ve&&f(v.displacementMap.channel),emissiveMapUv:ht&&f(v.emissiveMap.channel),metalnessMapUv:Ie&&f(v.metalnessMap.channel),roughnessMapUv:st&&f(v.roughnessMap.channel),anisotropyMapUv:$&&f(v.anisotropyMap.channel),clearcoatMapUv:re&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&f(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:ue&&f(v.sheenRoughnessMap.channel),specularMapUv:le&&f(v.specularMap.channel),specularColorMapUv:Re&&f(v.specularColorMap.channel),specularIntensityMapUv:De&&f(v.specularIntensityMap.channel),transmissionMapUv:Be&&f(v.transmissionMap.channel),thicknessMapUv:N&&f(v.thicknessMap.channel),alphaMapUv:j&&f(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ie||I),vertexNormals:!!H.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(Ne||j),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||H.attributes.normal===void 0&&ie===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ne&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)===rt,decodeVideoTextureEmissive:ht&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)===rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===Gt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(g(w,v),S(w,v),w.push(s.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function T(v){const w=m[v.type];let C;if(w){const L=yn[w];C=ef.clone(L.uniforms)}else C=v.uniforms;return C}function y(v,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new s_(s,w,v,i),c.push(C),h.set(w,C)),C}function E(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:R}}function h_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function d_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Lc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,f,_,p,g){let S=s[e];return S===void 0?(S={id:u.id,object:u,geometry:m,material:f,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},s[e]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=f,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=p,S.group=g),e++,S}function l(u,m,f,_,p,g,S){S.reversedDepth===!0&&(p=-p);const T=o(u,m,f,_,p,g);f.transmission>0?n.push(T):f.transparent===!0?i.push(T):t.push(T)}function c(u,m,f,_,p,g){const S=o(u,m,f,_,p,g);f.transmission>0?n.unshift(S):f.transparent===!0?i.unshift(S):t.unshift(S)}function h(u,m){t.length>1&&t.sort(u||d_),n.length>1&&n.sort(m||Lc),i.length>1&&i.sort(m||Lc)}function d(){for(let u=e,m=s.length;u<m;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function u_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Dc,s.set(n,[a])):i>=r.length?(a=new Dc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function f_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ue};break;case"SpotLight":t={position:new O,direction:new O,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function p_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let m_=0;function g_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function __(s){const e=new f_,t=p_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,r=new Ge,a=new Ge;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,f=0,_=0,p=0,g=0,S=0,T=0,y=0,E=0,b=0,R=0,v=0,w=0,C=0;c.sort(g_);for(let U=0,k=c.length;U<k;U++){const P=c[U],H=P.color,V=P.intensity,G=P.distance;let ee=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===_i?ee=P.shadow.map.texture:ee=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*V,d+=H.g*V,u+=H.b*V;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],V);C++}else if(P.isSunLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,Z=t.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[f]=Z,n.sunShadowMap[f]=ee;const Ee=X.getViewportCount();for(let me=0;me<Ee;me++)n.sunShadowMatrix[_+me]=X.getMatrix(me),n.sunShadowCascade[_+me]=X._cascadeData[me];_+=Ee,f++}n.sun[m]=Y,m++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,Z=t.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=ee,n.directionalShadowMatrix[p]=P.shadow.matrix,E++}n.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(H).multiplyScalar(V),Y.distance=G,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[S]=Y;const X=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,X.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[S]=X.matrix,P.castShadow){const Z=t.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,n.spotShadow[S]=Z,n.spotShadowMap[S]=ee,R++}S++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(H).multiplyScalar(V),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=Y,T++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const X=P.shadow,Z=t.get(P);Z.shadowIntensity=X.intensity,Z.shadowBias=X.bias,Z.shadowNormalBias=X.normalBias,Z.shadowRadius=X.radius,Z.shadowMapSize=X.mapSize,Z.shadowCameraNear=X.camera.near,Z.shadowCameraFar=X.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(V),Y.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[y]=Y,y++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==g||L.spotLength!==S||L.rectAreaLength!==T||L.hemiLength!==y||L.numSunShadows!==f||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==R||L.numSpotMaps!==v||L.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=p,n.spot.length=S,n.rectArea.length=T,n.point.length=g,n.hemi.length=y,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-w,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.sunLength=m,L.directionalLength=p,L.pointLength=g,L.spotLength=S,L.rectAreaLength=T,L.hemiLength=y,L.numSunShadows=f,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=R,L.numSpotMaps=v,L.numLightProbes=C,n.version=m_++)}function l(c,h){let d=0,u=0,m=0,f=0,_=0,p=0;const g=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){const y=c[S];if(y.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),d++}else if(y.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),u++}else if(y.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=n.point[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Nc(s){const e=new __(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function x_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Nc(s),e.set(i,[o])):r>=a.length?(o=new Nc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],b_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Uc=new Ge,ls=new O,Ea=new O;function S_(s,e,t){let n=new Bo;const i=new qe,r=new qe,a=new ct,o=new rf,l=new af,c={},h=t.maxTextureSize,d={[ri]:Gt,[Gt]:ri,[Mn]:Mn},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:v_,fragmentShader:y_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const f=new Ot;f.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mt(f,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let g=this.type;this.render=function(b,R,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Sd&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ms);const w=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Hn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=g!==this.type;k&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=b.length;P<H;P++){const V=b[P],G=V.shadow;if(G===void 0){Ce("WebGLShadowMap:",V,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ee=G.getFrameExtents();i.multiply(ee),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,G.mapSize.y=r.y));const Y=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Y,G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ds){if(V.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new fn(i.x,i.y,{format:_i,type:Rn,minFilter:At,magFilter:At,generateMipmaps:!1}),G.map.texture.name=V.name+".shadowMap",G.map.depthTexture=new As(i.x,i.y,en),G.map.depthTexture.name=V.name+".shadowMapDepth",G.map.depthTexture.format=Gn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wt,G.map.depthTexture.magFilter=wt}else V.isPointLight?(G.map=new Nh(i.x),G.map.depthTexture=new Qu(i.x,An)):(G.map=new fn(i.x,i.y),G.map.depthTexture=new As(i.x,i.y,An)),G.map.depthTexture.name=V.name+".shadowMap",G.map.depthTexture.format=Gn,this.type===ms?(G.map.depthTexture.compareFunction=Y?Lo:Io,G.map.depthTexture.minFilter=At,G.map.depthTexture.magFilter=At):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wt,G.map.depthTexture.magFilter=wt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);const X=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();V.isPointLight!==!0&&G.updateMatrices(V,v);for(let Z=0;Z<X;Z++){const Ee=G.getCamera(Z);if(V.isPointLight){const me=G.camera,We=G.matrix,Ye=V.distance||me.far;Ye!==me.far&&(me.far=Ye,me.updateProjectionMatrix()),ls.setFromMatrixPosition(V.matrixWorld),me.position.copy(ls),Ea.copy(me.position),Ea.add(M_[Z]),me.up.copy(b_[Z]),me.lookAt(Ea),me.updateMatrixWorld(),We.makeTranslation(-ls.x,-ls.y,-ls.z),Uc.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Uc,me.coordinateSystem,me.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(G.map),s.clear());const me=G.getViewport(Z);a.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),U.viewport(a)}n=G.getFrustum(Z),y(R,v,Ee,V,this.type)}G.isPointLightShadow!==!0&&this.type===ds&&S(G,v),G.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(w,C,L)};function S(b,R){const v=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new fn(i.x,i.y,{format:_i,type:Rn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(R,null,v,u,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(R,null,v,m,_,null)}function T(b,R,v,w){let C=null;const L=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)C=L;else if(C=v.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,k=R.uuid;let P=c[U];P===void 0&&(P={},c[U]=P);let H=P[k];H===void 0&&(H=C.clone(),P[k]=H,R.addEventListener("dispose",E)),C=H}if(C.visible=R.visible,C.wireframe=R.wireframe,w===ds?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=s.properties.get(C);U.light=v}return C}function y(b,R,v,w,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===ds)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const k=e.update(b),P=b.material;if(Array.isArray(P)){const H=k.groups;for(let V=0,G=H.length;V<G;V++){const ee=H[V],Y=P[ee.materialIndex];if(Y&&Y.visible){const X=T(b,Y,w,C);b.onBeforeShadow(s,b,R,v,k,X,ee),s.renderBufferDirect(v,null,k,X,b,ee),b.onAfterShadow(s,b,R,v,k,X,ee)}}}else if(P.visible){const H=T(b,P,w,C);b.onBeforeShadow(s,b,R,v,k,H,null),s.renderBufferDirect(v,null,k,H,b,null),b.onAfterShadow(s,b,R,v,k,H,null)}}const U=b.children;for(let k=0,P=U.length;k<P;k++)y(U[k],R,v,w,C)}function E(b){b.target.removeEventListener("dispose",E);for(const v in c){const w=c[v],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function E_(s,e){function t(){let N=!1;const ce=new ct;let j=null;const he=new ct(0,0,0,0);return{setMask:function(xe){j!==xe&&!N&&(s.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){N=xe},setClear:function(xe,se,Pe,Te,ut){ut===!0&&(xe*=Te,se*=Te,Pe*=Te),ce.set(xe,se,Pe,Te),he.equals(ce)===!1&&(s.clearColor(xe,se,Pe,Te),he.copy(ce))},reset:function(){N=!1,j=null,he.set(-1,0,0,0)}}}function n(){let N=!1,ce=!1,j=null,he=null,xe=null;return{setReversed:function(se){if(ce!==se){const Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=se;const Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return ce},setTest:function(se){se?te(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(se){j!==se&&!N&&(s.depthMask(se),j=se)},setFunc:function(se){if(ce&&(se=au[se]),he!==se){switch(se){case Ca:s.depthFunc(s.NEVER);break;case Pa:s.depthFunc(s.ALWAYS);break;case Ia:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Da:s.depthFunc(s.GEQUAL);break;case Na:s.depthFunc(s.GREATER);break;case Ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=se}},setLocked:function(se){N=se},setClear:function(se){xe!==se&&(xe=se,ce&&(se=1-se),s.clearDepth(se))},reset:function(){N=!1,j=null,he=null,xe=null,ce=!1}}}function i(){let N=!1,ce=null,j=null,he=null,xe=null,se=null,Pe=null,Te=null,ut=null;return{setTest:function(tt){N||(tt?te(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(tt){ce!==tt&&!N&&(s.stencilMask(tt),ce=tt)},setFunc:function(tt,sn,mn){(j!==tt||he!==sn||xe!==mn)&&(s.stencilFunc(tt,sn,mn),j=tt,he=sn,xe=mn)},setOp:function(tt,sn,mn){(se!==tt||Pe!==sn||Te!==mn)&&(s.stencilOp(tt,sn,mn),se=tt,Pe=sn,Te=mn)},setLocked:function(tt){N=tt},setClear:function(tt){ut!==tt&&(s.clearStencil(tt),ut=tt)},reset:function(){N=!1,ce=null,j=null,he=null,xe=null,se=null,Pe=null,Te=null,ut=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},m=new WeakMap,f=[],_=null,p=!1,g=null,S=null,T=null,y=null,E=null,b=null,R=null,v=new Ue(0,0,0),w=0,C=!1,L=null,U=null,k=null,P=null,H=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),G=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),G=ee>=2);let X=null,Z={};const Ee=s.getParameter(s.SCISSOR_BOX),me=s.getParameter(s.VIEWPORT),We=new ct().fromArray(Ee),Ye=new ct().fromArray(me);function Je(N,ce,j,he){const xe=new Uint8Array(4),se=s.createTexture();s.bindTexture(N,se),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<j;Pe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(ce+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return se}const J={};J[s.TEXTURE_2D]=Je(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(s.DEPTH_TEST),a.setFunc(ys),K(!1),ie(xl),te(s.CULL_FACE),Qe(Hn);function te(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function ge(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Fe(N,ce){return u[N]!==ce?(s.bindFramebuffer(N,ce),u[N]=ce,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function de(N,ce){let j=f,he=!1;if(N){j=m.get(ce),j===void 0&&(j=[],m.set(ce,j));const xe=N.textures;if(j.length!==xe.length||j[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Pe=xe.length;se<Pe;se++)j[se]=s.COLOR_ATTACHMENT0+se;j.length=xe.length,he=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,he=!0);he&&s.drawBuffers(j)}function Ne(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const et={[Fi]:s.FUNC_ADD,[Td]:s.FUNC_SUBTRACT,[wd]:s.FUNC_REVERSE_SUBTRACT};et[Ad]=s.MIN,et[Rd]=s.MAX;const ze={[Cd]:s.ZERO,[Pd]:s.ONE,[Id]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[Od]:s.SRC_ALPHA_SATURATE,[Ud]:s.DST_COLOR,[Dd]:s.DST_ALPHA,[Ld]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[Fd]:s.ONE_MINUS_DST_COLOR,[Nd]:s.ONE_MINUS_DST_ALPHA,[kd]:s.CONSTANT_COLOR,[Bd]:s.ONE_MINUS_CONSTANT_COLOR,[zd]:s.CONSTANT_ALPHA,[Hd]:s.ONE_MINUS_CONSTANT_ALPHA};function Qe(N,ce,j,he,xe,se,Pe,Te,ut,tt){if(N===Hn){p===!0&&(ge(s.BLEND),p=!1);return}if(p===!1&&(te(s.BLEND),p=!0),N!==Ed){if(N!==g||tt!==C){if((S!==Fi||E!==Fi)&&(s.blendEquation(s.FUNC_ADD),S=Fi,E=Fi),tt)switch(N){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFunc(s.ONE,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ml:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Oe("WebGLState: Invalid blending: ",N);break}else switch(N){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yl:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",N);break}T=null,y=null,b=null,R=null,v.set(0,0,0),w=0,g=N,C=tt}return}xe=xe||ce,se=se||j,Pe=Pe||he,(ce!==S||xe!==E)&&(s.blendEquationSeparate(et[ce],et[xe]),S=ce,E=xe),(j!==T||he!==y||se!==b||Pe!==R)&&(s.blendFuncSeparate(ze[j],ze[he],ze[se],ze[Pe]),T=j,y=he,b=se,R=Pe),(Te.equals(v)===!1||ut!==w)&&(s.blendColor(Te.r,Te.g,Te.b,ut),v.copy(Te),w=ut),g=N,C=!1}function it(N,ce){N.side===Mn?ge(s.CULL_FACE):te(s.CULL_FACE);let j=N.side===Gt;ce&&(j=!j),K(j),N.blending===gs&&N.transparent===!1?Qe(Hn):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const he=N.stencilWrite;o.setTest(he),he&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ht(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){L!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),L=N)}function ie(N){N!==Md?(te(s.CULL_FACE),N!==U&&(N===xl?s.cullFace(s.BACK):N===bd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),U=N}function ve(N){N!==k&&(G&&s.lineWidth(N),k=N)}function ht(N,ce,j){N?(te(s.POLYGON_OFFSET_FILL),(P!==ce||H!==j)&&(P=ce,H=j,a.getReversed()&&(ce=-ce),s.polygonOffset(ce,j))):ge(s.POLYGON_OFFSET_FILL)}function Ie(N){N?te(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function st(N){N===void 0&&(N=s.TEXTURE0+V-1),X!==N&&(s.activeTexture(N),X=N)}function I(N,ce,j){j===void 0&&(X===null?j=s.TEXTURE0+V-1:j=X);let he=Z[j];he===void 0&&(he={type:void 0,texture:void 0},Z[j]=he),(he.type!==N||he.texture!==ce)&&(X!==j&&(s.activeTexture(j),X=j),s.bindTexture(N,ce||J[N]),he.type=N,he.texture=ce)}function mt(){const N=Z[X];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Le(){try{s.compressedTexImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function x(){try{s.texSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function F(){try{s.texSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function re(){try{s.texStorage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function ae(){try{s.texStorage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function Q(){try{s.texImage2D(...arguments)}catch(N){Oe("WebGLState:",N)}}function ne(){try{s.texImage3D(...arguments)}catch(N){Oe("WebGLState:",N)}}function oe(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Ae(N,ce){d[N]!==ce&&(s.pixelStorei(N,ce),d[N]=ce)}function ue(N){We.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),We.copy(N))}function le(N){Ye.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ye.copy(N))}function Re(N,ce){let j=c.get(ce);j===void 0&&(j=new WeakMap,c.set(ce,j));let he=j.get(N);he===void 0&&(he=s.getUniformBlockIndex(ce,N.name),j.set(N,he))}function De(N,ce){const he=c.get(ce).get(N);l.get(ce)!==he&&(s.uniformBlockBinding(ce,he,N.__bindingPointIndex),l.set(ce,he))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,Z={},u={},m=new WeakMap,f=[],_=null,p=!1,g=null,S=null,T=null,y=null,E=null,b=null,R=null,v=new Ue(0,0,0),w=0,C=!1,L=null,U=null,k=null,P=null,H=null,We.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ge,bindFramebuffer:Fe,drawBuffers:de,useProgram:Ne,setBlending:Qe,setMaterial:it,setFlipSided:K,setCullFace:ie,setLineWidth:ve,setPolygonOffset:ht,setScissorTest:Ie,activeTexture:st,bindTexture:I,unbindTexture:mt,compressedTexImage2D:Le,compressedTexImage3D:A,texImage2D:Q,texImage3D:ne,pixelStorei:Ae,getParameter:oe,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:re,texStorage3D:ae,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:ue,viewport:le,reset:Be}}function T_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap,d=new Set;let u;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return f?new OffscreenCanvas(A,x):ws("canvas")}function p(A,x,F){let W=1;const $=Le(A);if(($.width>F||$.height>F)&&(W=F/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const re=Math.floor(W*$.width),ae=Math.floor(W*$.height);u===void 0&&(u=_(re,ae));const Q=x?_(re,ae):u;return Q.width=re,Q.height=ae,Q.getContext("2d").drawImage(A,0,0,re,ae),Ce("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+ae+")."),Q}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function g(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,x,F,W,$,re=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===s.RED&&(F===s.FLOAT&&(Q=s.R32F),F===s.HALF_FLOAT&&(Q=s.R16F),F===s.UNSIGNED_BYTE&&(Q=s.R8),F===s.UNSIGNED_SHORT&&ae&&(Q=ae.R16_EXT),F===s.SHORT&&ae&&(Q=ae.R16_SNORM_EXT)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Q=s.R8UI),F===s.UNSIGNED_SHORT&&(Q=s.R16UI),F===s.UNSIGNED_INT&&(Q=s.R32UI),F===s.BYTE&&(Q=s.R8I),F===s.SHORT&&(Q=s.R16I),F===s.INT&&(Q=s.R32I)),x===s.RG&&(F===s.FLOAT&&(Q=s.RG32F),F===s.HALF_FLOAT&&(Q=s.RG16F),F===s.UNSIGNED_BYTE&&(Q=s.RG8),F===s.UNSIGNED_SHORT&&ae&&(Q=ae.RG16_EXT),F===s.SHORT&&ae&&(Q=ae.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Q=s.RG8UI),F===s.UNSIGNED_SHORT&&(Q=s.RG16UI),F===s.UNSIGNED_INT&&(Q=s.RG32UI),F===s.BYTE&&(Q=s.RG8I),F===s.SHORT&&(Q=s.RG16I),F===s.INT&&(Q=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),F===s.UNSIGNED_INT&&(Q=s.RGB32UI),F===s.BYTE&&(Q=s.RGB8I),F===s.SHORT&&(Q=s.RGB16I),F===s.INT&&(Q=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),F===s.UNSIGNED_INT&&(Q=s.RGBA32UI),F===s.BYTE&&(Q=s.RGBA8I),F===s.SHORT&&(Q=s.RGBA16I),F===s.INT&&(Q=s.RGBA32I)),x===s.RGB&&(F===s.UNSIGNED_SHORT&&ae&&(Q=ae.RGB16_EXT),F===s.SHORT&&ae&&(Q=ae.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),x===s.RGBA){const ne=re?Sr:$e.getTransfer($);F===s.FLOAT&&(Q=s.RGBA32F),F===s.HALF_FLOAT&&(Q=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Q=ne===rt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&ae&&(Q=ae.RGBA16_EXT),F===s.SHORT&&ae&&(Q=ae.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(A,x){let F;return A?x===null||x===An||x===bs?F=s.DEPTH24_STENCIL8:x===en?F=s.DEPTH32F_STENCIL8:x===Ms&&(F=s.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===An||x===bs?F=s.DEPTH_COMPONENT24:x===en?F=s.DEPTH_COMPONENT32F:x===Ms&&(F=s.DEPTH_COMPONENT16),F}function b(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==wt&&A.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(A){const x=A.target;x.removeEventListener("dispose",v),L(x)}function w(A){const x=n.get(A);if(x.__webglInit===void 0)return;const F=A.source,W=m.get(F);if(W){const $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(A),Object.keys(W).length===0&&m.delete(F)}n.remove(A)}function C(A){const x=n.get(A);s.deleteTexture(x.__webglTexture);const F=A.source,W=m.get(F);delete W[x.__cacheKey],a.memory.textures--}function L(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[W][$]);else s.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)s.deleteFramebuffer(x.__webglFramebuffer[W]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=A.textures;for(let W=0,$=F.length;W<$;W++){const re=n.get(F[W]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),n.remove(F[W])}n.remove(A)}let U=0;function k(){U=0}function P(){return U}function H(A){U=A}function V(){const A=U;return A>=i.maxTextures&&Ce("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function ee(A,x){const F=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const W=A.image;if(W===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(F,A,x);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function Y(A,x){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ge(F,A,x);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function X(A,x){const F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ge(F,A,x);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function Z(A,x){const F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){Fe(F,A,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const Ee={[wn]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[yr]:s.MIRRORED_REPEAT},me={[wt]:s.NEAREST,[ah]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[At]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},We={[Zd]:s.NEVER,[tu]:s.ALWAYS,[Jd]:s.LESS,[Io]:s.LEQUAL,[Qd]:s.EQUAL,[Lo]:s.GEQUAL,[jd]:s.GREATER,[eu]:s.NOTEQUAL};function Ye(A,x){if(x.type===en&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===At||x.magFilter===hr||x.magFilter===us||x.magFilter===Bn||x.minFilter===At||x.minFilter===hr||x.minFilter===us||x.minFilter===Bn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ee[x.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ee[x.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ee[x.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,me[x.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,me[x.minFilter]),x.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,We[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wt||x.minFilter!==us&&x.minFilter!==Bn||x.type===en&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Je(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const W=x.source;let $=m.get(W);$===void 0&&($={},m.set(W,$));const re=G(x);if(re!==A.__cacheKey){$[re]===void 0&&($[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[re].usedTimes++;const ae=$[A.__cacheKey];ae!==void 0&&($[A.__cacheKey].usedTimes--,ae.usedTimes===0&&C(x)),A.__cacheKey=re,A.__webglTexture=$[re].texture}return F}function J(A,x,F){return Math.floor(Math.floor(A/F)/x)}function te(A,x,F,W){const re=A.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,F,W,x.data);else{re.sort((Ae,ue)=>Ae.start-ue.start);let ae=0;for(let Ae=1;Ae<re.length;Ae++){const ue=re[ae],le=re[Ae],Re=ue.start+ue.count,De=J(le.start,x.width,4),Be=J(ue.start,x.width,4);le.start<=Re+1&&De===Be&&J(le.start+le.count-1,x.width,4)===De?ue.count=Math.max(ue.count,le.start+le.count-ue.start):(++ae,re[ae]=le)}re.length=ae+1;const Q=t.getParameter(s.UNPACK_ROW_LENGTH),ne=t.getParameter(s.UNPACK_SKIP_PIXELS),oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Ae=0,ue=re.length;Ae<ue;Ae++){const le=re[Ae],Re=Math.floor(le.start/4),De=Math.ceil(le.count/4),Be=Re%x.width,N=Math.floor(Re/x.width),ce=De,j=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Be,N,ce,j,F,W,x.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Q),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(s.UNPACK_SKIP_ROWS,oe)}}function ge(A,x,F){let W=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=s.TEXTURE_3D);const $=Je(A,x),re=x.source;t.bindTexture(W,A.__webglTexture,s.TEXTURE0+F);const ae=n.get(re);if(re.version!==ae.__version||$===!0){if(t.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const j=$e.getPrimaries($e.workingColorSpace),he=x.colorSpace===kn?null:$e.getPrimaries(x.colorSpace),xe=x.colorSpace===kn||j===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=p(x.image,!1,i.maxTextureSize);ne=mt(x,ne);const oe=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type);let ue=y(x.internalFormat,oe,Ae,x.normalized,x.colorSpace,x.isVideoTexture);Ye(W,x);let le;const Re=x.mipmaps,De=x.isVideoTexture!==!0,Be=ae.__version===void 0||$===!0,N=re.dataReady,ce=b(x,ne);if(x.isDepthTexture)ue=E(x.format===mi,x.type),Be&&(De?t.texStorage2D(s.TEXTURE_2D,1,ue,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,ue,ne.width,ne.height,0,oe,Ae,null));else if(x.isDataTexture)if(Re.length>0){De&&Be&&t.texStorage2D(s.TEXTURE_2D,ce,ue,Re[0].width,Re[0].height);for(let j=0,he=Re.length;j<he;j++)le=Re[j],De?N&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,le.width,le.height,oe,Ae,le.data):t.texImage2D(s.TEXTURE_2D,j,ue,le.width,le.height,0,oe,Ae,le.data);x.generateMipmaps=!1}else De?(Be&&t.texStorage2D(s.TEXTURE_2D,ce,ue,ne.width,ne.height),N&&te(x,ne,oe,Ae)):t.texImage2D(s.TEXTURE_2D,0,ue,ne.width,ne.height,0,oe,Ae,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,ue,Re[0].width,Re[0].height,ne.depth);for(let j=0,he=Re.length;j<he;j++)if(le=Re[j],x.format!==tn)if(oe!==null)if(De){if(N)if(x.layerUpdates.size>0){const xe=fc(le.width,le.height,x.format,x.type);for(const se of x.layerUpdates){const Pe=le.data.subarray(se*xe/le.data.BYTES_PER_ELEMENT,(se+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,se,le.width,le.height,1,oe,Pe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ne.depth,oe,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,ue,le.width,le.height,ne.depth,0,le.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ne.depth,oe,Ae,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,ue,le.width,le.height,ne.depth,0,oe,Ae,le.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{De&&Be&&t.texStorage2D(s.TEXTURE_2D,ce,ue,Re[0].width,Re[0].height);for(let j=0,he=Re.length;j<he;j++)le=Re[j],x.format!==tn?oe!==null?De?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,le.width,le.height,oe,le.data):t.compressedTexImage2D(s.TEXTURE_2D,j,ue,le.width,le.height,0,le.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?N&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,le.width,le.height,oe,Ae,le.data):t.texImage2D(s.TEXTURE_2D,j,ue,le.width,le.height,0,oe,Ae,le.data)}else if(x.isDataArrayTexture)if(De){if(Be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,ue,ne.width,ne.height,ne.depth),N)if(x.layerUpdates.size>0){const j=fc(ne.width,ne.height,x.format,x.type);for(const he of x.layerUpdates){const xe=ne.data.subarray(he*j/ne.data.BYTES_PER_ELEMENT,(he+1)*j/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ne.width,ne.height,1,oe,Ae,xe)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ae,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ue,ne.width,ne.height,ne.depth,0,oe,Ae,ne.data);else if(x.isData3DTexture)De?(Be&&t.texStorage3D(s.TEXTURE_3D,ce,ue,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ae,ne.data)):t.texImage3D(s.TEXTURE_3D,0,ue,ne.width,ne.height,ne.depth,0,oe,Ae,ne.data);else if(x.isFramebufferTexture){if(Be)if(De)t.texStorage2D(s.TEXTURE_2D,ce,ue,ne.width,ne.height);else{let j=ne.width,he=ne.height;for(let xe=0;xe<ce;xe++)t.texImage2D(s.TEXTURE_2D,xe,ue,j,he,0,oe,Ae,null),j>>=1,he>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ne.parentNode!==j){j.appendChild(ne),d.add(x),j.onpaint=he=>{const xe=he.changedElements;for(const se of d)xe.includes(se.image)&&(se.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ne);else{const xe=s.RGBA,se=s.RGBA,Pe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xe,se,Pe,ne)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Re.length>0){if(De&&Be){const j=Le(Re[0]);t.texStorage2D(s.TEXTURE_2D,ce,ue,j.width,j.height)}for(let j=0,he=Re.length;j<he;j++)le=Re[j],De?N&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,oe,Ae,le):t.texImage2D(s.TEXTURE_2D,j,ue,oe,Ae,le);x.generateMipmaps=!1}else if(De){if(Be){const j=Le(ne);t.texStorage2D(s.TEXTURE_2D,ce,ue,j.width,j.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Ae,ne)}else t.texImage2D(s.TEXTURE_2D,0,ue,oe,Ae,ne);g(x)&&S(W),ae.__version=re.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Fe(A,x,F){if(x.image.length!==6)return;const W=Je(A,x),$=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const re=n.get($);if($.version!==re.__version||W===!0){t.activeTexture(s.TEXTURE0+F);const ae=$e.getPrimaries($e.workingColorSpace),Q=x.colorSpace===kn?null:$e.getPrimaries(x.colorSpace),ne=x.colorSpace===kn||ae===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ae=x.image[0]&&x.image[0].isDataTexture,ue=[];for(let se=0;se<6;se++)!oe&&!Ae?ue[se]=p(x.image[se],!0,i.maxCubemapSize):ue[se]=Ae?x.image[se].image:x.image[se],ue[se]=mt(x,ue[se]);const le=ue[0],Re=r.convert(x.format,x.colorSpace),De=r.convert(x.type),Be=y(x.internalFormat,Re,De,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ce=re.__version===void 0||W===!0,j=$.dataReady;let he=b(x,le);Ye(s.TEXTURE_CUBE_MAP,x);let xe;if(oe){N&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Be,le.width,le.height);for(let se=0;se<6;se++){xe=ue[se].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){const Te=xe[Pe];x.format!==tn?Re!==null?N?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Te.width,Te.height,Re,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Be,Te.width,Te.height,0,Te.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,0,0,Te.width,Te.height,Re,De,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe,Be,Te.width,Te.height,0,Re,De,Te.data)}}}else{if(xe=x.mipmaps,N&&ce){xe.length>0&&he++;const se=Le(ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,Be,se.width,se.height)}for(let se=0;se<6;se++)if(Ae){N?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ue[se].width,ue[se].height,Re,De,ue[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,ue[se].width,ue[se].height,0,Re,De,ue[se].data);for(let Pe=0;Pe<xe.length;Pe++){const ut=xe[Pe].image[se].image;N?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,ut.width,ut.height,Re,De,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Be,ut.width,ut.height,0,Re,De,ut.data)}}else{N?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Re,De,ue[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Be,Re,De,ue[se]);for(let Pe=0;Pe<xe.length;Pe++){const Te=xe[Pe];N?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,0,0,Re,De,Te.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe+1,Be,Re,De,Te.image[se])}}}g(x)&&S(s.TEXTURE_CUBE_MAP),re.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function de(A,x,F,W,$,re){const ae=r.convert(F.format,F.colorSpace),Q=r.convert(F.type),ne=y(F.internalFormat,ae,Q,F.normalized,F.colorSpace),oe=n.get(x),Ae=n.get(F);if(Ae.__renderTarget=x,!oe.__hasExternalTextures){const ue=Math.max(1,x.width>>re),le=Math.max(1,x.height>>re);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,re,ne,ue,le,x.depth,0,ae,Q,null):t.texImage2D($,re,ne,ue,le,0,ae,Q,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),st(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,$,Ae.__webglTexture,0,Ie(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,$,Ae.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(A,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),x.depthBuffer){const W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,re=E(x.stencilBuffer,$),ae=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;st(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie(x),re,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie(x),re,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,re,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,A)}else{const W=x.textures;for(let $=0;$<W.length;$++){const re=W[$],ae=r.convert(re.format,re.colorSpace),Q=r.convert(re.type),ne=y(re.internalFormat,ae,Q,re.normalized,re.colorSpace);st(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie(x),ne,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie(x),ne,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ne,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function et(A,x,F){const W=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,x.depthTexture);const oe=r.convert(x.depthTexture.format),Ae=r.convert(x.depthTexture.type);let ue;x.depthTexture.format===Gn?ue=s.DEPTH_COMPONENT24:x.depthTexture.format===mi&&(ue=s.DEPTH24_STENCIL8);for(let le=0;le<6;le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ue,x.width,x.height,0,oe,Ae,null)}}else ee(x.depthTexture,0);const re=$.__webglTexture,ae=Ie(x),Q=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,ne=x.depthTexture.format===mi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gn)st(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,Q,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,ne,Q,re,0);else if(x.depthTexture.format===mi)st(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,Q,re,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,ne,Q,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(A){const x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const W=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let W=0;W<6;W++)et(x.__webglFramebuffer[W],A,W);else{const W=A.texture.mipmaps;W&&W.length>0?et(x.__webglFramebuffer[0],A,0):et(x.__webglFramebuffer,A,0)}else if(F){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=s.createRenderbuffer(),Ne(x.__webglDepthbuffer[W],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,re)}}else{const W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ne(x.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(A,x,F){const W=n.get(A);x!==void 0&&de(W.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&ze(A)}function it(A){const x=A.texture,F=n.get(A),W=n.get(x);A.addEventListener("dispose",v);const $=A.textures,re=A.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=x.version,a.memory.textures++),re){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[Q]=[];for(let ne=0;ne<x.mipmaps.length;ne++)F.__webglFramebuffer[Q][ne]=s.createFramebuffer()}else F.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)F.__webglFramebuffer[Q]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ae)for(let Q=0,ne=$.length;Q<ne;Q++){const oe=n.get($[Q]);oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&st(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){const ne=$[Q];F.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);const oe=r.convert(ne.format,ne.colorSpace),Ae=r.convert(ne.type),ue=y(ne.internalFormat,oe,Ae,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),le=Ie(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,ue,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)de(F.__webglFramebuffer[Q][ne],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else de(F.__webglFramebuffer[Q],A,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(x)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Q=0,ne=$.length;Q<ne;Q++){const oe=$[Q],Ae=n.get(oe);let ue=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ae.__webglTexture),Ye(ue,oe),de(F.__webglFramebuffer,A,oe,s.COLOR_ATTACHMENT0+Q,ue,0),g(oe)&&S(ue)}t.unbindTexture()}else{let Q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),Ye(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)de(F.__webglFramebuffer[ne],A,x,s.COLOR_ATTACHMENT0,Q,ne);else de(F.__webglFramebuffer,A,x,s.COLOR_ATTACHMENT0,Q,0);g(x)&&S(Q),t.unbindTexture()}A.depthBuffer&&ze(A)}function K(A){const x=A.textures;for(let F=0,W=x.length;F<W;F++){const $=x[F];if(g($)){const re=T(A),ae=n.get($).__webglTexture;t.bindTexture(re,ae),S(re),t.unbindTexture()}}}const ie=[],ve=[];function ht(A){if(A.samples>0){if(st(A)===!1){const x=A.textures,F=A.width,W=A.height;let $=s.COLOR_BUFFER_BIT;const re=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(A),Q=x.length>1;if(Q)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ne=A.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=n.get(x[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,F,W,0,0,F,W,$,s.NEAREST),l===!0&&(ie.length=0,ve.length=0,ie.push(s.COLOR_ATTACHMENT0+oe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ie.push(re),ve.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);const Ae=n.get(x[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const x=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Ie(A){return Math.min(i.maxSamples,A.samples)}function st(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(A){const x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function mt(A,x){const F=A.colorSpace,W=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==$t&&F!==kn&&($e.getTransfer(F)===rt?(W!==tn||$!==Kt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",F)),x}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.getTextureUnits=P,this.setTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=Qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=de,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w_(s,e){function t(n,i=kn){let r;const a=$e.getTransfer(i);if(n===Kt)return s.UNSIGNED_BYTE;if(n===To)return s.UNSIGNED_SHORT_4_4_4_4;if(n===wo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return s.BYTE;if(n===lh)return s.SHORT;if(n===Ms)return s.UNSIGNED_SHORT;if(n===Eo)return s.INT;if(n===An)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===Rn)return s.HALF_FLOAT;if(n===dh)return s.ALPHA;if(n===uh)return s.RGB;if(n===tn)return s.RGBA;if(n===Gn)return s.DEPTH_COMPONENT;if(n===mi)return s.DEPTH_STENCIL;if(n===Ao)return s.RED;if(n===Ro)return s.RED_INTEGER;if(n===_i)return s.RG;if(n===Co)return s.RG_INTEGER;if(n===Po)return s.RGBA_INTEGER;if(n===dr||n===ur||n===fr||n===pr)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===ka||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Mr||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Ha)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return r.COMPRESSED_R11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return r.COMPRESSED_RG11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Ya||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===oo||n===lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===ho||n===br||n===uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:A_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P_ extends xi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,f=null;const _=typeof XRWebGLBinding<"u",p=new C_,g={},S=t.getContextAttributes();let T=null,y=null;const E=[],b=[],R=new qe;let v=null,w=null;const C=new Lt;C.viewport=new ct;const L=new Lt;L.viewport=new ct;const U=[C,L],k=new Cf;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=E[J];return te===void 0&&(te=new jr,E[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=E[J];return te===void 0&&(te=new jr,E[J]=te),te.getGripSpace()},this.getHand=function(J){let te=E[J];return te===void 0&&(te=new jr,E[J]=te),te.getHandSpace()};function V(J){const te=b.indexOf(J.inputSource);if(te===-1)return;const ge=E[te];ge!==void 0&&(ge.update(J.inputSource,J.frame,c||a),ge.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",ee);for(let J=0;J<E.length;J++){const te=b[J];te!==null&&(b[J]=null,E[J].disconnect(te))}P=null,H=null,p.reset();for(const J in g)delete g[J];if(e.setRenderTarget(T),m=null,u=null,d=null,i=null,y=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(R.width,R.height,!1),w!==null){const J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",G),i.addEventListener("inputsourceschange",ee),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,de=null;S.depth&&(de=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?mi:Gn,Fe=S.stencil?bs:An);const Ne={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ne),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new fn(u.textureWidth,u.textureHeight,{format:tn,type:Kt,depthTexture:new As(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new fn(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ee(J){for(let te=0;te<J.removed.length;te++){const ge=J.removed[te],Fe=b.indexOf(ge);Fe>=0&&(b[Fe]=null,E[Fe].disconnect(ge))}for(let te=0;te<J.added.length;te++){const ge=J.added[te];let Fe=b.indexOf(ge);if(Fe===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=b.length){b.push(ge),Fe=Ne;break}else if(b[Ne]===null){b[Ne]=ge,Fe=Ne;break}if(Fe===-1)break}const de=E[Fe];de&&de.connect(ge)}}const Y=new O,X=new O;function Z(J,te,ge){Y.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const Fe=Y.distanceTo(X),de=te.projectionMatrix.elements,Ne=ge.projectionMatrix.elements,et=de[14]/(de[10]-1),ze=de[14]/(de[10]+1),Qe=(de[9]+1)/de[5],it=(de[9]-1)/de[5],K=(de[8]-1)/de[0],ie=(Ne[8]+1)/Ne[0],ve=et*K,ht=et*ie,Ie=Fe/(-K+ie),st=Ie*-K;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(st),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),de[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const I=et+Ie,mt=ze+Ie,Le=ve-st,A=ht+(Fe-st),x=Qe*ze/mt*I,F=it*ze/mt*I;J.projectionMatrix.makePerspective(Le,A,x,F,I,mt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ee(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let te=J.near,ge=J.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),k.near=L.near=C.near=te,k.far=L.far=C.far=ge,(P!==k.near||H!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),P=k.near,H=k.far),k.layers.mask=J.layers.mask|6,C.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Fe=J.parent,de=k.cameras;Ee(k,Fe);for(let Ne=0;Ne<de.length;Ne++)Ee(de[Ne],Fe);de.length===2?Z(k,C,L):k.projectionMatrix.copy(C.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),me(J,k,Fe)};function me(J,te,ge){ge===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(ge.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Gi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(J){return g[J]};let We=null;function Ye(J,te){if(h=te.getViewerPose(c||a),f=te,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Fe=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let ze=0;ze<ge.length;ze++){const Qe=ge[ze];let it=null;if(m!==null)it=m.getViewport(Qe);else{const ie=d.getViewSubImage(u,Qe);it=ie.viewport,ze===0&&(e.setRenderTargetTextures(y,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(y))}let K=U[ze];K===void 0&&(K=new Lt,K.layers.enable(ze),K.viewport=new ct,U[ze]=K),K.matrix.fromArray(Qe.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Qe.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(it.x,it.y,it.width,it.height),ze===0&&(k.matrix.copy(K.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(K)}const de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const ze=d.getDepthInformation(ge[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,i.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let ze=0;ze<ge.length;ze++){const Qe=ge[ze].camera;if(Qe){let it=g[Qe];it||(it=new wh,g[Qe]=it);const K=d.getCameraImage(Qe);it.sourceTexture=K}}}}for(let ge=0;ge<E.length;ge++){const Fe=b[ge],de=E[ge];Fe!==null&&de!==void 0&&de.update(Fe,te,c||a)}We&&We(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),f=null}const Je=new Lh;Je.setAnimationLoop(Ye),this.setAnimationLoop=function(J){We=J},this.dispose=function(){}}}const I_=new Ge,Bh=new ke;Bh.set(-1,0,0,0,1,0,0,0,1);function L_(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Ah(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,S,T,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&m(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),f(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,S,T):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Gt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Gt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const S=e.get(g),T=S.envMap,y=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,S,T){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*S,p.scale.value=T*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function m(p,g,S){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function f(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const S=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const b=E.program;n.uniformBlockBinding(y,b)}function c(y,E){let b=i[y.id];b===void 0&&(p(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",S));const R=E.program;n.updateUBOMapping(y,R);const v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){const E=d();y.__bindingPointIndex=E;const b=s.createBuffer(),R=y.__size,v=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const E=i[y.id],b=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let v=0,w=b.length;v<w;v++){const C=b[v];if(Array.isArray(C))for(let L=0,U=C.length;L<U;L++)m(C[L],v,L,R);else m(C,v,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,E,b,R){if(_(y,E,b,R)===!0){const v=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let L=0;L<w.length;L++){const U=w[L],k=g(U);f(U,y.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(w,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,y.__data)}}function f(y,E,b){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,b)}function _(y,E,b,R){const v=y.value,w=E+"_"+b;if(R[w]===void 0)return typeof v=="number"||typeof v=="boolean"?R[w]=v:ArrayBuffer.isView(v)?R[w]=v.slice():R[w]=v.clone(),!0;{const C=R[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(y){const E=y.uniforms;let b=0;const R=16;for(let w=0,C=E.length;w<C;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let U=0,k=L.length;U<k;U++){const P=L[U],H=Array.isArray(P.value)?P.value:[P.value];for(let V=0,G=H.length;V<G;V++){const ee=H[V],Y=g(ee),X=b%R,Z=X%Y.boundary,Ee=X+Z;b+=Z,Ee!==0&&R-Ee<Y.storage&&(b+=R-Ee),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=Y.storage}}}const v=b%R;return v>0&&(b+=R-v),y.__size=b,y.__cache={},this}function g(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",y),E}function S(y){const E=y.target;E.removeEventListener("dispose",S);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function T(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:T}}const N_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function U_(){return xn===null&&(xn=new Oo(N_,16,16,_i,Rn),xn.name="DFG_LUT",xn.minFilter=At,xn.magFilter=At,xn.wrapS=bn,xn.wrapT=bn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class F_{constructor(e={}){const{canvas:t=su(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Kt}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=m,p=new Set([Po,Co,Ro]),g=new Set([Kt,An,Ms,bs,To,wo]),S=new Uint32Array(4),T=new Int32Array(4),y=new O;let E=null,b=null;const R=[],v=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,U=null,k=null,P=null,H=null;this._outputColorSpace=yt;let V=0,G=0,ee=null,Y=-1,X=null;const Z=new ct,Ee=new ct;let me=null;const We=new Ue(0);let Ye=0,Je=t.width,J=t.height,te=1,ge=null,Fe=null;const de=new ct(0,0,Je,J),Ne=new ct(0,0,Je,J);let et=!1;const ze=new Bo;let Qe=!1,it=!1;const K=new Ge,ie=new O,ve=new ct,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function st(){return ee===null?te:1}let I=n;function mt(M,D){return t.getContext(M,D)}let Le,A,x,F,W,$,re,ae,Q,ne,oe,Ae,ue,le,Re,De,Be,N,ce,j,he,xe,se;try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",sn,!1),I===null){const D="webgl2";if(I=mt(D,M),I===null)throw mt(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(M){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),Oe("WebGLRenderer: "+M.message),M}function Pe(){Le=new U0(I),Le.init(),he=new w_(I,Le),A=new T0(I,Le,e,he),x=new E_(I,Le),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),k=I.createFramebuffer(),P=I.createFramebuffer(),H=I.createFramebuffer(),F=new k0(I),W=new h_,$=new T_(I,Le,x,W,A,he,F),re=new N0(C),ae=new zf(I),xe=new S0(I,ae),Q=new F0(I,ae,F,xe),ne=new z0(I,Q,ae,xe,F),N=new B0(I,A,$),Re=new w0(W),oe=new c_(C,re,Le,A,xe,Re),Ae=new L_(C,W),ue=new u_,le=new x_(Le),Be=new b0(C,re,x,ne,f,l),De=new S_(C,ne,A),se=new D_(I,F,A,x),ce=new E0(I,Le,F),j=new O0(I,Le,F),F.programs=oe.programs,C.capabilities=A,C.extensions=Le,C.properties=W,C.renderLists=ue,C.shadowMap=De,C.state=x,C.info=F}_!==Kt&&(w=new V0(_,t.width,t.height,o,i,r));const Te=new P_(C,I);this.xr=Te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(Je,J,!1))},this.getSize=function(M){return M.set(Je,J)},this.setSize=function(M,D,q=!0){if(Te.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Je=M,J=D,t.width=Math.floor(M*te),t.height=Math.floor(D*te),q===!0&&(t.style.width=M+"px",t.style.height=D+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Je*te,J*te).floor()},this.setDrawingBufferSize=function(M,D,q){Je=M,J=D,te=q,t.width=Math.floor(M*q),t.height=Math.floor(D*q),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(_===Kt){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Z)},this.getViewport=function(M){return M.copy(de)},this.setViewport=function(M,D,q,B){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,D,q,B),x.viewport(Z.copy(de).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,D,q,B){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,D,q,B),x.scissor(Ee.copy(Ne).multiplyScalar(te).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){x.setScissorTest(et=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){Fe=M},this.getClearColor=function(M){return M.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,q=!0){let B=0;if(M){let z=!1;if(ee!==null){const _e=ee.texture.format;z=p.has(_e)}if(z){const _e=ee.texture.type,Me=g.has(_e),pe=Be.getClearColor(),be=Be.getClearAlpha(),we=pe.r,He=pe.g,Ke=pe.b;Me?(S[0]=we,S[1]=He,S[2]=Ke,S[3]=be,I.clearBufferuiv(I.COLOR,0,S)):(T[0]=we,T[1]=He,T[2]=Ke,T[3]=be,I.clearBufferiv(I.COLOR,0,T))}else B|=I.COLOR_BUFFER_BIT}D&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",sn,!1),Be.dispose(),ue.dispose(),le.dispose(),W.dispose(),re.dispose(),ne.dispose(),xe.dispose(),se.dispose(),oe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",tl),Te.removeEventListener("sessionend",nl),li.stop()};function ut(M){M.preventDefault(),Er("WebGLRenderer: Context Lost."),L=!0}function tt(){Er("WebGLRenderer: Context Restored."),L=!1;const M=F.autoReset,D=De.enabled,q=De.autoUpdate,B=De.needsUpdate,z=De.type;Pe(),F.autoReset=M,De.enabled=D,De.autoUpdate=q,De.needsUpdate=B,De.type=z}function sn(M){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function mn(M){const D=M.target;D.removeEventListener("dispose",mn),Xh(D)}function Xh(M){qh(M),W.remove(M)}function qh(M){const D=W.get(M).programs;D!==void 0&&(D.forEach(function(q){oe.releaseProgram(q)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,q,B,z,_e){D===null&&(D=ht);const Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=$h(M,D,q,B,z);x.setMaterial(B,Me);let be=q.index,we=1;if(B.wireframe===!0){if(be=Q.getWireframeAttribute(q),be===void 0)return;we=2}const He=q.drawRange,Ke=q.attributes.position;let Se=He.start*we,nt=(He.start+He.count)*we;_e!==null&&(Se=Math.max(Se,_e.start*we),nt=Math.min(nt,(_e.start+_e.count)*we)),be!==null?(Se=Math.max(Se,0),nt=Math.min(nt,be.count)):Ke!=null&&(Se=Math.max(Se,0),nt=Math.min(nt,Ke.count));const St=nt-Se;if(St<0||St===1/0)return;xe.setup(z,B,pe,q,be);let pt,dt=ce;if(be!==null&&(pt=ae.get(be),dt=j,dt.setIndex(pt)),z.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*st()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(z.isLine){let Nt=B.linewidth;Nt===void 0&&(Nt=1),x.setLineWidth(Nt*st()),z.isLineSegments?dt.setMode(I.LINES):z.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else z.isPoints?dt.setMode(I.POINTS):z.isSprite&&dt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Nt=z._multiDrawStarts,ye=z._multiDrawCounts,kt=z._multiDrawCount,je=be?ae.get(be).bytesPerElement:1,Zt=W.get(B).currentProgram.getUniforms();for(let gn=0;gn<kt;gn++)Zt.setValue(I,"_gl_DrawID",gn),dt.render(Nt[gn]/je,ye[gn])}else if(z.isInstancedMesh)dt.renderInstances(Se,St,z.count);else if(q.isInstancedBufferGeometry){const Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ye=Math.min(q.instanceCount,Nt);dt.renderInstances(Se,St,ye)}else dt.render(Se,St)};function el(M,D,q,B){U!==null&&M.isNodeMaterial&&U.setObject(B,M),Qe===!0&&Re.setState(M,q,!1),M.transparent===!0&&M.side===Mn&&M.forceSinglePass===!1?(M.side=Gt,M.needsUpdate=!0,Ds(M,D,B),M.side=ri,M.needsUpdate=!0,Ds(M,D,B),M.side=Mn):Ds(M,D,B)}this.compile=function(M,D,q=null){q===null&&(q=M),U!==null&&U.renderStart(M,D,q),b=le.get(q),b.init(D),v.push(b),q.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),M!==q&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),it=this.localClippingEnabled,Qe=Re.init(this.clippingPlanes,it),Qe===!0&&Re.setGlobalState(this.clippingPlanes,D),U!==null&&De.render(b.state.shadowsArray,q,D);const B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const _e=z.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){const pe=_e[Me];el(pe,q,D,z),B.add(pe)}else el(_e,q,D,z),B.add(_e)}),b=v.pop(),U!==null&&U.renderEnd(),B},this.compileAsync=function(M,D,q=null){const B=this.compile(M,D,q);return new Promise(z=>{function _e(){if(B.forEach(function(Me){const be=W.get(Me).currentProgram;(be===void 0||be.isReady())&&B.delete(Me)}),B.size===0){z(M);return}setTimeout(_e,10)}Le.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Br=null;function Yh(M){Br&&Br(M)}function tl(){li.stop()}function nl(){li.start()}const li=new Lh;li.setAnimationLoop(Yh),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(M){Br=M,Te.setAnimationLoop(M),M===null?li.stop():li.start()},Te.addEventListener("sessionstart",tl),Te.addEventListener("sessionend",nl),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(M,D);const q=Te.enabled===!0&&Te.isPresenting===!0,B=w!==null&&(ee===null||q)&&w.begin(C,ee);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(D),D=Te.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,D,ee),b=le.get(M,v.length),b.init(D),b.state.textureUnits=$.getTextureUnits(),v.push(b),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ze.setFromProjectionMatrix(K,Sn,D.reversedDepth),it=this.localClippingEnabled,Qe=Re.init(this.clippingPlanes,it),E=ue.get(M,R.length),E.init(),R.push(E),Te.enabled===!0&&Te.isPresenting===!0){const Me=C.xr.getDepthSensingMesh();Me!==null&&zr(Me,D,-1/0,C.sortObjects)}zr(M,D,0,C.sortObjects),E.finish(),U!==null&&U.updateLights(b.state.lightsArray),C.sortObjects===!0&&E.sort(ge,Fe),Ie=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ie&&Be.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Re.beginShadows();const z=b.state.shadowsArray;if(De.render(z,M,D),Qe===!0&&Re.endShadows(),(B&&w.hasRenderPass())===!1){const Me=E.opaque,pe=E.transmissive;if(b.setupLights(),D.isArrayCamera){const be=D.cameras;if(pe.length>0)for(let we=0,He=be.length;we<He;we++){const Ke=be[we];sl(Me,pe,M,Ke)}Ie&&Be.render(M);for(let we=0,He=be.length;we<He;we++){const Ke=be[we];il(E,M,Ke,Ke.viewport)}}else pe.length>0&&sl(Me,pe,M,D),Ie&&Be.render(M),il(E,M,D)}ee!==null&&G===0&&($.updateMultisampleRenderTarget(ee),$.updateRenderTargetMipmap(ee)),B&&w.end(C),M.isScene===!0&&M.onAfterRender(C,M,D),xe.resetDefaultState(),Y=-1,X=null,v.pop(),v.length>0?(b=v[v.length-1],$.setTextureUnits(b.state.textureUnits),Qe===!0&&Re.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,U!==null&&U.renderEnd()};function zr(M,D,q,B){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ze)){B&&ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const Me=ne.update(M),pe=M.material;pe.visible&&E.push(M,Me,pe,q,ve.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ze))){const Me=ne.update(M),pe=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ve.copy(M.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ve.copy(Me.boundingSphere.center)),ve.applyMatrix4(M.matrixWorld).applyMatrix4(K)),Array.isArray(pe)){const be=Me.groups;for(let we=0,He=be.length;we<He;we++){const Ke=be[we],Se=pe[Ke.materialIndex];Se&&Se.visible&&E.push(M,Me,Se,q,ve.z,Ke,D)}}else pe.visible&&E.push(M,Me,pe,q,ve.z,null,D)}}const _e=M.children;for(let Me=0,pe=_e.length;Me<pe;Me++)zr(_e[Me],D,q,B)}function il(M,D,q,B){const{opaque:z,transmissive:_e,transparent:Me}=M;b.setupLightsView(q),Qe===!0&&Re.setGlobalState(C.clippingPlanes,q),B&&x.viewport(Z.copy(B)),z.length>0&&Ls(z,D,q),_e.length>0&&Ls(_e,D,q),Me.length>0&&Ls(Me,D,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function sl(M,D,q,B){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const Se=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new fn(1,1,{generateMipmaps:!0,type:Se?Rn:Kt,minFilter:Bn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const _e=b.state.transmissionRenderTarget[B.id],Me=B.viewport||Z;_e.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);const pe=C.getRenderTarget(),be=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(_e),C.getClearColor(We),Ye=C.getClearAlpha(),Ye<1&&C.setClearColor(16777215,.5),C.clear(),Ie&&Be.render(q);const He=C.toneMapping;C.toneMapping=En;const Ke=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),Qe===!0&&Re.setGlobalState(C.clippingPlanes,B),Ls(M,q,B),$.updateMultisampleRenderTarget(_e),$.updateRenderTargetMipmap(_e),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let nt=0,St=D.length;nt<St;nt++){const pt=D[nt],{object:dt,geometry:Nt,material:ye,group:kt}=pt;if(ye.side===Mn&&dt.layers.test(B.layers)){const je=ye.side;ye.side=Gt,ye.needsUpdate=!0,rl(dt,q,B,Nt,ye,kt),ye.side=je,ye.needsUpdate=!0,Se=!0}}Se===!0&&($.updateMultisampleRenderTarget(_e),$.updateRenderTargetMipmap(_e))}C.setRenderTarget(pe,be,we),C.setClearColor(We,Ye),Ke!==void 0&&(B.viewport=Ke),C.toneMapping=He}function Ls(M,D,q){const B=D.isScene===!0?D.overrideMaterial:null;for(let z=0,_e=M.length;z<_e;z++){const Me=M[z],{object:pe,geometry:be,group:we}=Me;let He=Me.material;He.allowOverride===!0&&B!==null&&(He=B),pe.layers.test(q.layers)&&rl(pe,D,q,be,He,we)}}function rl(M,D,q,B,z,_e){U!==null&&z.isNodeMaterial&&U.setObject(M,z),M.onBeforeRender(C,D,q,B,z,_e),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,D,q,B,M,_e),z.transparent===!0&&z.side===Mn&&z.forceSinglePass===!1?(z.side=Gt,z.needsUpdate=!0,C.renderBufferDirect(q,D,B,z,M,_e),z.side=ri,z.needsUpdate=!0,C.renderBufferDirect(q,D,B,z,M,_e),z.side=Mn):C.renderBufferDirect(q,D,B,z,M,_e),M.onAfterRender(C,D,q,B,z,_e)}function Ds(M,D,q){D.isScene!==!0&&(D=ht);const B=W.get(M),z=b.state.lights,_e=b.state.shadowsArray,Me=z.state.version,pe=oe.getParameters(M,z.state,_e,D,q,b.state.lightProbeGridArray),be=oe.getProgramCacheKey(pe);let we=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;const He=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=re.get(M.envMap||B.environment,He),B.envMapRotation=B.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",mn),we=new Map,B.programs=we);let Ke=we.get(be);if(Ke!==void 0){if(B.currentProgram===Ke&&B.lightsStateVersion===Me)return ol(M,pe),Ke}else pe.uniforms=oe.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,q,pe),M.onBeforeCompile(pe,C),Ke=oe.acquireProgram(pe,be),we.set(be,Ke),B.uniforms=pe.uniforms;const Se=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=Re.uniform),ol(M,pe),B.needsLights=Jh(M),B.lightsStateVersion=Me,B.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.sunLights.value=z.state.sun,Se.sunLightShadows.value=z.state.sunShadow,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.sunShadowMatrix.value=z.state.sunShadowMatrix,Se.sunShadowCascade.value=z.state.sunShadowCascade,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Ke,B.uniformsList=null,Ke}function al(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=gr.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function ol(M,D){const q=W.get(M);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function Kh(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let q=0,B=M.length;q<B;q++){const z=M[q];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function $h(M,D,q,B,z){D.isScene!==!0&&(D=ht),$.resetTextureUnits();const _e=D.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,pe=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,be=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,we=re.get(B.envMap||Me,be),He=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,St=!!q.morphAttributes.color;let pt=En;B.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(pt=C.toneMapping);const dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Nt=dt!==void 0?dt.length:0,ye=W.get(B),kt=b.state.lights;if(Qe===!0&&(it===!0||M!==X)){const ft=M===X&&B.id===Y;Re.setState(B,M,ft)}let je=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==kt.state.version||ye.outputColorSpace!==pe||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==we||B.fog===!0&&ye.fog!==_e||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Re.numPlanes||ye.numIntersection!==Re.numIntersection)||ye.vertexAlphas!==He||ye.vertexTangents!==Ke||ye.morphTargets!==Se||ye.morphNormals!==nt||ye.morphColors!==St||ye.toneMapping!==pt||ye.morphTargetsCount!==Nt||!!ye.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,ye.__version=B.version);let Zt=ye.currentProgram;je===!0&&(Zt=Ds(B,D,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Zt,ye));let gn=!1,qn=!1,vi=!1;const lt=Zt.getUniforms(),vt=ye.uniforms;if(x.useProgram(Zt.program)&&(gn=!0,qn=!0,vi=!0),B.id!==Y&&(Y=B.id,qn=!0),ye.needsLights){const ft=Kh(b.state.lightProbeGridArray,z);ye.lightProbeGrid!==ft&&(ye.lightProbeGrid=ft,qn=!0)}if(gn||X!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",M.projectionMatrix),lt.setValue(I,"viewMatrix",M.matrixWorldInverse);const Kn=lt.map.cameraPosition;Kn!==void 0&&Kn.setValue(I,ie.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,qn=!0,vi=!0)}if(ye.needsLights&&(kt.state.sunShadowMap.length>0&&lt.setValue(I,"sunShadowMap",kt.state.sunShadowMap,$),kt.state.directionalShadowMap.length>0&&lt.setValue(I,"directionalShadowMap",kt.state.directionalShadowMap,$),kt.state.spotShadowMap.length>0&&lt.setValue(I,"spotShadowMap",kt.state.spotShadowMap,$),kt.state.pointShadowMap.length>0&&lt.setValue(I,"pointShadowMap",kt.state.pointShadowMap,$)),z.isSkinnedMesh){lt.setOptional(I,z,"bindMatrix"),lt.setOptional(I,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),lt.setValue(I,"boneTexture",ft.boneTexture,$))}z.isBatchedMesh&&(lt.setOptional(I,z,"batchingTexture"),lt.setValue(I,"batchingTexture",z._matricesTexture,$),lt.setOptional(I,z,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",z._indirectTexture,$),lt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",z._colorsTexture,$));const Yn=q.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&N.update(z,q,Zt),(qn||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,lt.setValue(I,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(vt.envMapIntensity.value=D.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=U_()),qn){if(lt.setValue(I,"toneMappingExposure",C.toneMappingExposure),ye.needsLights&&Zh(vt,vi),_e&&B.fog===!0&&Ae.refreshFogUniforms(vt,_e),Ae.refreshMaterialUniforms(vt,B,te,J,b.state.transmissionRenderTarget[M.id]),ye.needsLights&&ye.lightProbeGrid){const ft=ye.lightProbeGrid;vt.probesSH.value=ft.texture,vt.probesMin.value.copy(ft.boundingBox.min),vt.probesMax.value.copy(ft.boundingBox.max),vt.probesResolution.value.copy(ft.resolution)}gr.upload(I,al(ye),vt,$)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gr.upload(I,al(ye),vt,$),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(I,"center",z.center),lt.setValue(I,"modelViewMatrix",z.modelViewMatrix),lt.setValue(I,"normalMatrix",z.normalMatrix),lt.setValue(I,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ft=B.uniformsGroups;for(let Kn=0,yi=ft.length;Kn<yi;Kn++){const cl=ft[Kn];se.update(cl,Zt),se.bind(cl,Zt)}}return Zt}function Zh(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Jh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(M,D,q){const B=W.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=D,W.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:q,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){const q=W.get(M);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,q=0){ee=M,V=D,G=q;let B=null,z=!1,_e=!1;if(M){const pe=W.get(M);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,pe.__webglFramebuffer),Z.copy(M.viewport),Ee.copy(M.scissor),me=M.scissorTest,x.viewport(Z),x.scissor(Ee),x.setScissorTest(me),Y=-1;return}else if(pe.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(pe.__hasExternalTextures)$.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const He=M.depthTexture;if(pe.__boundDepthTexture!==He){if(He!==null&&W.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);const we=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[D])?B=we[D][q]:B=we[D],z=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?B=W.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[q]:B=we,Z.copy(M.viewport),Ee.copy(M.scissor),me=M.scissorTest}else Z.copy(de).multiplyScalar(te).floor(),Ee.copy(Ne).multiplyScalar(te).floor(),me=et;if(q!==0&&(B=k),x.bindFramebuffer(I.FRAMEBUFFER,B)&&x.drawBuffers(M,B),x.viewport(Z),x.scissor(Ee),x.setScissorTest(me),z){const pe=W.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,pe.__webglTexture,q)}else if(_e){const pe=D;for(let be=0;be<M.textures.length;be++){const we=W.get(M.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,we.__webglTexture,q,pe)}}else if(M!==null&&q!==0){const pe=W.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,q)}Y=-1};function ll(M){const D=W.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=A.textureFormatReadable(M.format),D.__typeReadable=A.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,q,B,z,_e,Me,pe=0){if(!(M&&M.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){x.bindFramebuffer(I.FRAMEBUFFER,be);try{const we=M.textures[pe],He=we.format,Ke=we.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe);const Se=ll(we);if(Se.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-B&&q>=0&&q<=M.height-z&&I.readPixels(D,q,B,z,he.convert(He),he.convert(Ke),_e)}finally{const we=ee!==null?W.get(ee).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,D,q,B,z,_e,Me,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(D>=0&&D<=M.width-B&&q>=0&&q<=M.height-z){x.bindFramebuffer(I.FRAMEBUFFER,be);const we=M.textures[pe],He=we.format,Ke=we.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe);const Se=ll(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.bufferData(I.PIXEL_PACK_BUFFER,_e.byteLength,I.STREAM_READ),I.readPixels(D,q,B,z,he.convert(He),he.convert(Ke),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const St=ee!==null?W.get(ee).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,St);const pt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ru(I,pt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,_e),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(nt),I.deleteSync(pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,q=0){const B=Math.pow(2,-q),z=Math.floor(M.image.width*B),_e=Math.floor(M.image.height*B),Me=D!==null?D.x:0,pe=D!==null?D.y:0;$.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,Me,pe,z,_e),x.unbindTexture()},this.copyTextureToTexture=function(M,D,q=null,B=null,z=0,_e=0){let Me,pe,be,we,He,Ke,Se,nt,St;const pt=M.isCompressedTexture?M.mipmaps[_e]:M.image;if(q!==null)Me=q.max.x-q.min.x,pe=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,He=q.min.y,Ke=q.isBox3?q.min.z:0;else{const vt=Math.pow(2,-z);Me=Math.floor(pt.width*vt),pe=Math.floor(pt.height*vt),M.isDataArrayTexture?be=pt.depth:M.isData3DTexture?be=Math.floor(pt.depth*vt):be=1,we=0,He=0,Ke=0}B!==null?(Se=B.x,nt=B.y,St=B.z):(Se=0,nt=0,St=0);const dt=he.convert(D.format),Nt=he.convert(D.type);let ye;D.isData3DTexture?($.setTexture3D(D,0),ye=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?($.setTexture2DArray(D,0),ye=I.TEXTURE_2D_ARRAY):($.setTexture2D(D,0),ye=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const kt=x.getParameter(I.UNPACK_ROW_LENGTH),je=x.getParameter(I.UNPACK_IMAGE_HEIGHT),Zt=x.getParameter(I.UNPACK_SKIP_PIXELS),gn=x.getParameter(I.UNPACK_SKIP_ROWS),qn=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,we),x.pixelStorei(I.UNPACK_SKIP_ROWS,He),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Ke);const vi=M.isDataArrayTexture||M.isData3DTexture,lt=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){const vt=W.get(M),Yn=W.get(D),ft=W.get(vt.__renderTarget),Kn=W.get(Yn.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let yi=0;yi<be;yi++)vi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(M).__webglTexture,z,Ke+yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,W.get(D).__webglTexture,_e,St+yi)),I.blitFramebuffer(we,He,Me,pe,Se,nt,Me,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||W.has(M)){const vt=W.get(M),Yn=W.get(D);x.bindFramebuffer(I.READ_FRAMEBUFFER,P),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,H);for(let ft=0;ft<be;ft++)vi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.__webglTexture,z,Ke+ft):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vt.__webglTexture,z),lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yn.__webglTexture,_e,St+ft):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yn.__webglTexture,_e),z!==0?I.blitFramebuffer(we,He,Me,pe,Se,nt,Me,pe,I.COLOR_BUFFER_BIT,I.NEAREST):lt?I.copyTexSubImage3D(ye,_e,Se,nt,St+ft,we,He,Me,pe):I.copyTexSubImage2D(ye,_e,Se,nt,we,He,Me,pe);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(ye,_e,Se,nt,St,Me,pe,be,dt,Nt,pt.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(ye,_e,Se,nt,St,Me,pe,be,dt,pt.data):I.texSubImage3D(ye,_e,Se,nt,St,Me,pe,be,dt,Nt,pt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,_e,Se,nt,Me,pe,dt,Nt,pt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,_e,Se,nt,pt.width,pt.height,dt,pt.data):I.texSubImage2D(I.TEXTURE_2D,_e,Se,nt,Me,pe,dt,Nt,pt);x.pixelStorei(I.UNPACK_ROW_LENGTH,kt),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Zt),x.pixelStorei(I.UNPACK_SKIP_ROWS,gn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,qn),_e===0&&D.generateMipmaps&&I.generateMipmap(ye),x.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){V=0,G=0,ee=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function O_(s){const e=new F_({canvas:s,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(devicePixelRatio||1,1.65)),e.outputColorSpace=yt,e.toneMapping=So,e.toneMappingExposure=1.3,e.shadowMap.enabled=!0,e.shadowMap.type=ms,e}function Ps(s){const e=new Set,t=new Set,n=new Set;s.traverse(i=>{if(i instanceof Mt||i instanceof Eh){e.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material]){t.add(r);for(const a of Object.values(r))a instanceof Rt&&n.add(a)}}(i instanceof Ir||i instanceof Oi||i instanceof qo)&&i.shadow.dispose()});for(const i of e)i.dispose();for(const i of t)i.dispose();for(const i of n)i.dispose()}class k_{constructor(e){this.canvas=e,this.gl=O_(e)}canvas;gl;scene=new zl;cutScene=new zl;camera=new Xi(-8,8,5,-5,.1,100);width=1;height=1;angle=0;externalCamera=!1;editorMode=!1;beforeRender;afterRender;cameraSettings=_r();center=new O;configureCamera(e=yo){this.cameraSettings=_r(e);const t=this.camera;e.projection==="perspective"!=t instanceof Lt&&(this.camera=e.projection==="perspective"?new Lt(e.fov,1,.1,100):new Xi(-8,8,5,-5,.1,100),this.camera.position.copy(t.position),this.camera.quaternion.copy(t.quaternion),this.camera.up.copy(t.up),this.camera.zoom=t.zoom),this.camera instanceof Lt&&(this.camera.fov=e.fov),this.camera.near=this.cameraSettings.near,this.camera.far=this.cameraSettings.far,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}resize(){const e=this.canvas.getBoundingClientRect();this.width=Math.max(1,e.width),this.height=Math.max(1,e.height),this.gl.setSize(this.width,this.height,!1)}updateCamera(e){const t=this.cameraSettings,n=this.width/this.height;this.center.lerp(new O(t.centerX,t.centerY,0),t.smoothing?1-Math.exp(-e*t.smoothing):1),this.camera instanceof Lt?this.camera.aspect=n:(this.camera.left=-t.height*n/2,this.camera.right=t.height*n/2,this.camera.top=t.height/2,this.camera.bottom=-t.height/2),this.camera.zoom=1,this.camera.position.set(this.center.x,this.center.y,t.distance),this.camera.up.set(0,1,0),this.camera.rotation.set(0,0,0),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}project(e){const t=e.clone().project(this.camera);return{x:(t.x+1)*this.width/2,y:(1-t.y)*this.height/2}}render(e){this.externalCamera||this.updateCamera(e),this.beforeRender?.(),this.gl.render(this.scene,this.camera),this.afterRender?.()}dispose(){Ps(this.scene),Ps(this.cutScene),this.gl.dispose(),this.gl.forceContextLoss()}}class B_{constructor(e){this.renderer=e,e.scene.add(this.root)}renderer;sources=new Map;instances=new Map;root=new nn;prototypes=new Map;textures=new Map;prefabs=new Map;validators=[];initial=ul();document=ul();revision=0;validate(e){const t=id(e);for(const n of this.validators)n(t);for(const n of t.nodes){if(n.kind==="source"&&!this.sources.has(n.asset))throw new Error("Исходный ресурс недоступен: "+n.name);if(n.kind==="model"&&!this.prototypes.has(n.asset))throw new Error("Модель не загружена: "+n.name)}return t}apply(e){const t=this.validate(e);this.document=t;const n=new Set(t.nodes.map(i=>i.id));for(const[i,r]of this.instances)n.has(i)||(this.disposeInstance(r),this.instances.delete(i));for(const i of this.sources.values())i.wrapper.visible=!1;for(const i of t.nodes){const r=i.kind+":"+(i.asset||"");let a=this.instances.get(i.id);a&&a.key!==r&&(this.disposeInstance(a),this.instances.delete(i.id),a=void 0),a||(a=this.instantiate(i),this.instances.set(i.id,a));const o=a.root;if(o.position.fromArray(i.transform.position),o.rotation.set(...i.transform.rotation.map(Tr.degToRad)),o.scale.fromArray(i.transform.scale),o.visible=i.visible,o.name=i.name,o.userData.sceneNode=i.id,o.updateMatrixWorld(!0),this.applySurface(a,i.surface),i.light){const l=o.children.find(c=>c instanceof Is);l.color.set(i.light.color),l.intensity=i.light.intensity,l.distance=i.light.range,l.castShadow=i.light.shadows&&i.light.intensity>0,l instanceof Oi&&(l.angle=Tr.degToRad(i.light.angle),l.penumbra=i.light.penumbra)}}this.renderer.gl.toneMappingExposure=t.environment.exposure,this.renderer.cameraSettings=_r(t.camera),(!this.renderer.editorMode||!this.renderer.externalCamera)&&this.renderer.configureCamera(t.camera),this.revision++}instantiate(e){let t=new nn,n=!1;if(e.kind==="source"){const r=this.sources.get(e.asset);e.id===e.asset?t=r.wrapper:(t.add(r.prototype.clone(!0)),(r.cut?this.renderer.cutScene:this.root).add(t))}else if(this.root.add(t),e.kind==="model")t.add(this.prototypes.get(e.asset).clone(!0));else if(e.kind==="prefab"){n=!0;const r=this.prefabs.get(e.asset);if(!r)throw new Error("Шаблон не зарегистрирован: "+e.asset);t.add(r())}else if(e.kind.endsWith("-light")){const r=e.kind==="spot-light"?new Oi:new Ir;r.decay=2,r.shadow.mapSize.set(512,512),r.shadow.camera.near=.05,r.shadow.normalBias=.012,t.add(r),r instanceof Oi&&(r.target.position.set(0,0,-1),t.add(r.target))}else if(e.kind==="camera")t.userData.camera=!0;else{n=!0;const r=e.kind==="sphere"?new Wo(.5,24,16):e.kind==="plane"?new oi(1,1,.04):new oi(1,1,1),a=new Mt(r,new si({color:9212561,roughness:.9}));a.position.y=.5,a.castShadow=a.receiveShadow=!0,t.add(a)}const i=new Map;return t.traverse(r=>{r instanceof Mt&&i.set(r,r.material)}),{root:t,key:e.kind+":"+(e.asset||""),surfaceKey:"",ownedMaterials:new Set,ownedTextures:new Set,originals:i,ownsGeometry:n,ownsMaterials:e.kind!=="prefab"}}applySurface(e,t){const n=t&&this.document.textures.find(a=>a.id===t.texture),i=JSON.stringify(t||null)+(n?.data||"");if(i===e.surfaceKey)return;e.surfaceKey=i;for(const a of e.ownedMaterials)a.dispose();for(const a of e.ownedTextures)a.dispose();e.ownedMaterials.clear(),e.ownedTextures.clear();let r;n&&(r=new Pr().load(n.data),r.colorSpace=yt,r.wrapS=r.wrapT=wn,r.repeat.setScalar(t.repeat),e.ownedTextures.add(r));for(const[a,o]of e.originals){if(!t){a.material=o;continue}const l=(Array.isArray(o)?o:[o]).map(c=>{const h=c instanceof si?c.clone():new si({side:c.side});h.color.set(t.color),h.roughness=t.roughness,h.metalness=t.metalness;const d=t.texture==="original"?c.map:this.textures.get(t.texture);if(h.map=null,r?h.map=r:d&&(h.map=d.clone(),h.map.wrapS=h.map.wrapT=wn,h.map.repeat.setScalar(t.repeat),h.map.needsUpdate=!0,e.ownedTextures.add(h.map)),t.texture!=="original")for(const[u,m]of[["normal","normalMap"],["roughness","roughnessMap"],["metalness","metalnessMap"],["ao","aoMap"]]){const f=this.textures.get(t.texture+":"+u);if(h[m]=null,f){const _=f.clone();_.repeat.setScalar(t.repeat),_.needsUpdate=!0,h[m]=_,e.ownedTextures.add(_)}}return e.ownedMaterials.add(h),h});a.material=Array.isArray(o)?l:l[0]}}beforeRender(e){const t=new Set(this.document.nodes.map(n=>n.id));for(const[n,i]of this.sources)t.has(n)||(i.wrapper.visible=!1);for(const n of this.document.nodes)this.instances.get(n.id).root.visible=n.visible}disposeInstance(e){for(const[t,n]of e.originals)t.material=n;for(const t of e.ownedMaterials)t.dispose();for(const t of e.ownedTextures)t.dispose();if([...this.sources.values()].some(t=>t.wrapper===e.root)){e.root.visible=!1;return}e.root.removeFromParent(),e.root.traverse(t=>{if(e.ownsGeometry&&t instanceof Mt&&(t.geometry.dispose(),e.ownsMaterials))for(const n of Array.isArray(t.material)?t.material:[t.material])n.dispose();(t instanceof Ir||t instanceof Oi)&&t.shadow.dispose()})}dispose(){for(const e of this.instances.values())this.disposeInstance(e);this.instances.clear(),this.root.removeFromParent()}}function Fc(s,e){if(e===qd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===fo||e===fh){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===fo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function z_(s){const e=new Map,t=new Map,n=s.clone();return zh(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)zh(s.children[n],e.children[n],t)}class H_ extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new Oc(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Oc(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new rx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=vs.extractUrlBase(e);a=vs.resolveURL(c,this.path)}else a=vs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ph(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hh){try{a[Xe.KHR_BINARY_GLTF]=new ax(e)}catch(d){i&&i(d);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Xe.KHR_MATERIALS_UNLIT:a[d]=new W_;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[d]=new ox(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[d]=new lx;break;case Xe.KHR_MESH_QUANTIZATION:a[d]=new cx;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function V_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function bt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class G_{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ue(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],$t);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ir(h),c.distance=d;break;case"spot":c=new Oi(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),vn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class W_{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(i)}}class X_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class q_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(r,r)}return Promise.all(i)}}class Y_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class $_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],$t)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Z_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class J_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(r[0],r[1],r[2],$t),Promise.all(i)}}class Q_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class j_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(r[0],r[1],r[2],$t),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(i)}}class ex{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class tx{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return bt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=bt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class nx{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class ix{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class sx{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Oc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(m){return m.buffer}):a.ready.then(function(){const m=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(m),h,d,u,i.mode,i.filter),m})})}else return null}}class rx{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==jt.TRIANGLES&&c.mode!==jt.TRIANGLE_STRIP&&c.mode!==jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,m=[];for(const f of d){const _=new Ge,p=new O,g=new Wn,S=new O(1,1,1),T=new Ku(f.geometry,f.material,u);for(let E=0;E<u;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,E),l.SCALE&&S.fromBufferAttribute(l.SCALE,E),T.setMatrixAt(E,_.compose(p,g,S));let y=null;for(const E in l)if(E==="_COLOR_0"){const b=l[E];T.instanceColor=new wr(b.array,b.itemSize,b.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(y===null){const R=T.geometry;y=new Ot,y.name=R.name;for(const v in R.attributes)y.setAttribute(v,R.attributes[v]);for(const v in R.morphAttributes)y.morphAttributes[v]=R.morphAttributes[v];R.index!==null&&y.setIndex(R.index),y.morphTargetsRelative=R.morphTargetsRelative;for(const v of R.groups)y.addGroup(v.start,v.count,v.materialIndex);R.boundingBox!==null&&(y.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(y.boundingSphere=R.boundingSphere.clone()),y.drawRange.start=R.drawRange.start,y.drawRange.count=R.drawRange.count,y.userData=Object.assign({},R.userData),T.geometry=y}const b=l[E];y.setAttribute(E,new wr(b.array,b.itemSize,b.normalized))}xt.prototype.copy.call(T,f),this.parser.assignFinalMaterial(T),m.push(T)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Hh="glTF",cs=12,kc={JSON:1313821514,BIN:5130562};class ax{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-cs,r=new DataView(e,cs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===kc.JSON){const c=new Uint8Array(e,cs+a,o);this.content=n.decode(c)}else if(l===kc.BIN){const c=cs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ox{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const d=xo[h]||h.toLowerCase();o[d]=a[h]}for(const h in e.attributes){const d=xo[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[e.attributes[h]],m=Hi[u.componentType];c[d]=m.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(m){for(const f in m.attributes){const _=m.attributes[f],p=l[f];p!==void 0&&(_.normalized=p)}d(m)},o,c,$t,u)})})}}class lx{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class cx{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Vh extends qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,m=u*d,f=e*c,_=f-c,p=-2*m+3*u,g=m-u,S=1-p,T=g-u+d;for(let y=0;y!==o;y++){const E=a[_+y+o],b=a[_+y+l]*h,R=a[f+y+o],v=a[f+y]*h;r[y]=S*E+T*b+p*R+g*v}return r}}const hx=new Wn;class dx extends Vh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hx.fromArray(r).normalize().toArray(r),r}}const jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bc={9728:wt,9729:At,9984:ah,9985:hr,9986:us,9987:Bn},zc={33071:bn,33648:yr,10497:wn},Ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ux={CUBICSPLINE:void 0,LINEAR:Es,STEP:Ss},wa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),s.DefaultMaterial}function pi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function px(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function mx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gx(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Aa(t.attributes):e=s.indices+":"+Aa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Aa(s.targets[n]);return e}function Aa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _x(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xx=new Ge;class vx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new V_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Pr(this.options.manager):this.textureLoader=new Af(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return pi(r,o,i),vn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(vs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ta[i.type],o=Hi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Wt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ta[i.type],c=Hi[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0;let _,p;if(m&&m!==d){const g=Math.floor(u/m),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let T=t.cache.get(S);T||(_=new c(o,g*m,i.count*m/h),T=new Bu(_,m/h),t.cache.add(S,T)),p=new Fo(T,l,u%m/h,f)}else o===null?_=new c(i.count*l):_=new c(o,u,i.count*l),p=new Wt(_,l,f);if(i.sparse!==void 0){const g=Ta.SCALAR,S=Hi[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new S(a[1],T,i.sparse.count*g),b=new c(a[2],y,i.sparse.count*l);o!==null&&(p=new Wt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let R=0,v=E.length;R<v;R++){const w=E[R];if(p.setX(w,b[R*l]),l>=2&&p.setY(w,b[R*l+1]),l>=3&&p.setZ(w,b[R*l+2]),l>=4&&p.setW(w,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=f}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Bc[u.magFilter]||At,h.minFilter=Bc[u.minFilter]||Bn,h.wrapS=zc[u.wrapS]||wn,h.wrapT=zc[u.wrapT]||wn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==wt&&h.minFilter!==At,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,m){let f=u;t.isImageBitmapLoader===!0&&(f=function(_){const p=new Rt(_);p.needsUpdate=!0,u(p)}),t.load(vs.resolveURL(d,r.path),f,void 0,m)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),vn(d,a),d.userData.mimeType=a.mimeType||_x(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Sh,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bh,Tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return si}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const d=i[Xe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,r,t))}else{const d=r.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],$t),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,yt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Mn);const h=r.alphaMode||wa.OPAQUE;if(h===wa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===wa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ii&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==ii&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ii){const d=r.emissiveFactor;o.emissive=new Ue().setRGB(d[0],d[1],d[2],$t)}return r.emissiveTexture!==void 0&&a!==ii&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){const d=new a(o);return r.name&&(d.name=r.name),vn(d,r),t.associations.set(d,{materials:e}),r.extensions&&pi(i,d,r),d})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=gx(c),d=i[h];if(d)a.push(d.promise);else{let u;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Hc(new Ot,c,t),c.mode===jt.TRIANGLE_STRIP?u=u.then(m=>Fc(m,fh)):c.mode===jt.TRIANGLE_FAN&&(u=u.then(m=>Fc(m,fo))),i[h]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?fx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let m=0,f=h.length;m<f;m++){const _=h[m],p=a[m];let g;const S=c[m];if(p.mode===jt.TRIANGLES||p.mode===jt.TRIANGLE_STRIP||p.mode===jt.TRIANGLE_FAN||p.mode===void 0){const T=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");T&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=T&&y?new Xu(_,S):new Mt(_,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===jt.LINES)g=new Zu(_,S);else if(p.mode===jt.LINE_STRIP)g=new zo(_,S);else if(p.mode===jt.LINE_LOOP)g=new Ju(_,S);else if(p.mode===jt.POINTS)g=new Eh(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&mx(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),vn(g,r),p.extensions&&pi(i,g,p),t.assignFinalMaterial(g),d.push(g)}for(let m=0,f=d.length;m<f;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return r.extensions&&pi(i,d[0],r),d[0];const u=new nn;r.extensions&&pi(i,u,r),t.associations.set(u,{meshes:e});for(let m=0,f=d.length;m<f;m++)u.add(d[m]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Tr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Xi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const d=a[c];if(d){o.push(d);const u=new Ge;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ko(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){const m=i.channels[d],f=i.samplers[m.sampler],_=m.target,p=_.node,g=i.parameters!==void 0?i.parameters[f.input]:f.input,S=i.parameters!==void 0?i.parameters[f.output]:f.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",S)),c.push(f),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){const u=d[0],m=d[1],f=d[2],_=d[3],p=d[4],g=[];for(let T=0,y=u.length;T<y;T++){const E=u[T],b=m[T],R=f[T],v=_[T],w=p[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const C=n._createAnimationTracks(E,b,R,v,w);if(C)for(let L=0;L<C.length;L++)g.push(C[L])}const S=new gf(r,void 0,g);return vn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(u,xx)});for(let m=0,f=d.length;m<f;m++)h.add(d[m]);if(h.userData.pivot!==void 0&&d.length>0){const m=h.userData.pivot,f=d[0];h.pivot=new O().fromArray(m),h.position.x-=m[0],h.position.y-=m[1],h.position.z-=m[2],f.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Mh:c.length>1?h=new nn:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=a),vn(h,r),r.extensions&&pi(n,h,r),r.matrix!==void 0){const d=new Ge;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new nn;n.name&&(r.name=i.createUniqueName(n.name)),vn(r,n),n.extensions&&pi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){const u=l[h];u.parent!==null?r.add(z_(u)):r.add(u)}const c=h=>{const d=new Map;for(const[u,m]of i.associations)(u instanceof Tn||u instanceof Rt)&&d.set(u,m);return h.traverse(u=>{const m=i.associations.get(u);m!=null&&d.set(u,m)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}ei[r.path]===ei.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ei[r.path]){case ei.weights:h=Rs;break;case ei.rotation:h=Cs;break;case ei.translation:case ei.scale:h=Cr;break;default:n.itemSize===1?h=Rs:h=Cr;break}const d=i.interpolation!==void 0?ux[i.interpolation]:Es,u=this._getArrayFromAccessor(n);for(let m=0,f=l.length;m<f;m++){const _=new h(l[m]+"."+ei[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Cs?dx:Vh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yx(s,e,t){const n=e.attributes,i=new Xn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){const h=vo(Hi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new O,l=new O;for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],m=u.min,f=u.max;if(m!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(f[2]))),u.normalized){const _=vo(Hi[u.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Pn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Hc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=xo[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return $e.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),vn(s,e),yx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?px(s,e.targets,t):s})}class Mx{models=new Map;textures=new Map;async load(e,t,n=i=>{}){let i=0;try{for(const r of e)if(!(this.models.has(r.id)||this.textures.has("asset:"+r.id))){if(r.type==="model"){const o=(await new H_().loadAsync(t(r.path))).scene;o.scale.multiplyScalar(r.unitScale||1),o.traverse(c=>{c instanceof Mt&&(c.castShadow=c.receiveShadow=!0)});const l=new nn;l.add(o),this.models.set(r.id,l)}if(r.type==="texture"){const a=await new Pr().loadAsync(t(r.path));if(a.image.width>4096||a.image.height>4096)throw a.dispose(),new Error("Текстура превышает 4096 × 4096.");a.colorSpace=yt,a.wrapS=a.wrapT=wn,this.textures.set("asset:"+r.id,a)}if(r.type==="material")for(const[a,o]of Object.entries(r.maps||{})){const l=await new Pr().loadAsync(t(o));if(l.image.width>4096||l.image.height>4096)throw l.dispose(),new Error("Карта материала превышает 4096 × 4096.");l.colorSpace=a==="baseColor"?yt:kn,l.wrapS=l.wrapT=wn,this.textures.set("asset:"+r.id+(a==="baseColor"?"":":"+a),l)}n(++i/e.length)}}catch(r){throw new Error("Не удалось загрузить ресурс: "+(r instanceof Error?r.message:String(r)))}}bind(e){e.prototypes=this.models;for(const[t,n]of this.textures)e.textures.set(t,n)}dispose(){for(const e of this.models.values())Ps(e);for(const e of this.textures.values())e.dispose();this.models.clear(),this.textures.clear()}}function Lr(s){const e=[],t=(o,l)=>e.push({id:o,message:l});if(!s||s.version!==1||!Number.isFinite(s.floorHeight)||s.floorHeight<2.3||s.floorHeight>8||![s.rooms,s.doors,s.stairs,s.openings].every(Array.isArray))return[{id:"layout",message:"Некорректная планировка или высота этажа (2,3–8 м)."}];if(!s.spawn||!Number.isFinite(s.spawn.x)||!Number.isInteger(s.spawn.floor)||[...s.rooms,...s.doors,...s.stairs,...s.openings].some(o=>!o||typeof o.id!="string"||typeof o.name!="string")||s.rooms.some(o=>![o.x,o.width,o.floor,o.depth].every(Number.isFinite))||s.doors.some(o=>![o.x,o.floor].every(Number.isFinite))||s.stairs.some(o=>![o.a,o.b,o.from,o.to].every(Number.isFinite))||s.openings.some(o=>![o.x,o.bottom,o.width,o.height].every(Number.isFinite)))return[{id:"layout",message:"Повреждены данные планировки: проверьте элементы, координаты и появление."}];const n=new Set;for(const o of[...s.rooms,...s.doors,...s.stairs,...s.openings])n.has(o.id)&&t(o.id,"Повторяющийся элемент планировки."),n.add(o.id);for(const o of s.rooms){(!Number.isFinite(o.x)||!Number.isFinite(o.width)||!Number.isInteger(o.floor)||o.width<1||o.width>100||o.depth<1||o.depth>30)&&t(o.id,o.name+": проверьте размеры комнаты.");for(const l of s.rooms)o.id<l.id&&o.floor===l.floor&&o.x<l.x+l.width-.01&&o.x+o.width>l.x+.01&&t(o.id,o.name+": пересечение с комнатой «"+l.name+"».")}const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x-.01&&o<=c.x+c.width+.01);for(const o of s.doors)s.rooms.some(l=>l.floor===o.floor&&(Math.abs(l.x-o.x)<.02||Math.abs(l.x+l.width-o.x)<.02))||t(o.id,o.name+": дверь должна находиться на границе комнаты.");for(const o of s.stairs)(!i(o.a,o.from)||!i(o.b,o.to)||o.to!==o.from+1||(o.kind==="ladder"?Math.abs(o.b-o.a)>.01:Math.abs(o.b-o.a)<1.5))&&t(o.id,o.name+": соедините комнаты соседних этажей; длина марша — от 1,5 м.");for(const o of s.openings){const l=s.rooms.find(c=>c.id===o.room);(!l||!["window","breach"].includes(o.kind)||o.plane&&!["back","divider"].includes(o.plane)||o.width<=0||o.height<=0||(o.plane==="divider"?Math.min(Math.abs(o.x-l.x),Math.abs(o.x-l.x-l.width))>.02||o.width>l.depth:o.x-o.width/2<l.x||o.x+o.width/2>l.x+l.width)||o.bottom<0||o.bottom+o.height>s.floorHeight-.15)&&t(o.id,o.name+": проём должен помещаться на выбранной стене комнаты.")}i(s.spawn?.x,s.spawn?.floor)||t("spawn","Точка появления должна быть внутри комнаты.");const r=new Set,a=i(s.spawn?.x,s.spawn?.floor);a&&r.add(a.id);for(let o=0;o<s.rooms.length;o++){for(const l of[...s.doors,...s.openings.filter(Gh).map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}for(const l of s.stairs){const c=i(l.a,l.from),h=i(l.b,l.to);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}}for(const o of s.rooms)r.has(o.id)||t(o.id,o.name+": нет маршрута от точки появления. Добавьте дверь или лестницу.");return e}function bx(s){const e=Lr(s);if(e.length)throw new Error(e.map(t=>t.message).join(`
`))}const Gh=s=>s.plane==="divider"&&s.kind==="breach"&&s.bottom===0&&s.height>=1.8&&s.width>0;function Sx(s,e,t,n,i){for(const r of s.rooms.filter(a=>a.floor===n))for(const a of[r.x,r.x+r.width])if((e-a)*(t-a)<=0&&e!==t&&!s.doors.some(o=>o.floor===n&&Math.abs(o.x-a)<.02&&i.has(o.id))&&!s.openings.some(o=>Gh(o)&&Math.abs(o.x-a)<.02&&s.rooms.find(l=>l.id===o.room)?.floor===n))return a;return null}function Vc(s,e,t,n){const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x&&o<=c.x+c.width),r=i(e,t),a=new Set(r?[r.id]:[]);for(let o=0;o<s.rooms.length;o++)for(const l of[...s.doors.filter(c=>n.has(c.id)),...s.openings.filter(c=>c.plane==="divider").map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(a.has(c.id)||a.has(h.id))&&(a.add(c.id),a.add(h.id))}for(const o of s.stairs)if(Math.abs(e-(t===o.from?o.a:o.b))<.8&&(t===o.from||t===o.to)){const l=i(o.a,o.from),c=i(o.b,o.to);l&&c&&(a.has(l.id)||a.has(c.id))&&(a.add(l.id),a.add(c.id))}return a}class Wh{constructor(e){this.scene=e,e.add(this.root)}scene;root=new nn;doors=new Map;key="";apply(e){const t=Lr(e).find(l=>l.id==="layout");if(t)throw new Error(t.message);const n=JSON.stringify(e);if(n===this.key)return;this.key=n,Ps(this.root),this.root.clear(),this.doors.clear();const i=new Set(Lr(e).map(l=>l.id)),r=(l,c,h,d,u,m,f,_,p)=>{const g=new Mt(new oi(Math.max(.01,u),Math.max(.01,m),Math.max(.01,f)),new si({color:i.has(p)?"#b54f52":_,roughness:.85}));return g.position.set(c,h,d),g.castShadow=g.receiveShadow=!0,g.userData.layoutId=p,l.add(g),g},a=new Set;for(const l of e.rooms){const c=l.floor*e.floorHeight,h=e.floorHeight,d=-l.depth/2,u=e.stairs.filter(p=>p.to===l.floor&&p.b>=l.x&&p.b<=l.x+l.width).map(p=>p.kind==="ladder"?[p.b-.45,p.b+.45]:[Math.min(p.a,p.b),Math.max(p.a,p.b)+.3]);let m=[[l.x,l.x+l.width]];for(const[p,g]of u)m=m.flatMap(([S,T])=>T<=p||S>=g?[[S,T]]:[[S,Math.max(S,p)],[Math.min(T,g),T]].filter(([y,E])=>E-y>.01));for(const[p,g]of m)r(this.root,(p+g)/2,c-.09,0,g-p,.18,l.depth,"#646761",l.id);r(this.root,l.x+l.width/2,c-.09,l.depth/2-.12,l.width,.18,.24,"#42453f",l.id);const f=e.openings.filter(p=>p.room===l.id&&p.plane!=="divider"),_=[l.x,l.x+l.width,...f.flatMap(p=>[p.x-p.width/2,p.x+p.width/2])].sort((p,g)=>p-g);for(let p=1;p<_.length;p++){const g=_[p-1],S=_[p],T=f.find(y=>(g+S)/2>y.x-y.width/2&&(g+S)/2<y.x+y.width/2);T?(T.bottom&&r(this.root,(g+S)/2,c+T.bottom/2,d,S-g,T.bottom,.14,l.color,l.id),r(this.root,(g+S)/2,c+(h+T.bottom+T.height)/2,d,S-g,h-T.bottom-T.height,.14,l.color,l.id)):r(this.root,(g+S)/2,c+h/2,d,S-g,h,.14,l.color,l.id)}for(const p of[l.x,l.x+l.width]){const g=p+":"+l.floor;if(a.has(g))continue;a.add(g);const S=e.doors.find(y=>y.floor===l.floor&&Math.abs(y.x-p)<.02),T=e.openings.find(y=>y.plane==="divider"&&Math.abs(y.x-p)<.02&&e.rooms.find(E=>E.id===y.room)?.floor===l.floor);if(!S&&T){const y=Math.min(T.width,l.depth),E=T.bottom,b=E+T.height;E>0&&r(this.root,p,c+E/2,0,.14,E,l.depth,l.color,T.id),b<h&&r(this.root,p,c+(b+h)/2,0,.14,h-b,l.depth,l.color,T.id);const R=(l.depth-y)/2;if(R>0)for(const v of[-1,1])r(this.root,p,c+(E+b)/2,v*(y+R)/2,.14,T.height,R,l.color,T.id)}else if(!S)r(this.root,p,c+h/2,0,.14,h,l.depth,l.color,l.id);else{r(this.root,p,c+(h+2.1)/2,0,.16,h-2.1,l.depth,l.color,S.id),r(this.root,p,c+1.05,-l.depth/4-.3,.16,2.1,l.depth/2-.6,l.color,S.id),r(this.root,p,c+1.05,l.depth/4+.3,.16,2.1,l.depth/2-.6,l.color,S.id);const y=new nn;y.position.set(p,c,-.6),r(y,0,1.03,.6,.08,2.06,1.16,"#6f513a",S.id),this.root.add(y),this.doors.set(S.id,y)}}}for(const l of e.stairs){if(l.kind==="ladder"){for(const h of[-.35,.35])r(this.root,l.a+h,(l.from+.5)*e.floorHeight,-.75,.06,e.floorHeight,.09,"#89877d",l.id);for(let h=.2;h<e.floorHeight;h+=.28)r(this.root,l.a,l.from*e.floorHeight+h,-.75,.7,.05,.08,"#89877d",l.id);continue}const c=16;for(let h=0;h<c;h++){const d=(h+.5)/c;r(this.root,l.a+(l.b-l.a)*d,l.from*e.floorHeight+(h+1)*e.floorHeight/c-.06,-.75,Math.abs(l.b-l.a)/c+.02,.12,1.1,"#89877d",l.id)}}const o=new Mt(new Go(.16,.4,16),new ii({color:i.has("spawn")?"#ff5555":"#8fd8bd"}));o.position.set(e.spawn.x,e.spawn.floor*e.floorHeight+.2,0),o.userData.layoutId="spawn",o.userData.editorOnly=!0,this.root.add(o),this.setDoors(new Set(e.doors.filter(l=>l.open).map(l=>l.id)))}setDoors(e){for(const[t,n]of this.doors)n.rotation.y=e.has(t)?Math.PI/2:0}dispose(){Ps(this.root),this.root.removeFromParent()}}function Ex(s,e=!0){const t=new k_(s),n=new B_(t);n.validators.push(a=>{const o=a.moduleData?.layout;if(o){const l=Lr(o).find(c=>c.id==="layout");if(l)throw new Error(l.message)}}),t.scene.background=new Ue("#29343c"),t.scene.add(new Sf(13295083,3420195,2));const i=new qo(16772558,3);i.position.set(-4,10,6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-20,right:20,top:20,bottom:-20}),t.scene.add(i);const r=new Wh(t.scene);return{renderer:t,runtime:n,floorHeight:3,floorNames:[{value:-1,name:"Подвал"},{value:0,name:"1 этаж"},{value:1,name:"2 этаж"},{value:2,name:"3 этаж"}],prefabs:{},draw:a=>{const o=n.document.moduleData?.layout;o&&e?r.apply(o):r.key&&(r.dispose(),r.key=""),i.intensity=.15+3*Math.max(0,Math.sin((n.document.environment.time-360)/1440*Math.PI*2)),t.scene.fog=new Uo("#29343c",n.document.environment.haze),t.render(a)},updateCamera:a=>t.updateCamera(a),dispose:()=>{r.dispose(),n.dispose(),t.dispose()}}}async function Tx(s){const e=[...s.registry.modules.values()].find(V=>V.createSession);if(e)return e.createSession(s);const t=structuredClone(s.snapshot);let n=s.sceneId,i=!1,r=!1,a=0,o=performance.now(),l,c,h=[],d,u,m,f=new Set,_=0,p=0,g;const S=new Set,T=new AbortController,y=s.container;y.innerHTML='<canvas tabindex="0" aria-label="Игра" style="width:100%;height:100%;display:block"></canvas><div class="runtime-actions" style="position:absolute;bottom:14px;left:14px;display:flex;gap:8px;flex-wrap:wrap"></div>';let E=y.querySelector("canvas");const b=y.querySelector(".runtime-actions"),R=Wc(t.manifest.projectId,"progress",t.manifest.build.appId);let v;try{s.savePolicy==="persistent"&&(v=JSON.parse(localStorage.getItem(R)||"null"))}catch{}async function w(V){const G=t.scenes[V];if(!G)throw new Error("Сцена перехода не включена: "+V);s.registry.validate(G,t.manifest),G.moduleData?.layout&&bx(G.moduleData.layout);const ee=new Mx;if(await ee.load(t.manifest.assets,s.assetUrl),i){ee.dispose();return}for(const X of h)s.registry.components.get(X.component.type)?.dispose?.(X);d?.dispose(),l?.dispose(),c?.dispose();const Y=E.cloneNode(!1);if(E.replaceWith(Y),E=Y,c=ee,l=Ex(E,!1),c.bind(l.runtime),l.runtime.apply(G),l.renderer.resize(),n=V,l.renderer.beforeRender=()=>{},m=G.moduleData?.layout,d=void 0,u=void 0,g=void 0,b.innerHTML="",m){d=new Wh(l.renderer.scene),d.apply(m),d.root.traverse(Z=>{Z.userData.editorOnly&&(Z.visible=!1)}),f=new Set(m.doors.filter(Z=>Z.open).map(Z=>Z.id)),_=m.spawn.floor,p=m.spawn.x,u=new Mt(new Ho(.18,1.15,6,12),new si({color:15516541})),l.renderer.scene.add(u);const X=document.createElement("span");X.textContent="A/D — идти · W/S — лестница · E — дверь",X.style.cssText="color:white;background:#111c;padding:8px",b.append(X)}h=G.nodes.flatMap(X=>(X.components||[]).map(Z=>({node:X,component:Z,runtime:l.runtime,scene:G,transition:L,keys:S})));for(const X of h)if(s.registry.components.get(X.component.type)?.load?.(X),X.component.type==="basic.portal"){const Z=document.createElement("button");Z.textContent=String(X.component.values.label),Z.onclick=()=>L(String(X.component.values.scene)),b.append(Z)}l.renderer.updateCamera(100),E.focus()}let C=!1;function L(V){C||r||i||(C=!0,w(V).catch(U).finally(()=>C=!1))}function U(V){const G=document.createElement("p");G.style.cssText="position:absolute;top:10px;background:#511;color:white;padding:12px",G.textContent=String(V),y.append(G)}const k=V=>{if(!V.target.closest("input,textarea,select")&&(["KeyA","KeyD","KeyW","KeyS","KeyE","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(V.code)&&(V.preventDefault(),S.add(V.code)),V.code==="KeyE"&&!V.repeat&&!r&&m)){const G=m.doors.find(ee=>ee.floor===_&&Math.abs(ee.x-p)<1);G&&(f.has(G.id)?f.delete(G.id):f.add(G.id),d?.setDoors(f))}};window.addEventListener("keydown",k,{signal:T.signal}),window.addEventListener("keyup",V=>S.delete(V.code),{signal:T.signal}),window.addEventListener("blur",()=>S.clear(),{signal:T.signal}),await w(v?.sceneId&&t.scenes[v.sceneId]?v.sceneId:n);const P=new ResizeObserver(()=>{l?.renderer.resize(),l?.renderer.updateCamera(100)});P.observe(y);function H(V){if(i)return;const G=Math.min(.05,(V-o)/1e3);if(o=V,!r&&!C&&l){for(const ee of h)s.registry.components.get(ee.component.type)?.update?.(ee,G);if(m&&u){const ee=Number(S.has("KeyD")||S.has("ArrowRight"))-Number(S.has("KeyA")||S.has("ArrowLeft"));if(!g){let Y=p+ee*2.5*G;const X=Sx(m,p,Y,_,f);X!==null&&(Y=X-Math.sign(ee)*.025),m.rooms.some(We=>We.floor===_&&Y>=We.x&&Y<=We.x+We.width)&&(p=Y);const Z=S.has("KeyW")||S.has("ArrowUp"),Ee=S.has("KeyS")||S.has("ArrowDown"),me=m.stairs.find(We=>Z&&We.from===_&&Math.abs(We.a-p)<.7||Ee&&We.to===_&&Math.abs(We.b-p)<.7);me&&(g={...me,t:Z?0:1,direction:Z?1:-1})}g?(g.t+=G*.6*g.direction,p=g.a+(g.b-g.a)*Math.max(0,Math.min(1,g.t)),u.position.set(p,(g.from+Math.max(0,Math.min(1,g.t)))*m.floorHeight+.75,-.75),(g.t>=1||g.t<=0)&&(_=g.direction>0?g.to:g.from,g=void 0)):u.position.set(p,_*m.floorHeight+.75,0)}}if(l){if(m){const Y=Vc(m,p,_,f);for(const X of l.runtime.document.nodes){const Z=m.rooms.find(me=>me.floor===Math.floor((X.transform.position[1]+.05)/m.floorHeight)&&X.transform.position[0]>=me.x&&X.transform.position[0]<=me.x+me.width),Ee=l.runtime.instances.get(X.id)?.root;Ee&&(Ee.visible=X.visible&&(!Z||!!X.light||Y.has(Z.id)))}}const ee=l.runtime.document.nodes.find(Y=>Y.id===l.runtime.document.activeCamera);ee&&(l.renderer.externalCamera=!0,l.renderer.camera.position.fromArray(ee.transform.position),l.renderer.camera.rotation.set(...ee.transform.rotation.map(Tr.degToRad)),l.renderer.camera.updateMatrixWorld()),l.draw(G)}a=requestAnimationFrame(H)}return a=requestAnimationFrame(H),{pause(V){if(r=V,S.clear(),V)for(const G of h)s.registry.components.get(G.component.type)?.pause?.(G)},dispose(){i=!0,cancelAnimationFrame(a),T.abort(),P.disconnect();for(const V of h)s.registry.components.get(V.component.type)?.dispose?.(V);if(s.savePolicy==="persistent")try{localStorage.setItem(R,JSON.stringify({sceneId:n}))}catch{}d?.dispose(),l?.dispose(),c?.dispose(),y.replaceChildren()},diagnostics:()=>({sceneId:n,paused:r,x:p,floor:_,visibleRooms:m?[...Vc(m,p,_,f)]:[],openDoors:[...f],frames:1,memory:l?.renderer.gl.info.memory})}}const wx={id:"shelter.basic",sdk:1,components:[{id:"basic.rotate",name:"Вращение",fields:[{name:"speed",label:"Скорость",type:"number",default:30,min:-360,max:360,unit:"°/с"},{name:"axis",label:"Ось",type:"select",default:"y",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.rotation[t.values.axis]+=Number(t.values.speed)*Math.PI/180*n}},{id:"basic.portal",name:"Переход в сцену",fields:[{name:"scene",label:"Куда перейти",type:"scene",default:""},{name:"label",label:"Надпись кнопки",type:"string",default:"Следующая сцена"}]},{id:"basic.bob",name:"Плавное покачивание",fields:[{name:"height",label:"Высота",type:"number",default:.2,min:0,max:3,unit:"м"},{name:"speed",label:"Скорость",type:"number",default:1,min:0,max:5}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.userData.time=(i.userData.time||0)+n,i.position.y=e.transform.position[1]+Math.sin(i.userData.time*Number(t.values.speed))*Number(t.values.height)}}]};async function Ax(s,e,t,n,i=!1){const r=new yd;r.register(wx);for(const a of e)r.register(a.default||a);return Tx({container:document.querySelector("#app"),snapshot:s,sceneId:t,assetUrl:n,registry:r,savePolicy:i?"isolated":"persistent"})}const Rx={format:"shelter-project",version:1,sdk:1,projectId:"bastion-endless-oath",name:"Последний бастион · Ночь без рассвета",gameVersion:"1.3.0",startScene:"castle",scenes:[{id:"castle",name:"Крепость Серого Ордена",path:"scenes/castle.scene.json"}],assets:[],modules:[{id:"bastion",version:1,runtime:"scripts/runtime.ts"}],build:{target:"web",mode:"release",base:"./",output:"/Users/gadaev/Documents/ChatGPT/2D GAME/artifacts/builds/bastion",scenes:["castle"],dynamicAssets:[],appId:"game.bastion-endless-oath"}},Cx=JSON.parse('{"castle":{"format":"shelter-scene","version":2,"id":"castle","template":"bastion-survival-v1","name":"Крепость Серого Ордена","units":"m","nodes":[{"id":"castle-0","name":"Стена монастырского двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[15,-9.6875,0],"rotation":[0,0,0],"scale":[3.75,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-1","name":"Стена монастырского двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[15,-20.3125,0],"rotation":[0,0,0],"scale":[3.75,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-2","name":"Стена монастырского двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[22.5,-9.6875,0],"rotation":[0,0,0],"scale":[3.75,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-3","name":"Стена монастырского двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[22.5,-20.3125,0],"rotation":[0,0,0],"scale":[3.75,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-4","name":"Боковая стена с проходом","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[13.125,-11.953125,0],"rotation":[0,0,0],"scale":[1,3.4375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-5","name":"Боковая стена с проходом","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[13.125,-18.046875,0],"rotation":[0,0,0],"scale":[1,3.4375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-6","name":"Боковая стена с проходом","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[24.375,-11.953125,0],"rotation":[0,0,0],"scale":[1,3.4375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-7","name":"Боковая стена с проходом","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[24.375,-18.046875,0],"rotation":[0,0,0],"scale":[1,3.4375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-8","name":"Башня двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[13.125,-9.6875,0],"rotation":[0,0,0],"scale":[1.5,1.5,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tower"}}]},{"id":"castle-9","name":"Башня двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[13.125,-20.3125,0],"rotation":[0,0,0],"scale":[1.5,1.5,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tower"}}]},{"id":"castle-10","name":"Башня двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[24.375,-9.6875,0],"rotation":[0,0,0],"scale":[1.5,1.5,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tower"}}]},{"id":"castle-11","name":"Башня двора","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[24.375,-20.3125,0],"rotation":[0,0,0],"scale":[1.5,1.5,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tower"}}]},{"id":"castle-12","name":"Колодец клятвы","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[18.75,-14.0625,0],"rotation":[0,0,0],"scale":[1.5625,1.5625,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"fountain"}}]},{"id":"castle-13","name":"Часовня","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[18.75,-4.53125,0],"rotation":[0,0,0],"scale":[5.625,2.8125,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"chapel"}}]},{"id":"castle-14","name":"Кузница","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7.03125,-22.65625,0],"rotation":[0,0,0],"scale":[4.21875,2.34375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"forge"}}]},{"id":"castle-15","name":"Разрушенная казарма","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[29.53125,-23.125,0],"rotation":[0,0,0],"scale":[4.375,2.03125,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"ruin"}}]},{"id":"castle-16","name":"Надгробие","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[28.90625,-7.5,0],"rotation":[0,0,0],"scale":[1.015625,1.484375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"grave"}}]},{"id":"castle-17","name":"Надгробие","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[32.03125,-7.5,0],"rotation":[0,0,0],"scale":[1.015625,1.484375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"grave"}}]},{"id":"castle-18","name":"Надгробие","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[28.90625,-10.9375,0],"rotation":[0,0,0],"scale":[1.015625,1.484375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"grave"}}]},{"id":"castle-19","name":"Надгробие","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[32.03125,-10.9375,0],"rotation":[0,0,0],"scale":[1.015625,1.484375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"grave"}}]},{"id":"castle-20","name":"Надгробие","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[30.390625,-14.375,0],"rotation":[0,0,0],"scale":[1.015625,1.484375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"grave"}}]},{"id":"castle-21","name":"Разбитая ограда","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7.1875,-6.25,0],"rotation":[0,0,0],"scale":[3.125,0.78125,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-22","name":"Разбитая ограда","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5.46875,-16.5625,0],"rotation":[0,0,0],"scale":[2.65625,0.9375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-23","name":"Разбитая ограда","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[9.53125,-11.875,0],"rotation":[0,0,0],"scale":[1.015625,2.8125,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-24","name":"Разбитая ограда","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[29.53125,-17.96875,0],"rotation":[0,0,0],"scale":[3.28125,0.859375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-25","name":"Разбитая ограда","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7.34375,-26.09375,0],"rotation":[0,0,0],"scale":[2.1875,0.859375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-26","name":"Разбитая ограда","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[25.3125,-25.46875,0],"rotation":[0,0,0],"scale":[2.1875,0.859375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"wall"}}]},{"id":"castle-27","name":"Старый ясень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4.6875,-9.6875,0],"rotation":[0,0,0],"scale":[1,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tree"}}]},{"id":"castle-28","name":"Старый ясень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[7.65625,-14.21875,0],"rotation":[0,0,0],"scale":[1,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tree"}}]},{"id":"castle-29","name":"Старый ясень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5.3125,-12.96875,0],"rotation":[0,0,0],"scale":[1,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tree"}}]},{"id":"castle-30","name":"Старый ясень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[10.3125,-6.25,0],"rotation":[0,0,0],"scale":[1,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tree"}}]},{"id":"castle-31","name":"Старый ясень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[33.4375,-21.5625,0],"rotation":[0,0,0],"scale":[1,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tree"}}]},{"id":"castle-32","name":"Старый ясень","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[26.5625,-5.3125,0],"rotation":[0,0,0],"scale":[1,1,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.cover","values":{"style":"tree"}}]},{"id":"castle-33","name":"Последний страж","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18.75,-17.65625,0],"rotation":[0,0,0],"scale":[0.5,0.5,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.spawn","values":{}}]},{"id":"castle-34","name":"Место силы · well","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18.75,-15.78125,0],"rotation":[0,0,0],"scale":[0.859375,0.859375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.station","values":{"kind":"well"}}]},{"id":"castle-35","name":"Место силы · arrows","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[10.3125,-22.96875,0],"rotation":[0,0,0],"scale":[0.859375,0.859375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.station","values":{"kind":"arrows"}}]},{"id":"castle-36","name":"Место силы · mana","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18.75,-7.1875,0],"rotation":[0,0,0],"scale":[0.859375,0.859375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.station","values":{"kind":"mana"}}]},{"id":"castle-37","name":"Место силы · bell","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18.75,-25.625,0],"rotation":[0,0,0],"scale":[0.859375,0.859375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.station","values":{"kind":"bell"}}]},{"id":"castle-38","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[2.65625,-4.0625,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]},{"id":"castle-39","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18.75,-2.1875,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]},{"id":"castle-40","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[34.6875,-4.53125,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]},{"id":"castle-41","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[34.6875,-16.09375,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]},{"id":"castle-42","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[34.375,-27.03125,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]},{"id":"castle-43","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[18.75,-27.5,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]},{"id":"castle-44","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[2.8125,-27.1875,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]},{"id":"castle-45","name":"Разлом тумана","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[2.5,-15.625,0],"rotation":[0,0,0],"scale":[1.09375,1.09375,0.8]},"surface":{"texture":"none","color":"#59635c","roughness":0.9,"metalness":0,"repeat":1},"components":[{"type":"bastion.gate","values":{}}]}],"textures":[],"camera":{"projection":"orthographic","fov":35,"height":24,"distance":30,"centerX":18.75,"centerY":-15,"follow":"player"},"environment":{"time":1320,"haze":0.06,"exposure":1,"flashlight":false},"moduleData":{"bastion":{"version":1,"width":2400,"height":1920,"zones":[{"name":"ЯСЕНЕВАЯ РОЩА","x":440,"y":700},{"name":"СТАРАЯ ЧАСОВНЯ","x":1200,"y":480},{"name":"КЛАДБИЩЕ КОРОЛЕЙ","x":1940,"y":600},{"name":"ДВОР КЛЯТВЫ","x":1200,"y":1080},{"name":"КУЗНЕЧНЫЙ ДВОР","x":500,"y":1540},{"name":"РУИНЫ КАЗАРМЫ","x":1900,"y":1550},{"name":"ЮЖНЫЕ ВРАТА","x":1200,"y":1650}]}}}}'),Gc={manifest:Rx,scenes:Cx},Px=s=>new URL("./"+s,location.href).href;Ax(Gc,[vd],Gc.manifest.startScene,Px).catch(s=>{document.getElementById("app").textContent="Не удалось запустить игру: "+s.message});
