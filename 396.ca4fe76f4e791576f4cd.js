"use strict";(self.webpackChunkemr_system_v1=self.webpackChunkemr_system_v1||[]).push([[396],{5396:(P,h,n)=>{n.d(h,{Rr:()=>u,rP:()=>S});var g=n(8553),e=n(7716),r=n(2458),c=n(9490),d=n(3679),p=n(6237),b=n(9238);const f=["thumbContainer"],M=["toggleBar"],T=["input"],E=function(l){return{enterDuration:l}},k=["*"],v=new e.OlP("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let C=0;const R={provide:d.JU,useExisting:(0,e.Gpc)(()=>u),multi:!0};class D{constructor(a,t){this.source=a,this.checked=t}}const y=(0,r.sb)((0,r.pj)((0,r.Kr)((0,r.Id)(class{constructor(l){this._elementRef=l}}))));let u=(()=>{class l extends y{constructor(t,i,o,s,m,O){super(t),this._focusMonitor=i,this._changeDetectorRef=o,this.defaults=m,this._onChange=q=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++C,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new e.vpe,this.toggleChange=new e.vpe,this.tabIndex=parseInt(s)||0,this.color=this.defaultColor=m.color||"accent",this._noopAnimations="NoopAnimations"===O}get required(){return this._required}set required(t){this._required=(0,c.Ig)(t)}get checked(){return this._checked}set checked(t){this._checked=(0,c.Ig)(t),this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{"keyboard"===t||"program"===t?this._inputElement.nativeElement.focus():t||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(t){t.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(t){t.stopPropagation()}writeValue(t){this.checked=!!t}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck()}focus(t,i){i?this._focusMonitor.focusVia(this._inputElement,i,t):this._inputElement.nativeElement.focus(t)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new D(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(e.SBq),e.Y36(b.tE),e.Y36(e.sBO),e.$8M("tabindex"),e.Y36(v),e.Y36(p.Qb,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["mat-slide-toggle"]],viewQuery:function(t,i){if(1&t&&(e.Gf(f,5),e.Gf(M,5),e.Gf(T,5)),2&t){let o;e.iGM(o=e.CRH())&&(i._thumbEl=o.first),e.iGM(o=e.CRH())&&(i._thumbBarEl=o.first),e.iGM(o=e.CRH())&&(i._inputElement=o.first)}},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(t,i){2&t&&(e.Ikx("id",i.id),e.uIk("tabindex",i.disabled?null:-1)("aria-label",null)("aria-labelledby",null),e.ekj("mat-checked",i.checked)("mat-disabled",i.disabled)("mat-slide-toggle-label-before","before"==i.labelPosition)("_mat-animation-noopable",i._noopAnimations))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked",ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[e._Bn([R]),e.qOj],ngContentSelectors:k,decls:16,vars:20,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(t,i){if(1&t&&(e.F$t(),e.TgZ(0,"label",0,1),e.TgZ(2,"div",2,3),e.TgZ(4,"input",4,5),e.NdJ("change",function(s){return i._onChangeEvent(s)})("click",function(s){return i._onInputClick(s)}),e.qZA(),e.TgZ(6,"div",6,7),e._UZ(8,"div",8),e.TgZ(9,"div",9),e._UZ(10,"div",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"span",11,12),e.NdJ("cdkObserveContent",function(){return i._onLabelTextChange()}),e.TgZ(13,"span",13),e._uU(14,"\xa0"),e.qZA(),e.Hsn(15),e.qZA(),e.qZA()),2&t){const o=e.MAs(1),s=e.MAs(12);e.uIk("for",i.inputId),e.xp6(2),e.ekj("mat-slide-toggle-bar-no-side-margin",!s.textContent||!s.textContent.trim()),e.xp6(2),e.Q6J("id",i.inputId)("required",i.required)("tabIndex",i.tabIndex)("checked",i.checked)("disabled",i.disabled),e.uIk("name",i.name)("aria-checked",i.checked.toString())("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby),e.xp6(5),e.Q6J("matRippleTrigger",o)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",e.VKq(18,E,i._noopAnimations?0:150))}},directives:[r.wG,g.wD],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),l})(),_=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({}),l})(),S=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[_,r.si,r.BQ,g.Q8],_,r.BQ]}),l})()}}]);