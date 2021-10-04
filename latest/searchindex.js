Search.setIndex({docnames:["changelog","datasets","index","installing","io","models","transforms","using_model_export","using_models","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog.rst","datasets.rst","index.rst","installing.rst","io.rst","models.rst","transforms.rst","using_model_export.rst","using_models.rst","utils.rst"],objects:{"doctr.datasets":{CORD:[1,0,1,""],CharacterGenerator:[1,0,1,""],FUNSD:[1,0,1,""],OCRDataset:[1,0,1,""],SROIE:[1,0,1,""],encode_sequences:[1,1,1,""]},"doctr.datasets.loader":{DataLoader:[1,0,1,""]},"doctr.io":{Artefact:[4,0,1,""],Block:[4,0,1,""],Document:[4,0,1,""],DocumentFile:[4,0,1,""],Line:[4,0,1,""],PDF:[4,0,1,""],Page:[4,0,1,""],Word:[4,0,1,""],decode_img_as_tensor:[4,1,1,""],read_html:[4,1,1,""],read_img_as_numpy:[4,1,1,""],read_img_as_tensor:[4,1,1,""],read_pdf:[4,1,1,""]},"doctr.io.Document":{show:[4,2,1,""]},"doctr.io.DocumentFile":{from_images:[4,2,1,""],from_pdf:[4,2,1,""],from_url:[4,2,1,""]},"doctr.io.PDF":{as_images:[4,2,1,""],get_artefacts:[4,2,1,""],get_words:[4,2,1,""]},"doctr.io.Page":{show:[4,2,1,""]},"doctr.models":{ocr_predictor:[5,1,1,""]},"doctr.models.backbones":{mobilenet_v3_large:[5,1,1,""],mobilenet_v3_large_r:[5,1,1,""],mobilenet_v3_small:[5,1,1,""],mobilenet_v3_small_r:[5,1,1,""],resnet31:[5,1,1,""],vgg16_bn:[5,1,1,""]},"doctr.models.detection":{db_mobilenet_v3_large:[5,1,1,""],db_resnet50:[5,1,1,""],detection_predictor:[5,1,1,""],linknet16:[5,1,1,""]},"doctr.models.recognition":{crnn_mobilenet_v3_large:[5,1,1,""],crnn_mobilenet_v3_small:[5,1,1,""],crnn_vgg16_bn:[5,1,1,""],master:[5,1,1,""],recognition_predictor:[5,1,1,""],sar_resnet31:[5,1,1,""]},"doctr.transforms":{ColorInversion:[6,0,1,""],Compose:[6,0,1,""],LambdaTransformation:[6,0,1,""],Normalize:[6,0,1,""],OneOf:[6,0,1,""],RandomApply:[6,0,1,""],RandomBrightness:[6,0,1,""],RandomContrast:[6,0,1,""],RandomCrop:[6,0,1,""],RandomGamma:[6,0,1,""],RandomHue:[6,0,1,""],RandomJpegQuality:[6,0,1,""],RandomRotate:[6,0,1,""],RandomSaturation:[6,0,1,""],Resize:[6,0,1,""],ToGray:[6,0,1,""]},"doctr.utils.metrics":{LocalizationConfusion:[9,0,1,""],OCRMetric:[9,0,1,""],TextMatch:[9,0,1,""]},"doctr.utils.metrics.LocalizationConfusion":{summary:[9,2,1,""],update:[9,2,1,""]},"doctr.utils.metrics.OCRMetric":{summary:[9,2,1,""],update:[9,2,1,""]},"doctr.utils.metrics.TextMatch":{summary:[9,2,1,""],update:[9,2,1,""]},"doctr.utils.visualization":{synthesize_page:[9,1,1,""],visualize_page:[9,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:function","2":"py:method"},terms:{"0123456789":1,"0123456789abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz":1,"02562":5,"0361328125":8,"06640625":8,"0966796875":8,"100":[1,6,7,8,9],"1000":8,"1024":[5,7,8,9],"108":1,"110":9,"116":1,"123":1,"126":1,"128":[5,8],"131":1,"1357421875":8,"1396484375":8,"150":[8,9],"160":5,"1630859375":8,"185546875":8,"1910":5,"199":8,"200":9,"2019":2,"224":[5,6,7],"225":6,"229":6,"255":[4,5,6,8,9],"256":5,"30595":8,"3232421875":8,"340":8,"3515625":8,"406":6,"456":6,"485":6,"51171875":8,"512":5,"5478515625":8,"5810546875":8,"600":[5,8,9],"800":[5,8,9],"8275l":8,"8564453125":8,"8603515625":8,"914085328578949":8,"9578408598899841":8,"9949972033500671":8,"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7\u00e0\u00e2\u00e9\u00e8\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00e7":1,"\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7\u00e0\u00e2\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00f9\u00fb\u00fc\u00e7":1,"\u00e1\u00e0\u00e2\u00e3\u00e9\u00ea\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7\u00e1\u00e0\u00e2\u00e3\u00e9\u00eb\u00ed\u00ef\u00f3\u00f4\u00f5\u00fa\u00fc\u00e7":1,"\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\u00f1":1,"\u00e4\u00f6\u00fc\u00df\u00e4\u00f6\u00fc\u00df":1,"boolean":5,"byte":4,"case":[1,8,9],"class":[1,4,6,9],"default":[4,7,9],"export":[4,7,8,9],"final":7,"float":[4,6,7,9],"function":[6,9],"import":[1,4,5,6,7,8,9],"int":[1,4,6,9],"new":9,"public":2,"return":[1,4,5,8,9],"static":9,"true":[1,4,5,6,7,8,9],"while":[6,8],AWS:[2,8],And:7,EOS:1,FPS:8,For:[3,8],IDs:8,Its:[2,5],The:[4,8,9],abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz:1,abdef:1,abl:8,about:8,abov:8,access:[1,2,4,8],account:7,accuraci:9,achiev:7,activ:2,add:[6,9],add_label:9,adding:[5,6],addition:[7,8],address:4,adjust:6,after:8,again:3,aggreg:[1,9],align:4,all:[1,4,6,8,9],along:8,also:8,analysi:4,angl:[4,6],ani:[1,4,5,6,7,8,9],annot:4,anoth:[1,3,5],anyon:2,api:2,appli:[1,6],applic:[2,5],appropri:8,arch:5,architectur:[2,5],arg:1,argument:[1,4],arrai:[4,9],art:2,artefact:[8,9],artefact_typ:4,arxiv:5,as_imag:4,asarrai:9,ascii_lett:1,aspect:[2,6],assess:9,assign:9,associ:4,astyp:[5,7,8,9],attend:[2,5],autom:2,avail:[2,6],averag:[6,8],avoid:3,b_j:9,backend:8,base:[2,5],baselin:[2,5],batch:[1,5,6,8],batch_siz:1,been:[8,9],befor:[1,6],begin:9,being:[8,9],belong:8,below:8,benchmark:8,better:8,between:[6,9],bgr:4,bilinear:6,binar:[2,5],binari:[4,8],blank:9,block:[8,9],blue:9,bool:[1,4,5,6,9],both:[2,6,8],bottom:8,bound:[1,4,6,8,9],box:[1,4,6,8,9],brew:3,bright:6,browser:2,build:3,cach:1,cache_sampl:1,cairo:3,callabl:[1,6],can:[1,3,7,8],capabl:8,cfg:8,channel:[4,6],charact:[1,2,4,8,9],charactergener:1,charg:8,chart:4,check:8,classmethod:4,clone:3,code:[2,4],collate_fn:1,collect:4,color:[6,9],colorinvers:6,column:4,com:[3,4],combin:8,common:[6,9],compar:2,comparison:[8,9],competit:1,compil:8,complementari:9,compon:8,compos:[1,8],comprehens:8,comput:[8,9],confid:[4,8,9],confus:9,consecut:[6,8],consid:[1,4,8,9],consist:8,consolid:[1,2],constant:6,constraint:7,contain:8,content:[1,4,9],contrast:6,contrast_factor:6,conv_sequ:7,convers:4,convert:[4,6,7],convert_page_to_numpi:4,convolut:5,coordin:[4,8],cord:[1,2,8],core:9,corner:8,correct:6,correspond:[3,8],counterpart:9,cpu:[2,8],crnn:[2,5],crnn_mobilenet_v3_larg:[5,8],crnn_mobilenet_v3_smal:[5,8],crnn_vgg16_bn:[5,8],crop:[6,8],currenc:1,current:8,data:[4,6,9],dataload:1,dataset:[5,8],date:8,db_crnn_resnet:5,db_crnn_vgg:5,db_mobilenet_v3_larg:[5,8],db_resnet50:[5,7,8],db_sar_resnet:5,db_sar_vgg:5,dbnet:[2,5],decod:4,decode_img_as_tensor:4,deep:[5,8],def:7,defer:1,defin:9,degre:6,degress:4,delimit:8,delta:6,demo:2,depend:[2,3],deploy:2,describ:5,design:6,desir:4,det_arch:5,detail:8,detection_predictor:[5,8],detectionpredictor:5,develop:3,developp:3,deviat:6,dict:[4,8,9],dictionari:[4,9],differenti:[2,5],differentiable_binar:5,digit:1,dimens:[4,8,9],dimension:6,directli:8,disclaim:8,displai:[4,9],display_artefact:9,distribut:6,divid:4,doc:[4,8],doctr:[3,7,8],document:[1,8,9],documentfil:4,don:8,done:6,download:1,downsiz:5,draw:[6,9],draw_proba:9,drop:1,drop_last:1,dtype:[4,5,7],dummy_img:8,dynam:1,dynamic_seq_length:1,each:[1,2,4,6,8,9],easi:[2,9],easili:[4,7,8,9],effici:[1,2,5],either:8,element:[1,4,8,9],enabl:[1,4],enclos:4,encod:[1,2,4,5],encode_sequ:1,end:[1,2,5,9],english:1,enough:8,entir:4,eos:1,etc:4,evalu:[1,8],everyth:8,exact:[8,9],exampl:[1,4,5,6,9],expand:6,expect:[4,6],explan:8,exploit:[2,5],express:6,extens:4,extra:3,extract:[1,2],extractor:5,f_a:9,factor:6,fallback:7,fals:[1,5,6,7,9],famili:9,fast:1,favorit:8,featur:[3,5,9],few:[3,7],figsiz:9,figur:9,file:1,find:3,fine:8,firsthand:1,fitz:4,flag:8,flexibl:9,float16:7,float32:[4,5,7],folder:[1,7],follow:[1,3,6,7,8,9],font:9,font_famili:9,font_siz:9,foral:9,form:[1,2,8],format:[4,7,8],forpost:[1,2],frac:9,frame:8,framework:[1,3,4,6,8],french:[1,8],friendli:2,from:[1,2,4,5,6,7,8,9],from_imag:4,from_keras_model:7,from_pdf:4,from_url:4,full:[1,8,9],funsd:[1,2,8],g_x:9,gamma:6,gaussian:6,gdk:3,gener:1,geometri:[4,8],geq:9,german:1,get:[4,8],get_artefact:4,get_word:4,gettextword:4,github:3,given:[1,4,8,9],good:7,googlevis:2,gpu:2,graph:4,grayscal:6,ground:9,groung:9,gt_box:9,gt_label:9,gtk:3,gts:9,gvision:8,handl:1,has:[1,9],hat:9,have:[1,7,8,9],height:4,hello:9,help:7,here:[1,3,6,8],high:4,higher:3,homebrew:3,horizont:4,hsv:6,http:[3,4,5],hue:6,icdar2019:1,icdar:2,identifi:2,imag:[1,2,4,5,6,8,9],imagenet:5,img:[1,6],img_cont:4,img_fold:1,img_path:4,implement:[1,4,6,7,8,9],includ:3,increas:6,index:4,indic:9,infer:[2,6],inference_input_typ:7,inference_output_typ:7,inform:[1,2,8],inherit:7,input:[4,6,8],input_pag:[5,8,9],input_shap:7,input_t:7,input_tensor:5,inspir:6,instanc:8,instead:[1,4],int8:7,integ:[7,9],integr:2,interact:[4,9],interpol:6,interpret:[1,4],intersect:9,invert:6,invoic:8,involv:8,iou:9,iou_thresh:9,irregular:[2,5],isn:1,iter:1,its:[1,4,6,8,9],jpeg:6,jpegqual:6,jpg:[1,4],json:8,json_output:8,just:7,kera:[5,7],kernel_s:7,keyword:[1,4],kwarg:[1,4,5,9],l_j:9,label:[1,9],label_fil:1,lambda:6,lambdatransform:6,languag:[2,4,8],larg:5,largest:9,last:[1,3],latest:3,latin:1,layout:8,learn:8,least:3,left:[8,9],legacy_french:1,length:1,level:[8,9],libffi:3,librari:3,light:2,limits_:9,line:[2,8,9],linknet16:[5,8],linknet:[2,5],linux:3,list:[1,4,6,9],load:[2,7],loader:1,local:[1,2,5,8,9],localizationconfus:9,locat:4,logo:4,look:8,lower:[6,9],maco:3,made:2,mai:8,maintain:2,make:[7,8,9],mani:8,map:1,mask_shap:9,master:[2,5,8],match:[8,9],mathcal:9,matplotlib:9,max:9,max_angl:6,max_area:6,max_delta:6,max_gain:6,max_gamma:6,max_qual:6,max_ratio:6,maximum:[1,6],maxval:[5,6,7],mbox:9,mean:[6,9],meaniou:9,meant:[4,7],measur:8,method:6,metric:[8,9],might:[7,8],min_area:6,min_gain:6,min_gamma:6,min_qual:6,min_ratio:6,min_val:6,minde:[2,3],minim:2,minimum:[3,9],minval:6,miss:3,mobilenet:5,mobilenet_v3_larg:5,mobilenet_v3_large_r:5,mobilenet_v3_smal:5,mobilenet_v3_small_r:5,mobilenetv3:5,mobilenetv3_larg:5,mobilenetv3_smal:5,mode:3,model:[1,9],modifi:5,modul:[4,6,8,9],moment:8,more:8,most:8,multi:2,multipl:[1,4,6],multipli:6,name:[1,5],natur:2,ndarrai:[1,4,9],necessari:3,need:[3,9],neg:6,nest:8,network:[2,5],neural:[2,5],next:1,noisi:[1,2],non:[2,4,6,9],none:[1,4,8,9],normal:[5,6],note:0,num_sampl:1,number:[1,6,8,9],numpi:[1,4,5,8,9],object:[1,8,9],obtain:8,ocr:[1,2,5,9],ocr_db_crnn:9,ocr_predictor:[5,8],ocrdataset:1,ocrmetr:9,ocrpredictor:5,offset:6,onc:8,one:[1,5,6,8],oneof:6,ones:1,onli:[6,9],oper:7,ops:[4,6],opsset:7,optic:[2,8],optim:[2,7],option:[1,4,9],order:[1,4],org:5,organ:4,orient:[4,8],otherwis:9,our:[5,8],out:[5,6,8,9],output:[4,6],output_s:[4,6],over:[1,3,8,9],overlai:4,own:2,packag:[2,7,9],pad:[1,6],page1:4,page2:4,page:[3,8,9],page_idx:[4,8],pair:9,pango:3,paper:5,param:[6,8],paramet:[1,2,4,5,6,9],pars:[1,2],part:6,parti:3,pass:[1,8],path:[1,4,7],pathlib:4,pdf:[4,5],per:[6,8],perform:[2,4,6,7,8,9],phase:8,physic:4,pick:6,pictur:4,pip:3,pixbuf:3,pixel:[4,6,8],platinum:8,plot:9,plt:9,png:4,polygon:[1,8],pool:5,portugues:1,posit:9,possibl:9,post:8,power:2,pre:5,precis:[8,9],pred:9,pred_box:9,pred_label:9,predefin:1,predict:[4,9],predictor:[2,5],prefer:1,preprocessor:8,preserv:6,preserve_aspect_ratio:6,pretrain:[2,5,7,8,9],print:8,privat:8,probabl:6,procedur:6,process:[2,4,8],processor:8,produc:8,product:7,properli:1,properti:7,provid:[2,7,8],publicli:8,punctuat:1,pyplot:9,python:[4,6],pytorch:[2,3,8],qualiti:6,quickli:2,rand:[5,7,8,9],random:[5,6,7,8,9],randomappli:6,randombright:6,randomcontrast:6,randomcrop:6,randomgamma:6,randomhu:6,randomjpegqu:6,randomli:6,randomrot:6,randomsatur:6,rang:[6,7],ratio:6,raw:[4,9],read:[2,5],read_html:4,read_img:4,read_img_as_numpi:4,read_img_as_tensor:4,read_pdf:4,readi:7,real:[2,5,6],recal:[8,9],receipt:[1,2,8],reco_arch:5,recognit:9,recognition_predictor:[5,8],recognitionpredictor:5,rectangular:5,red:9,reduc:[3,6],refer:[3,8],regroup:9,rel:[4,6],relat:4,releas:[0,3],relu:7,repres:[4,8,9],represent:[2,5],representative_dataset:7,requir:[3,6],research:2,resiz:6,resnet31:5,resnet:5,resolv:4,resourc:7,respons:9,rest:[6,9],result:[4,8],resum:8,reusabl:8,rgb:[4,6],rgb_output:4,right:9,road:8,robust:2,root:1,rotat:[1,4,6],rotated_bbox:[1,9],run:3,same:[4,8,9],sampl:[1,8],sample_transform:1,sar:[2,5],sar_resnet31:[5,8],satur:6,save:[1,7],saved_model:7,scale:[5,6,9],scan:[1,2],scene:[2,5],score:9,seamless:2,seamlessli:8,search:5,second:8,section:[7,8],seemlessli:2,seen:8,segment:[2,5,8],semant:[2,5],sens:9,sensit:8,separ:8,sequenc:[1,2,4,5,8,9],sequenti:[6,7],serial:7,serialized_model:7,set:[1,8,9],sever:[4,6,8],shape:[4,5,6,7,8,9],share:8,shift:6,should:[1,4,6,9],show:[2,4,5,9],shuffl:1,side:9,signatur:4,signific:1,simpl:[2,5],sinc:[1,8],size:[1,4,6,8,9],small:5,smallest:4,some:3,sos:1,sourc:[1,4,5,6,9],spanish:1,spatial:4,specif:[1,3,8,9],specifi:[1,4],speed:2,sroie:[1,2],stabl:3,stage:2,standard:6,start:1,state:[2,9],std:6,str:[1,4,5,6,9],straight:[1,8],stream:4,strictli:9,string:[1,4,9],strive:3,strong:[2,5],structur:8,subset:[1,8],sum:9,summari:9,support:8,supported_op:7,supported_typ:7,symmetr:6,symmetric_pad:6,synthes:9,synthesize_pag:9,take:[1,7,8],target:[1,4,6],target_s:1,target_spec:7,task:[1,2,8],tax:8,templat:[2,4],tensor:[1,4,6,8],tensorflow:[2,3,4,5,6,8],text:[4,5,9],textmatch:9,textract:[2,8],textual:[1,2,4,8],tf_model:7,tflite:7,tflite_builtins_int8:7,tfliteconvert:7,than:[3,9],thei:8,them:[1,3,8],thi:[3,7,8,9],thing:[7,8],third:3,those:[3,4,8],through:[1,6],time:[1,2,5,9],titl:4,togeth:4,tograi:6,top:[8,9],torch:3,torchvis:6,toward:3,train:[1,5,6,8],train_it:1,train_load:1,train_set:1,trainabl:[2,5],tranform:6,transcrib:8,transfo:6,transform:1,truth:9,tune:7,tupl:[4,6,9],two:4,type:[4,8],typic:8,uint8:[4,5,8,9],underli:1,underneath:4,understand:[1,2,8],unfortun:8,unidecod:9,uniform:[5,6,7],uniformli:6,uninterrupt:[4,8],union:[4,9],updat:9,upper:[1,6],url:4,usabl:8,use:[1,5,8,9],useabl:8,used:8,user:[2,3,4],uses:1,using:[1,3,5,7,8],util:7,valu:[4,6,8],valuabl:2,variou:8,veri:5,version:7,vgg16_bn:5,vgg:5,visiondataset:1,visualize_pag:9,vocab:8,vocabulari:1,wai:[1,2],want:7,warmup:8,web:4,well:7,were:[4,8],where:[4,6,8,9],whether:[1,4,6,9],which:8,whichev:3,width:4,window:[3,5,9],wish:7,word:[2,8,9],words_onli:9,worker:1,world:9,wrap:8,wrapper:[1,6],written:4,www:4,x12larg:8,x_i:9,xeon:8,xmax:4,xmin:4,y_i:9,y_j:9,yield:7,ymax:4,ymin:4,you:[3,7,8],your:[1,2,4,8,9],yoursit:4,zero:6},titles:["Changelog","doctr.datasets","DocTR: Document Text Recognition","Installation","doctr.io","doctr.models","doctr.transforms","Preparing your model for inference","Choosing the right model","doctr.utils"],titleterms:{"2021":0,Using:7,approach:8,architectur:8,artefact:4,avail:[1,8],backbon:5,block:4,changelog:0,choos:8,compos:6,compress:7,data:1,dataset:[1,2],detect:[2,5,8],doctr:[1,2,4,5,6,9],document:[2,4],end:8,evalu:9,featur:2,file:4,git:3,half:7,infer:7,instal:3,line:4,lite:7,load:1,main:2,model:[2,5,7,8],ocr:8,output:8,packag:3,page:4,post:7,precis:7,predictor:8,prepar:7,prerequisit:3,python:3,quantiz:7,read:4,recognit:[2,5,8],right:8,savedmodel:7,should:8,stage:8,structur:4,support:[1,2,6],task:9,tensorflow:7,text:[2,8],train:7,transform:6,two:8,util:9,via:3,visual:9,vocab:1,what:8,word:4,your:7,zoo:[2,5,8]}})