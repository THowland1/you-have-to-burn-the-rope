var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},r=e.parcelRequiref536;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in t){var r=t[e];delete t[e];var l={id:e,exports:{}};return a[e]=l,r.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){t[e]=a},e.parcelRequiref536=r);var l=r("fhmpD"),o=r("6vGfG"),i=r("i6XKk"),n=r("iAOOi"),s=r("hIz9Q"),c=r("lH8pK"),d=r("eO54F"),f=r("23Gzg"),p=r("ePQeA"),u=r("7KYR5"),y=r("2QuBt"),h=r("8BsEr"),g=r("l0bXA"),m=r("3baFF"),E=r("gjplt"),M=r("1m88l"),v=r("dG7qe"),w=r("9PeYs"),T=r("bVu7s"),A=r("6Wh8A"),R=r("k2Jgz"),S=r("hdaJi");"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register(S.ASSET_URLS["../serviceworker.js"],{type:"module"}).then((e=>console.log("Success: ",e.scope))).catch((e=>console.log("Failure: ",e)))})),document.getElementById("show-info").addEventListener("click",(()=>{document.getElementById("info").classList.remove("hidden")})),document.getElementById("hide-info").addEventListener("click",(()=>{document.getElementById("info").classList.add("hidden")})),document.getElementById("canvas").addEventListener("click",(()=>{E.phaseManager.startStartPhase()})),function e(){const a=(new Date).valueOf();if(R.timeManager.msPerFrame=a-R.timeManager.now,R.timeManager.now=a,f.DEBUG_DELAY?setTimeout((()=>{requestAnimationFrame(e)}),f.DEBUG_DELAY):requestAnimationFrame(e),c.c.clearRect(0,0,c.canvas.width,c.canvas.height),E.phaseManager.phase===E.PHASES.clicktostart)return c.c.fillStyle="white",c.c.textAlign="center",c.c.font="500 14px Inter",void c.c.fillText("Click to start",c.FRAME_WIDTH/2,c.FRAME_HEIGHT/2);l.audioManager.endCreditsMusic.currentTime<2?(i.bg.draw(),E.phaseManager.showBackDoor&&E.phaseManager.drawBackDoor(),n.boss.update(),v.player.update(),T.rope.update(),d.chandelier.update(),y.explosions.update(),w.plumes.update(),o.axes.update(),m.lasers.update(),g.healthBar.update(),h.flames.forEach((e=>e.draw())),c.canvas.style.opacity=String((2-l.audioManager.endCreditsMusic.currentTime)/2),s.buttonManager.setOpacity((2-l.audioManager.endCreditsMusic.currentTime)/2)):(c.canvas.style.opacity=String(1),s.buttonManager.hide()),v.player.left>=3456?E.phaseManager.startBossFightPhase():v.player.left>=192&&E.phaseManager.startTunnelPhase(),c.c.fillStyle="white",A.slides.forEach((e=>e.draw())),v.player.hasFlame&&v.player.intersects(T.rope.flammableBitOfRope)&&(v.player.hasFlame=!1,E.phaseManager.startRopeBurningPhase()),f.SHOW_PLATFORMS&&M.platforms.forEach((e=>e.draw())),f.SHOW_DEBUGMENU&&u.debugMenu.draw(),f.SHOW_GRIDLINES&&(c.c.fillStyle="white",Array.from(Array(f.COURSE_WIDTH/128)).forEach(((e,a)=>{c.c.fillRect(128*a-p.offset.x,0,1,c.FRAME_HEIGHT),c.c.fillText(""+4*a,128*a-p.offset.x,10)})),Array.from(Array(f.COURSE_HEIGHT/160)).forEach(((e,a)=>{c.c.fillRect(0,160*a-p.offset.y,c.FRAME_WIDTH,1),c.c.fillText(""+5*a,10,160*a-p.offset.y)}))),(v.player.localRight>400&&p.offset.x+c.FRAME_WIDTH<f.COURSE_WIDTH&&v.player.velocity.x>0||v.player.localLeft<200&&p.offset.x>0&&v.player.velocity.x<0)&&(p.offset.x+=v.player.velocity.x*R.timeManager.msPerFrame),(v.player.localTop<175&&p.offset.y>0&&v.player.velocity.y<0||v.player.localBottom>200&&p.offset.y+c.FRAME_HEIGHT<f.COURSE_HEIGHT&&v.player.velocity.y>0)&&(p.offset.y+=v.player.velocity.y*R.timeManager.msPerFrame)}();
//# sourceMappingURL=yhtbtr.fd9b9ab4.js.map
