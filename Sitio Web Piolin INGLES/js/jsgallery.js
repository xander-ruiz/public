// jsgallery 2.1 <http://code.google.com/p/jsgallery/>
// Copyright (c) 2008 Malte Schmitz <http://malte.schmitz-sh.de>
// This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>


var dirImagesBotones = 'images/botonesGaleria/';

function $(a){
	return document.getElementById(a);
}

function jsgallery(id, dirImages )
{
	this.delay=2;
	this.id=id;this.images=[];
	this.thumbnails=[];
	this.activeBorderColor='#CCC';
	this.defaultBorderColor='#444';
	this.playInterval=null;
	this.thumbnailContainerHeight=0;
	this.activeImage=1;	
	this.imageSize = 40;
	this.imageWideSize = 50;
	
	this.addClickHandler=function(object,handler){object.jsgallery=this;object.onclick=handler;};

	this.addButton=function(clickHandler,image,altText){
		var node=document.createElement('button');this.addClickHandler(node,clickHandler);
		node.appendChild(document.createElement('img'));
		node.firstChild.src=image;node.firstChild.alt=altText;
		this.buttonContainer.appendChild(node);return node;
	};

	this.addImages=function(prefix,count,digits){
		count=count||0;digits=digits||2;

		function int2str(int,digits){
			int=String(int);while(int.length<digits){
			int='0'+int;}
			return int;
		}

		var number='';for(var i=1;i<=count;i++){
		number=int2str(i,digits);this.addImage( prefix+number+'.jpg',String(i),prefix+number+'k.jpg');}
	};

	this.addImage=function(image,title,thumbnail){
		var dom=document.createElement('div');
		var node=document.createElement('div');		
		var texto=document.createElement('div');				
		var imagen = document.createElement('img');
	
		imagen.src=dirImages+image;
		imagen.alt=title;
		node.className='jsgallery_image';
									
		texto.appendChild(document.createTextNode(title));						
		texto.className='jsgallery_title';
		
		node.appendChild(texto);		
		dom.appendChild(node);

		node.appendChild(imagen);
		
		this.images.push(dom);
		
		this.imageContainer.appendChild(dom);
		
		if(this.images.length!==1){dom.style.display='none';}
		
		imagen=document.createElement('img');
		imagen.src=dirImages+thumbnail;
		imagen.alt=title;
		this.addClickHandler(imagen,this.thumbnailClickHandler);
		
		this.thumbnails.push(imagen);
		
		this.thumbnailContainer.appendChild(imagen);
		
		if(this.images.length===1){
			this.defaultBorderColor=imagen.style.borderColor;
			imagen.style.borderColor=this.activeBorderColor;
			imagen.style.width=this.imageWideSize;
			imagen.style.height=this.imageWideSize;			
			}
		imagen.jsgalleryImageId=this.images.length;
	};

	this.showImage=function(i){
		this.thumbnails[this.activeImage-1].style.borderColor=this.defaultBorderColor;
		this.images[this.activeImage-1].style.display='none';
		this.thumbnails[this.activeImage-1].style.width=this.imageSize;
		this.thumbnails[this.activeImage-1].style.height=this.imageSize;		
		
		this.thumbnails[this.activeImage-1].style.opacity=0.5;			
		this.thumbnails[this.activeImage-1].style.filter='alpha(opacity=50)';
		
										
		this.activeImage=i;
		this.thumbnails[this.activeImage-1].style.borderColor=this.activeBorderColor;
		this.thumbnails[this.activeImage-1].style.width=this.imageWideSize;
		this.thumbnails[this.activeImage-1].style.height=this.imageWideSize;

		this.thumbnails[this.activeImage-1].style.opacity=1;		
		this.thumbnails[this.activeImage-1].style.filter='alpha(opacity=100)';
		
		this.images[this.activeImage-1].style.display='block';						
	};

	this.nextImage=function(){
		if(this.activeImage<this.images.length){
		this.showImage(this.activeImage+1);}else{
		this.showImage(1);}
	};

	this.doPlay=function(){
		this.firstBtn.style.display='none';this.prevBtn.style.display='none';
		this.playBtn.style.display='none';this.pauseBtn.style.display='inline';
		this.nextBtn.style.display='none';this.lastBtn.style.display='none';
		this.playInterval=window.setInterval('$(\''+this.id+'\').jsgallery.nextImage();',this.delay*1000);
	};

	this.doPause=function(){
		this.firstBtn.style.display='inline';this.prevBtn.style.display='inline';this.playBtn.style.display='inline';
		this.pauseBtn.style.display='none';
		this.nextBtn.style.display='inline';
		this.lastBtn.style.display='inline';
		window.clearInterval(this.playInterval);this.playInterval=null;
	};

	this.firstClickHandler=function(){
		this.jsgallery.showImage(1);
	};

	this.prevClickHandler=function(){
		if(this.jsgallery.activeImage>1){
		this.jsgallery.showImage(this.jsgallery.activeImage-1);}else{
		this.jsgallery.showImage(this.jsgallery.images.length);}
	};

	this.playClickHandler=function(){
		this.jsgallery.doPlay();
	};

	this.pauseClickHandler=function(){
	this.jsgallery.doPause();};

	this.nextClickHandler=function(){
	this.jsgallery.nextImage();};

	this.lastClickHandler=function(){
		this.jsgallery.showImage(this.jsgallery.images.length);
	};

	this.thumbnailClickHandler=function(){
		/*if(this.jsgallery.playInterval===null){*/
		this.jsgallery.showImage(this.jsgalleryImageId);
		/*}*/
	};

	var dom=document.createElement('div');
	dom.className='jsgallery';	
	dom.id=id;
	$(id).parentNode.replaceChild(dom,$(id));
	$(id).jsgallery=this;
	
	this.buttonContainer=document.createElement('div');
	this.buttonContainer.className='jsgallery_button_container';
	
	dom.appendChild(this.buttonContainer);
	
	this.firstBtn=this.addButton(this.firstClickHandler,dirImagesBotones+'first.png','|<<');
	this.prevBtn=this.addButton(this.prevClickHandler,dirImagesBotones+'prev.png','<<');
	this.playBtn=this.addButton(this.playClickHandler,dirImagesBotones+'play.png','Play');
	this.pauseBtn=this.addButton(this.pauseClickHandler,dirImagesBotones+'stop.png','Pause');
	this.nextBtn=this.addButton(this.nextClickHandler,dirImagesBotones+'next.png','>>');
	this.lastBtn=this.addButton(this.lastClickHandler,dirImagesBotones+'last.png','>>|');
	
	this.imageContainer=document.createElement('div');
	this.imageContainer.className='jsgallery_image_container';	
	
	dom.appendChild(this.imageContainer);
	
	this.thumbnailContainer=document.createElement('div');
	this.thumbnailContainer.className='jsgallery_thumbnail_container';
		
	dom.appendChild(this.thumbnailContainer);	
	
}