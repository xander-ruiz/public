

vbfuncion01n=xppr('btServicios.jpg');
vbfuncion01o=xppr('btServicios01.jpg');
vbfuncion01c=xppr('btServicios01.jpg');

vbfuncion02n=xppr('btProyectos.jpg');
vbfuncion02o=xppr('btProyectos01.jpg');
vbfuncion02c=xppr('btProyectos01.jpg');

vbfuncion03n=xppr('btanimaciones.jpg');
vbfuncion03o=xppr('btanimaciones01.jpg');
vbfuncion03c=xppr('btanimaciones01.jpg');

vbfuncion04n=xppr('btServicios.jpg');
vbfuncion04o=xppr('btServicios01.jpg');
vbfuncion04c=xppr('btServicios01.jpg');

vbfuncion05n=xppr('btHojadevida.jpg');
vbfuncion05o=xppr('btHojadevida01.jpg');
vbfuncion05c=xppr('btHojadevida01.jpg');

vbfuncion06n=xppr('btContacto.jpg');
vbfuncion06o=xppr('btContacto01.jpg');
vbfuncion06c=xppr('btContacto01.jpg');

vbfuncion07n=xppr('btHome.jpg');
vbfuncion07o=xppr('btHome01.jpg');
vbfuncion07c=xppr('btHome.jpg');


var arrowChar='&raquo;';

var btIdPref='vb';
function xppr(im){var i=new Image();i.src='images/'+im;return i;};
function xpe(id){
x=id.substring(0,id.length-1);if(document[btIdPref+x])
{
  document[btIdPref+x].src=eval(btIdPref+id+'.src');if(id.indexOf('e')!=-1)document[btIdPref+x+'e'].src=eval(btIdPref+id+'e.src');
};
return false;
};

var ulIdPref='vbUL_',imgIdPref='xpi_',menuContId='xpMenuCont',hideTimeout=200;function xpinit(){
document.write('<div id="'+menuContId+'" ></div>');var ULs=document.getElementsByTagName('UL');for(var i=0,cnt=ULs.length;i<cnt;i++)if(ULs[i].id&&(ULs[i].id.substring(0,ulIdPref.length)==ulIdPref)&&!((ULs[i].parentNode)&&(ULs[i].parentNode.parentNode)&&(ULs[i].parentNode.parentNode.id.substring(0,ulIdPref.length)==ulIdPref))){xpCreateMenu(ULs[i],0,0);};isDOM=document.getElementById;isOp=isO5=window.opera&&isDOM;isOp6=isOp&&window.print;isOp7=isOp&&document.readyState;isIE=document.all&&document.all.item&&!isOp;isIE5=isDOM&&isIE;isNS4=document.layers;isMz=isDOM&&navigator.appName=="Netscape";};

xpinit();function xpObjectSize(o){
var w=(isOp&&!isOp7)?o.style.pixelWidth:isNS4?o.clip.width:o.offsetWidth,h=(isOp&&!isOp7)?o.style.pixelHeight:isNS4?o.clip.height:o.offsetHeight;return{x:w,y:h};};

function xpClientSize(){
var x=0,y=0,w=0,h=0,doc=document,win=window,cond=(!doc.compatMode||doc.compatMode=='CSS1Compat')&&!win.opera&&doc.documentElement;if(cond&&doc.documentElement.clientHeight)h=doc.documentElement.clientHeight;else if(doc.body&&doc.body.clientHeight)h=doc.body.clientHeight;else if(xpDef(win.innerWidth,win.innerHeight,doc.width)){h=win.innerHeight;if(doc.width>win.innerWidth)h-=16;};if(cond&&doc.documentElement.clientWidth)w=doc.documentElement.clientWidth;else if(doc.body&&doc.body.clientWidth)w=doc.body.clientWidth;else if(xDef(win.innerWidth,win.innerHeight,doc.height)){w=win.innerWidth;if(doc.height>win.innerHeight)w-=16;};if(win.document.documentElement&&win.document.documentElement.scrollLeft)x=win.document.documentElement.scrollLeft;else if(win.document.body&&xpDef(win.document.body.scrollLeft))x=win.document.body.scrollLeft;if(win.document.documentElement&&win.document.documentElement.scrollTop)y=win.document.documentElement.scrollTop;else if(win.document.body&&xpDef(win.document.body.scrollTop))y=win.document.body.scrollTop;return{x:x,y:y,w:w,h:h};};

function xpDef(){
for(var i=0;i<arguments.length;++i){if(typeof(arguments[i])=='undefined')return false;};return true;};

function xppos(obj){
var l=0,t=0;while(obj){l+=obj.offsetLeft;t+=obj.offsetTop;if(obj.style&&obj.style.position=='absolute')break;obj=obj.offsetParent;};return{x:l,y:t};};

function xpCreateMenu(ulParent,iParent,level){
var menuCont=document.getElementById(menuContId),oMenu=document.createElement('div');menuCont.appendChild(oMenu);var oTable=document.createElement('table');oMenu.appendChild(oTable);oMenu.id=ulParent.id+'tbl';oMenu.className=ulParent.className;oMenu.style.position='absolute';oMenu.iParent=iParent;oMenu.level=level;oMenu.style.zIndex=9+oMenu.level;oTable.cellSpacing=0;oMenu.onmouseover=function(){xpsmover(this)};oMenu.onmouseout=function(){xpsmout(this)};oMenu.ClearMenuMark=function(){for(var j=0;j<this.childNodes[0].rows.length;j++){p=this.childNodes[0].rows[j];if(p.tagName=='TR')p.className=p.className.replace('over','');};};oMenu.smShown=0;for(var i=0,cntLI=ulParent.childNodes.length;i<cntLI;i++){var oLI=ulParent.childNodes[i];if(oLI.tagName=='LI'){var oItem=oTable.insertRow(-1);oItem.menu=oMenu;oItem.setPopup=function(){this.className+=' popup';};oItem.clrPopup=function(){this.className=this.className.replace('popup','');};oTDIMG=oItem.insertCell(-1);oTDLabel=oItem.insertCell(-1);oTDArrow=oItem.insertCell(-1);oTDIMG.style.borderRightWidth='0px';oTDLabel.style.borderRightWidth='0px';oTDLabel.style.borderLeftWidth='0px';oTDArrow.style.borderLeftWidth='0px';oTDIMG.style.paddingRight='4px';oTDLabel.style.paddingRight='4px';oTDLabel.style.paddingLeft='2px';oTDArrow.style.paddingLeft='4px';var InnerAnchor=0,InnerImg=0,InnerUl=0,InnerArrow=0;for(var j=0;j<oLI.childNodes.length;j++)if(oLI.childNodes[j].tagName=='A')InnerAnchor=oLI.childNodes[j];else if(oLI.childNodes[j].tagName=='IMG'){if(!InnerAnchor)InnerImg=oLI.childNodes[j];else InnerArrow=oLI.childNodes[j];}else if(oLI.childNodes[j].tagName=='UL')InnerUl=oLI.childNodes[j];if(InnerImg)oTDIMG.appendChild(InnerImg);else oTDIMG.innerHTML='&nbsp;';if(InnerAnchor)oTDLabel.appendChild(InnerAnchor);else oTDLabel.innerHTML='&nbsp;';oItem.onmouseover=function(){this.menu.ClearMenuMark();this.className+=' over';if(this.smPopupId)xpshowmenu(this.smPopupId,1,this);else if(this.menu.smShown)StartTimeOut(this.menu.smShown);};oItem.onmouseout=function(){this.menu.ClearMenuMark();};if(InnerUl){oTDArrow.className='arrow';if(InnerArrow)oTDArrow.appendChild(InnerArrow);else oTDArrow.innerHTML=arrowChar?('<a style="text-decoration: none;">'+arrowChar+'</a>'):'&nbsp;';oItem.smPopupId=xpCreateMenu(InnerUl,oItem,level+1);}else oTDArrow.innerHTML='&nbsp;';};};return oMenu.id;};

function xpshow(ind,isVertical,iParent){xpshowmenu(ulIdPref+ind+'tbl',isVertical,iParent);};

function xpshowmenu(menuID,isVertical,iParent){
var menu=document.getElementById(menuID);if(!menu)return;if(menu.style.visibility=='visible'){StopTimeOut(menu);return;};if(iParent&&iParent.menu&&iParent.menu.smShown)xphide(iParent.menu.smShown.id);if(!menu.level&&(ShownMenu!=menu))xphide(ShownMenu.id);if(!menu.level)xobtn=menuID.replace(ulIdPref,'').replace('tbl','');var parentObj;if(iParent.tagName=='A'){parentObj=iParent.parentNode;}else parentObj=iParent;var pos=xppos(parentObj),size=xpObjectSize(parentObj);menu.goMenuX=1;menu.goMenuDx=1;if(menu.level>0){menu.goMenuX=menu.iParent.menu.goMenuX;menu.goMenuDx=menu.iParent.menu.goMenuDx;};menu.style.overflow='visible';menu.style.height='auto';menu.style.width='auto';menu.style.left='0px';menu.style.top='0px';var parentAbs=xppos(menu),WinSize=xpClientSize(),menuSize=xpObjectSize(menu),CalcedPos=xp_CalcMenuPos(WinSize.y,WinSize.h,pos.y,size.y,menuSize.y,menu.goMenuDx,isVertical);menu.goMenuDx=CalcedPos.align;if(isOp&&!menu.OrigWidth)menu.OrigWidth=menu.clientWidth;if(CalcedPos.size<menuSize.y){menu.style.overflow='auto';if(isIE)menu.style.overflowX='visible';if(isIE)menu.style.width=menu.offsetWidth+17+'px';else if(isMz)menu.style.magrinRight=20;menu.style.height=CalcedPos.size+'px';menu.scrollTop=0;menu.scrollLeft=0;if(isOp)menu.style.width=menu.OrigWidth+'px';}else{};menu.style.top=CalcedPos.xy-parentAbs.y+'px';menuSize=xpObjectSize(menu);CalcedPos=xp_CalcMenuPos(WinSize.x,WinSize.w,pos.x,size.x,menuSize.x,menu.goMenuX,!isVertical);menu.goMenuX=CalcedPos.align;if(CalcedPos.size<menuSize.x)if(menu.goMenuX>0)CalcedPos.xy-=(menuSize.x-CalcedPos.size);menu.style.left=CalcedPos.xy-parentAbs.x+'px';menu.style.visibility='visible';if(!menu.level)ShownMenu=menu;else{iParent.menu.smShown=menu;iParent.setPopup();};};

function xp_CalcMenuPos(screenXY,screenSize,parentXY,parentSize,size,align,oHoriz){
var xy=parentXY,newSize=size,newAlign=align,space=5;if((align==0)&&(!oHoriz))align=1;if(!oHoriz){if(((newAlign>=0)&&(parentXY+parentSize+size>screenSize+screenXY-space))||((newAlign<0)&&(parentXY-size<space))){if(parentXY-screenXY>screenSize+screenXY-(parentXY+parentSize))newAlign=-1;else newAlign=1;};if(newAlign>=0){xy=parentXY+parentSize;if(screenSize+screenXY-space-xy<newSize)newSize=screenSize+screenXY-space-xy;}else{xy=parentXY-newSize;if(xy-screenXY<space){xy=space+screenXY;newSize=parentXY-space-screenXY;};};}else{if(newSize>screenSize-2*space){xy=space+screenXY;newSize=screenSize-2*space;}else{xy=parentXY+parentSize/2-newSize/2+newAlign*(newSize/2-parentSize/2);if(xy<space+screenXY){newAlign=1;xy=space+screenXY;};if(xy+size>screenSize+screenXY-space){newAlign=-1;xy-=xy+newSize-(screenSize+screenXY-space);};};};return{xy:xy,size:newSize,align:newAlign};};

function xphide(menuId){
var menu=document.getElementById(menuId);if(!menu)return;if(menu.style.visibility=='visible'){if(menu.smShown)xphide(menu.smShown.id);menu.ClearMenuMark();menu.style.visibility='hidden';if(menu.level==0){xpe(xobtn+'n');};menu.smShown=0;if(menu.iParent)menu.iParent.clrPopup();if(menu.hideTimer){clearTimeout(menu.hideTimer);menu.hideTimer=null;};};};

function xpsmout(sender){
if(!sender)return;StartTimeOut(ShownMenu)};

function xpsmover(menu){
if(!menu)return;StopTimeOut(menu);};

function StopTimeOut(menu){for(var o=menu;o;o=o.iParent?o.iParent.menu:0)if(o.hideTimer)o.hideTimer=clearTimeout(o.hideTimer);};

function StartTimeOut(menu){for(var o=menu;o;o=o.smShown){var code='xphide("'+o.id+'");';if(!o.hideTimer&&o.id)o.hideTimer=setTimeout(code,hideTimeout);};

};var ShownMenu=0,xobtn=null;


/**********************/


var delay = 500; //set delay between message change (in miliseconds)
var maxsteps=10; // number of steps to take to change from start color to endcolor
var stepdelay=500; // time in miliseconds of a single step;
//**Note: maxsteps*stepdelay will be total time in miliseconds of fading effect
var startcolor= new Array(255,255,255); // start color (red, green, blue)
var endcolor=new Array(100,100,100); // end color (red, green, blue)


var fcontent=new Array();
var today = new Date();
var tiempo = today.toLocaleDateString();	


begintag=''; /* "<div class='PiePagina'>";  */
fcontent[0]="<p><b>Designed by : </b><a href='mailto:xander.ruiz@gmail.com?subject=Contact about the Website http://erica.byethost13.com&body=Website design'>Johnny Ruiz - xander.ruiz@gmail.com</a></p>";
fcontent[1]="<p><b>Contact me : </b><a href='mailto:ericaruizcardenas@gmail.com?subject=http://erica.byethost13.com&body=Website Architect Erica Ruiz'>ericaruizcardenas@gmail.com</a></p>";
fcontent[2]="<p><b>© Copyright - All rights reserved</b></p>";
fcontent[3]="<p><b><a>Date : </a></b>"+tiempo+"</p>";
fcontent[4]="<p><b>Phone: (57-4)-5990442    /     Mobile: (57) 312 270 98 48</b></p>";
fcontent[5]="<p><b>Erica Ruiz - Architecture</b></p>";

closetag=''; /* </div>'; */

var fwidth='820px'; //set scroller width
var fheight='10px'; //set scroller height

var fadelinks=1;  //should links inside scroller content also fade like text? 0 for no, 1 for yes.

///No need to edit below this line/////////////////


var ie4=document.all&&!document.getElementById;
var DOM2=document.getElementById;
var faderdelay=1;
var index=0;


//function to change content
function changecontent(){
  if (index>=fcontent.length)
    index=0
  if (DOM2){
    document.getElementById("fscroller").style.color="rgb("+startcolor[0]+", "+startcolor[1]+", "+startcolor[2]+")"
    document.getElementById("fscroller").innerHTML=begintag+fcontent[index]+closetag
    if (fadelinks)
      linkcolorchange(1);
    colorfade(1, 15);
  }
  else if (ie4)
    document.all.fscroller.innerHTML=begintag+fcontent[index]+closetag;
  index++
}

function linkcolorchange(step){/*
  var obj=document.getElementById("fscroller").getElementsByTagName("A");
  if (obj.length>0){
    for (i=0;i<obj.length;i++)
      obj[i].style.color=getstepcolor(step); 
  }
  */
}

var fadecounter;
function colorfade(step) {
  if(step<=maxsteps) {	
    document.getElementById("fscroller").style.color=getstepcolor(step);
    if (fadelinks)
      linkcolorchange(step);
    step++;
    fadecounter=setTimeout("colorfade("+step+")",stepdelay);
  }else{
    clearTimeout(fadecounter);
    document.getElementById("fscroller").style.color="rgb("+endcolor[0]+", "+endcolor[1]+", "+endcolor[2]+")";
    setTimeout("changecontent()", delay);
	
  }   
}

function getstepcolor(step) {
  var diff
  var newcolor=new Array(3);
  for(var i=0;i<3;i++) {
    diff = (startcolor[i]-endcolor[i]);
    if(diff > 0) {
      newcolor[i] = startcolor[i]-(Math.round((diff/maxsteps))*step);
    } else {
      newcolor[i] = startcolor[i]+(Math.round((Math.abs(diff)/maxsteps))*step);
    }
  }
  return ("rgb(" + newcolor[0] + ", " + newcolor[1] + ", " + newcolor[2] + ")");
}

