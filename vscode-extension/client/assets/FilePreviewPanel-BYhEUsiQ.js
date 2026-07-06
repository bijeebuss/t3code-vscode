import{Ja as e,Jc as t,Ju as n,Kl as r,O as i,Ra as a,S as o,T as s,Ts as c,Tu as l,Va as u,Xo as d,Yo as f,Zu as p,_a as m,b as h,ed as g,it as _,mt as v,mu as y,ns as b,nt as x,q as S,qa as C,tt as w,y as T,yt as E}from"./textarea-Blwgl7cE.js";import{a as D,c as O,i as ee,n as k,o as A,r as j,s as M,t as N}from"./fileCommentAnnotations-DEiDWh8D.js";import{$n as te,C as ne,D as re,E as ie,En as ae,Fn as oe,Ft as se,Jt as ce,Lt as le,Mn as ue,Mt as P,O as F,Qn as de,T as fe,Wt as pe,Xn as me,Zn as he,an as ge,d as _e,dt as ve,fn as ye,g as be,gr as xe,h as Se,in as Ce,jt as we,k as I,lr as Te,m as Ee,mr as De,nn as Oe,on as ke,or as Ae,p as je,pt as Me,rn as Ne,rr as Pe,tn as Fe,vr as Ie,wn as Le,wt as Re,xt as ze,zn as Be}from"./index-Cd_IYI1x.js";var Ve=u(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),He=u(`folder-tree`,[[`path`,{d:`M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z`,key:`hod4my`}],[`path`,{d:`M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z`,key:`w4yl2u`}],[`path`,{d:`M3 5a2 2 0 0 0 2 2h3`,key:`f2jnh7`}],[`path`,{d:`M3 3v13a2 2 0 0 0 2 2h3`,key:`k8epm1`}]]),Ue=`file-tree-container`,We=`data-file-tree-style`,Ge=`data-file-tree-unsafe-css`,Ke=`data-file-tree-scrollbar-measure`,qe=`data-file-tree-scrollbar-gutter-measured`,Je=`--trees-scrollbar-gutter-measured`,Ye=`header`,Xe=`context-menu`,Ze=`context-menu-trigger`,Qe=5,$e=1<<Qe,et=$e*4;function tt(){return{childIdByNameId:new Map,childIds:[],childPositionById:new Map,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function nt(){return{childIdByNameId:null,childIds:[],childPositionById:null,childVisibleChunkSums:null,totalChildSubtreeNodeCount:0,totalChildVisibleSubtreeCount:0}}function rt(e,t){if(t.childIdByNameId!=null)return t.childIdByNameId;let n=new Map;for(let r of t.childIds){let t=e[r];t!=null&&n.set(t.nameId,r)}return t.childIdByNameId=n,n}function it(e){if(e.childPositionById!=null)return e.childPositionById;let t=new Map;for(let n=0;n<e.childIds.length;n++){let r=e.childIds[n];r!=null&&t.set(r,n)}return e.childPositionById=t,t}function at(e,t){e.childPositionById!=null&&e.childPositionById.set(t,e.childIds.length),e.childIds.push(t)}function ot(e,t){if(e.childPositionById!=null)for(let n=t;n<e.childIds.length;n++){let t=e.childIds[n];t!=null&&e.childPositionById.set(t,n)}}function st(e,t){let n=0,r=0;for(let i of t.childIds){let t=e[i];t!=null&&(n+=t.subtreeNodeCount,r+=t.visibleSubtreeCount)}t.totalChildSubtreeNodeCount=n,t.totalChildVisibleSubtreeCount=r,L(e,t)}function ct(e,t,n,r){if(e.totalChildSubtreeNodeCount+=n,e.totalChildVisibleSubtreeCount+=r,e.childVisibleChunkSums==null||r===0)return;let i=it(e).get(t);if(i===void 0)return;let a=i>>Qe;e.childVisibleChunkSums[a]+=r}function lt(e,t,n){let r=t.childVisibleChunkSums;if(r!=null){let i=n,a=0;for(let o of r){if(i<o){let r=R(e,t,a,i);return{...r,childVisibleIndex:n-r.localVisibleIndex}}i-=o,a+=$e}throw Error(`Visible child index ${String(n)} is out of range`)}let i=n;for(let r=0;r<t.childIds.length;r++){let a=t.childIds[r];if(a==null)continue;let o=e[a];if(o!=null){if(i<o.visibleSubtreeCount)return{childIndex:r,childVisibleIndex:n-i,localVisibleIndex:i};i-=o.visibleSubtreeCount}}throw Error(`Visible child index ${String(n)} is out of range`)}function ut(e,t,n){let r=0,i=t.childVisibleChunkSums,a=0;if(i!=null){let e=n>>Qe;for(let t=0;t<e;t+=1)r+=i[t]??0;a=e<<Qe}for(let i=a;i<n;i+=1){let n=t.childIds[i];if(n==null)continue;let a=e[n];a!=null&&(r+=a.visibleSubtreeCount)}return r}function L(e,t){if(t.childIds.length<et){t.childVisibleChunkSums=null;return}let n=Math.ceil(t.childIds.length/$e),r=new Int32Array(n);for(let n=0;n<t.childIds.length;n++){let i=t.childIds[n];if(i==null)continue;let a=e[i];a!=null&&(r[n>>Qe]+=a.visibleSubtreeCount)}t.childVisibleChunkSums=r}function R(e,t,n,r){let i=Math.min(t.childIds.length,n+$e),a=r;for(let r=n;r<i;r++){let n=t.childIds[r];if(n==null)continue;let i=e[n];if(i!=null){if(a<i.visibleSubtreeCount)return{childIndex:r,localVisibleIndex:a};a-=i.visibleSubtreeCount}}throw Error(`Visible child index ${String(r)} is out of range`)}var dt=7,ft=3,pt=1<<ft,mt=4;function ht(e,t,n=0){return e<<mt|n<<ft|t}function gt(e){return e.depthAndFlags>>>mt}function _t(e){return(e.depthAndFlags&pt)>>ft}function z(e){return(e.depthAndFlags&pt)!==0}function vt(e){return e.depthAndFlags&dt}function B(e,t){return(vt(e)&t)!==0}function yt(e,t){e.depthAndFlags|=t}function bt(e,t){e.depthAndFlags=ht(t,vt(e),_t(e))}var xt=Symbol(`benchmarkInstrumentation`);function St(e,t){return t==null||Object.defineProperty(e,xt,{configurable:!0,enumerable:!1,value:t,writable:!1}),e}function Ct(e){return e==null?null:e[xt]??null}function V(e,t,n){return e==null?n():e.measurePhase(t,n)}function wt(e,t,n){!Number.isFinite(n)||e==null||e.setCounter(t,n)}function Tt(e){return e>=48&&e<=57}function Et(e){let t=[],n=0,r=0;for(;r<e.length;){for(;r<e.length&&!Tt(e.charCodeAt(r));)r+=1;if(r>=e.length)break;r>n&&t.push(e.slice(n,r));let i=0;for(;r<e.length&&Tt(e.charCodeAt(r));)i=i*10+(e.charCodeAt(r)-48),r+=1;t.push(i),n=r}return(n<e.length||t.length===0)&&t.push(e.slice(n)),t}function Dt(e){let t=e.toLowerCase();return{lowerValue:t,tokens:Et(t)}}function Ot(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e[r],i=t[r];if(n===i)continue;if(typeof n==`number`&&typeof i==`number`)return n<i?-1:1;let a=String(n),o=String(i);if(a!==o)return a<o?-1:1}return e.length===t.length?0:e.length<t.length?-1:1}function kt(e,t){if(e.tokens.length===1&&t.tokens.length===1&&typeof e.tokens[0]==`string`&&typeof t.tokens[0]==`string`)return e.lowerValue===t.lowerValue?0:e.lowerValue<t.lowerValue?-1:1;let n=Ot(e.tokens,t.tokens);return n===0?e.lowerValue===t.lowerValue?0:e.lowerValue<t.lowerValue?-1:1:n}function At(e,t,n){let r=kt(n(e),n(t));return r===0?e===t?0:e<t?-1:1:r}function jt(e,t){return At(e,t,Dt)}function Mt(e,t){return t===e.segments.length-1?+!!e.isDirectory:1}function Nt(e,t){let n=Math.min(e.segments.length,t.segments.length);for(let r=0;r<n;r++){let n=e.segments[r],i=t.segments[r];if(n===i)continue;let a=Mt(e,r);return a===Mt(t,r)?jt(n,i):a===1?-1:1}return e.segments.length===t.segments.length?e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1:e.segments.length<t.segments.length?-1:1}function Pt(e,t){return Nt(e,t)}function Ft(e,t,n){let r=e=>{let t=n.get(e);if(t!=null)return t;let r=Dt(e);return n.set(e,r),r},i=Math.min(e.segments.length,t.segments.length);for(let n=0;n<i;n++){let i=e.segments[n],a=t.segments[n];if(i===a)continue;let o=Mt(e,n);return o===Mt(t,n)?At(i,a,r):o===1?-1:1}return e.segments.length===t.segments.length?e.isDirectory===t.isDirectory?0:e.isDirectory?-1:1:e.segments.length<t.segments.length?-1:1}function It(e,t){let n=e.sortKeyById[t];if(n!==void 0)return n;let r=e.valueById[t],i=Dt(r);return e.sortKeyById[t]=i,i}function Lt(e={}){return{flattenEmptyDirectories:e.flattenEmptyDirectories!==!1,sort:e.sort??`default`}}function Rt(e){let t=e.length>0&&e.charCodeAt(e.length-1)===47,n=t?e.length-1:e.length,r=[],i=0;for(let t=0;t<n;t++)e.charCodeAt(t)===47&&(r.push(e.slice(i,t)),i=t+1);return r.push(e.slice(i,n)),{hasTrailingSlash:t,segments:r}}function zt(e){let{hasTrailingSlash:t,segments:n}=Rt(e);return{basename:n[n.length-1]??``,isDirectory:t,path:e,segments:n}}function Bt(e){if(e.length===0)return{requiresDirectory:!1,segments:[]};let{hasTrailingSlash:t,segments:n}=Rt(e);return{requiresDirectory:t,segments:n}}var Vt=``;function Ht(){let e=new Map;return e.set(Vt,0),{idByValue:e,valueById:[Vt],sortKeyById:[Dt(Vt)]}}function Ut(e,t){let n=e.idByValue.get(t);if(n!==void 0)return n;let r=e.valueById.length;return e.idByValue.set(t,r),e.valueById.push(t),r}function Wt(e,t){let n=e.valueById[t];if(n===void 0)throw Error(`Unknown segment ID: ${String(t)}`);return n}var Gt=Symbol(`pathStorePreparedInputKind`);function Kt(e,t){return e[Gt]=t,e}function qt(e){return{basename:e.basename,depth:e.segments.length,isDirectory:e.isDirectory,path:e.path,segments:e.segments}}function Jt(e,t,n){return n==="default"?Pt(e,t):n(qt(e),qt(t))}function Yt(){return{depthAndFlags:ht(0,3,1),nameId:0,parentId:0,subtreeNodeCount:1,visibleSubtreeCount:1}}function Xt(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return r;return n}function Zt(e){return e.isDirectory?e.segments.length:e.segments.length-1}function Qt(e){return Array.isArray(e)&&e.every(e=>typeof e==`object`&&!!e&&typeof e.path==`string`&&Array.isArray(e.segments)&&typeof e.basename==`string`&&typeof e.isDirectory==`boolean`)}function $t(e){return Array.isArray(e)&&e.every(e=>typeof e==`string`)}function en(e,t={}){return sn(e,t).map(e=>e.path)}function tn(e,t={}){let n=sn(e,t);return Kt({paths:n.map(e=>e.path),preparedPaths:n},`prepared`)}function nn(e){let t=e.length,n=!1;for(let r=0;r<t;r+=1){let t=e[r];if(t.length>0&&t.charCodeAt(t.length-1)===47){n=!0;break}}return Kt({paths:e,presortedPaths:e,presortedPathsContainDirectories:n},`presorted`)}function rn(e){let t=e,n=t.preparedPaths;if(t[Gt]===`prepared`&&n!=null)return n;if(!Qt(n))throw Error(`preparedInput must come from PathStore.prepareInput()`);return n}function an(e){let t=e;return t[Gt]===`presorted`&&t.presortedPaths!=null||$t(t.presortedPaths)?t.presortedPaths:null}function on(e){let t=e;return typeof t.presortedPathsContainDirectories==`boolean`?t.presortedPathsContainDirectories:null}function sn(e,t={}){let n=Lt(t),r=Ct(t);wt(r,`workload.inputFiles`,e.length);let i=V(r,`store.preparePathEntries.parse`,()=>e.map(e=>zt(e)));return V(r,`store.preparePathEntries.sort`,()=>i.sort((e,t)=>Jt(e,t,n.sort))),i}var cn=class{directories=new Map;directoryStack=[0];presortedDirectoryNodeIds=[];initialExpandedPathSet;createdDirectoriesAllExpanded=!1;createdDirectoryCount=0;lastPreparedPath=null;nodes=[Yt()];options;instrumentation;segmentSortKeyCache=new Map;segmentTable=Ht();hasDeferredDirectoryIndexes=!1;constructor(e={}){this.instrumentation=Ct(e),this.options=Lt(e);let t=e.initialExpandedPaths??null;if(t==null||t.length===0)this.initialExpandedPathSet=null;else{let e=new Set,n=t.length;for(let r=0;r<n;r+=1){let n=t[r],i=n.length;e.add(i>0&&n.charCodeAt(i-1)===47?n.slice(0,i-1):n)}this.initialExpandedPathSet=e,this.createdDirectoriesAllExpanded=!0}this.directories.set(0,tt())}appendPaths(e){return V(this.instrumentation,`store.builder.appendPaths.parse`,()=>this.appendPreparedPaths(e.map(e=>zt(e))))}appendPreparedPaths(e,t=!0){return this.createdDirectoriesAllExpanded=!1,V(this.instrumentation,`store.builder.appendPreparedPaths`,()=>{for(let n of e)this.appendPreparedPath(n,t)}),this}appendPresortedPaths(e,t=null){return V(this.instrumentation,`store.builder.appendPresortedPaths`,()=>{if(t===!1){this.appendPresortedFilePaths(e);return}this.createdDirectoriesAllExpanded=!1;let n=null,r=0,i=this.nodes,a=this.segmentTable,o=a.idByValue,s=a.valueById,c=this.directoryStack,l=0,u=``,d=0;for(let t of e){if(n===t)throw Error(`Duplicate path: "${t}"`);let e=t.length>0&&t.charCodeAt(t.length-1)===47,a=e?t.length-1:t.length,f=0,p=0;if(n!=null)if(u.length>0&&t.length>u.length&&t.startsWith(u))f=d,p=u.length;else{let r=Math.min(a,n.length),i=!0;for(let e=0;e<r;e++){let r=t.charCodeAt(e);if(r!==n.charCodeAt(e)){i=!1;break}r===47&&(f++,p=e+1)}i&&e&&r===a&&n.length>a&&n.charCodeAt(a)===47&&(f++,p=a+1)}l=f,r=f;let m=p,h=t.indexOf(`/`,m);for(;h>=0&&h<a;){let e=c[l];if(e===void 0)throw Error(`Directory stack underflow while building the path store`);r++;let n=t.slice(m,h),a=o.get(n);a===void 0&&(a=s.length,o.set(n,a),s.push(n));let u=i.length;i.push({depthAndFlags:ht(r,0,1),nameId:a,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(t.slice(0,h)),l++,c[l]=u,m=h+1,h=t.indexOf(`/`,m)}if(e){if(m<a){let e=c[l];if(e===void 0)throw Error(`Unable to resolve directory parent for "${t}"`);r++;let n=t.slice(m,a),u=o.get(n);u===void 0&&(u=s.length,o.set(n,u),s.push(n));let d=i.length;i.push({depthAndFlags:ht(r,0,1),nameId:u,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),l++,c[l]=d}let e=c[l];if(e===void 0)throw Error(`Unable to resolve directory node for "${t}"`);this.promoteDirectoryToExplicit(e,t)}else{let e=c[l];if(e===void 0)throw Error(`Unable to resolve file parent for "${t}"`);let n=t.slice(m),a=o.get(n);a===void 0&&(a=s.length,o.set(n,a),s.push(n)),i.push({depthAndFlags:ht(r+1,0),nameId:a,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1})}m!==u.length&&(u=t.substring(0,m),d=r),n=t}c.length=l+1,n!=null&&(this.lastPreparedPath=zt(n)),this.hasDeferredDirectoryIndexes=!0}),this}appendPresortedFilePaths(e){let t=null,n=0,r=this.nodes,i=this.segmentTable,a=i.idByValue,o=i.valueById,s=this.directoryStack,c=0,l=``,u=0;for(let i of e){if(t===i)throw Error(`Duplicate path: "${i}"`);let e=i.length,d=0,f=0;if(t!=null)if(l.length>0&&i.length>l.length&&i.startsWith(l))d=u,f=l.length;else{let n=Math.min(e,t.length);for(let e=0;e<n;e++){let n=i.charCodeAt(e);if(n!==t.charCodeAt(e))break;n===47&&(d++,f=e+1)}}c=d,n=d;let p=f,m=i.indexOf(`/`,p);for(;m>=0;){let e=s[c];if(e===void 0)throw Error(`Directory stack underflow while building the path store`);n++;let t=i.slice(p,m),l=a.get(t);l===void 0&&(l=o.length,a.set(t,l),o.push(t));let u=r.length;r.push({depthAndFlags:ht(n,0,1),nameId:l,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),this.recordCreatedDirectoryPath(i.slice(0,m)),this.presortedDirectoryNodeIds.push(u),c++,s[c]=u,p=m+1,m=i.indexOf(`/`,p)}let h=s[c];if(h===void 0)throw Error(`Unable to resolve file parent for "${i}"`);let g=i.slice(p),_=a.get(g);_===void 0&&(_=o.length,a.set(g,_),o.push(g)),r.push({depthAndFlags:ht(n+1,0),nameId:_,parentId:h,subtreeNodeCount:1,visibleSubtreeCount:1}),p!==l.length&&(l=i.substring(0,p),u=n),t=i}s.length=c+1,t!=null&&(this.lastPreparedPath=zt(t)),this.hasDeferredDirectoryIndexes=!0}finish(e={}){let t=e.skipSubtreeCountPass===!0;return this.hasDeferredDirectoryIndexes?(V(this.instrumentation,`store.builder.buildDirectoryIndexes`,()=>this.buildPresortedFinish(t)),this.hasDeferredDirectoryIndexes=!1):t||V(this.instrumentation,`store.builder.computeSubtreeCounts`,()=>this.computeSubtreeCounts(0)),{directories:this.directories,nodes:this.nodes,options:this.options,rootId:0,segmentTable:this.segmentTable,presortedDirectoryNodeIds:this.presortedDirectoryNodeIds.length>0?this.presortedDirectoryNodeIds:null}}didMatchAllInitialExpandedPaths(){return this.createdDirectoriesAllExpanded&&this.initialExpandedPathSet!=null&&this.createdDirectoryCount===this.initialExpandedPathSet.size}appendPreparedPath(e,t){if(this.hasDeferredDirectoryIndexes&&=(this.buildDirectoryIndexes(),!1),this.lastPreparedPath!=null){if(e.path===this.lastPreparedPath.path)throw Error(`Duplicate path: "${e.path}"`);if(t&&(this.options.sort==="default"?Ft(this.lastPreparedPath,e,this.segmentSortKeyCache):Jt(this.lastPreparedPath,e,this.options.sort))>0)throw Error(`Builder input must be sorted before appendPaths(): "${e.path}"`)}let n=this.lastPreparedPath,r=Zt(e),i=n==null?0:Zt(n),a=n==null?0:Xt(n.segments,e.segments),o=Math.min(a,r,i);this.directoryStack.length=o+1;for(let n=o;n<r;n++){let r=this.directoryStack[this.directoryStack.length-1];if(r===void 0)throw Error(`Directory stack underflow while building the path store`);let i=t?this.getOrCreateDirectoryChild(r,e.segments[n]):this.createDirectoryChild(r,e.segments[n]);this.directoryStack.push(i)}if(e.isDirectory){let t=this.directoryStack[this.directoryStack.length-1];if(t===void 0)throw Error(`Unable to resolve directory node for "${e.path}"`);this.promoteDirectoryToExplicit(t,e.path),this.lastPreparedPath=e;return}let s=this.directoryStack[this.directoryStack.length-1];if(s===void 0)throw Error(`Unable to resolve file parent for "${e.path}"`);t?this.createFileChild(s,e.basename,e.path):this.createFileChildUnchecked(s,e.basename),this.lastPreparedPath=e}recordCreatedDirectoryPath(e){!this.createdDirectoriesAllExpanded||this.initialExpandedPathSet==null||(this.createdDirectoryCount+=1,this.initialExpandedPathSet.has(e)||(this.createdDirectoriesAllExpanded=!1))}createFileChild(e,t,n){let r=Ut(this.segmentTable,t),i=this.getDirectoryIndex(e),a=i.childIdByNameId;if(a!=null&&a.get(r)!==void 0)throw Error(`Path collides with an existing entry: "${n}"`);let o=this.nodes[e];if(o===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let s=this.nodes.length;return this.nodes.push({depthAndFlags:ht(gt(o)+1,0),nameId:r,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),a?.set(r,s),at(i,s),s}createFileChildUnchecked(e,t){let n=Ut(this.segmentTable,t),r=this.getDirectoryIndex(e),i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:ht(gt(i)+1,0),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),at(r,a),a}getOrCreateDirectoryChild(e,t){let n=Ut(this.segmentTable,t),r=this.getDirectoryIndex(e);if(r.childIdByNameId!=null){let e=r.childIdByNameId.get(n);if(e!==void 0){let n=this.nodes[e];if(n!=null&&!z(n))throw Error(`Path collides with an existing file while creating directory "${t}"`);return e}}let i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:ht(gt(i)+1,0,1),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),at(r,a),this.directories.set(a,tt()),a}createDirectoryChild(e,t){let n=Ut(this.segmentTable,t),r=this.getDirectoryIndex(e),i=this.nodes[e];if(i===void 0)throw Error(`Unknown parent node ID: ${String(e)}`);let a=this.nodes.length;return this.nodes.push({depthAndFlags:ht(gt(i)+1,0,1),nameId:n,parentId:e,subtreeNodeCount:1,visibleSubtreeCount:1}),r.childIdByNameId!=null&&r.childIdByNameId.set(n,a),at(r,a),this.directories.set(a,tt()),a}promoteDirectoryToExplicit(e,t){let n=this.nodes[e];if(n===void 0)throw Error(`Unknown directory node ID: ${String(e)}`);if(!z(n))throw Error(`Path is not a directory: "${t}"`);if(B(n,1))throw Error(`Duplicate path: "${t}"`);yt(n,1)}getDirectoryIndex(e){let t=this.directories.get(e);if(t!==void 0)return t;throw Error(`Unknown directory child index for node ${String(e)}`)}buildPresortedFinish(e){let t=this.nodes,n=this.directories;n.set(0,nt());let r=-1,i=null;for(let e=1;e<t.length;e++){let a=t[e];if(a==null)continue;if(z(a)){let t=nt();n.set(e,t),r=e,i=t}let o;a.parentId===r?o=i:(o=n.get(a.parentId),r=a.parentId,i=o??null),o?.childIds.push(e)}if(!e)for(let e=t.length-1;e>=1;e--){let n=t[e];if(n==null)continue;let r=t[n.parentId];r!=null&&(r.subtreeNodeCount+=n.subtreeNodeCount,r.visibleSubtreeCount+=n.visibleSubtreeCount)}}buildDirectoryIndexes(){let e=this.nodes;for(let t=1;t<e.length;t++){let n=e[t];if(n==null)continue;z(n)&&this.directories.set(t,tt());let r=this.directories.get(n.parentId);r!=null&&(r.childIdByNameId!=null&&r.childIdByNameId.set(n.nameId,t),at(r,t))}}computeSubtreeCounts(e){let t=this.nodes[e];if(t===void 0)throw Error(`Unknown node ID: ${String(e)}`);if(!z(t))return t.subtreeNodeCount=1,t.visibleSubtreeCount=1,1;let n=this.getDirectoryIndex(e),r=1;for(let e of n.childIds)r+=this.computeSubtreeCounts(e);return st(this.nodes,n),t.subtreeNodeCount=r,t.visibleSubtreeCount=r,r}};function ln(e,t=`closed`,n=null){let r=dn(t);return{activeNodeCount:e.nodes.length-1,collapsedDirectoryIds:new Set,collapseNewDirectoriesByDefault:!1,defaultExpansion:r,directoriesOpenByDefault:r===`open`,hasCollapsedDirectoryOverrides:!1,directoryLoadInfoById:new Map,expandedDirectoryIds:new Set,instrumentation:n,listeners:new Map,pathCacheByNodeId:new Map([[e.rootId,{path:``,version:0}]]),pathCacheVersion:0,snapshot:e,transactionStack:[]}}function un(){return{affectedAncestorIds:new Set,affectedNodeIds:new Set,events:[]}}function dn(e){if(typeof e!=`number`)return e;if(!Number.isInteger(e)||e<0)throw Error(`initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`);return e}function fn(e,t){return B(t,2)||e.defaultExpansion===`open`?!0:e.defaultExpansion===`closed`?!1:gt(t)<=e.defaultExpansion}function pn(e,t,n=e.snapshot.nodes[t]){return n==null||!z(n)?!1:e.directoriesOpenByDefault&&!e.hasCollapsedDirectoryOverrides?!0:e.collapsedDirectoryIds.has(t)?!1:e.expandedDirectoryIds.has(t)?!0:fn(e,n)}function mn(e,t,n,r=e.snapshot.nodes[t]){if(r==null||!z(r))return;let i=fn(e,r);if(n){if(i){e.collapsedDirectoryIds.delete(t),e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0;return}e.expandedDirectoryIds.add(t);return}if(i){e.collapsedDirectoryIds.add(t),e.hasCollapsedDirectoryOverrides=!0;return}e.expandedDirectoryIds.delete(t)}function hn(e,t){let n=e.directoryLoadInfoById.get(t);if(n!=null)return n;let r={activeAttemptId:null,errorMessage:null,nextAttemptId:1,state:`loaded`};return e.directoryLoadInfoById.set(t,r),r}function gn(e,t){return e.directoryLoadInfoById.get(t)?.state??`loaded`}function _n(e,t){let n=hn(e,t);if(n.state===`loading`&&n.activeAttemptId!=null)return{attemptId:n.activeAttemptId,nodeId:t,reused:!0};let r=n.nextAttemptId;return n.activeAttemptId=r,n.errorMessage=null,n.nextAttemptId+=1,n.state=`loading`,{attemptId:r,nodeId:t,reused:!1}}function vn(e,t){let n=hn(e,t);n.activeAttemptId=null,n.errorMessage=null,n.state=`unloaded`}function yn(e,t,n){let r=e.directoryLoadInfoById.get(t);return r==null||r.activeAttemptId!==n?!1:(r.activeAttemptId=null,r.errorMessage=null,r.state=`loaded`,!0)}function bn(e,t,n){return e.directoryLoadInfoById.get(t)?.activeAttemptId===n}function xn(e,t,n,r){let i=e.directoryLoadInfoById.get(t);return i==null||i.activeAttemptId!==n?!1:(i.activeAttemptId=null,i.errorMessage=r??null,i.state=`error`,!0)}function Sn(e,t){e.directoryLoadInfoById.delete(t)}function Cn(e,t,n){let r=n,i=e.listeners.get(t);return i==null?e.listeners.set(t,new Set([r])):i.add(r),()=>{let n=e.listeners.get(t);n!=null&&(n.delete(r),n.size===0&&e.listeners.delete(t))}}function wn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`add`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Tn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`remove`,path:e.path,projectionChanged:e.projectionChanged,recursive:e.recursive,visibleCountDelta:null}}function En(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,from:e.from,operation:`move`,projectionChanged:e.projectionChanged,to:e.to,visibleCountDelta:null}}function Dn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`expand`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function On(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`collapse`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function kn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`mark-directory-unloaded`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function An(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`begin-child-load`,path:e.path,projectionChanged:e.projectionChanged,reused:e.reused,visibleCountDelta:null}}function jn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:e.childEvents.some(e=>e.canonicalChanged),childEvents:e.childEvents,operation:`apply-child-patch`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Mn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`complete-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function Nn(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,errorMessage:e.errorMessage,operation:`fail-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function Pn(e){return{activeNodeCountAfter:e.activeNodeCountAfter,activeNodeCountBefore:e.activeNodeCountBefore,affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],cachedPathEntryCountAfter:e.cachedPathEntryCountAfter,cachedPathEntryCountBefore:e.cachedPathEntryCountBefore,canonicalChanged:!1,idsPreserved:e.idsPreserved,loadInfoEntryCountAfter:e.loadInfoEntryCountAfter,loadInfoEntryCountBefore:e.loadInfoEntryCountBefore,mode:e.mode,operation:`cleanup`,projectionChanged:e.projectionChanged,reclaimedCachedPathEntryCount:e.reclaimedCachedPathEntryCount,reclaimedLoadInfoEntryCount:e.reclaimedLoadInfoEntryCount,reclaimedNodeSlotCount:e.reclaimedNodeSlotCount,reclaimedSegmentCount:e.reclaimedSegmentCount,segmentCountAfter:e.segmentCountAfter,segmentCountBefore:e.segmentCountBefore,totalNodeSlotCountAfter:e.totalNodeSlotCountAfter,totalNodeSlotCountBefore:e.totalNodeSlotCountBefore,visibleCountDelta:null}}function Fn(e,t,n){return{...n,visibleCountDelta:Kn(e)-t}}function In(e,t){let n=Kn(e),r=un();e.transactionStack.push(r);try{t()}catch(t){throw zn(e,r,!1),t}zn(e,r,!0,Kn(e)-n)}function Ln(e,t){let n=e.instrumentation;if(n==null){Rn(e,t);return}V(n,`store.events.record`,()=>Rn(e,t))}function Rn(e,t){let n=e.transactionStack[e.transactionStack.length-1]??null;if(n==null){Wn(e,t);return}n.events.push(t),Un(n,t)}function zn(e,t,n,r=null){if(e.transactionStack.pop()!==t)throw Error(`Transaction stack underflow`);if(!n)return;let i=e.transactionStack[e.transactionStack.length-1]??null;if(i!=null){let n=e.instrumentation;n==null?Hn(i,t):V(n,`store.events.batch.merge`,()=>Hn(i,t));return}let a=Bn(t,r),o=e.instrumentation;if(o==null){Wn(e,a);return}V(o,`store.events.batch.commit`,()=>Wn(e,a))}function Bn(e,t){return{affectedAncestorIds:[...e.affectedAncestorIds],affectedNodeIds:[...e.affectedNodeIds],canonicalChanged:e.events.some(e=>e.canonicalChanged),events:[...e.events],operation:`batch`,projectionChanged:e.events.some(e=>e.projectionChanged),visibleCountDelta:t}}function Vn(e,t){for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n);for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n)}function Hn(e,t){for(let n of t.events)e.events.push(n);Vn(e,t)}function Un(e,t){for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n);for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n)}function Wn(e,t){let n=e.instrumentation;if(n==null){Gn(e,t);return}V(n,`store.events.emit`,()=>Gn(e,t))}function Gn(e,t){e.listeners.get(t.operation)?.forEach(e=>e(t)),e.listeners.get(`*`)?.forEach(e=>e(t))}function Kn(e){return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount??0}function qn(e,t){if(e.snapshot.options.flattenEmptyDirectories!==!0)return null;let n=e.snapshot.nodes[t];if(n==null||!z(n)||B(n,2))return null;let r=e.snapshot.directories.get(t);if(r==null||r.childIds.length!==1)return null;let i=r.childIds[0];if(i==null)return null;let a=e.snapshot.nodes[i];return a==null||!z(a)?null:i}function Jn(e,t){let n=t;for(;;){let t=qn(e,n);if(t==null)return n;n=t}}function Yn(e,t){let n=[t],r=t;for(;;){let t=qn(e,r);if(t==null)return n;n.push(t),r=t}}function Xn(e,t){let n=t==null?e.snapshot.rootId:ar(e,t);return n==null?[]:sr(e,n)}function Zn(e,t){let n=zt(t),r=n.isDirectory?n.segments:n.segments.slice(0,-1),i=Sr(e,xr(e,r)),{createdNodeIds:a,directoryId:o}=cr(e,r),s=new Set(a),c=o;if(n.isDirectory){let n=W(e,o);if(B(n,1))throw Error(`Path already exists: "${t}"`);yt(n,1),e.pathCacheByNodeId.set(o,{path:t,version:e.pathCacheVersion}),s.add(o)}else c=ur(e,o,n.basename),s.add(c);nr(e,o);let l=Sr(e,o);return wn({affectedAncestorIds:ir(e,c),affectedNodeIds:[...s],path:t,projectionChanged:Cr(i,l)})}function Qn(e,t,n){let r=ar(e,t);if(r==null)throw Error(`Path does not exist: "${t}"`);let i=W(e,r);if(B(i,2))throw Error(`The root node cannot be removed`);if(z(i)&&U(e,r).childIds.length>0&&n.recursive!==!0)throw Error(`Cannot remove a non-empty directory without recursive: "${t}"`);let a=i.parentId,o=Sr(e,a),s=yr(e,r);pr(e,a,r,i.nameId),br(e,a),nr(e,a);let c=Sr(e,a);return Tn({affectedAncestorIds:ir(e,a),affectedNodeIds:s,path:t,projectionChanged:Cr(o,c),recursive:n.recursive===!0})}function $n(e,t,n,r){let i=ar(e,t);if(i==null)throw Error(`Source path does not exist: "${t}"`);let a=W(e,i);if(B(a,2))throw Error(`The root node cannot be moved`);let o=r.collision??`error`,s=_r(e,i,n),c=Sr(e,a.parentId),l=Sr(e,s.parentId),u=Wt(e.snapshot.segmentTable,a.nameId),d=Ut(e.snapshot.segmentTable,s.basename);if(s.parentId===a.parentId&&u===s.basename)return null;if(z(a)&&Dr(e,i,s.parentId))throw Error(`Cannot move a directory into one of its descendants`);let f=rt(e.snapshot.nodes,U(e,s.parentId)).get(d),p=s.existingNodeId??f??null;if(p!=null&&p!==i&&vr(e,p,o,_t(a))===`skip`)return null;let m=a.parentId;pr(e,m,i,a.nameId),a.parentId=s.parentId,a.nameId=d,e.pathCacheByNodeId.delete(i),Er(e,i),fr(e,s.parentId,i),br(e,m),e.pathCacheVersion++,nr(e,m),s.parentId!==m&&nr(e,s.parentId);let h=Sr(e,m),g=Sr(e,s.parentId);return En({affectedAncestorIds:[...new Set([...ir(e,m),...ir(e,s.parentId)])],affectedNodeIds:[i],from:t,projectionChanged:wr([c,l],[h,g]),to:H(e,i)})}function er(e,t){let n=e.pathCacheByNodeId.get(t);return n!=null&&n.version===e.pathCacheVersion?n.path:null}function tr(e,t,n){return e.pathCacheByNodeId.set(t,{path:n,version:e.pathCacheVersion}),n}function H(e,t){let n=W(e,t),r=er(e,t);if(r!=null)return r;if(B(n,2))return tr(e,t,``);let i=H(e,n.parentId),a=Wt(e.snapshot.segmentTable,n.nameId),o=i.length===0?a:`${i}${a}`;return tr(e,t,z(n)?`${o}/`:o)}function nr(e,t){let n=e.instrumentation;if(n==null){kr(e,t);return}V(n,`store.recomputeCountsUpwardFrom`,()=>kr(e,t))}function rr(e,t){let n=[[t,0]],{nodes:r,directories:i}=e.snapshot;for(;n.length>0;){let t=n[n.length-1],a=t[0],o=r[a];if(o==null||!z(o)){Or(e,a,o,!0),n.pop();continue}let s=i.get(a);if(s==null||t[1]>=s.childIds.length){Or(e,a,o,!0),n.pop();continue}let c=s.childIds[t[1]++];n.push([c,0])}}function ir(e,t){let n=[],r=t;for(;r!=null;){let t=W(e,r);if(n.push(r),r===e.snapshot.rootId)break;r=t.parentId}return n}function ar(e,t){if(t.length===0)return e.snapshot.rootId;let n=Bt(t);return or(e,n.segments,n.requiresDirectory)}function or(e,t,n){let r=e.snapshot.rootId;for(let n of t){let t=e.snapshot.segmentTable.idByValue.get(n);if(t===void 0)return null;let i=U(e,r),a=rt(e.snapshot.nodes,i).get(t);if(a===void 0)return null;r=a}let i=W(e,r);return n&&!z(i)?null:r}function U(e,t){let n=e.snapshot.directories.get(t);if(n===void 0)throw Error(`Unknown directory child index for node ${String(t)}`);return n}function W(e,t){let n=e.snapshot.nodes[t];if(n===void 0||B(n,4))throw Error(`Unknown node ID: ${String(t)}`);return n}function sr(e,t){let n=e.snapshot.nodes[t];if(n===void 0||B(n,4))return[];if(!z(n))return[H(e,t)];if(U(e,t).childIds.length===0)return B(n,1)&&!B(n,2)?[H(e,t)]:[];let r=[],i=[{childIndex:0,nodeId:t}];for(;i.length>0;){let t=i[i.length-1];if(t==null)break;let n=e.snapshot.nodes[t.nodeId];if(n===void 0||B(n,4)){i.pop();continue}if(!z(n)){r.push(H(e,t.nodeId)),i.pop();continue}let a=U(e,t.nodeId);if(a.childIds.length===0){B(n,1)&&!B(n,2)&&r.push(H(e,t.nodeId)),i.pop();continue}let o=a.childIds[t.childIndex];if(o==null){i.pop();continue}t.childIndex++,i.push({childIndex:0,nodeId:o})}return r}function cr(e,t){let n=[],r=e.snapshot.rootId;for(let i of t){let t=Ut(e.snapshot.segmentTable,i),a=U(e,r),o=rt(e.snapshot.nodes,a).get(t);if(o!==void 0){if(!z(W(e,o)))throw Error(`Cannot create a directory that collides with an existing file: "${i}"`);r=o;continue}r=lr(e,r,t),n.push(r)}return{createdNodeIds:n,directoryId:r}}function lr(e,t,n){let r=W(e,t),i=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:ht(gt(r)+1,0,1),nameId:n,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),e.snapshot.directories.set(i,tt()),fr(e,t,i),e.collapseNewDirectoriesByDefault&&(e.collapsedDirectoryIds.add(i),e.hasCollapsedDirectoryOverrides=!0),e.activeNodeCount++,i}function ur(e,t,n){let r=Ut(e.snapshot.segmentTable,n),i=U(e,t);if(rt(e.snapshot.nodes,i).has(r))throw Error(`Path already exists: "${jr(e,t,n)}"`);let a=W(e,t),o=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:ht(gt(a)+1,0),nameId:r,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),fr(e,t,o),e.activeNodeCount++,o}function dr(e,t,n){let r=0,i=t.childIds.length;for(;r<i;){let a=r+i>>>1,o=t.childIds[a];if(o==null){i=a;continue}mr(e,n,o)<0?i=a:r=a+1}return r}function fr(e,t,n){let r=U(e,t),i=W(e,n);rt(e.snapshot.nodes,r).set(i.nameId,n),ct(r,n,i.subtreeNodeCount,i.visibleSubtreeCount);let a=dr(e,r,n);r.childIds.splice(a,0,n),ot(r,a),L(e.snapshot.nodes,r)}function pr(e,t,n,r){let i=U(e,t),a=it(i),o=a.get(n)??-1;rt(e.snapshot.nodes,i).delete(r),a.delete(n);let s=e.snapshot.nodes[n];s!=null&&ct(i,n,-s.subtreeNodeCount,-s.visibleSubtreeCount),o>=0&&(i.childIds.splice(o,1),ot(i,o),L(e.snapshot.nodes,i))}function mr(e,t,n){let r=e.snapshot.options.sort;return r==="default"?hr(e,t,n):r(gr(e,t),gr(e,n))}function hr(e,t,n){let r=W(e,t),i=W(e,n),a=z(r);if(a!==z(i))return a?-1:1;let o=kt(It(e.snapshot.segmentTable,r.nameId),It(e.snapshot.segmentTable,i.nameId));if(o!==0)return o;let s=Wt(e.snapshot.segmentTable,r.nameId),c=Wt(e.snapshot.segmentTable,i.nameId);return s===c?t<n?-1:1:s<c?-1:1}function gr(e,t){let n=W(e,t),r=H(e,t),i=z(n),a=i?r.slice(0,-1):r;return{basename:Wt(e.snapshot.segmentTable,n.nameId),depth:gt(n),isDirectory:i,path:r,segments:a.length===0?[]:a.split(`/`)}}function _r(e,t,n){let r=W(e,t),i=ar(e,n);if(i!=null){let t=W(e,i);if(z(t))return{basename:Wt(e.snapshot.segmentTable,r.nameId),existingNodeId:null,parentId:i};let a=Bt(n).segments;return{basename:a[a.length-1]??``,existingNodeId:i,parentId:t.parentId}}let a=Bt(n),o=a.segments[a.segments.length-1]??``,s=a.segments.slice(0,-1),c=s.length===0?e.snapshot.rootId:or(e,s,!0);if(c==null)throw Error(`Destination parent does not exist: "${n}"`);return{basename:o,existingNodeId:null,parentId:c}}function vr(e,t,n,r){if(n===`skip`)return`skip`;if(n===`error`)throw Error(`Destination already exists: "${H(e,t)}"`);let i=W(e,t);if(_t(i)!==r)throw Error(`replace collision requires the same source and destination kinds`);if(z(i)&&U(e,t).childIds.length>0)throw Error(`replace collision does not support non-empty directories`);let a=i.parentId,o=i.nameId;return yr(e,t),pr(e,a,t,o),br(e,a),nr(e,a),`handled`}function yr(e,t){let n=[],r=[{nodeId:t,visitedChildren:!1}];for(;r.length>0;){let t=r.pop();if(t==null)break;let i=W(e,t.nodeId);if(t.visitedChildren||!z(i)){z(i)&&e.snapshot.directories.delete(t.nodeId),yt(i,4),e.pathCacheByNodeId.delete(t.nodeId),e.collapsedDirectoryIds.delete(t.nodeId)&&(e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0),e.expandedDirectoryIds.delete(t.nodeId),Sn(e,t.nodeId),e.activeNodeCount--,n.push(t.nodeId);continue}r.push({nodeId:t.nodeId,visitedChildren:!0});let a=U(e,t.nodeId);for(let e=a.childIds.length-1;e>=0;e--){let t=a.childIds[e];t!=null&&r.push({nodeId:t,visitedChildren:!1})}}return n}function br(e,t){let n=t;for(;n!=null;){let t=W(e,n);if(!z(t)||B(t,2)||U(e,n).childIds.length>0)return;yt(t,1),n=t.parentId===n?null:t.parentId}}function xr(e,t){let n=e.snapshot.rootId;for(let r of t){let t=e.snapshot.segmentTable.idByValue.get(r);if(t==null)break;let i=rt(e.snapshot.nodes,U(e,n)).get(t);if(i==null||!z(W(e,i)))break;n=i}return n}function Sr(e,t){let n=Tr(e,t);if(n==null)return null;let r=Jn(e,n),i=W(e,r),a=n===r?null:Yn(e,n).map(t=>H(e,t));return JSON.stringify({flattenedSegmentPaths:a,hasChildren:U(e,r).childIds.length>0,path:H(e,r),terminalKind:_t(i)})}function Cr(e,t){return wr([e],[t])}function wr(e,t){for(let n=0;n<e.length;n+=1){let r=e[n],i=t[n];if(r==null||i==null||r!==i)return!0}return!1}function Tr(e,t){let n=t;for(;n!=null;){let t=W(e,n);if(!z(t)||B(t,2))return null;if(!pn(e,n,t))return n;n=t.parentId}return null}function Er(e,t){let n=W(e,t);if(bt(n,(t===e.snapshot.rootId?-1:gt(W(e,n.parentId)))+1),!z(n))return;let r=U(e,t);for(let t of r.childIds)Er(e,t)}function Dr(e,t,n){let r=n;for(;r!=null;){if(r===t)return!0;let n=W(e,r);if(r===e.snapshot.rootId)return!1;r=n.parentId}return!1}function Or(e,t,n=W(e,t),r=!1){let i=e.instrumentation;if(i==null){Ar(e,t,n,r);return}V(i,`store.recomputeNodeCounts`,()=>Ar(e,t,n,r))}function kr(e,t){let n=t;for(;n!=null;){let t=W(e,n),r=t.subtreeNodeCount,i=t.visibleSubtreeCount;if(Or(e,n,t),n===e.snapshot.rootId)return;let a=t.subtreeNodeCount-r,o=t.visibleSubtreeCount-i,s=t.parentId;(a!==0||o!==0)&&ct(U(e,s),n,a,o),n=s}}function Ar(e,t,n,r){if(!z(n)){n.subtreeNodeCount=1,n.visibleSubtreeCount=1;return}let i=U(e,t);if(r){let t=e.instrumentation;t==null?st(e.snapshot.nodes,i):V(t,`store.recomputeNodeCounts.rebuildChildAggregates`,()=>st(e.snapshot.nodes,i))}let a=1+i.totalChildSubtreeNodeCount,o=i.totalChildVisibleSubtreeCount;if(n.subtreeNodeCount=a,B(n,2)){n.visibleSubtreeCount=o;return}n.visibleSubtreeCount=qn(e,t)==null?pn(e,t,n)?1+o:1:o}function jr(e,t,n){let r=H(e,t);return r.length===0?n:`${r}${n}`}function Mr(e){return e!=null&&!B(e,4)}function Nr(e,t){let n=e.snapshot.nodes[t];return!Mr(n)||!z(n)||B(n,2)?null:n}function Pr(e){let t=0;for(let[n,r]of e.pathCacheByNodeId)r.version===e.pathCacheVersion&&Mr(e.snapshot.nodes[n])&&(t+=1);return t}function Fr(e){return Math.max(0,e.valueById.length-1)}function Ir(e){return{activeNodeCount:e.activeNodeCount,cachedPathEntryCount:Pr(e),loadInfoEntryCount:e.directoryLoadInfoById.size,segmentCount:Fr(e.snapshot.segmentTable),totalNodeSlotCount:Math.max(0,e.snapshot.nodes.length-1)}}function Lr(e,t,n,r){return{activeNodeCountAfter:r.activeNodeCount,activeNodeCountBefore:n.activeNodeCount,cachedPathEntryCountAfter:r.cachedPathEntryCount,cachedPathEntryCountBefore:n.cachedPathEntryCount,idsPreserved:t,loadInfoEntryCountAfter:r.loadInfoEntryCount,loadInfoEntryCountBefore:n.loadInfoEntryCount,mode:e,reclaimedCachedPathEntryCount:n.cachedPathEntryCount-r.cachedPathEntryCount,reclaimedLoadInfoEntryCount:n.loadInfoEntryCount-r.loadInfoEntryCount,reclaimedNodeSlotCount:n.totalNodeSlotCount-r.totalNodeSlotCount,reclaimedSegmentCount:n.segmentCount-r.segmentCount,segmentCountAfter:r.segmentCount,segmentCountBefore:n.segmentCount,totalNodeSlotCountAfter:r.totalNodeSlotCount,totalNodeSlotCountBefore:n.totalNodeSlotCount}}function Rr(e){let t=[],n=[];for(let n of e.collapsedDirectoryIds)Nr(e,n)!=null&&t.push(H(e,n));for(let t of e.expandedDirectoryIds)Nr(e,t)!=null&&n.push(H(e,t));return{collapsedPaths:t,expandedPaths:n}}function zr(e){let t=[];for(let[n,r]of e.directoryLoadInfoById)Nr(e,n)==null||gn(e,n)===`loaded`||t.push({info:{activeAttemptId:null,errorMessage:r.errorMessage,nextAttemptId:r.nextAttemptId,state:r.state},path:H(e,n)});return t}function Br(e,t){e.collapsedDirectoryIds.clear(),e.hasCollapsedDirectoryOverrides=!1,e.expandedDirectoryIds.clear();for(let n of t.expandedPaths){let t=ar(e,n);t!=null&&mn(e,t,!0,W(e,t))}for(let n of t.collapsedPaths){let t=ar(e,n);t!=null&&mn(e,t,!1,W(e,t))}}function Vr(e,t){e.directoryLoadInfoById.clear();for(let n of t){let t=ar(e,n.path);t!=null&&Nr(e,t)!=null&&e.directoryLoadInfoById.set(t,{activeAttemptId:null,errorMessage:n.info.errorMessage,nextAttemptId:n.info.nextAttemptId,state:n.info.state})}}function Hr(e){e.pathCacheVersion+=1,e.pathCacheByNodeId.clear(),e.pathCacheByNodeId.set(e.snapshot.rootId,{path:``,version:e.pathCacheVersion})}function Ur(e){let t=e.snapshot.segmentTable,n=Ht();for(let r of e.snapshot.nodes)if(Mr(r)){if(B(r,2)){r.nameId=0;continue}r.nameId=Ut(n,Wt(t,r.nameId))}e.snapshot.segmentTable=n}function Wr(e){for(let[t,n]of e.snapshot.directories){let r=e.snapshot.nodes[t];if(!Mr(r)||!z(r)){e.snapshot.directories.delete(t);continue}let i=n.childIds.filter(n=>{let r=e.snapshot.nodes[n];return Mr(r)&&r.parentId===t});n.childIds=i,n.childIdByNameId=new Map(i.map(t=>[W(e,t).nameId,t])),n.childPositionById=new Map(i.map((e,t)=>[e,t])),st(e.snapshot.nodes,n)}}function Gr(e){let t=e.snapshot.nodes.length-1;for(;t>e.snapshot.rootId;){let n=e.snapshot.nodes[t];if(Mr(n))break;--t}e.snapshot.nodes.length=t+1}function Kr(e){let t=Rr(e),n=zr(e);V(e.instrumentation,`store.cleanup.stable.clearPathCaches`,()=>Hr(e)),V(e.instrumentation,`store.cleanup.stable.rebuildSegmentTable`,()=>Ur(e)),V(e.instrumentation,`store.cleanup.stable.rebuildDirectoryIndexes`,()=>Wr(e)),V(e.instrumentation,`store.cleanup.stable.trimTrailingRemovedNodeSlots`,()=>Gr(e)),V(e.instrumentation,`store.cleanup.stable.restoreExpansionOverrides`,()=>Br(e,t)),V(e.instrumentation,`store.cleanup.stable.restoreDirectoryLoadInfos`,()=>Vr(e,n)),V(e.instrumentation,`store.cleanup.stable.recomputeCounts`,()=>rr(e,e.snapshot.rootId))}function qr(e){let t=Rr(e),n=zr(e),r=V(e.instrumentation,`store.cleanup.aggressive.listPaths`,()=>Xn(e)),i=St({...e.snapshot.options},e.instrumentation),a=V(e.instrumentation,`store.cleanup.aggressive.rebuildSnapshot`,()=>{let e=new cn(i);return e.appendPaths(r),e.finish()});e.snapshot=a,e.activeNodeCount=a.nodes.length-1,e.pathCacheByNodeId=new Map([[a.rootId,{path:``,version:0}]]),e.pathCacheVersion=0,V(e.instrumentation,`store.cleanup.aggressive.restoreExpansionOverrides`,()=>Br(e,t)),V(e.instrumentation,`store.cleanup.aggressive.restoreDirectoryLoadInfos`,()=>Vr(e,n)),V(e.instrumentation,`store.cleanup.aggressive.recomputeCounts`,()=>rr(e,e.snapshot.rootId))}function Jr(e){for(let t of e.directoryLoadInfoById.values())if(t.state===`loading`&&t.activeAttemptId!=null)return!0;return!1}function Yr(e,t){let n=Ir(e);t===`stable`?V(e.instrumentation,`store.cleanup.stable`,()=>Kr(e)):V(e.instrumentation,`store.cleanup.aggressive`,()=>qr(e));let r=Ir(e);return Lr(t,t===`stable`,n,r)}var Xr=64;function Zr(e,t){let n=t+2;if(n<=e.length)return e;let r=e.length;for(;r<n;)r*=2;let i=new Int32Array(r);return i.fill(-1),i.set(e),i}function Qr(e){return W(e,e.snapshot.rootId).visibleSubtreeCount}function $r(e,t,n,r){let i=W(e,t.terminalNodeId),a=Math.max(1,i.visibleSubtreeCount);return Math.min(r-1,n+a-1)}function ei(e,t,n,r){return{ancestorPaths:r,index:t.index,posInSet:t.posInSet,row:yi(e,t.cursor),setSize:t.setSize,subtreeEndIndex:$r(e,t.cursor,t.index,n)}}function ti(e,t,n,r,i,a){let o=U(e,t),{childIndex:s,childVisibleIndex:c,localVisibleIndex:l}=lt(e.snapshot.nodes,o,n),u=o.childIds[s];if(u==null)throw Error(`Visible index ${String(n)} is out of range`);return ni(e,u,l,r+c,i+1,s,o.childIds.length,a)}function ni(e,t,n,r,i,a,o,s){if(!z(W(e,t))){if(n===0)return{ancestors:s,cursor:{headNodeId:t,terminalNodeId:t,visibleDepth:i},index:r,posInSet:a,setSize:o};throw Error(`Visible index ${String(n)} is out of range for file`)}let c=pi(e,t,i);if(n===0)return{ancestors:s,cursor:c,index:r,posInSet:a,setSize:o};let l=W(e,c.terminalNodeId);if(!z(l)||!pn(e,c.terminalNodeId,l))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return ti(e,c.terminalNodeId,n-1,r+1,c.visibleDepth,[...s,{cursor:c,index:r,posInSet:a,setSize:o}])}function ri(e,t){let n=Qr(e);if(t<0||t>=n)return null;let r=ti(e,e.snapshot.rootId,t,0,-1,[]),i=r.ancestors.map(t=>H(e,t.cursor.terminalNodeId)),a=null;return{ancestorPaths:i,get ancestorRows(){if(a!=null)return a;let t=[],i=[];for(let a of r.ancestors){let r=ei(e,a,n,[...i]);t.push(r),i.push(r.row.path)}return a=t,a},index:r.index,posInSet:r.posInSet,row:yi(e,r.cursor),setSize:r.setSize,subtreeEndIndex:$r(e,r.cursor,r.index,n)}}function ii(e,t,n){let r=e.instrumentation,i=Qr(e);if(i<=0||n<t)return[];let a=Math.max(0,Math.min(t,i-1)),o=Math.max(a,Math.min(n,i-1));if(r==null){if(a===0)return vi(e,o+1);let t=[],n=ui(e,a);for(let r=a;r<=o&&n!=null;r++){let r=yi(e,n);t.push(r),n=hi(e,n)}return t}let s=[],c=0,l=0,u=V(r,`store.getVisibleSlice.selectFirstRow`,()=>ui(e,a));for(let t=a;t<=o&&u!=null;t++){let t=V(r,`store.getVisibleSlice.materializeRow`,()=>yi(e,u));s.push(t),t.isFlattened&&(c++,l+=t.flattenedSegments?.length??0),u=V(r,`store.getVisibleSlice.advanceCursor`,()=>hi(e,u))}return wt(r,`workload.visibleRowsRead`,s.length),wt(r,`workload.flattenedRowsRead`,c),wt(r,`workload.flattenedSegmentsRead`,l),s}function ai(e,t=Qr(e)){let n=e.instrumentation;return n==null?_i(e,t):V(n,`store.getVisibleTreeProjection`,()=>_i(e,t))}function oi(e){return gi(ai(e))}function si(e,t){let n=ar(e,t);if(n==null||n===e.snapshot.rootId||z(W(e,n))&&Jn(e,n)!==n)return null;let r=0,i=n,{nodes:a,rootId:o}=e.snapshot;for(;i!==o;){let t=W(e,i).parentId,n=U(e,t),s=it(n).get(i);if(s==null)throw Error(`Child ${String(i)} was not found in its parent index`);if(r+=ut(a,n,s),t!==o){let n=W(e,t),a=qn(e,t);if(!pn(e,t,n)&&a!==i)return null;Jn(e,t)===t&&(r+=1)}i=t}return r}function ci(e,t){let n=ar(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=W(e,n);if(!z(r))throw Error(`Path is not a directory: "${t}"`);return pn(e,n,r)?null:(mn(e,n,!0,r),nr(e,n),Dn({affectedAncestorIds:ir(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0}))}function li(e,t){let n=ar(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=W(e,n);if(!z(r))throw Error(`Path is not a directory: "${t}"`);return pn(e,n,r)?(mn(e,n,!1,r),nr(e,n),On({affectedAncestorIds:ir(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0})):null}function ui(e,t){return t<0||t>=Qr(e)?null:di(e,e.snapshot.rootId,t,-1)}function di(e,t,n,r){let i=U(e,t),a=e.instrumentation,{childIndex:o,localVisibleIndex:s}=a==null?lt(e.snapshot.nodes,i,n):V(a,`store.getVisibleSlice.selectChildIndex`,()=>lt(e.snapshot.nodes,i,n)),c=i.childIds[o];if(c!=null)return fi(e,c,s,r+1);throw Error(`Visible index ${String(n)} is out of range`)}function fi(e,t,n,r){if(!z(W(e,t))){if(n===0)return{headNodeId:t,terminalNodeId:t,visibleDepth:r};throw Error(`Visible index ${String(n)} is out of range for file`)}let i=pi(e,t,r);if(n===0)return i;let a=W(e,i.terminalNodeId);if(!z(a)||!pn(e,i.terminalNodeId,a))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return di(e,i.terminalNodeId,n-1,i.visibleDepth)}function pi(e,t,n){return z(W(e,t))?e.instrumentation==null?{headNodeId:t,terminalNodeId:Jn(e,t),visibleDepth:n}:{headNodeId:t,terminalNodeId:V(e.instrumentation,`store.getVisibleSlice.flatten.resolveTerminalDirectory`,()=>Jn(e,t)),visibleDepth:n}:{headNodeId:t,terminalNodeId:t,visibleDepth:n}}function mi(e,t){let n=W(e,t);if(!z(n))return!0;let r=n.parentId;return r===e.snapshot.rootId?!0:qn(e,r)!==t}function hi(e,t){let n=W(e,t.terminalNodeId);if(z(n)){let r=U(e,t.terminalNodeId);if(pn(e,t.terminalNodeId,n)&&r.childIds.length>0){let n=r.childIds[0];return n==null?null:fi(e,n,0,t.visibleDepth+1)}}let r=t.terminalNodeId,i=t.visibleDepth;for(;;){let t=W(e,r);if(r===e.snapshot.rootId)return null;let n=t.parentId,a=U(e,n),o=it(a).get(r)??-1;if(o<0)throw Error(`Child ${String(r)} was not found in its parent index`);let s=a.childIds[o+1]??null;if(s!=null)return fi(e,s,0,i);mi(e,r)&&i--,r=n}}function gi(e){let t=e.paths.length,n=Array(t);for(let r=0;r<t;r+=1){let t=e.getParentIndex(r);n[r]={index:r,parentPath:t>=0?e.paths[t]??null:null,path:e.paths[r]??``,posInSet:e.posInSetByIndex[r]??0,setSize:e.setSizeByIndex[r]??0}}return{getParentIndex:e.getParentIndex,rows:n,get visibleIndexByPath(){return e.visibleIndexByPath}}}function _i(e,t){let n=Array(t),r=new Int32Array(t),i=new Int32Array(t),a=new Int32Array(t),o=new Int32Array(Xr);o.fill(-1);let s=0,{nodes:c,directories:l,segmentTable:u}=e.snapshot,d=[[l.get(e.snapshot.rootId),0,-1,``]],f=e.snapshot.options.flattenEmptyDirectories,p=e.pathCacheByNodeId,m=e.pathCacheVersion,h=u.valueById;for(;d.length>0&&s<t;){let t=d[d.length-1],u=t[0];if(t[1]>=u.childIds.length){d.pop();continue}let g=t[1],_=u.childIds[t[1]++],v=c[_],y=t[2]+1,b=t[3];o=Zr(o,y);let x,S=_;if(z(v))S=f?Jn(e,_):_,x=S===_?`${b}${h[v.nameId]}/`:H(e,S);else{let e=p.get(_);x=e!=null&&e.version===m?e.path:`${b}${h[v.nameId]}`}r[s]=o[y],n[s]=x,i[s]=g,a[s]=u.childIds.length,o[y+1]=s,s+=1;let C=c[S];C!=null&&z(C)&&pn(e,S,C)&&d.push([l.get(S),0,y,x])}s<t&&(n.length=s);let g=r.subarray(0,s),_=i.subarray(0,s),v=a.subarray(0,s),y=null;return{getParentIndex(e){return e<0||e>=s?-1:g[e]??-1},paths:n,posInSetByIndex:_,setSizeByIndex:v,get visibleIndexByPath(){if(y==null){y=new Map;for(let e=0;e<s;e+=1)y.set(n[e]??``,e)}return y}}}function vi(e,t){let n=Array(t),r=0,{nodes:i,directories:a,segmentTable:o}=e.snapshot,s=[[a.get(e.snapshot.rootId),0,-1]],c=o.valueById,l=e.snapshot.options.flattenEmptyDirectories,u=e.pathCacheByNodeId,d=e.pathCacheVersion;for(;s.length>0&&r<t;){let t=s[s.length-1],o=t[0];if(t[1]>=o.childIds.length){s.pop();continue}let f=o.childIds[t[1]++],p=i[f],m=t[2]+1;if(!z(p)){let t=u.get(f);n[r++]={depth:m,flattenedSegments:void 0,hasChildren:!1,id:f,isExpanded:!1,isFlattened:!1,isLoading:!1,kind:`file`,loadState:void 0,name:c[p.nameId],path:t!=null&&t.version===d?t.path:H(e,f)};continue}let h=l?Jn(e,f):f,g={headNodeId:f,terminalNodeId:h,visibleDepth:m};n[r++]=yi(e,g);let _=i[h];_!=null&&z(_)&&pn(e,h,_)&&s.push([a.get(h),0,m])}return r<t&&(n.length=r),n}function yi(e,t){let n=W(e,t.terminalNodeId),r=z(n)?bi(e,t):null,i=H(e,t.terminalNodeId),a=Wt(e.snapshot.segmentTable,n.nameId),o=z(n)&&U(e,t.terminalNodeId).childIds.length>0,s=t.headNodeId!==t.terminalNodeId,c=e.instrumentation,l=s?c==null?Yn(e,t.headNodeId).map(n=>{let r=W(e,n);return{isTerminal:n===t.terminalNodeId,name:Wt(e.snapshot.segmentTable,r.nameId),nodeId:n,path:H(e,n)}}):V(c,`store.getVisibleSlice.flatten.collectSegments`,()=>Yn(e,t.headNodeId).map(n=>{let r=W(e,n);return{isTerminal:n===t.terminalNodeId,name:Wt(e.snapshot.segmentTable,r.nameId),nodeId:n,path:H(e,n)}})):void 0;return{depth:t.visibleDepth,flattenedSegments:l,hasChildren:o,id:t.terminalNodeId,isExpanded:z(n)&&pn(e,t.terminalNodeId,n),isFlattened:s,isLoading:r===`loading`,kind:z(n)?`directory`:`file`,loadState:r==null||r===`loaded`?void 0:r,name:a,path:i}}function bi(e,t){if(t.headNodeId===t.terminalNodeId)return gn(e,t.terminalNodeId);let n=Yn(e,t.headNodeId),r=!1,i=!1;for(let t of n){let n=gn(e,t);if(n===`loading`)return`loading`;if(n===`error`){i=!0;continue}n===`unloaded`&&(r=!0)}return i?`error`:r?`unloaded`:`loaded`}function xi(e){let{directories:t,nodes:n,options:r,rootId:i,presortedDirectoryNodeIds:a}=e.snapshot,o=r.flattenEmptyDirectories===!0,s=e=>{let r=n[e];if(r==null||!z(r))return;let i=t.get(e);if(i==null)throw Error(`Unknown directory child index for node ${String(e)}`);let a=i.childIds,s=a.length,c=0,l=0;for(let e=0;e<s;e++){let t=a[e];if(t==null)continue;let r=n[t];c+=r.subtreeNodeCount,l+=r.visibleSubtreeCount}i.totalChildSubtreeNodeCount=c,i.totalChildVisibleSubtreeCount=l,s>=128&&L(n,i),r.subtreeNodeCount=1+c;let u;if(o&&s===1){let e=n[a[0]];u=e!=null&&z(e)?l:1+l}else u=1+l;r.visibleSubtreeCount=u};if(a!=null)for(let e=a.length-1;e>=0;e--)s(a[e]);else for(let e=n.length-1;e>=1;e--)s(e);let c=n[i],l=t.get(i);if(c==null||l==null)return;let u=l.childIds,d=0,f=0;for(let e=0;e<u.length;e++){let t=u[e];if(t==null)continue;let r=n[t];d+=r.subtreeNodeCount,f+=r.visibleSubtreeCount}l.totalChildSubtreeNodeCount=d,l.totalChildVisibleSubtreeCount=f,L(n,l),c.subtreeNodeCount=1+d,c.visibleSubtreeCount=f}function Si(e){return e.initialExpansion===`open`&&(e.initialExpandedPaths==null||e.initialExpandedPaths.length===0)}var Ci=class e{#e;constructor(e={}){let t=Ct(e),n=V(t,`store.builder.create`,()=>new cn(e));if(e.preparedInput!=null){let t=an(e.preparedInput);t==null?n.appendPreparedPaths(rn(e.preparedInput),!1):n.appendPresortedPaths(t,on(e.preparedInput))}else{let r=e.paths??[];e.presorted===!0?n.appendPaths(r):n.appendPreparedPaths(V(t,`store.preparePathEntries`,()=>sn(r,e)))}let r=V(t,`store.builder.finish`,()=>n.finish({skipSubtreeCountPass:!0})),i=V(t,`store.state.detectAllDirectoriesExpanded`,()=>(e.initialExpansion??`closed`)===`closed`&&n.didMatchAllInitialExpandedPaths());this.#e=V(t,`store.state.create`,()=>ln(r,i?`open`:e.initialExpansion??`closed`,t)),i&&(this.#e.collapseNewDirectoriesByDefault=!0);let a=i?this.#e.snapshot.directories.size-1:V(t,`store.state.initializeExpandedPaths`,()=>this.initializeExpandedPaths(e.initialExpandedPaths));i||Si(e)||(e.initialExpansion??`closed`)===`closed`&&a===this.#e.snapshot.directories.size-1||(e.initialExpandedPaths?.length??0)>0&&V(t,`store.state.checkAllDirectoriesExpanded`,()=>this.hasAllDirectoriesExpanded())?V(t,`store.state.initializeOpenVisibleCounts`,()=>xi(this.#e)):V(t,`store.state.recomputeCounts`,()=>rr(this.#e,this.#e.snapshot.rootId))}static preparePaths(e,t={}){return en(e,t)}static prepareInput(e,t={}){return tn(e,t)}static preparePresortedInput(e){return nn(e)}list(e){return V(this.#e.instrumentation,`store.list`,()=>Xn(this.#e,e))}add(e){V(this.#e.instrumentation,`store.add`,()=>{let t=Qr(this.#e);Ln(this.#e,Fn(this.#e,t,Zn(this.#e,e)))})}remove(e,t={}){V(this.#e.instrumentation,`store.remove`,()=>{let n=Qr(this.#e);Ln(this.#e,Fn(this.#e,n,Qn(this.#e,e,t)))})}move(e,t,n={}){V(this.#e.instrumentation,`store.move`,()=>{let r=Qr(this.#e),i=$n(this.#e,e,t,n);i!=null&&Ln(this.#e,Fn(this.#e,r,i))})}batch(e){In(this.#e,()=>{if(typeof e==`function`){e(this);return}for(let t of e)switch(t.type){case`add`:this.add(t.path);break;case`remove`:this.remove(t.path,{recursive:t.recursive});break;case`move`:this.move(t.from,t.to,{collision:t.collision});break}})}getVisibleCount(){return V(this.#e.instrumentation,`store.getVisibleCount`,()=>Qr(this.#e))}getVisibleSlice(e,t){return V(this.#e.instrumentation,`store.getVisibleSlice`,()=>ii(this.#e,e,t))}getVisibleRowContext(e){return V(this.#e.instrumentation,`store.getVisibleRowContext`,()=>ri(this.#e,e))}getVisibleTreeProjection(){return oi(this.#e)}getVisibleTreeProjectionData(e){return ai(this.#e,e)}getVisibleIndex(e){return V(this.#e.instrumentation,`store.getVisibleIndex`,()=>si(this.#e,e))}getPathInfo(e){return V(this.#e.instrumentation,`store.getPathInfo`,()=>{let t=ar(this.#e,e);if(t==null)return null;let n=W(this.#e,t);return{depth:gt(n),kind:z(n)?`directory`:`file`,path:H(this.#e,t)}})}isExpanded(e){return V(this.#e.instrumentation,`store.isExpanded`,()=>{let t=this.requireDirectoryNodeId(e),n=W(this.#e,t);return pn(this.#e,t,n)})}expand(e){V(this.#e.instrumentation,`store.expand`,()=>{let t=Qr(this.#e),n=ci(this.#e,e);n!=null&&Ln(this.#e,Fn(this.#e,t,n))})}collapse(e){V(this.#e.instrumentation,`store.collapse`,()=>{let t=Qr(this.#e),n=li(this.#e,e);n!=null&&Ln(this.#e,Fn(this.#e,t,n))})}on(e,t){return Cn(this.#e,e,t)}getDirectoryLoadState(e){let t=this.requireDirectoryNodeId(e);return gn(this.#e,t)}markDirectoryUnloaded(e){V(this.#e.instrumentation,`store.markDirectoryUnloaded`,()=>{let t=this.requireDirectoryNodeId(e);if(U(this.#e,t).childIds.length>0)throw Error(`Cannot mark a directory with known children as unloaded: "${e}"`);let n=Qr(this.#e);vn(this.#e,t),Ln(this.#e,Fn(this.#e,n,kn({affectedAncestorIds:ir(this.#e,t),affectedNodeIds:[t],path:e,projectionChanged:this.isDirectoryProjectionVisible(t)})))})}beginChildLoad(e){return V(this.#e.instrumentation,`store.beginChildLoad`,()=>{let t=this.requireDirectoryNodeId(e),n=Qr(this.#e),r=_n(this.#e,t);return Ln(this.#e,Fn(this.#e,n,An({affectedAncestorIds:ir(this.#e,t),affectedNodeIds:[t],attemptId:r.attemptId,path:e,projectionChanged:this.isDirectoryProjectionVisible(t),reused:r.reused}))),r})}applyChildPatch(e,t){return V(this.#e.instrumentation,`store.applyChildPatch`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null||gn(this.#e,n)!==`loading`||!bn(this.#e,n,e.attemptId))return!1;let r=H(this.#e,n);this.validateChildPatch(r,t);let i=Qr(this.#e),a=[];for(let e of t.operations){wi(r,e);let t=Qr(this.#e);switch(e.type){case`add`:a.push(Fn(this.#e,t,Zn(this.#e,e.path)));break;case`remove`:a.push(Fn(this.#e,t,Qn(this.#e,e.path,{recursive:e.recursive})));break;case`move`:{let n=$n(this.#e,e.from,e.to,{collision:e.collision});n!=null&&a.push(Fn(this.#e,t,n));break}}}let o=a.some(e=>e.projectionChanged)||this.isDirectoryProjectionVisible(n);return Ln(this.#e,Fn(this.#e,i,jn({affectedAncestorIds:ir(this.#e,n),affectedNodeIds:[n],attemptId:e.attemptId,childEvents:a,path:H(this.#e,n),projectionChanged:o}))),!0})}completeChildLoad(e){return V(this.#e.instrumentation,`store.completeChildLoad`,()=>{let t=this.resolveActiveDirectoryNodeId(e.nodeId);if(t==null)return!1;let n=Qr(this.#e),r=yn(this.#e,t,e.attemptId);return Ln(this.#e,Fn(this.#e,n,Mn({affectedAncestorIds:ir(this.#e,t),affectedNodeIds:[t],attemptId:e.attemptId,path:H(this.#e,t),projectionChanged:this.isDirectoryProjectionVisible(t),stale:!r}))),r})}failChildLoad(e,t){return V(this.#e.instrumentation,`store.failChildLoad`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null)return!1;let r=Qr(this.#e),i=xn(this.#e,n,e.attemptId,t);return Ln(this.#e,Fn(this.#e,r,Nn({affectedAncestorIds:ir(this.#e,n),affectedNodeIds:[n],attemptId:e.attemptId,errorMessage:t,path:H(this.#e,n),projectionChanged:this.isDirectoryProjectionVisible(n),stale:!i}))),i})}cleanup(e={}){return V(this.#e.instrumentation,`store.cleanup`,()=>{if(this.#e.transactionStack.length>0)throw Error(`Cleanup cannot run during an open batch or transaction.`);if(Jr(this.#e))throw Error(`Cleanup cannot run while directory loads are active.`);let t=Qr(this.#e),n=Yr(this.#e,e.mode??`stable`);return Ln(this.#e,Fn(this.#e,t,Pn({...n,affectedAncestorIds:[],affectedNodeIds:[],projectionChanged:n.idsPreserved===!1}))),n})}getNodeCount(){return this.#e.activeNodeCount}initializeExpandedPaths(e){if(e==null||e.length===0)return 0;let t=0,n=[],r=[],i=0,a=null,o=this.#e.snapshot.segmentTable,s=o.valueById,c=this.#e.snapshot.nodes,l=new Map;for(let u of e){a!=null&&u<a&&(a=null,i=0,n.length=0,r.length=0);let e=u.length>0&&u.charCodeAt(u.length-1)===47?u.length-1:u.length;if(e===0){a=u,i=e,n.length=0,r.length=0;continue}let d=0,f=0;if(a!=null){let t=Math.min(e,i),n=!0;for(let e=0;e<t;e+=1){let t=u.charCodeAt(e);if(t!==a.charCodeAt(e)){n=!1;break}t===47&&(d+=1,f=e+1)}n&&(t===i&&e>t&&u.charCodeAt(t)===47?(d+=1,f=t+1):t===e&&i>t&&a.charCodeAt(t)===47&&(d+=1,f=e+1)),d=Math.min(d,r.length)}let p=d===0?this.#e.snapshot.rootId:r[d-1]??this.#e.snapshot.rootId,m=d,h=!0,g=f;for(;g<=e;){let t=u.indexOf(`/`,g),i=t===-1||t>e?e:t,a=u.slice(g,i),f=U(this.#e,p).childIds,_=m===d?n[m]??0:0,v=_,y,b=l.get(a)??Dt(a);l.set(a,b);let x=(e,t)=>{for(v=e;v<t;v+=1){let e=f[v],t=c[e],n=s[t.nameId];if(n===a)return y=e,!0;let r=kt(It(o,t.nameId),b);if(r>0||r===0&&n>a)return!1}return!1};if(!x(_,f.length)&&_>0&&x(0,_),y===void 0){h=!1;break}if(!z(W(this.#e,y))){h=!1;break}if(n[m]=v,r[m]=y,p=y,m+=1,i===e)break;g=i+1}if(a=u,i=e,n.length=m,r.length=m,!h){a=null,i=0,n.length=0,r.length=0;continue}for(let e=d;e<m;e+=1){let n=r[e];if(n==null)continue;let i=W(this.#e,n);pn(this.#e,n,i)||(mn(this.#e,n,!0,i),t+=1)}}return t}hasAllDirectoriesExpanded(){for(let e of this.#e.snapshot.directories.keys()){if(e===this.#e.snapshot.rootId)continue;let t=W(this.#e,e);if(!pn(this.#e,e,t))return!1}return!0}requireDirectoryNodeId(e){let t=ar(this.#e,e);if(t==null)throw Error(`Path does not exist: "${e}"`);if(!z(W(this.#e,t)))throw Error(`Path is not a directory: "${e}"`);return t}resolveActiveDirectoryNodeId(e){try{if(!z(W(this.#e,e)))throw Error(`Node is not a directory: ${String(e)}`);return e}catch{return null}}isDirectoryProjectionVisible(e){let t=e;for(;t!==this.#e.snapshot.rootId;){let e=W(this.#e,t).parentId;if(e!==this.#e.snapshot.rootId){let n=W(this.#e,e),r=qn(this.#e,e);if(!pn(this.#e,e,n)&&r!==t)return!1}t=e}return!0}validateChildPatch(t,n){new e({paths:this.list(t),presorted:!0,sort:this.#e.snapshot.options.sort}).batch(n.operations)}};function wi(e,t){switch(t.type){case`add`:case`remove`:if(!t.path.startsWith(e)||t.path===e)throw Error(`Child patch operation must stay within ${e}: "${t.path}"`);break;case`move`:if(!t.from.startsWith(e)||!t.to.startsWith(e)||t.from===e||t.to===e)throw Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`);break}}var Ti={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}};function Ei(e,t){if(typeof e==`number`)return{itemHeight:t??Ti.default.itemHeight,factor:e};let n=Ti[e??`default`];return{itemHeight:t??n.itemHeight,factor:n.factor}}var Di=Ti.default.itemHeight,Oi=`@layer base, theme, unsafe;

@layer base {
  :host {
    /*
      CSS variables use a fallback stack to ensure user and theme colors slot
      in with ease. User colors take precedence over theme colors, which take
      precedence over defaults.

      Fallback order:

      1. --trees-*-override (explicit)
      2. --trees-theme-* (e.g. Shiki/VS Code tokens)
      3. defaults

      Theme variable names mirror Shiki/VS Code theme file JSON tokens.

      // Available CSS Color Overrides
      --trees-fg-override
      --trees-fg-muted-override
      --trees-bg-override
      --trees-bg-muted-override
      --trees-accent-override
      --trees-border-color-override

      --trees-focus-ring-color-override
      --trees-focus-ring-width-override
      --trees-focus-ring-offset-override

      --trees-search-fg-override
      --trees-search-font-weight-override
      --trees-search-bg-override

      --trees-selected-fg-override
      --trees-selected-bg-override
      --trees-selected-focused-border-color-override

      // Git Status Color Overrides
      --trees-status-added-override
      --trees-status-ignored-override
      --trees-status-modified-override
      --trees-status-renamed-override
      --trees-status-untracked-override
      --trees-status-deleted-override
      --trees-git-added-color-override
      --trees-git-ignored-color-override
      --trees-git-modified-color-override
      --trees-git-renamed-color-override
      --trees-git-untracked-color-override
      --trees-git-deleted-color-override

      // Built-in File Icon Color Overrides
      --trees-file-icon-color
      --trees-file-icon-color-astro
      --trees-file-icon-color-babel
      --trees-file-icon-color-bash
      --trees-file-icon-color-biome
      --trees-file-icon-color-bootstrap
      --trees-file-icon-color-browserslist
      --trees-file-icon-color-bun
      --trees-file-icon-color-c
      --trees-file-icon-color-cpp
      --trees-file-icon-color-claude
      --trees-file-icon-color-css
      --trees-file-icon-color-database
      --trees-file-icon-color-default
      --trees-file-icon-color-docker
      --trees-file-icon-color-eslint
      --trees-file-icon-color-git
      --trees-file-icon-color-go
      --trees-file-icon-color-graphql
      --trees-file-icon-color-html
      --trees-file-icon-color-image
      --trees-file-icon-color-javascript
      --trees-file-icon-color-json
      --trees-file-icon-color-markdown
      --trees-file-icon-color-mcp
      --trees-file-icon-color-npm
      --trees-file-icon-color-oxc
      --trees-file-icon-color-postcss
      --trees-file-icon-color-prettier
      --trees-file-icon-color-python
      --trees-file-icon-color-react
      --trees-file-icon-color-ruby
      --trees-file-icon-color-rust
      --trees-file-icon-color-sass
      --trees-file-icon-color-svg
      --trees-file-icon-color-svelte
      --trees-file-icon-color-svgo
      --trees-file-icon-color-swift
      --trees-file-icon-color-table
      --trees-file-icon-color-text
      --trees-file-icon-color-tailwind
      --trees-file-icon-color-terraform
      --trees-file-icon-color-typescript
      --trees-file-icon-color-vite
      --trees-file-icon-color-vscode
      --trees-file-icon-color-vue
      --trees-file-icon-color-wasm
      --trees-file-icon-color-webpack
      --trees-file-icon-color-yml
      --trees-file-icon-color-zig
      --trees-file-icon-color-zip

      // Density
      //
      // A unitless scale factor for padding, gaps, and indentation. Usually
      // set via \`density\` on useFileTree. Individual overrides take precedence.
      //
      //   Compact: 0.8
      //   Default: 1
      //   Relaxed: 1.2
      //
      --trees-density-override

      // Available CSS Layout Overrides
      --trees-gap-override
      --trees-border-radius-override
      --trees-font-family-override
      --trees-font-size-override
      --trees-font-weight-regular-override
      --trees-font-weight-semibold-override
      --trees-level-gap-override
      --trees-item-padding-x-override
      --trees-item-margin-x-override
      --trees-item-row-gap-override
      --trees-icon-width-override
      --trees-icon-nudge-override
      --trees-scrollbar-gutter-override
      --trees-padding-inline-override
    */

    --trees-accent: var(--trees-accent-override, #009fff);
    --trees-fg: var(
      --trees-fg-override,
      var(--trees-theme-sidebar-fg, light-dark(#6c6c71, #adadb1))
    );
    --trees-fg-muted: var(
      --trees-fg-muted-override,
      var(--trees-theme-sidebar-header-fg, light-dark(#84848a, #84848a))
    );
    --trees-bg: var(
      --trees-bg-override,
      var(--trees-theme-sidebar-bg, light-dark(#f8f8f8, #141415))
    );
    /* var(--trees-theme-list-hover-bg, light-dark(#dfebff59, #19283c59)) */
    --trees-bg-muted: var(
      --trees-bg-muted-override,
      var(
        --trees-theme-list-hover-bg,
        light-dark(
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-light, 8%),
            var(--trees-bg)
          ),
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-dark, 10%),
            var(--trees-bg)
          )
        )
      )
    );
    --trees-input-bg: var(
      --trees-input-bg-override,
      light-dark(#f8f8f8, #070707)
    );

    --trees-added-light: #16a994;
    --trees-added-dark: #00cab1;
    --trees-ignored-light: #adadb1;
    --trees-ignored-dark: #4a4a4e;
    --trees-modified-light: #1ca1c7;
    --trees-modified-dark: #08c0ef;
    --trees-renamed-light: #d5a910;
    --trees-renamed-dark: #ffd452;
    --trees-untracked-light: #16a994;
    --trees-untracked-dark: #00cab1;
    --trees-deleted-light: #ff2e3f;
    --trees-deleted-dark: #ff6762;

    --trees-border-color: var(
      --trees-border-color-override,
      var(--trees-theme-sidebar-border, light-dark(#eeeeef, #070707))
    );
    --trees-indent-guide-bg: var(
      --trees-indent-guide-bg-override,
      color-mix(in lab, var(--trees-fg-muted) 25%, transparent)
    );
    --trees-density: var(--trees-density-override, 1);
    --trees-border-radius: var(
      --trees-border-radius-override,
      calc(6px * var(--trees-density))
    );

    --trees-font-family: var(--trees-font-family-override, system-ui);
    --trees-font-size: var(--trees-font-size-override, 13px);
    --trees-font-weight-regular: var(--trees-font-weight-regular-override, 400);
    --trees-font-weight-semibold: var(
      --trees-font-weight-semibold-override,
      600
    );

    --trees-focus-ring-color: var(
      --trees-focus-ring-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );
    --trees-focus-ring-width: var(--trees-focus-ring-width-override, 1px);
    --trees-focus-ring-offset: var(--trees-focus-ring-offset-override, -1px);

    --trees-search-fg: var(
      --trees-search-fg-override,
      var(--trees-theme-input-fg, var(--trees-fg))
    );
    --trees-search-font-weight: var(--trees-search-font-weight-override, 600);
    --trees-search-bg: var(
      --trees-search-bg-override,
      var(--trees-theme-input-bg, var(--trees-input-bg))
    );

    --trees-scrollbar-thumb: var(
      --trees-scrollbar-thumb-override,
      var(
        --trees-theme-scrollbar-thumb,
        color-mix(in lab, var(--trees-fg) 25%, var(--trees-bg))
      )
    );

    --trees-selected-fg: var(
      --trees-selected-fg-override,
      var(--trees-theme-list-active-selection-fg, var(--trees-fg))
    );
    --trees-selected-bg: var(
      --trees-selected-bg-override,
      var(
        --trees-theme-list-active-selection-bg,
        light-dark(
          color-mix(in lab, var(--trees-accent) 12%, var(--trees-bg)),
          color-mix(in lab, var(--trees-accent) 15%, var(--trees-bg))
        )
      )
    );
    --trees-selected-focused-border-color: var(
      --trees-selected-focused-border-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );

    /* Git status (e.g. from Shiki theme gitDecoration.*) */
    --trees-status-added: var(
      --trees-status-added-override,
      var(
        --trees-theme-git-added-fg,
        light-dark(var(--trees-added-light), var(--trees-added-dark))
      )
    );
    --trees-status-ignored: var(
      --trees-status-ignored-override,
      var(
        --trees-theme-git-ignored-fg,
        light-dark(var(--trees-ignored-light), var(--trees-ignored-dark))
      )
    );
    --trees-status-modified: var(
      --trees-status-modified-override,
      var(
        --trees-theme-git-modified-fg,
        light-dark(var(--trees-modified-light), var(--trees-modified-dark))
      )
    );
    --trees-status-renamed: var(
      --trees-status-renamed-override,
      var(
        --trees-theme-git-renamed-fg,
        light-dark(var(--trees-renamed-light), var(--trees-renamed-dark))
      )
    );
    --trees-status-untracked: var(
      --trees-status-untracked-override,
      var(
        --trees-theme-git-untracked-fg,
        light-dark(var(--trees-untracked-light), var(--trees-untracked-dark))
      )
    );
    --trees-status-deleted: var(
      --trees-status-deleted-override,
      var(
        --trees-theme-git-deleted-fg,
        light-dark(var(--trees-deleted-light), var(--trees-deleted-dark))
      )
    );
    --trees-git-modified-color: var(
      --trees-git-modified-color-override,
      var(--trees-status-modified)
    );
    --trees-git-added-color: var(
      --trees-git-added-color-override,
      var(--trees-status-added)
    );
    --trees-git-ignored-color: var(
      --trees-git-ignored-color-override,
      var(--trees-status-ignored)
    );
    --trees-git-deleted-color: var(
      --trees-git-deleted-color-override,
      var(--trees-status-deleted)
    );
    --trees-git-renamed-color: var(
      --trees-git-renamed-color-override,
      var(--trees-status-renamed)
    );
    --trees-git-untracked-color: var(
      --trees-git-untracked-color-override,
      var(--trees-status-untracked)
    );

    --trees-icon-gray: light-dark(#84848a, #adadb1);
    --trees-icon-red: light-dark(#d52c36, #ff6762);
    --trees-icon-vermilion: light-dark(#ff8c5b, #d5512f);
    --trees-icon-orange: light-dark(#d47628, #ffa359);
    --trees-icon-yellow: light-dark(#d5a910, #ffd452);
    --trees-icon-green: light-dark(#199f43, #5ecc71);
    --trees-icon-teal: light-dark(#17a5af, #64d1db);
    --trees-icon-cyan: light-dark(#1ca1c7, #68cdf2);
    --trees-icon-blue: light-dark(#1a85d4, #69b1ff);
    --trees-icon-indigo: light-dark(#693acf, #9d6afb);
    --trees-icon-purple: light-dark(#a631be, #d568ea);
    --trees-icon-pink: light-dark(#d32a61, #ff678d);
    --trees-icon-mauve: light-dark(#594c5b, #79697b);

    --trees-file-icon-color-default: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-astro: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-babel: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bash: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-biome: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-bootstrap: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-browserslist: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bun: var(
      --trees-file-icon-color,
      var(--trees-icon-mauve)
    );
    --trees-file-icon-color-c: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-cpp: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-claude: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-css: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-database: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-docker: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-eslint: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-git: var(
      --trees-file-icon-vermilion,
      var(--trees-icon-vermilion)
    );
    --trees-file-icon-color-go: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-graphql: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-html: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-image: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-javascript: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-json: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-markdown: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-mcp: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-npm: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-oxc: var(
      --trees-file-icon-cyan,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-postcss: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-prettier: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-python: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-react: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-ruby: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-rust: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-sass: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-svg: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-svelte: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-svgo: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-swift: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-table: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-text: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-tailwind: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-terraform: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-typescript: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vite: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-vscode: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vue: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-wasm: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-webpack: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-yml: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-zig: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-zip: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );

    --trees-level-gap: var(
      --trees-level-gap-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-padding-x: var(
      --trees-item-padding-x-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-margin-x: var(
      --trees-item-margin-x-override,
      calc(2px * var(--trees-density))
    );
    --trees-item-row-gap: var(
      --trees-item-row-gap-override,
      calc(6px * var(--trees-density))
    );
    --trees-icon-width: var(--trees-icon-width-override, 16px);
    --trees-icon-nudge: var(
      --trees-icon-nudge-override,
      calc(1px * var(--trees-density))
    );
    --trees-row-height: var(--trees-item-height, 30px);
    --trees-git-lane-width: var(--trees-git-lane-width-override, 12px);
    --trees-action-lane-width: var(
      --trees-action-lane-width-override,
      calc(var(--trees-icon-width) + 2px)
    );
    /* Keep the floating trigger aligned with the row's action lane. Going in
       from the root's right edge: the scroll container reserves
       \`--trees-padding-inline\` of effective inset on each side (its asymmetric
       padding formula cancels the scrollbar gutter on the right), the row
       sits inside that inset, and its trailing \`--trees-item-padding-x\` is the
       action lane itself. The trigger's own focus-ring margin then trims one
       pixel back so the button's visible right edge lines up with the lane. */
    --trees-context-menu-trigger-inline-offset: calc(
      var(--trees-padding-inline) + var(--trees-item-padding-x) -
        var(--trees-focus-ring-width)
    );

    --trees-scrollbar-gutter: var(--trees-scrollbar-gutter-override, 6px);
    --trees-padding-inline: var(--trees-padding-inline-override, 16px);

    color-scheme: light dark;
    display: flex;
    flex-direction: column;
    font-size: var(--trees-font-size);
    color: var(--trees-fg);
    background-color: var(--trees-bg);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    font-family: var(--trees-font-family);
    font-weight: var(--trees-font-weight-regular);
  }

  :host([data-file-tree-virtualized='true']) {
    height: 100%;
    overflow: hidden;
  }

  [data-file-tree-virtualized-wrapper='true'] {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  [data-file-tree-virtualized-root='true'] {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  [data-file-tree-virtualized-scroll='true'],
  [data-file-tree-scrollbar-measure='true'] {
    --trees-scrollbar-thumb-current: transparent;
    overflow-y: auto;
    scrollbar-gutter: stable;

    &:hover {
      --trees-scrollbar-thumb-current: var(--trees-scrollbar-thumb);
    }

    &::-webkit-scrollbar {
      width: var(--trees-scrollbar-gutter);
      height: var(--trees-scrollbar-gutter);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--trees-scrollbar-thumb-current);
      border: 1px solid transparent;
      background-clip: content-box;
      border-radius: calc(var(--trees-scrollbar-gutter) / 2);
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  /* These are styles for a temporarily generated element to measure the size
   * of the scrollbar.  It's intended to be somewhat similar in scrollbar style
   * scope to the scrollable tree so \`--trees-scrollbar-gutter-measured\` is an
   * accurate reflection of the size the scrollbar gutter takes up. */
  [data-file-tree-scrollbar-measure='true'] {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
    width: 100px;
    height: 100px;
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'],
    [data-file-tree-scrollbar-measure='true'] {
      scrollbar-width: thin;
      scrollbar-color: var(--trees-scrollbar-thumb-current) transparent;
    }
  }

  [data-file-tree-virtualized-scroll='true'] {
    position: relative;
    overflow-y: auto;
    flex: 1 1 0;
    min-height: 0;
    padding-inline: max(
        calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
        0px
      )
      /* NOTE(amadeus): We can assume that all Webkit based browser gutters
       * will align to the value of '--trees-scrollbar-gutter', however if not, then
       * \`--trees-scrollbar-gutter-measured\` should correct it. Mostly we are
       * hoping to avoid SSR alignment jumps if possible. In non-SSR'd environments
       * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
       */
      max(
        calc(
          var(--trees-padding-inline) - var(--trees-item-margin-x) -
            var(
              --trees-scrollbar-gutter-measured,
              var(--trees-scrollbar-gutter)
            )
        ),
        0px
      );
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'] {
      padding-inline: max(
          calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
          0px
        )
        /* NOTE(amadeus): However on Firefox it can vary a little bit, but most
         * likely the majority of cases will default to a 0px width scrollbar lets
         * inherit that first to avoid SSR jumps. In non-SSR'd environments
         * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
         */
        max(
          calc(
            var(--trees-padding-inline) - var(--trees-item-margin-x) -
              var(--trees-scrollbar-gutter-measured, 0px)
          ),
          0px
        );
    }
  }

  [data-file-tree-sticky-overlay='true'] {
    position: sticky;
    top: 0;
    height: 0;
    z-index: 4;
    overflow: visible;
    pointer-events: none;
  }

  /* The overlay DOM is kept populated even at scrollTop=0 so the browser has
   * the rendered rows on hand the moment scrolling begins — otherwise the
   * compositor paints a scrolled frame before React can mount the overlay,
   * and the topmost sticky folder jumps up by a couple of pixels before it
   * "snaps" into its pinned position. We hide it via CSS whenever the scroll
   * is at the top and no scroll is in progress, so the preview doesn't leak
   * through at rest. \`data-overlay-reveal\` is stamped on the root only when
   * the user initiates a scroll while already at the top — exactly the case
   * where we need the pre-mounted overlay to be visible through the first
   * compositor frame. It is deliberately distinct from the general
   * \`data-is-scrolling\` flag so a scroll that ends at the top (e.g. ArrowUp
   * navigation) re-hides the overlay the instant the scroll lands, rather
   * than waiting for the hover-suppression timer to elapse. */
  [data-file-tree-virtualized-root='true'][data-scroll-at-top='true']:not(
      [data-overlay-reveal]
    )
    [data-file-tree-sticky-overlay='true'] {
    visibility: hidden;
  }

  [data-file-tree-sticky-overlay-content='true'] {
    background-color: var(--trees-bg);
    position: relative;
    pointer-events: none;
  }

  [data-file-tree-virtualized-list='true'] {
    background-color: var(--trees-bg);
    position: relative;
    min-height: 100%;
    width: 100%;
    overflow-anchor: none;

    &[data-is-scrolling] {
      pointer-events: none;
    }
  }

  [data-file-tree-virtualized-sticky-offset='true'] {
    contain: layout size;
  }

  [data-file-tree-virtualized-sticky='true'] {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    /* Promote to its own compositor layer so text inside the window is
     * rasterized once and GPU-translated during scroll. Without this, the
     * browser re-paints the window (and its text) at every scroll frame,
     * which produces visible 1px shake / character tearing. */
    will-change: transform;
  }

  [data-file-tree-search-container] {
    display: flex;
    padding: 0;
    padding-inline: var(--trees-padding-inline);
    margin-bottom: var(--trees-item-row-gap);
  }

  [data-file-tree-search-input] {
    --trees-focus-ring-width: 2px;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    flex: 1;
    height: var(--trees-row-height);
    /* 1px breathing room so the focus-visible outline isn't clipped when the
     * input sits flush against the top of the scroll container. */
    margin-block: 1px;
    padding-inline: var(--trees-item-padding-x);
    line-height: var(--trees-row-height);
    color: var(--trees-search-fg);
    background-color: var(--trees-search-bg);
    border: 1px solid var(--trees-border-color);
    border-radius: var(--trees-border-radius);
    outline: none;

    &::placeholder {
      color: color-mix(
        in lab,
        var(--trees-search-fg) 65%,
        var(--trees-search-bg)
      );
    }

    &:focus-visible,
    &[data-file-tree-search-input-fake-focus='true'] {
      outline: var(--trees-focus-ring-width) solid var(--trees-focus-ring-color);
      outline-offset: var(--trees-focus-ring-offset);
    }
  }

  /* The wrapper for the tree items */
  [role='tree'] {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--trees-gap-override, 0);
  }

  /* LIST ITEM */
  [data-type='item'] {
    color: inherit;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    text-align: start;
    outline: none;
    background-color: var(--trees-bg);
    border: none;
    position: relative;

    padding: 0 var(--trees-item-padding-x);
    margin: 0 var(--trees-item-margin-x);
    cursor: pointer;
    -webkit-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
    display: flex;
    flex: 0 0 var(--trees-row-height);
    align-items: center;
    height: var(--trees-row-height);
    line-height: var(--trees-row-height);
    gap: var(--trees-item-row-gap);
    border-radius: var(--trees-border-radius);
    /* Row states may be translucent, so markers paint the tree background first
     * and then the state color on top to avoid compositing the same alpha twice. */
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    --truncate-marker-block-inset: 0px;

    &:hover,
    &[data-item-context-hover='true'] {
      background-color: var(--trees-bg-muted);
      --truncate-marker-background-overlay-color: var(--trees-bg-muted);
    }

    &[data-item-focused='true'],
    &:focus-visible {
      z-index: 2;

      /* Flattened segment markers sit high enough to cover the row outline unless
       * their painted background is inset by the focus ring width. */
      [data-item-flattened-subitems] {
        --truncate-marker-block-inset: var(--trees-focus-ring-width);
      }

      &::before {
        position: absolute;
        inset: 0;
        content: '';
        display: block;
        border-radius: var(--trees-border-radius);
        outline: var(--trees-focus-ring-width) solid
          var(--trees-focus-ring-color);
        outline-offset: var(--trees-focus-ring-offset);
        pointer-events: none;
      }

      &[data-item-selected='true']::before {
        outline-color: var(--trees-selected-focused-border-color);
      }
    }

    &[data-item-selected='true'] {
      color: var(--trees-selected-fg);
      background-color: var(--trees-selected-bg);
      --truncate-marker-background-overlay-color: var(--trees-selected-bg);
      z-index: 3;

      [data-item-section='icon'] {
        color: var(--trees-selected-fg);
      }
    }

    &[data-item-search-match='true'] {
      font-weight: var(--trees-search-font-weight);
    }
  }

  [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: auto;
  }

  /* Sticky rows opt back into pointer events because the overlay wrapper is
   * inert. During scroll, put them back under the same hover suppression as
   * the virtualized list so translucent hover states and menu triggers do not
   * paint over rows moving beneath the sticky stack. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: none;
  }

  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true']:hover:not(
      [data-item-selected='true']
    ),
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'][data-item-context-hover='true']:not(
      [data-item-selected='true']
    ) {
    background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
  }

  [data-item-selected='true']:has(+ [data-item-selected='true']) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  [data-item-selected='true'] + [data-item-selected='true'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /* Flattened Directory Parts */
  [data-item-flattened-subitems] {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }
  [data-item-flattened-subitem]:hover,
  [data-item-flattened-subitem-drag-target='true'] {
    text-decoration: underline;
  }

  /* Icon for each item */
  [data-item-section='icon'] {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--trees-fg-muted);
    fill: currentColor;
    width: var(--trees-icon-width);
  }

  :where([data-item-section='icon'] > [data-icon-token]) {
    color: var(--trees-fg-muted);
  }

  [data-file-tree-colored-icons='true'] {
    [data-icon-token='astro'] {
      color: var(--trees-file-icon-color-astro);
    }
    [data-icon-token='babel'] {
      color: var(--trees-file-icon-color-babel);
    }
    [data-icon-token='bash'] {
      color: var(--trees-file-icon-color-bash);
    }
    [data-icon-token='biome'] {
      color: var(--trees-file-icon-color-biome);
    }
    [data-icon-token='bootstrap'] {
      color: var(--trees-file-icon-color-bootstrap);
    }
    [data-icon-token='browserslist'] {
      color: var(--trees-file-icon-color-browserslist);
    }
    [data-icon-token='bun'] {
      color: var(--trees-file-icon-color-bun);
    }
    [data-icon-token='c'] {
      color: var(--trees-file-icon-color-c);
    }
    [data-icon-token='cpp'] {
      color: var(--trees-file-icon-color-cpp);
    }
    [data-icon-token='claude'] {
      color: var(--trees-file-icon-color-claude);
    }
    [data-icon-token='css'] {
      color: var(--trees-file-icon-color-css);
    }
    [data-icon-token='database'] {
      color: var(--trees-file-icon-color-database);
    }
    [data-icon-token='default'] {
      color: var(--trees-file-icon-color-default);
    }
    [data-icon-token='docker'] {
      color: var(--trees-file-icon-color-docker);
    }
    [data-icon-token='eslint'] {
      color: var(--trees-file-icon-color-eslint);
    }
    [data-icon-token='git'] {
      color: var(--trees-file-icon-color-git);
    }
    [data-icon-token='go'] {
      color: var(--trees-file-icon-color-go);
    }
    [data-icon-token='graphql'] {
      color: var(--trees-file-icon-color-graphql);
    }
    [data-icon-token='html'] {
      color: var(--trees-file-icon-color-html);
    }
    [data-icon-token='image'] {
      color: var(--trees-file-icon-color-image);
    }
    [data-icon-token='javascript'] {
      color: var(--trees-file-icon-color-javascript);
    }
    [data-icon-token='json'] {
      color: var(--trees-file-icon-color-json);
    }
    [data-icon-token='markdown'] {
      color: var(--trees-file-icon-color-markdown);
    }
    [data-icon-token='mcp'] {
      color: var(--trees-file-icon-color-mcp);
    }
    [data-icon-token='npm'] {
      color: var(--trees-file-icon-color-npm);
    }
    [data-icon-token='oxc'] {
      color: var(--trees-file-icon-color-oxc);
    }
    [data-icon-token='postcss'] {
      color: var(--trees-file-icon-color-postcss);
    }
    [data-icon-token='prettier'] {
      color: var(--trees-file-icon-color-prettier);
    }
    [data-icon-token='python'] {
      color: var(--trees-file-icon-color-python);
    }
    [data-icon-token='react'] {
      color: var(--trees-file-icon-color-react);
    }
    [data-icon-token='ruby'] {
      color: var(--trees-file-icon-color-ruby);
    }
    [data-icon-token='rust'] {
      color: var(--trees-file-icon-color-rust);
    }
    [data-icon-token='sass'] {
      color: var(--trees-file-icon-color-sass);
    }
    [data-icon-token='svg'] {
      color: var(--trees-file-icon-color-svg);
    }
    [data-icon-token='svelte'] {
      color: var(--trees-file-icon-color-svelte);
    }
    [data-icon-token='svgo'] {
      color: var(--trees-file-icon-color-svgo);
    }
    [data-icon-token='swift'] {
      color: var(--trees-file-icon-color-swift);
    }
    [data-icon-token='table'] {
      color: var(--trees-file-icon-color-table);
    }
    [data-icon-token='text'] {
      color: var(--trees-file-icon-color-text);
    }
    [data-icon-token='tailwind'] {
      color: var(--trees-file-icon-color-tailwind);
    }
    [data-icon-token='terraform'] {
      color: var(--trees-file-icon-color-terraform);
    }
    [data-icon-token='typescript'] {
      color: var(--trees-file-icon-color-typescript);
    }
    [data-icon-token='vite'] {
      color: var(--trees-file-icon-color-vite);
    }
    [data-icon-token='vscode'] {
      color: var(--trees-file-icon-color-vscode);
    }
    [data-icon-token='vue'] {
      color: var(--trees-file-icon-color-vue);
    }
    [data-icon-token='wasm'] {
      color: var(--trees-file-icon-color-wasm);
    }
    [data-icon-token='webpack'] {
      color: var(--trees-file-icon-color-webpack);
    }
    [data-icon-token='yml'] {
      color: var(--trees-file-icon-color-yml);
    }
    [data-icon-token='zig'] {
      color: var(--trees-file-icon-color-zig);
    }
    [data-icon-token='zip'] {
      color: var(--trees-file-icon-color-zip);
    }
  }

  /* Chevron rotation and visual alignment */
  /* Chevron pointing down */
  [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='false'] {
      transform: translate(0, var(--trees-icon-nudge));
    }
    &[data-align-capitals='true'] {
      transform: translate(0, 0);
    }
  }

  [data-item-section='content'] {
    flex: 0 1 auto;
    text-align: start;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Breaks middle truncate component to also set this */
    /* white-space: nowrap; */
  }

  [data-item-section='decoration'] {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    justify-content: flex-end;
    text-align: end;
    overflow: hidden;
    color: var(--trees-fg-muted);
  }

  [data-item-section='decoration'] > span {
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-item-section='git'],
  [data-item-section='action'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-section='git'] {
    width: var(--trees-git-lane-width);
  }

  [data-item-section='action'] {
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    pointer-events: none;
  }

  [data-item-section='git'] > span,
  [data-item-section='action'] > span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-action-affordance='decorative'] {
    opacity: 0.85;
  }

  [data-item-rename-input] {
    appearance: none;
    width: 100%;
    min-width: 0;
    height: calc(var(--trees-row-height) - 4px);
    font-family: inherit;
    font-size: inherit;
    /* line-height: calc(var(--trees-row-height) - 8px); */
    color: inherit;
    background-color: transparent;
    border: 0;
    padding-inline: 6px;
    outline: none;
    box-sizing: border-box;
  }

  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='action'],
  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='decoration'] {
    display: none;
  }

  /* Chevron pointing right */
  [aria-expanded='false'][data-item-type='folder']
    > [data-item-section='icon']
    > [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='true'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
    &[data-align-capitals='false'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2 * -1),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
  }

  /* LIST IDENTATION */
  /* Spacing container */
  [data-item-section='spacing'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--trees-row-height);
    padding-left: calc(calc(var(--trees-icon-width) / 2) - 0.5px);

    &:empty {
      padding-left: 0;
    }
  }

  /* Spacing per level */
  [data-item-section='spacing-item'] {
    transform: translateX(-0.25px);
    display: inline-block;
    border-left: 1px solid var(--trees-indent-guide-bg);
    height: 100%;
    margin-right: calc(var(--trees-level-gap) - 1px);
    opacity: 0;
    transition: opacity 150ms ease;

    & + & {
      margin-left: calc(
        var(--trees-item-row-gap) + calc(var(--trees-icon-width) / 2) - 0.5px
      );
    }
  }

  :host(:hover) [data-item-section='spacing-item'] {
    opacity: 0.75;
  }

  /* Git status indicator */

  /* This is a folder that contains a git change */
  [data-item-contains-git-change='true'] > [data-item-section='git'] {
    color: var(--trees-git-modified-color);
    opacity: 0.5;
    fill: currentColor;
  }

  /* These are files that have a git change */
  [data-item-git-status] {
    &
      > :where([data-item-section='icon'])
      > :where(:not([data-icon-name='file-tree-icon-chevron'])) {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='content'] {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='git'] {
      color: var(--trees-item-git-status-color);
      font-weight: var(--trees-font-weight-semibold);
    }
  }

  [data-item-git-status='added'] {
    --trees-item-git-status-color: var(--trees-git-added-color);
  }

  [data-item-git-status='deleted'] {
    --trees-item-git-status-color: var(--trees-git-deleted-color);
  }

  [data-item-git-status='ignored'] {
    --trees-item-git-status-color: var(--trees-git-ignored-color);

    & > [data-item-section='icon'] {
      opacity: 0.5;
    }
  }

  [data-item-section='git'] [data-icon-name='file-tree-icon-dot'] {
    /* this is a nudge to align the dot with the likely lowercase text. it's slightly
    generalizable, but other fonts are gonna need other nudges i assume */
    transform: translateY(calc(0.65ex - 50%));
  }

  [data-item-git-status='modified'] {
    --trees-item-git-status-color: var(--trees-git-modified-color);
  }

  [data-item-git-status='renamed'] {
    --trees-item-git-status-color: var(--trees-git-renamed-color);
  }

  [data-item-git-status='untracked'] {
    --trees-item-git-status-color: var(--trees-git-untracked-color);
  }

  /* Drag and drop */
  [data-item-drag-target='true'] {
    background-color: var(--trees-selected-bg);
  }

  [data-item-dragging='true'] {
    opacity: 0.5;
  }

  /* Lock icon for locked paths (sibling of content) */
  [data-item-section='lock'] {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    color: var(--trees-fg-muted);
  }
  [data-item-section='lock'] svg {
    display: block;
  }

  [data-type='header-slot'] {
    display: block;
    flex: 0 0 auto;
  }

  [data-type='context-menu-wash'] {
    position: absolute;
    inset: 0;
    z-index: 3;
    background-color: transparent;
    touch-action: none;
  }

  [data-type='context-menu-anchor'] {
    position: absolute;
    top: 0;
    right: var(--trees-context-menu-trigger-inline-offset);
    z-index: 4;
    display: none;
    align-items: center;

    &[data-visible='true'] {
      display: flex;
    }
  }

  /* Hide the floating trigger while the scroll container is actively moving.
   * The anchor is positioned against the root, not the scroll content, so its
   * \`top\` follows the row via a React state update — one frame behind the
   * compositor. That delay is visible as the trigger hovering over the wrong
   * row during the first frame of a scroll. The \`data-is-scrolling\` flag on
   * the root is flipped synchronously on \`wheel\`/\`touchmove\`/\`keydown\` before
   * the compositor commits the next paint, so this selector hides the anchor
   * in the same frame the scroll begins. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='context-menu-anchor'] {
    display: none;
  }

  [data-type='context-menu-anchor'] > slot[name='context-menu'] {
    display: block;
    width: 0;
    min-width: 0;
    flex: 0 0 0;
    overflow: visible;
  }

  /* Single floating context menu trigger */
  [data-type='context-menu-trigger'] {
    all: unset;
    align-items: center;
    justify-content: center;
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    cursor: pointer;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    border-top-right-radius: var(--trees-border-radius);
    border-bottom-right-radius: var(--trees-border-radius);
    margin: var(--trees-focus-ring-width);
    height: calc(var(--trees-row-height) - var(--trees-focus-ring-width) * 2);
    border-width: 0;
    transition: color 120ms ease;

    display: flex;
  }

  [data-type='context-menu-trigger']:hover,
  [data-type='context-menu-trigger'][aria-expanded='true'] {
    color: var(--trees-fg);
  }

  /** @pierre/truncate css here, manually copy pasted for now */
  [data-truncate-container] {
    /* CUSTOM TO TREES, TO SUPPORT THE OUTLINE */
    margin-top: -1px;
    margin-bottom: -1px;

    /* Width of the fade from default marker to text */
    --truncate-internal-marker-fade-width: var(
      --truncate-marker-fade-width,
      2px
    );
    /* Width of the solid color between the fade from the default marker to the text */
    --truncate-internal-marker-gap: var(--truncate-marker-gap, 0px);
    /* Opacity of the marker 'color' property, not of the element itself */
    --truncate-internal-marker-opacity: var(--truncate-marker-opacity, 50%);
    /* Opacity of the marker 'color' property specifically for the middle truncate, not opacity of the element itself */
    --truncate-internal-middle-marker-opacity: var(
      --truncate-middle-marker-opacity,
      80%
    );
    /* Background color of the default marker */
    --truncate-internal-marker-background-color: var(
      --truncate-marker-background-color,
      light-dark(white, black)
    );
    --truncate-internal-marker-background-overlay-color: var(
      --truncate-marker-background-overlay-color,
      transparent
    );
    --truncate-internal-marker-block-inset: var(
      --truncate-marker-block-inset,
      0px
    );
    /* Duration of the fade out animation for the marker */
    --truncate-internal-marker-fade-out-duration: var(
      --truncate-marker-fade-out-duration,
      0ms
    );
    /* Duration of the fade in animation for the marker */
    --truncate-internal-marker-fade-in-duration: var(
      --truncate-marker-fade-in-duration,
      100ms
    );

    /* FADE Variant specifics */
    --truncate-internal-fade-marker-color: var(
      --truncate-fade-marker-color,
      #000
    );
    --truncate-internal-fade-marker-width: var(
      --truncate-fade-marker-width,
      0.2lh
    );

    /*
    In some special cases people might be adding spacing in other ways
    that would benefit from being able to override this, however the container
    query below can't use this and would need to be redeclared with the overridden
    value. It's a bad time, but better than nothing.
    */
    --truncate-internal-single-line-height: 1lh;

    height: var(--truncate-internal-single-line-height);
    min-width: 0;
    overflow: hidden;
  }

  [data-truncate-marker] {
    display: flex;
    position: absolute;
    height: var(--truncate-internal-single-line-height);
    padding-block: var(--truncate-internal-marker-block-inset);
    box-sizing: border-box;
    align-items: center;
    background-clip: content-box;
    z-index: 2;
    color: color-mix(
      in srgb,
      currentColor var(--truncate-internal-marker-opacity),
      transparent
    );

    /* Core trick for hiding the marker until overflow occurs */
    opacity: 0;
    transition: opacity var(--truncate-internal-marker-fade-out-duration)
      ease-in-out;
  }

  @container measure (height > 1lh) {
    [data-truncate-marker] {
      opacity: 1;
      transition: opacity var(--truncate-internal-marker-fade-in-duration)
        ease-in-out;
    }
  }

  [data-truncate-grid] {
    display: grid;
    position: relative;
  }

  [data-truncate-content='visible'] {
    white-space: nowrap;
  }

  [data-truncate-content='overflow'] {
    opacity: 0;
    pointer-events: none;
    -webkit-user-select: none;
            user-select: none;
    word-break: break-all;
    margin-top: calc(-1 * var(--truncate-internal-single-line-height));
  }

  [data-truncate-marker-cell] {
    container: measure / size;
    overflow: visible;
    -webkit-user-select: none;
            user-select: none;
    pointer-events: none;
  }

  [data-truncate-container='truncate'] {
    & [data-truncate-grid] {
      grid-template-columns: minmax(0, max-content) 0;
    }
    & [data-truncate-marker] {
      right: 0;
    }
    & [data-truncate-fade] {
      margin-right: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-container='fruncate'] {
    & [data-truncate-grid] {
      grid-template-columns: 0 minmax(0, max-content) auto;
    }
    & [data-truncate-content] {
      direction: rtl;
    }
    & [data-truncate-content] > span {
      unicode-bidi: plaintext;
    }
    & [data-truncate-fade] {
      margin-left: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-variant='default'] {
    & [data-truncate-marker] {
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
    }
    & [data-truncate-marker]::after,
    & [data-truncate-marker]::before {
      content: '';
      position: absolute;
      width: calc(
        var(--truncate-internal-marker-fade-width) +
          var(--truncate-internal-marker-gap)
      );
      inset-block-start: var(--truncate-internal-marker-block-inset);
      height: max(
        0px,
        calc(
          var(--truncate-internal-single-line-height) -
            var(--truncate-internal-marker-block-inset) * 2
        )
      );
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
      mask-image: linear-gradient(
        var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%
      );
    }
    & [data-truncate-marker]::after {
      --truncate-internal-fade-dir: to right;
      right: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
    & [data-truncate-marker]::before {
      --truncate-internal-fade-dir: to left;
      left: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
  }

  [data-truncate-variant='fade'] {
    & [data-truncate-marker] {
      background: transparent;
    }
  }

  [data-truncate-fade] {
    box-shadow:
      0 0 calc(var(--truncate-internal-fade-marker-width) / 2)
        var(--truncate-internal-fade-marker-color),
      0 0 var(--truncate-internal-fade-marker-width)
        var(--truncate-internal-fade-marker-color);
    width: calc(var(--truncate-internal-fade-marker-width) * 2);
    height: calc(
      var(--truncate-internal-single-line-height) -
        (var(--truncate-internal-fade-marker-width) * 2)
    );
    margin: var(--truncate-internal-fade-marker-width) 0;
  }

  [data-truncate-group-container='middle'] {
    & [data-truncate-container] {
      --truncate-marker-opacity: var(--truncate-internal-middle-marker-opacity);
    }

    display: flex;
    min-width: 0;

    & > div {
      min-width: 0;
    }

    & > div[data-truncate-segment-priority='1'] {
      flex: 0 1 max-content;
    }
    & > div[data-truncate-segment-priority='2'] {
      flex: 0 999999 max-content;
    }
  }
}
`,ki=`@layer base, unsafe;`;function Ai(e){return`${ki}
@layer base {
  ${e}
}`}function ji(e){return`${ki}
@layer unsafe {
  ${e}
}`}var Mi=new WeakMap;function Ni(e){let t=Mi.get(e);if(t!=null)return t;let n=document.createElement(`div`);n.setAttribute(Ke,`true`);let r=document.createElement(`div`);r.style.position=`relative`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n);let i=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),Mi.set(e,i),i}function Pi(e,t){if(!e.isConnected)return;let n=Ni(t);if(n==null)return;let r=t.querySelector(`style[${qe}]`),i=r instanceof HTMLStyleElement?r:document.createElement(`style`);r instanceof HTMLStyleElement||(i.setAttribute(qe,``),t.appendChild(i)),i.textContent=`:host { ${Je}: ${n}px; }`}var Fi;function Ii(e){if(typeof CSSStyleSheet<`u`&&typeof CSSStyleSheet.prototype.replaceSync==`function`&&`adoptedStyleSheets`in e){Fi??(Fi=new CSSStyleSheet,Fi.replaceSync(Ai(Oi)));let t=!1;try{e.adoptedStyleSheets=[Fi],t=!0}catch{}if(t){e.querySelector(`style[${We}]`)?.remove();return}}if(e.querySelector(`style[data-file-tree-style]`)==null){let t=document.createElement(`style`);t.setAttribute(We,``),t.textContent=Ai(Oi),e.prepend(t)}}function Li(e,t){Ri(e,t),Ii(t),Pi(e,t)}function Ri(e,t){let n=e.querySelector(`template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`);n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute(`shadowrootmode`)&&n.remove()))}if(typeof HTMLElement<`u`&&customElements.get(`file-tree-container`)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.shadowRoot??this.attachShadow({mode:`open`});Li(this,e)}}if(customElements.define(Ue,e),typeof document<`u`)for(let e of Array.from(document.querySelectorAll(Ue)))e instanceof HTMLElement&&Li(e,e.shadowRoot??e.attachShadow({mode:`open`}))}var zi=e=>e.startsWith(`f::`)?e.slice(3):e;function Bi(e){let t=e.lastIndexOf(`/`);return t<0?{parentPath:``,baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function Vi(e,t){return e===``?t:`${e}/${t}`}function Hi({files:e,path:t,isFolder:n,nextBasename:r}){let i=zi(t),a=r.trim();if(a.length===0)return{error:`Name cannot be empty.`};if(a.includes(`/`))return{error:`Name cannot include "/".`};let{parentPath:o,baseName:s}=Bi(i);if(a===s)return{nextFiles:e,sourcePath:i,destinationPath:i,isFolder:n};let c=Vi(o,a),l=Array(e.length),u=new Set;if(!n){let t=`${c}/`,r=!1;for(let n=0;n<e.length;n++){let a=e[n];if(a!==i&&a.startsWith(t))return{error:`"${c}" already exists.`};let o=a===i?c:a;if(u.has(o))return{error:`"${c}" already exists.`};u.add(o),l[n]=o,a===i&&(r=!0)}return r?{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}:{error:`Could not find the selected file to rename.`}}let d=`${i}/`,f=`${c}/`,p=0;for(let t=0;t<e.length;t++){let n=e[t],r=n===i||n.startsWith(d);if(!r&&(n===c||n.startsWith(f)))return{error:`"${c}" already exists.`};let a=r?`${c}${n.slice(i.length)}`:n;if(u.has(a))return{error:`"${c}" already exists.`};u.add(a),l[t]=a,r&&p++}return p===0?{error:`Could not find the selected folder to rename.`}:{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}}function Ui(e){return e.endsWith(`/`)}function Wi(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`),r=n<0?t:t.slice(n+1);return e.endsWith(`/`)?`${r}/`:r}function Gi(e){let t=[],n=new Set;for(let r of e)n.has(r)||(n.add(r),t.push(r));let r=new Set;for(let e of t.toSorted((e,t)=>e.length===t.length?e.localeCompare(t):e.length-t.length)){let t=(e.endsWith(`/`)?e.slice(0,-1):e).split(`/`),n=!1;for(let e=0;e<t.length-1;e+=1){let i=`${t.slice(0,e+1).join(`/`)}/`;if(r.has(i)){n=!0;break}}n||r.add(e)}return t.filter(e=>r.has(e))}function Ki(e,t){return t.includes(e)?Gi(t):[e]}function qi(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function Ji(e,t){return{draggedPaths:e,target:t}}function Yi(e,t){if(t.kind!==`directory`||t.directoryPath==null)return!1;for(let n of e)if(Ui(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function Xi(e,t){return t.kind===`root`||t.directoryPath==null?Wi(e):t.directoryPath}function Zi(e,t){let n=e.map(e=>{let n=Xi(e,t);return n===e?null:{from:e,to:n,type:`move`}}).filter(e=>e!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?`move`:`batch`,target:t}}}function Qi(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function $i(e,t,n){let{paths:r,preparedInput:i}=e;if(i==null){if(r==null)throw Error(`FileTree requires paths or preparedInput`);return{paths:r,preparedInput:void 0}}let a=i.paths;if(r==null)return{paths:a,preparedInput:i};if(!Qi(Ci.preparePaths(r,n==null?{}:{sort:n}),a))throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:a,preparedInput:i}}function ea(e){return e.operation===`add`||e.operation===`remove`||e.operation===`move`||e.operation===`batch`}function ta(e,t,n){if(e===t)return n;let r=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(r)?`${n.endsWith(`/`)?n:`${n}/`}${e.slice(r.length)}`:e}function na(e,t){if(e===t)return!0;let n=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(n)}function ra(e,t,n=!1){if(e==null)return null;switch(t.operation){case`add`:case`expand`:case`collapse`:case`mark-directory-unloaded`:case`begin-child-load`:case`apply-child-patch`:case`complete-child-load`:case`fail-child-load`:case`cleanup`:return e;case`remove`:return na(e,t.path)?n?e:null:e;case`move`:return ta(e,t.from,t.to);case`batch`:{let r=e;for(let e of t.events)if(r=ra(r,e,n),r==null)return null;return r}}}function ia(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function aa(e){switch(e.operation){case`add`:return{...ia(e),operation:`add`,path:e.path};case`remove`:return{...ia(e),operation:`remove`,path:e.path,recursive:e.recursive};case`move`:return{...ia(e),from:e.from,operation:`move`,to:e.to}}}function oa(e){return{...ia(e),events:e.events.filter(e=>e.operation===`add`||e.operation===`remove`||e.operation===`move`).map(e=>aa(e)),operation:`batch`}}function sa(e){switch(e.operation){case`add`:case`remove`:case`move`:return aa(e);case`batch`:return oa(e);default:return null}}function ca(e,t){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}function la(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function ua(e){return la(e).at(-1)??null}function da(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function fa(e){return e.endsWith(`/`)}var pa=e=>e.toLowerCase();function ma(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`);return n<0?t:t.slice(n+1)}function ha(e){return e.endsWith(`/`)?e.slice(0,-1):e}function ga(e,t){return t&&!e.endsWith(`/`)?`${e}/`:e}var _a=e=>{let t=e.trim();return t.length===0?``:(t.includes(`\\`)?t.replaceAll(`\\`,`/`):t).toLowerCase()},va=Symbol(`FILE_TREE_RENAME_VIEW`),ya=512,ba=512;function xa(e){return e===`top`||e===`center`?e:`nearest`}function Sa(e,t,n){if(e===0)return-1;if(n!=null){let e=t(n);if(e!=null)return e;let r=la(n);for(let e=r.length-1;e>=0;--e){let n=r[e];if(n==null)continue;let i=t(n);if(i!=null)return i}}return 0}function Ca(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};let r=n??(t=>e.visibleIndexByPath.get(t)??null);return{focusedIndex:Sa(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var wa=class{#e;#t=new Set;#n=new Map;#r=null;#i=null;#a=new Map;#o=new Map;#s=-1;#c=null;#l=!1;#u=e=>-1;#d=new Map;#f=null;#p=null;#m=null;#h=null;#g=null;#_;#v;#y;#b=[];#x=new Int32Array;#S=new Int32Array;#C=void 0;#w=!1;#T=null;#E=``;#D=!1;#O=new Set;#k=[];#A;#j=null;#M=null;#N=null;#P=null;#F=null;#I=null;#L=null;#R=0;#z=null;#B=new Set;#V=0;#H;#U=0;#W=!1;#G=0;#K;constructor(e){let{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:i,renaming:a,onSearchChange:o,paths:s,preparedInput:c,...l}=e,u=$i({paths:s,preparedInput:c},`constructor`,l.sort);this.#e=l,t!=null&&t!==!1&&(this.#r=t===!0?{}:t),this.#w=a!=null&&a!==!1,a!=null&&a!==!1&&a!==!0&&(this.#C=a.canRename,this.#v=a.onError,this.#_=a.onRename),this.#y=o,this.#A=n??`hide-non-matches`,this.#H=this.#le(u.paths,u.preparedInput);let d=i?.map(e=>this.#Ne(e)).filter(e=>e!=null)??[],f=d.at(-1)??null;d.length>0&&(this.#B=new Set(d),this.#z=f,this.#V=1),this.#je(f,!1),r!=null&&this.#Te(r,!1),this.#K=this.#Re()}destroy(){this.#K?.(),this.#K=null,this.#n.clear(),this.#t.clear(),this.#d.clear(),this.#i=null,this.#he()}focusFirstItem(){this.#be().length>0&&this.#Fe(0)}focusLastItem(){this.#G<=0||(this.#Ie(),this.#Fe(this.#G-1))}focusNextItem(){this.#Ae(1)}focusParentItem(){if(this.#c==null)return;let e=ua(this.#c);if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t)}focusPath(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;this.#Ie();let n=this.#Z(t);n>=0&&this.#Fe(n)}scrollToPath(e,t){let n=this.#H.getPathInfo(e)?.path??null;if(n==null)return;this.#Ie();let r=this.#xe(n);r<0||this.#Me(r)!=null&&(t?.focus!==!1&&this.#Fe(r,!1),this.#L={id:this.#R+=1,offset:xa(t?.offset),visibleIndex:r},this.#De())}focusMountedPathFromInput(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;let n=this.#Z(t);n>=0&&this.#Fe(n)}focusNearestPath(e){let t=this.resolveNearestVisiblePath(e);if(t==null)return null;let n=this.#Z(t);return n>=0?(this.#Fe(n),this.#be()[n]??t):null}focusPreviousItem(){this.#Ae(-1)}getFocusedIndex(){return this.#s}getFocusedItem(){return this.#c==null?null:this.#Q(this.#c)}getFocusedPath(){return this.#c}getScrollRequest(){return this.#L}clearScrollRequest(e){this.#L?.id===e&&(this.#L=null)}resolveNearestVisiblePath(e){let t=this.#be();if(this.#G===0)return null;if(e==null)return this.#c??t[0]??null;let n=this.#H.getPathInfo(e)?.path??e,r=this.#Z(n);return r>=0?t[r]??n:this.#X(n)??this.#c??t[0]??null}getSelectedPaths(){return[...this.#B]}getSelectionVersion(){return this.#V}getVisibleCount(){return this.#G}getVisibleRows(e,t){if(t<e||this.#G===0)return[];let n=Math.max(0,e),r=Math.min(this.#G-1,t);if(r<n)return[];let i=r-n+1;if(this.#F==null&&!this.#l&&r>=this.#b.length&&i<=ba){let e=[];for(let t=n;t<=r;t+=1){let n=this.#H.getVisibleRowContext(t);if(n==null)break;e.push(this.#ee(n))}return e}if(!this.#l&&r>=this.#b.length&&this.#Ie(),this.#F!=null){let e=Array.from({length:r-n+1},(e,t)=>this.#Se(n+t)),t=new Map,i=e[0]??-1,a=i;for(let n=1;n<=e.length;n+=1){let r=e[n];if(r!=null&&r===a+1){a=r;continue}if(i>=0&&this.#H.getVisibleSlice(i,a).forEach((e,n)=>{t.set(i+n,e)}),r==null){i=-1,a=-1;continue}i=r,a=r}return Array.from({length:r-n+1},(e,r)=>{let i=n+r,a=this.#Se(i),o=t.get(a),s=this.#b[a];if(o==null||s==null)throw Error(`Missing projection row for filtered visible index ${String(i)}`);return this.#$(o,i,a,{ancestorPaths:this.#re(a),path:s})})}return this.#H.getVisibleSlice(n,r).map((e,t)=>{let r=n+t,i=this.#b[r];if(i==null)throw Error(`Missing projection path for visible index ${String(r)}`);return this.#$(e,r,r,{ancestorPaths:this.#re(r),path:i})})}getStickyRowCandidates(e,t){if(this.#F!=null)return null;if(this.#G===0||e<=0||t<=0)return[];let n=[];for(let r=0;r<this.#G;r+=1){let i=e+r*t,a=Math.min(this.#G-1,Math.floor(i/t)),o=this.#te(a,r)??(a>0?this.#te(a-1,r):void 0);if(o==null)break;n.push({row:this.#ee(o),subtreeEndIndex:o.subtreeEndIndex})}return n}getItem(e){let t=this.#H.getPathInfo(e);return t==null?null:this.#Q(t.path,t)}resolveMountedDirectoryPathFromInput(e){let t=this.#H.getPathInfo(e);return t?.kind===`directory`?t.path:null}toggleMountedDirectoryFromInput(e){let t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&this.#ze(t)}selectAllVisiblePaths(){this.#Ie();let e=[...this.#be()];this.#ae(e,this.#c??this.#z)}selectOnlyPath(e){let t=this.#Ne(e);t!=null&&this.#ae([t],t)}selectOnlyMountedPathFromInput(e){this.#ae([e],e)}selectPath(e){let t=this.#Ne(e);t==null||this.#B.has(t)||this.#ae([...this.#B,t])}deselectPath(e){let t=this.#Ne(e);t==null||!this.#B.has(t)||this.#ae([...this.#B].filter(e=>e!==t))}toggleFocusedSelection(){this.#c!=null&&this.togglePathSelectionFromInput(this.#c)}togglePathSelection(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.deselectPath(t);return}this.selectPath(t)}}togglePathSelectionFromInput(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.#ae([...this.#B].filter(e=>e!==t),t);return}this.#ae([...this.#B,t],t)}}selectPathRange(e,t){let n=this.#Ne(e);if(n==null)return;this.#Ie();let r=this.#z,i=r==null?-1:this.#Ce(r),a=this.#Ce(n);if(i===-1||a===-1){let e=t?[...this.#B,n]:[n];this.#ae(e,n);return}let[o,s]=i<=a?[i,a]:[a,i],c=this.#be().slice(o,s+1),l=t?[...this.#B,...c]:c;this.#ae(l,r)}extendSelectionFromFocused(e){if(this.#c==null)return;let t=this.#s;if(t===-1)return;let n=Math.min(this.#G-1,Math.max(0,t+e));if(n===t)return;!this.#l&&n>=this.#b.length&&this.#Ie();let r=this.#be(),i=r[t]??null,a=r[n]??null;if(i==null||a==null)return;let o=new Set(this.#B);o.has(i)&&o.has(a)?o.delete(i):o.add(a),this.#ae([...o],this.#z??i,!1),this.#Fe(n)}getDragAndDropConfig(){return this.#r}isDragAndDropEnabled(){return this.#r!=null}getDragSession(){return this.#i==null?null:{draggedPaths:[...this.#i.draggedPaths],primaryPath:this.#i.primaryPath,target:this.#i.target==null?null:{...this.#i.target}}}startDrag(e){if(this.#r==null)return!1;let t=this.#Ne(e);if(t==null||this.#M!=null&&this.#M.length>0)return!1;let n=this.getSelectedPaths(),r=Ki(t,n);return this.#r.canDrag?.(r)===!1?!1:(n.includes(t)||this.#ae([t],t,!1),this.#Pe(t),this.#i={draggedPaths:r,primaryPath:t,target:null},this.#De(),!0)}setDragTarget(e){let t=this.#i;if(t==null)return;let n=e;if(n!=null){let e=Ji(t.draggedPaths,n);(Yi(t.draggedPaths,n)||this.#r?.canDrop?.(e)===!1)&&(n=null)}qi(t.target,n)||(this.#i={...t,target:n},this.#De())}cancelDrag(){this.#i!=null&&(this.#i=null,this.#De())}completeDrag(){let e=this.#i;if(e==null)return!1;this.#i=null;let t=e.target==null?null:{...e.target};if(t==null)return this.#De(),!1;let n=Ji(e.draggedPaths,t);if(Yi(e.draggedPaths,t)||this.#r?.canDrop?.(n)===!1)return this.#De(),!1;let r=Zi(e.draggedPaths,t);if(r==null)return this.#De(),!1;try{if(r.operations.length===1){let e=r.operations[0];if(e==null||e.type!==`move`)throw Error(`Expected a single move operation for one-item drops`);this.#H.move(e.from,e.to,{collision:e.collision})}else this.#ce(r.operations),this.#H.batch(r.operations)}catch(e){return this.#De(),this.#r?.onDropError?.(e instanceof Error?e.message:String(e),n),!1}return this.#r?.onDropComplete?.(r.result),!0}subscribe(e){return this.#t.add(e),e(),()=>{this.#t.delete(e)}}add(e){this.#H.add(e)}remove(e,t={}){this.#H.remove(e,t)}move(e,t,n={}){this.#H.move(e,t,n)}batch(e){this.#H.batch(e)}onMutation(e,t){let n=e,r=t,i=this.#n.get(n);return i??(i=new Set,this.#n.set(n,i)),i.add(r),()=>{let e=this.#n.get(n);e?.delete(r),e?.size===0&&this.#n.delete(n)}}setSearch(e){this.#Te(e,!0)}openSearch(e=``){this.#Te(e,!0)}closeSearch(){this.#Te(null,!0)}isSearchOpen(){return this.#M!==null}getSearchValue(){return this.#M??``}getSearchMatchingPaths(){return this.#k}focusNextSearchMatch(){this.#we(1)}focusPreviousSearchMatch(){this.#we(-1)}startRenaming(e=this.#c??``,t={}){if(!this.#w)return!1;let n=this.#H.getPathInfo(e);if(n==null)return!1;let r=n.path,i=fa(r),a=ha(r);if(this.#C?.({isFolder:i,path:a})===!1)return!1;for(let e of la(r))this.#H.isExpanded(e)||this.#H.expand(e);return this.#ae([r],r,!1),this.#M!=null&&(this.#Te(null,!1),this.#y?.(this.#M)),this.#Pe(r),this.#T=r,this.#E=ma(r),this.#D=t.removeIfCanceled??!1,this.#De(),!0}[va](){return{cancel:()=>{this.#q()},commit:()=>{this.#J()},getPath:()=>this.#T,getValue:()=>this.#E,isActive:()=>this.#T!=null,setValue:e=>{this.#Y(e)}}}#q(){if(this.#T==null)return;let e=this.#T,t=this.#D;if(this.#T=null,this.#E=``,this.#D=!1,t){this.remove(e,fa(e)?{recursive:!0}:void 0);return}this.#Pe(e),this.#De()}#J(){let e=this.#T;if(e==null)return;if(this.#D&&this.#E.trim().length===0){this.#T=null,this.#E=``,this.#D=!1,this.remove(e,fa(e)?{recursive:!0}:void 0);return}let t=fa(e),n=Hi({files:this.#H.list(),isFolder:t,nextBasename:this.#E,path:ha(e)});if(this.#T=null,this.#E=``,this.#D=!1,`error`in n){this.#Pe(e),this.#v?.(n.error),this.#De();return}if(n.sourcePath===n.destinationPath){this.#Pe(e),this.#De();return}this.#_?.({destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(ga(n.sourcePath,t),ga(n.destinationPath,t))}#Y(e){this.#T==null||this.#E===e||(this.#E=e,this.#De())}resetPaths(e,t={}){let n=this.#H.list().length,r=this.#G,i=$i({paths:e,preparedInput:t.preparedInput},`resetPaths`,this.#e.sort),a=this.#le(i.paths,i.preparedInput,t.initialExpandedPaths),o=this.#c,s=this.#T,c=this.getSelectedPaths(),l=this.#z;this.#K?.(),this.#H=a,this.#d.clear(),this.#he();let u=c.map(e=>a.getPathInfo(e)?.path??null).filter(e=>e!=null),d=!ca(this.#B,u);this.#B=new Set(u),d&&(this.#V+=1),this.#z=l==null?null:a.getPathInfo(l)?.path??null,this.#T=s==null?null:a.getPathInfo(s)?.path??null,this.#T??(this.#E=``,this.#D=!1),this.#je(o,o!=null||u.length>0||this.#z!=null),this.#K=this.#Re(),this.#De(),this.#Oe({canonicalChanged:!0,operation:`reset`,pathCountAfter:i.paths.length,pathCountBefore:n,projectionChanged:!0,usedPreparedInput:t.preparedInput!=null,visibleCountDelta:this.#G-r})}#X(e){this.#Ie();let t=ua(e),n=da(e,t),r=null,i=null;for(let e of this.#be()){if(ua(e)!==t)continue;let a=da(e,t);if(a<n){r=e;continue}if(a>n){i=e;break}}return r??i}#Z(e){let t=this.#Ce(e);if(t!==-1)return t;let n=la(e);for(let e=n.length-1;e>=0;--e){let t=n[e];if(t==null)continue;let r=this.#Ce(t);if(r!==-1)return r}return this.#be().length>0?0:-1}#Q(e,t){let n=this.#d.get(e);if(n!=null)return n;let r=t??this.#H.getPathInfo(e);if(r==null)return null;let i=r.kind===`directory`?this.#oe(r.path):this.#se(r.path);return this.#d.set(r.path,i),i}#$(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(e=>({isTerminal:e.isTerminal,name:e.name,path:e.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===this.#c,isSelected:this.#B.has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??this.#x[n]??0,setSize:r.setSize??this.#S[n]??0}}#ee(e){return this.#$(e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}#te(e,t){let n=this.#H.getVisibleRowContext(e);return n==null?void 0:n.ancestorRows[t]??(t===n.ancestorRows.length&&n.row.kind===`directory`&&n.row.isExpanded?n:void 0)}#ne(e){let t=this.#a.get(e);if(t!=null)return t;let n=this.#u(e),r=n<0?[]:[...this.#ne(n),n];return this.#a.set(e,r),r}#re(e){let t=this.#o.get(e);if(t!=null)return t;let n=this.#ne(e).map(e=>this.#b[e]??``).filter(e=>e!==``);return this.#o.set(e,n),n}#ie(e){this.#H.collapse(e)}#ae(e,t=this.#z,n=!0){let r=[...new Set(e)],i=!ca(this.#B,r),a=this.#z!==t;!i&&!a||(this.#B=new Set(r),this.#z=t,i&&(this.#V+=1),n&&this.#De())}#oe(e){return{collapse:()=>{this.#ie(e)},deselect:()=>{this.deselectPath(e)},expand:()=>{this.#ke(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>this.#H.isExpanded(e),isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{this.#ze(e)}}}#se(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}#ce(e){let t=this.#H.list();this.#le(t).batch(e)}#le(e,t,n){return new Ci({...this.#e,paths:e,preparedInput:t??void 0,...n===void 0?{}:{initialExpandedPaths:n}})}#ue(){return this.#h??=this.#H.list(),this.#h}#de(){if(this.#m!=null)return this.#m;let e=new Set;for(let t of this.#ue()){e.add(t);for(let n of la(t))e.add(n)}return this.#m=[...e].sort(),this.#m}#fe(){return this.#g??=this.#ue().map(pa),this.#g}#pe(){return this.#f??=this.#de().filter(e=>e.endsWith(`/`)),this.#f}#me(){return this.#p??=this.#pe().map(pa),this.#p}#he(){this.#f=null,this.#p=null,this.#m=null,this.#h=null,this.#g=null}#ge(){return this.#pe().filter(e=>this.#H.isExpanded(e))}#_e(e){let t=new Set(this.#j??[]);if(e)for(let e of this.#B)for(let n of la(e))t.add(n);this.#ve(t)}#ve(e){this.#W=!0;try{for(let t of this.#pe()){let n=e.has(t),r=this.#H.isExpanded(t);n&&!r?this.#H.expand(t):!n&&r&&this.#H.collapse(t)}}finally{this.#W=!1}}#ye(){if(this.#M==null||this.#M.length===0){this.#k=[],this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let e=this.#b;if(this.#k=e.filter(e=>this.#O.has(e)),this.#A!==`hide-non-matches`||this.#O.size===0){this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let t=[],n=[],r=new Map;for(let[i,a]of e.entries())this.#N?.has(a)===!0&&(r.set(a,n.length),t.push(i),n.push(a));this.#F=t,this.#I=n,this.#P=r,this.#G=n.length}#be(){return this.#I??this.#b}#xe(e){return this.#I==null?this.#H.getVisibleIndex(e)??-1:this.#P?.get(e)??-1}#Se(e){return this.#F?.[e]??e}#Ce(e){return this.#P?.get(e)??this.#H.getVisibleIndex(e)??-1}#we(e){let t=this.#k;if(t.length===0)return;let n=this.#c,r=n==null?-1:t.indexOf(n),i=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];i!=null&&this.focusPath(i)}#Te(e,t){let n=e==null?null:_a(e),r=this.#M;if(r!==n){if(r==null&&n!=null&&(this.#j=this.#ge()),this.#M=n,n==null)this.#_e(!0),this.#j=null,this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else if(n.length===0)this.#_e(!1),this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else{let e=this.#Ee();this.#je(e,!0)}t&&(this.#y?.(this.#M),this.#De())}}#Ee(){if(this.#M==null||this.#M.length===0)return this.#O.clear(),this.#c;let e=this.#M,t=this.#ue(),n=this.#fe(),r=[],i=new Set,a=null;for(let o=0;o<t.length;o+=1){if(!n[o].includes(e))continue;let s=t[o];r.push(s),i.add(s),a??=s}let o=this.#pe(),s=this.#me();for(let t=0;t<o.length;t+=1){if(!s[t].includes(e))continue;let n=o[t];i.has(n)||(r.push(n),i.add(n),a??=n)}this.#O=i;let c=this.#A===`hide-non-matches`&&r.length>0?new Set:null;this.#N=c;let l=this.#A===`expand-matches`?new Set(this.#j??[]):new Set;for(let e of r){c?.add(e),e.endsWith(`/`)&&l.add(e);for(let t of la(e))l.add(t),c?.add(t)}return this.#ve(l),a??this.#c}#De(){for(let e of this.#t)e()}#Oe(e){this.#n.get(e.operation)?.forEach(t=>{t(e)}),this.#n.get(`*`)?.forEach(t=>{t(e)})}#ke(e){for(let t of la(e))this.#H.isExpanded(t)||this.#H.expand(t);this.#H.isExpanded(e)||this.#H.expand(e)}#Ae(e){let t=this.#G;if(t===0)return;let n=this.#s===-1?0:this.#s,r=Math.min(t-1,Math.max(0,n+e));(r!==n||this.#s===-1)&&(!this.#l&&this.#F==null&&r>=this.#b.length&&this.#Ie(),this.#Fe(r))}#je(e,t=!0){let n=this.#H.getVisibleCount();this.#U=n;let r=Ca(this.#H.getVisibleTreeProjectionData(t?void 0:Math.min(n,ya)),e,t?e=>this.#H.getVisibleIndex(e):void 0);this.#a.clear(),this.#o.clear(),this.#l=r.paths.length>=n,this.#u=r.getParentIndex,this.#b=r.paths,this.#x=r.posInSetByIndex,this.#S=r.setSizeByIndex,this.#ye(),this.#s=e==null?this.#be().length>0?0:-1:this.#Z(e),this.#c=this.#s<0?null:this.#Me(this.#s)}#Me(e){return this.#be()[e]??(this.#F==null?this.#H.getVisibleRowContext(e)?.row.path??null:null)}#Ne(e){return this.#H.getPathInfo(e)?.path??null}#Pe(e){if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t,!1)}#Fe(e,t=!0){let n=this.#Me(e);n!=null&&(this.#s===e&&this.#c===n||(this.#s=e,this.#c=n,t&&this.#De()))}#Ie(){this.#l||this.#je(this.#c,!0)}#Le(e){let t=ra(this.#T,e);t==null&&this.#T!=null&&(this.#E=``),this.#T=t;let n=ra(this.#c,e,!0),r=[...this.#B].map(t=>ra(t,e)).filter(e=>e!=null).map(e=>this.#H.getPathInfo(e)?.path??null).filter(e=>e!=null),i=ra(this.#z,e),a=i==null?null:this.#H.getPathInfo(i)?.path??null,o=[...new Set(r)];return ca(this.#B,o)||(this.#B=new Set(o),this.#V+=1),this.#z=a,n}#Re(){return this.#H.on(`*`,e=>{if(this.#W)return;e.canonicalChanged&&(this.#d.clear(),this.#he()),this.#i!=null&&ea(e)&&(this.#i=null);let t=ea(e)?this.#Le(e):this.#c,n=this.#M!=null&&this.#M.length>0?this.#Ee():this.#M===``?this.#c:t,r=this.#M!=null||e.operation!==`expand`&&e.operation!==`collapse`;this.#je(n,r),this.#De();let i=sa(e);i!=null&&this.#Oe(i)})}#ze(e){if(this.#H.isExpanded(e)){this.#ie(e);return}this.#ke(e)}},Ta=e=>{if(e==null||e.length===0)return`0`;let t=`${e.length}`;for(let n of e)t+=`\0${n.path}\0${n.status}`;return t};function Ea(e){let t=e.endsWith(`/`),n=``,r=-1;for(let t=0;t<=e.length;t+=1){if(!(e[t]===`/`||t===e.length)){r===-1&&(r=t);continue}r!==-1&&(n!==``&&(n+=`/`),n+=e.slice(r,t),r=-1)}return n===``?null:{isDirectory:t,path:n}}function Da(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function Oa(e,t){return t?`${e}/`:e}function ka(e,t=null){let n=Ta(e==null?void 0:[...e]);if(n===`0`)return null;if(t?.signature===n)return t;let r=new Map,i=new Set,a=new Set;for(let t of e??[]){let e=Ea(t.path);if(e==null)continue;let n=Oa(e.path,e.isDirectory);r.set(n,t.status),t.status===`ignored`&&e.isDirectory?a.add(n):e.isDirectory&&a.delete(n);for(let t of Da(e.path))i.add(t)}return{directoriesWithChanges:i,ignoredDirectoryPaths:a,signature:n,statusByPath:r}}var G,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za={},Ba=[],Va=Array.isArray,Ha=Ba.slice,Ua=Object.assign;function Wa(e){e&&e.parentNode&&e.remove()}function Ga(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return arguments.length>2&&(o.children=arguments.length>3?Ha.call(arguments,2):n),Ka(e,o,r,i,null)}function Ka(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Aa,__i:-1,__u:0};return i==null&&G.vnode!=null&&G.vnode(a),a}function qa(e){return e.children}function Ja(e,t){this.props=e,this.context=t,this.__g=0}function Ya(e,t){if(t==null)return e.__?Ya(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Ya(e):null}function Xa(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return Xa(e)}}function Za(e){(8&e.__g||!(e.__g|=8)||!ja.push(e)||Na++)&&Ma==G.debounceRendering||((Ma=G.debounceRendering)||queueMicrotask)(Qa)}function Qa(){for(var e,t,n,r,i,a,o,s,c=1;ja.length;)ja.length>c&&ja.sort(Pa),e=ja.shift(),c=ja.length,8&e.__g&&(n=void 0,i=(r=(t=e).__v).__e,a=[],o=[],(s=t.__P)&&((n=Ua({},r)).__v=r.__v+1,G.vnode&&G.vnode(n),oo(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i??Ya(r),!!(32&r.__u),o,s.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,co(a,n,o),n.__e!=i&&Xa(n)));Na=0}function $a(e,t,n,r,i,a,o,s,c,l,u,d){var f,p,m,h,g,_,v,y=r&&r.__k||Ba,b=t.length;for(c=eo(n,t,y,c,b),f=0;f<b;f++)(m=n.__k[f])!=null&&(p=m.__i==-1?za:y[m.__i]||za,m.__i=f,_=oo(e,m,p,i,a,o,s,c,l,u,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&fo(p.ref,null,m),u.push(m.ref,m.__c||h,m)),g==null&&h!=null&&(g=h),(v=!!(4&m.__u))||p.__k===m.__k?c=to(m,c,e,v):typeof m.type==`function`&&_!==void 0?c=_:h&&(c=h.nextSibling),m.__u&=-7);return n.__e=g,c}function eo(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(c=a+f,(o=e.__k[a]=typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?Ka(null,o,null,null,null):Va(o)?Ka(qa,{children:o},null,null,null):o.constructor==null&&o.__b>0?Ka(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,s=null,(l=o.__i=no(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Ya(s)),po(s,s));return r}function to(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=to(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Ya(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function no(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&e.key==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function ro(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n??``}function io(e,t,n,r,i){var a;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||ro(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||ro(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(Fa,`$1`)),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||={},e.__l[t+a]=n,n?r?n.l=r.l:(n.l=Ia,e.addEventListener(t,a?Ra:La,a)):e.removeEventListener(t,a?Ra:La,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function ao(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=Ia++;else if(t.u<n.l)return;return n(G.event?G.event(t):t)}}}function oo(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,ee,k,A,j=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),n.__c.__z&&(s=t.__e=n.__e=(a=n.__c.__z)[0],n.__c.__z=null)),(d=G.__b)&&d(t);n:if(typeof j==`function`)try{if(v=t.props,y=`prototype`in j&&j.prototype.render,b=(d=j.contextType)&&r[d.__c],x=d?b?b.props.value:d.__:r,n.__c?2&(f=t.__c=n.__c).__g&&(f.__g|=1,_=!0):(y?t.__c=f=new j(v,x):(t.__c=f=new Ja(v,x),f.constructor=j,f.render=mo),b&&b.sub(f),f.props=v,f.state||={},f.context=x,f.__n=r,p=!0,f.__g|=8,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&j.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Ua({},f.__s)),Ua(f.__s,j.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&j.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&j.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),!(4&f.__g)&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__g&=-5,C=G.__r,w=0,y){for(f.state=f.__s,f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),T=0;T<f._sb.length;T++)f.__h.push(f._sb[T]);f._sb=[]}else do f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(8&f.__g&&++w<25);f.state=f.__s,f.getChildContext!=null&&(r=Ua({},r,f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),E=d,d!=null&&d.type===qa&&d.key==null&&(E=lo(d.props.children)),s=$a(e,Va(E)?E:[E],t,n,r,i,a,o,s,c,l,u),t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__g&=-4)}catch(e){if(t.__v=null,c||a!=null)if(e.then){for(D=0,O=!1,t.__u|=c?160:128,t.__c.__z=[],ee=0;ee<a.length;ee++)(k=a[ee])==null||O||(k.nodeType==8&&k.data==`$s`?(D>0&&t.__c.__z.push(k),D++,a[ee]=null):k.nodeType==8&&k.data==`/$s`?(--D>0&&t.__c.__z.push(k),O=D===0,s=a[ee],a[ee]=null):D>0&&(t.__c.__z.push(k),a[ee]=null));if(!O){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__c.__z=[s]}t.__e=s}else{for(A=a.length;A--;)Wa(a[A]);so(t)}else t.__e=n.__e,t.__k=n.__k,e.then||so(t);G.__e(e,t,n)}else s=t.__e=uo(n.__e,t,n,r,i,a,o,c,l,u);return(d=G.diffed)&&d(t),128&t.__u?void 0:s}function so(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach(so)}function co(e,t,n){for(var r=0;r<n.length;r++)fo(n[r],n[++r],n[++r]);G.__c&&G.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){G.__e(e,t.__v)}})}function lo(e){return typeof e!=`object`||!e||e.__b&&e.__b>0?e:Va(e)?e.map(lo):Ua({},e)}function uo(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v=n.props,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&`setAttribute`in m==!!b&&(b?m.localName==b:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(b==null)return l.createTextNode(y);e=l.createElementNS(i,b,y.is&&y),s&&=(G.__m&&G.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a&&=Ha.call(e.childNodes),v=n.props||za,!s&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)if(m=v[u],u!=`children`){if(u==`dangerouslySetInnerHTML`)f=m;else if(!(u in y)){if(u==`value`&&`defaultValue`in y||u==`checked`&&`defaultChecked`in y)continue;io(e,u,null,m,i)}}for(u in _=1&n.__u,y)m=y[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||v[u]===m&&!_||io(e,u,m,v[u],i);if(d)s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=``),$a(b==`template`?e.content:e,Va(p)?p:[p],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&Ya(n,0),s,c,l),a!=null)for(u=a.length;u--;)Wa(a[u]);s||(u=`value`,b==`progress`&&h==null?e.removeAttribute(`value`):h==null||h===e[u]&&(b!==`progress`||h)||io(e,u,h,v[u],i),u=`checked`,g!=null&&g!=e[u]&&io(e,u,g,v[u],i))}return e}function fo(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){G.__e(e,n)}}function po(e,t,n){var r,i;if(G.unmount&&G.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||fo(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){G.__e(e,t)}r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&po(r[i],t,n||typeof e.type!=`function`);n||Wa(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function mo(e,t,n){return this.constructor(e,n)}function ho(e,t){var n,r,i,a;t==document&&(t=document.documentElement),G.__&&G.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=Ga(qa,null,[e]),i=[],a=[],oo(t,e,r||za,za,t.namespaceURI,r?null:t.firstChild?Ha.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a,t.ownerDocument),co(i,e,a)}function go(e,t){e.__u|=32,ho(e,t)}G={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t}}throw Na=0,e}},Aa=0,Ja.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ua({},this.state);typeof e==`function`&&(e=e(Ua({},n),this.props)),e&&Ua(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Za(this))},Ja.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Za(this))},Ja.prototype.render=qa,ja=[],Na=0,Pa=function(e,t){return e.__v.__b-t.__v.__b},Fa=/(PointerCapture)$|Capture$/i,Ia=0,La=ao(!1),Ra=ao(!0);var _o=0;Array.isArray;function K(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_o,__i:-1,__u:0,__source:i,__self:a};return G.vnode&&G.vnode(l),l}var vo=16,yo=16,bo={};function xo({name:e,remappedFrom:t,token:n,width:r,height:i,viewBox:a,label:o,alignCapitals:s=!1}){"use no memo";let c=`#${e.replace(/^#/,``)}`,{width:l,height:u,viewBox:d}=bo[e]??{width:vo,height:yo},f=r??l,p=i??u,m=a??d??`0 0 ${l} ${u}`;return K(`svg`,{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":s,...o==null?{"aria-hidden":!0}:{"aria-label":o,role:`img`},viewBox:m,width:f,height:p,children:K(`use`,{href:c})})}var So=e=>{if(e.length<2)return[e,``];let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]},Co=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`.`)+1,n=e.length-t>10,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},wo=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`/`)+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},To=(e,{splitIndex:t}={})=>{if(typeof t!=`number`){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}return[e.slice(0,t),e.slice(t)]},Eo=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=e.length-t;return[e.slice(0,n),e.slice(n)]},Do=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=t;return[e.slice(0,n),e.slice(n)]};function Oo({children:e,marker:t,variant:n=`default`}){"use no memo";return K(`div`,{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:K(`div`,{"data-truncate-marker":!0,children:typeof t==`function`?t({children:e}):n===`fade`?K(`span`,{"data-truncate-fade":!0}):t})})}function ko(e){"use no memo";let{mode:t,children:n}=e;return K(`div`,{children:[K(`div`,{"data-truncate-content":`visible`,children:t===`fruncate`?K(`span`,{children:n}):n}),K(`div`,{"data-truncate-content":`overflow`,"aria-hidden":!0,children:t===`fruncate`?K(`span`,{children:n}):n})]})}function Ao({children:e,mode:t=`truncate`,marker:n=`…`,variant:r=`default`,...i}){"use no memo";let a=K(ko,{mode:t,children:e},`content`),o=K(Oo,{marker:n,mode:t,variant:r},`marker`),s=K(`div`,{"data-truncate-fill":!0},`fill`);return K(`div`,{"data-truncate-container":t,"data-truncate-variant":r,...i,children:K(`div`,{"data-truncate-grid":!0,children:t===`truncate`?[a,o]:[o,a,s]})})}function jo({children:e,...t}){"use no memo";return K(Ao,{mode:`truncate`,...t,children:e})}function Mo({children:e,...t}){"use no memo";return K(Ao,{mode:`fruncate`,...t,children:e})}function No({children:e,contents:t,priority:n=`end`,split:r=`center`,minimumLength:i=12,className:a,style:o,...s}){"use no memo";let c=null,l=null;if(Array.isArray(t)){if(t.length!==2)return console.error(`MiddleTruncate: contents must be an array of two items`),null;c=K(jo,{...s,children:t[0]}),l=K(Mo,{...s,children:t[1]})}else{if(typeof e!=`string`)return console.error(`MiddleTruncate: children must be a string`),null;if(e.length===0)return K(`div`,{className:a,style:o});if(e.length<i)return K(n===`end`?Mo:jo,{...s,className:a,style:o,children:e});let t=null,u=null,d=null;if(typeof r==`string`)r===`center`?t=So:r===`extension`?t=Co:r===`leaf-path`&&(t=wo);else if(typeof r==`number`)t=To,u=r;else if(Array.isArray(r)){let[e,n]=r;d=n,e===`last`?t=Eo:e===`first`&&(t=Do)}else typeof r==`function`&&(t=r);t??=So;let[f,p]=t(e,{priority:n,variant:s.variant,splitIndex:typeof u==`number`?u:void 0,splitOffset:typeof d==`number`?d:void 0}),m=f.length>=p.length,h=n===`equal`&&!m,g=n===`equal`&&m,_={},v={};h&&(_.marker=``),g&&(v.marker=``),c=K(jo,{...s,..._,children:f}),l=K(Mo,{...s,...v,children:p})}return K(`div`,{"data-truncate-group-container":`middle`,className:a,style:o,children:[K(`div`,{"data-truncate-segment-priority":n===`start`||n===`equal`?`1`:`2`,children:c}),K(`div`,{"data-truncate-segment-priority":n===`end`||n===`equal`?`1`:`2`,children:l})]})}var Po={endIndex:-1,startIndex:-1};function Fo(e,t,n){return Math.min(Math.max(e,t),n)}function Io(e,t){return e<0||t<e?Po:{endIndex:t,startIndex:e}}function Lo(e){return e.startIndex<0||e.endIndex<e.startIndex}function Ro(e,t){return Lo(e)?0:(e.endIndex-e.startIndex+1)*t}function zo(e,t,n){if(t<=0)return-1;let r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function Bo(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function Vo(e){let t=new Map;return e.forEach((e,n)=>{if(e.kind!==`directory`||!e.isExpanded)return;let r=e.ancestorPaths.length,i=t.get(r);if(i==null){t.set(r,[n]);return}i.push(n)}),t}function Ho(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2),o=e[a];if(o==null)break;if(o<=t){i=a,n=a+1;continue}r=a-1}return i}function Uo(e){let t=new Map,n=[];for(let r=0;r<e.length;r+=1){let i=e[r];if(i==null)continue;let a=i.kind===`directory`&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths,o=0;for(;o<n.length&&o<a.length&&n[o]===a[o];)o+=1;for(let e=n.length-1;e>=o;--e){let i=n[e];i!=null&&t.set(i,r-1)}n.length=o;for(let e=o;e<a.length;e+=1){let t=a[e];t!=null&&n.push(t)}}let r=e.length-1;for(let e of n)t.set(e,r);return t}function Wo(e,t,n){if(e.length===0||t<=0)return[];let r=Uo(e),i=Vo(e),a=[];for(let r=0;r<e.length;r+=1){let o=i.get(r);if(o==null||o.length===0)break;let s=t+r*n,c=Ho(o,Math.min(e.length-1,Math.floor(s/n))),l=null;for(;c>=0;){let t=o[c],n=t==null?null:e[t]??null;if(n!=null&&(r===0||n.ancestorPaths[r-1]===a[r-1]?.path)){l=n;break}--c}if(l==null)break;a.push(l)}return a.map((i,a)=>{let o=a*n,s=(r.get(i.path)??e.length-1)+1;if(s>=e.length)return{row:i,top:o};let c=s*n-t;return{row:i,top:Math.min(o,c-n)}}).filter(e=>e.top+n>0)}function Go(e,t){let n=t.totalRowCount??e.length,r=n*t.itemHeight,i=Math.max(0,t.viewportHeight),a=Math.max(0,Math.floor(t.overscan)),o=Math.max(0,r-i),s=Fo(t.scrollTop,0,o),c=t.stickyRows??Wo(e,s,t.itemHeight),l=c.reduce((e,n)=>Math.max(e,n.top+t.itemHeight),0),u=Math.min(r,s+l),d=Math.max(0,i-l),f=Math.max(0,r-u),p=zo(s,n,t.itemHeight),m=zo(u,n,t.itemHeight),h=l<=0||p<0||p>=n?-1:p,g=h===-1?-1:Math.min(n-1,m-1),_=h===-1||g<h?0:g-h+1,v=d<=0||m>=n?Po:Io(m,Bo(u+d,n,t.itemHeight)),y=g+1,b=Lo(v)?Po:Io(Math.max(y,v.startIndex-a),Math.min(n-1,v.endIndex+a)),x=Ro(b,t.itemHeight);return{occlusion:{firstOccludedIndex:h,lastOccludedIndex:g,occludedCount:_},physical:{itemHeight:t.itemHeight,maxScrollTop:o,overscan:a,scrollTop:s,totalHeight:r,totalRowCount:n,viewportHeight:i},projected:{contentHeight:f,paneHeight:d,paneTop:u},sticky:{height:l,rows:c},visible:v,window:{endIndex:b.endIndex,height:x,offsetTop:Lo(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}var Ko={added:`A`,deleted:`D`,ignored:null,modified:`M`,renamed:`R`,untracked:`U`},qo={added:`Git status: added`,deleted:`Git status: deleted`,ignored:`Git status: ignored`,modified:`Git status: modified`,renamed:`Git status: renamed`,untracked:`Git status: untracked`},Jo=`Contains git status items`;function Yo(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i=0,viewportHeight:a}=e;if(n<0)return null;let o=Math.max(0,i),s=n*r,c=s+r;if(s<t+o){let e=Math.max(0,s-o);return e===t?null:e}if(c>t+a){let e=c-a;return e===t?null:e}return null}function Xo(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:i,topInset:a=0,totalHeight:o,viewportHeight:s}=e;if(i===`nearest`)return Yo({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:a,viewportHeight:s});if(n<0)return null;let c=Math.max(0,a),l=n*r,u=Math.max(0,s-c),d=i===`center`?c+Math.max(0,(u-r)/2):c,f=Math.max(0,o-s),p=Math.max(0,Math.min(l-d,f));return p===t?null:p}function Zo(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:i,totalHeight:a,viewportHeight:o}=e;if(n<0)return null;let s=Math.max(0,i),c=n*r,l=c+r,u=t+s,d=t+o;if(c>=u&&l<=d)return null;let f=Math.max(0,a-o),p=Math.max(0,Math.min(c-s,f));return p===t?null:p}function Qo(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function $o(e){let t=e.getRootNode();if(t instanceof ShadowRoot){let e=t.activeElement;return e instanceof HTMLElement?e:null}let n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function es(e,t){if(e==null)return t;let n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function ts(e,t){return e!=null&&e>0?e:t}function ns(e){let t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function rs(e,t,n,r,i=0){let a=Yo({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:i,viewportHeight:r});return a==null?!1:(e.scrollTop=a,!0)}function is(e,t,n,r,i,a,o=0){let s=Xo({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:a,topInset:o,totalHeight:i,viewportHeight:r});return s==null?!1:(e.scrollTop=s,!0)}function as(e,t,n,r,i,a){let o=Zo({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:a,totalHeight:i,viewportHeight:r});return o==null?!1:(e.scrollTop=o,!0)}function os(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}function ss(e){let{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?`reset`:r?n===t?`ignore`:`focus-input`:`reveal-canonical`}function cs({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:i,onInput:a}){return K(`input`,{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:i,onInput:a,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()})}function ls(e){let{row:t,mode:n,targetPath:r,ariaLabel:i,domId:a,isParked:o,itemHeight:s,features:c,state:l,extraStyle:u}=e,d=n===`sticky`,f=t.ancestorPaths.at(-1)??``,p={};return l.isFocusRinged&&(p[`data-item-focused`]=!0),t.isSelected&&(p[`data-item-selected`]=!0),l.isContextHovered&&(p[`data-item-context-hover`]=`true`),l.isDragTarget&&(p[`data-item-drag-target`]=!0),l.isDragging&&(p[`data-item-dragging`]=!0),l.effectiveGitStatus!=null&&(p[`data-item-git-status`]=l.effectiveGitStatus),l.containsGitChange&&(p[`data-item-contains-git-change`]=`true`),{"aria-expanded":!d&&t.kind===`directory`?t.isExpanded:void 0,"aria-haspopup":c.contextMenuEnabled?`menu`:void 0,"aria-label":i,"aria-level":d?void 0:t.level+1,"aria-posinset":d?void 0:t.posInSet+1,"aria-selected":d?void 0:t.isSelected?`true`:`false`,"aria-setsize":d?void 0:t.setSize,"data-file-tree-sticky-path":d?r:void 0,"data-file-tree-sticky-row":d?`true`:void 0,"data-item-context-menu-button-visibility":c.actionLaneEnabled?c.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":c.contextMenuEnabled?c.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":c.actionLaneEnabled?`true`:void 0,"data-item-has-git-lane":c.gitLaneActive?`true`:void 0,"data-item-parent-path":f.length>0?f:void 0,"data-item-parked":o?`true`:void 0,"data-item-path":r,"data-item-type":t.kind===`directory`?`folder`:`file`,"data-type":`item`,id:d?void 0:a,role:d?void 0:`treeitem`,style:{minHeight:`${s}px`,...u},tabIndex:!d&&t.isFocused?0:-1,...p}}function us(e){let{event:t,mode:n,isSearchOpen:r,isDirectory:i}=e,a=t.ctrlKey||t.metaKey,o=t.shiftKey||a,s=t.shiftKey?{additive:a,kind:`range`}:a?{kind:`toggle`}:{kind:`single`};return{closeSearch:r,revealCanonical:n===`sticky`,selection:s,toggleDirectory:!o&&i}}var ds,q,fs,ps,ms=Object.is,hs=0,gs=[],J=G,_s=J.__b,vs=J.__r,ys=J.diffed,bs=J.__c,xs=J.unmount,Ss=J.__;function Cs(e,t){J.__h&&J.__h(q,e,hs||t),hs=0;var n=q.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function ws(e){return hs=1,Ts(Is,e)}function Ts(e,t,n){var r=Cs(ds++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Is(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);ms(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=q,!q.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,ms(t,e.__[0])||(o=!0)}}),a&&a.call(this,e,t,n)||o};q.__f=!0;var a=q.shouldComponentUpdate,o=q.componentWillUpdate;q.componentWillUpdate=function(e,t,n){if(4&this.__g){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},q.shouldComponentUpdate=i}return r.__N||r.__}function Es(e,t){var n=Cs(ds++,3);!J.__s&&Fs(n.__H,t)&&(n.__=e,n.u=t,q.__H.__h.push(n))}function Ds(e,t){var n=Cs(ds++,4);!J.__s&&Fs(n.__H,t)&&(n.__=e,n.u=t,q.__h.push(n))}function Y(e){return hs=5,Os(function(){return{current:e}},[])}function Os(e,t){var n=Cs(ds++,7);return Fs(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ks(e,t){return hs=8,Os(function(){return e},t)}function As(){for(var e;e=gs.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ns),e.__H.__h.forEach(Ps),e.__H.__h=[]}catch(t){e.__H.__h=[],J.__e(t,e.__v)}}J.__b=function(e){q=null,_s&&_s(e)},J.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ss&&Ss(e,t)},J.__r=function(e){vs&&vs(e),ds=0;var t=(q=e.__c).__H;t&&(fs===q?(t.__h=[],q.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.forEach(Ns),t.__h.forEach(Ps),t.__h=[],ds=0)),fs=q},J.diffed=function(e){ys&&ys(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(gs.push(t)!==1&&ps===J.requestAnimationFrame||((ps=J.requestAnimationFrame)||Ms)(As)),t.__H.__.forEach(function(e){e.u&&(e.__H=e.u),e.u=void 0})),fs=q=null},J.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Ns),e.__h=e.__h.filter(function(e){return!e.__||Ps(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],J.__e(n,e.__v)}}),bs&&bs(e,t)},J.unmount=function(e){xs&&xs(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Ns(e)}catch(e){t=e}}),n.__H=void 0,t&&J.__e(t,n.__v))};var js=typeof requestAnimationFrame==`function`;function Ms(e){var t,n=function(){clearTimeout(r),js&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);js&&(t=requestAnimationFrame(n))}function Ns(e){var t=q,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),q=t}function Ps(e){var t=q;e.__c=e.__(),q=t}function Fs(e,t){return!e||e.length!==t.length||t.some(function(t,n){return!ms(t,e[n])})}function Is(e,t){return typeof t==`function`?t(e):t}function Ls(e,t=null,n=null){"use no memo";let r=e.flattenedSegments;return r==null||r.length===0?t??e.name:K(`span`,{"data-item-flattened-subitems":!0,children:r.map((e,i)=>{let a=i===r.length-1;return K(qa,{children:[K(`span`,{"data-item-flattened-subitem":e.path,"data-item-flattened-subitem-drag-target":n===e.path?`true`:void 0,children:a&&t!=null?t:K(jo,{children:e.name})}),i<r.length-1?` / `:``]},e.path)})})}function Rs(e){return e.isFlattened?e.flattenedSegments?.findLast(e=>e.isTerminal)?.path??e.path:e.path}function zs(e){let t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(e=>e.name).join(` / `)}function Bs(e,t,n,r){return e.map((e,i)=>{let a=i*n,o=e.subtreeEndIndex+1;if(o>=r)return{row:e.row,top:a};let s=o*n-t;return{row:e.row,top:Math.min(a,s-n)}}).filter(e=>e.top+n>0)}function Vs({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:i,viewportHeight:a}){let o=e.getVisibleCount(),s=i&&o>0?e.getStickyRowCandidates(r,t):[],c=s==null&&i&&o>0?e.getVisibleRows(0,o-1):[],l=Go(c,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:s==null?void 0:Bs(s,r,t,o),totalRowCount:o,viewportHeight:a}),u=i&&r<=0&&o>0?e.getStickyRowCandidates(1,t):[],d=u!=null&&r<=0?Bs(u,1,t,o):i&&r<=0&&c.length>0?Wo(c,1,t):l.sticky.rows;return{overlayHeight:d.reduce((e,n)=>Math.max(e,n.top+t),0),overlayRows:d,snapshot:l,visibleRows:c}}var Hs=400,Us=10,Ws=40,Gs=18;function Ks(e,t,n){let r=e,i=document.elementFromPoint?.bind(document)??null,a=r.elementFromPoint?.(t,n)??i?.(t,n)??null;return e instanceof ShadowRoot&&(a==null||!e.contains(a))?qs(e,t,n):a instanceof HTMLElement?a:null}function qs(e,t,n){let r=Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));for(let e=r.length-1;e>=0;e--){let i=r[e],a=i.getBoundingClientRect();if(t>=a.left&&t<=a.right&&n>=a.top&&n<=a.bottom)return i}return null}function Js(e){let t=e?.closest?.(`[data-type="item"]`);if(!(t instanceof HTMLElement))return null;let n=t.dataset.itemPath??null;if(n==null)return null;let r=e?.closest?.(`[data-item-flattened-subitem]`),i=r instanceof HTMLElement?r.getAttribute(`data-item-flattened-subitem`)??null:null;if(i!=null&&i.endsWith(`/`))return{directoryPath:i,flattenedSegmentPath:i,hoveredPath:n,kind:`directory`};if(t.dataset.itemType===`folder`)return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`};let a=t.dataset.itemParentPath??null;return a==null||a.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:`root`}:{directoryPath:a,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`}}function Ys(e){let t=e.cloneNode(!0);return t.removeAttribute(`id`),t.dataset.fileTreeDragPreview=`true`,t.setAttribute(`aria-hidden`,`true`),t.tabIndex=-1,Object.assign(t.style,{boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,left:`0px`,margin:`0`,pointerEvents:`none`,position:`fixed`,top:`0px`,willChange:`transform`,zIndex:`10000`}),t}function Xs(){return navigator.vendor!==`Apple Computer, Inc.`}function Zs(e,t){let n=e-t.top;if(n<Ws)return-Math.ceil((Ws-Math.max(0,n))/Ws*Gs);let r=t.bottom-e;return r<Ws?Math.ceil((Ws-Math.max(0,r))/Ws*Gs):0}function Qs(e,t){if(e!=null){let t=Ko[e];return t==null?null:{text:t,title:qo[e]}}return t?{icon:{name:`file-tree-icon-dot`,width:6,height:6},title:Jo}:null}function $s(e,t,n){if(t==null||t.size===0)return null;let r=[];for(let i=e.length-1;i>=0;--i){let a=e[i],o=n.get(a);if(o!=null){for(let e of r)n.set(e,o);return o?`ignored`:null}if(t.has(a)){n.set(a,!0);for(let e of r)n.set(e,!0);return`ignored`}r.push(a)}for(let e of r)n.set(e,!1);return null}function ec(e){return e!=null&&`toggle`in e}function tc(e){return e.code===`Space`||e.key===` `||e.key===`Spacebar`}function nc(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function rc(e){return e==null?``:`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`,`\\\\`).replaceAll(`"`,`\\"`)}"] { opacity: 1; }`}function ic(e){return e.shiftKey&&e.key===`F10`||e.key===`ContextMenu`}function ac(e,t){return t&&ic(e)||(e.ctrlKey||e.metaKey)&&tc(e)?!0:e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`}var oc=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`End`,`Home`,`PageDown`,`PageUp`]);function sc(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot===`true`||t.dataset.type===`context-menu-anchor`||t.dataset.type===`context-menu-trigger`||t.getAttribute(`slot`)===`context-menu`))return!0;return!1}function cc(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function lc(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function uc(e,t){if(e==null)return t.offsetTop;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function dc(e,t,n){if(n==null){e.delete(t);return}e.set(t,n)}function fc(e,t,n){if(e==null)return null;let r=t.get(e)??null;if(r!=null)return r;let i=n.get(e)??null;return i?.dataset.itemParked===`true`?null:i}function pc(e){if(e==null)return[];let t=[];for(let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)){if(!(n instanceof HTMLElement))continue;let e=n.dataset.fileTreeStickyPath;e!=null&&t.push(e)}return t}function mc(e,t){if(e==null||t==null)return null;for(let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function hc(e,t,n,r,i,a,o){let s=Math.max(0,a-i),c=t?.getBoundingClientRect()??null,l=c==null||n==null?null:n.getBoundingClientRect().top-c.top,u=mc(e,r),d=c==null||u==null?null:u.getBoundingClientRect().top-c.top;return Math.max(0,Math.min(d??Math.max(l??0,s),Math.max(0,o-i)))}function gc(e,t){return{kind:e.kind,name:zs(e),path:t}}function _c(e){return e==null?void 0:`${e}__tree`}function vc(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?`__parked`:``}`}function yc(e){return e===`file-tree-icon-chevron`||e===`file-tree-icon-dot`||e===`file-tree-icon-file`||e===`file-tree-icon-lock`}function bc(e,t){if(e==null)return null;if(`text`in e)return K(`span`,{title:e.title,children:e.text});let n=typeof e.icon==`string`?yc(e.icon)?t(e.icon):{name:e.icon}:yc(e.icon.name)?(()=>{let n=t(e.icon.name),{name:r,...i}=e.icon;return{...n,...i}})():e.icon;return K(`span`,{title:e.title,children:K(xo,{...n})})}function xc(e){e!=null&&Qo(e.querySelector([`button:not([disabled])`,`[href]`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `))??e)}function Sc(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:i=!1,dragTargetFlattenedSegmentPath:a=null,gitDecoration:o=null,gitLaneActive:s=!1,renameInput:c=null,showDecorativeActionAffordance:l=!1}={}){let u=Rs(e);return K(qa,{children:[e.depth>0?K(`div`,{"data-item-section":`spacing`,children:Array.from({length:e.depth}).map((t,n)=>K(`div`,{"data-item-section":`spacing-item`,"data-ancestor-path":e.ancestorPaths[n]},n))}):null,K(`div`,{"data-item-section":`icon`,children:e.kind===`directory`?K(xo,{...t(`file-tree-icon-chevron`)}):K(xo,{...t(`file-tree-icon-file`,u)})}),K(`div`,{"data-item-section":`content`,children:e.isFlattened?Ls(e,c,a):c??K(No,{minimumLength:5,split:`extension`,children:e.name})}),i?K(`div`,{"data-item-section":`decoration`,children:r==null?null:bc(r,t)}):null,s?K(`div`,{"data-item-section":`git`,children:bc(o,t)}):null,n?K(`div`,{"data-item-section":`action`,children:l?K(`span`,{"aria-hidden":`true`,"data-item-action-affordance":`decorative`,children:K(xo,{...t(`file-tree-icon-ellipsis`)})}):null}):null]})}function Cc(e,t,n,r={}){let{controller:i,renameView:a,visualFocusPath:o,contextHoverPath:s,draggedPathSet:c,dragTarget:l,dragAndDropEnabled:u,shouldSuppressContextMenu:d,handleRowDragStart:f,handleRowDragEnd:p,handleRowTouchStart:m,instanceId:h,itemHeight:g,gitStatusByPath:_,ignoredGitDirectories:v,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:x,contextMenuEnabled:S,contextMenuTriggerMode:C,contextMenuButtonTriggerEnabled:w,contextMenuButtonVisibility:T,contextMenuRightClickEnabled:E,registerRenameInput:D,registerButton:O,resolveIcon:ee,renderDecorationForRow:k,openContextMenuForRow:A,onRowClick:j,onKeyDown:M}=e,N=Rs(t),{isParked:te=!1,mode:ne=`flow`,style:re}=r,ie=ne===`sticky`,ae=_?.get(N)??null??$s(t.ancestorPaths,v,y),oe=t.kind===`directory`&&(b?.has(N)??!1),se=k(t,N),ce=Qs(ae,oe),le=S&&w,ue=se!=null||x||le,P=le&&T===`always`,F=a.getPath()===N,de=F?a.getValue():``,fe=ie||!F?null:K(cs,{ref:D,ariaLabel:`Rename ${zs(t)}`,isFlattened:t.isFlattened,value:de,onBlur:()=>{a.commit()},onInput:e=>{a.setValue(e.currentTarget.value)}}),pe=Sc(t,ee,{actionLaneEnabled:le,customDecoration:se,decorationLaneEnabled:ue,dragTargetFlattenedSegmentPath:l?.flattenedSegmentPath??null,gitDecoration:ce,gitLaneActive:x,renameInput:fe,showDecorativeActionAffordance:P}),me={...ls({ariaLabel:zs(t),domId:t.isFocused?vc(h,N,te):void 0,extraStyle:re,features:{actionLaneEnabled:le,contextMenuButtonVisibility:le?T:null,contextMenuEnabled:S,contextMenuTriggerMode:S?C:null,gitLaneActive:x},isParked:te,itemHeight:g,mode:ne,row:t,state:{containsGitChange:oe,effectiveGitStatus:ae,isContextHovered:s===N,isDragTarget:l?.kind===`directory`&&l.directoryPath===N,isDragging:c?.has(N)===!0,isFocusRinged:t.isFocused&&o===N},targetPath:N}),key:n,onContextMenu:S||u?e=>{if(d()){e.preventDefault();return}S&&(e.preventDefault(),E&&(i.focusMountedPathFromInput(N),A(t,N,{anchorRect:lc(e.clientX,e.clientY),source:`right-click`})))}:void 0,onFocus:ie?void 0:()=>{i.focusMountedPathFromInput(N)},onKeyDown:ie?void 0:M,ref:e=>{O(N,e)}};return!ie&&F?K(`div`,{...me,children:pe}):K(`button`,{...me,type:`button`,draggable:u&&!te,onDragEnd:u&&!te?p:void 0,onDragStart:u&&!te?e=>{f(e,t,N)}:void 0,onMouseDown:e=>{if(ie){e.preventDefault();return}i.isSearchOpen()&&e.preventDefault()},onTouchStart:u&&!te?e=>{m(e,t,N)}:void 0,onClick:e=>{j(e,t,N,ne)},children:pe})}function wc(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(e=>!n.has(Rs(e))).map((n,r)=>Cc(e,n,t.start+r))}function Tc({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:i,icons:a,instanceId:o,itemHeight:s=Di,overscan:c=10,renamingEnabled:l=!1,renderRowDecoration:u,searchBlurBehavior:d=`close`,searchEnabled:f=!1,searchFakeFocus:p=!1,slotHost:m,stickyFolders:h=!1,initialViewportHeight:g=420}){"use no memo";let _=Y(null),v=Y(null),y=Y(!1),b=Y(null),x=Y(null),S=Y(null),C=Y(null),w=Y(null),T=Y(new Map),E=Y(new Map),D=Y(()=>{}),O=Y(null),ee=Y(0),k=Y(!1),A=Y(null);A.current!==t&&(k.current=!1,A.current=t);let j=Y(!1),M=Y(null),N=Y(null),te=Y(!1),ne=Y(null),re=Y(null),ie=Y(null),ae=Y(null),oe=Y(null),se=Y(null),ce=Y(null),le=Y(null),ue=Y(!1),P=Y(null),F=Y(null),de=Y(null),fe=Y(null),pe=Os(()=>new Map,[]),[,me]=ws(0),[he,ge]=ws(null),[_e,ve]=ws(null),[ye,be]=ws(null),[xe,Se]=ws(null),[Ce,we]=ws(0),[I,Te]=ws(null),Ee=Y(I);Ee.current=I;let De=Y(null),Oe=Y(null),ke=Y(null),Ae=Y(null),je=Y(null),Me=Y(!1),Pe=()=>{Oe.current=null,ke.current=null,Ae.current=null},Fe=(e,t)=>{Oe.current=e,ke.current=null,Ae.current=t==null?null:{path:e,scrollTop:t}},Ie=(e,t)=>{Oe.current=null,ke.current={path:e,viewportOffset:t},Ae.current=null},Le=Y(d===`retain`&&t.isSearchOpen()),[Re,ze]=ws(p);Es(()=>{p||ze(!1)},[p]);let Be=Y(!1),Ve=ks(()=>{Be.current=!0,ze(e=>e&&!1)},[]),[He,Ue]=ws(()=>Vs({controller:t,itemHeight:s,overscan:c,scrollTop:0,stickyFolders:h,viewportHeight:g})),[We,Ge]=ws(!1);Es(()=>{Ge(!0)},[]);let Ke=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,qe=e?.contextMenu?.triggerMode??(Ke?`right-click`:`both`),Je=qe===`both`||qe===`button`,Qe=e?.contextMenu?.buttonVisibility??`when-needed`,$e=qe===`both`||qe===`right-click`;Ds(()=>{let e=S.current;if(e==null)return;let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail?.path??null;je.current=t,ve(t),Se(t==null?null:`pointer`)},n=e=>{e instanceof CustomEvent&&(Me.current=e.detail?.disabled===!0)};return e.addEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.addEventListener(`file-tree-debug-set-scroll-suppression`,n),()=>{e.removeEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.removeEventListener(`file-tree-debug-set-scroll-suppression`,n)}},[]);let et=ks((e,t)=>{dc(T.current,e,t)},[]),tt=ks((e,t)=>{dc(E.current,e,t)},[]),nt=ks(e=>{x.current=e},[]),rt=ks(e=>fc(e,E.current,T.current),[]),it=n!=null||r!=null||i!=null,{resolveIcon:at}=Os(()=>Ne(a),[a]),ot=t[va](),st=ot.getPath(),ct=st!=null,lt=t.isSearchOpen(),ut=t.getSearchValue(),L=t.getFocusedPath(),R=t.getFocusedIndex(),dt=t.getScrollRequest(),ft=t.isDragAndDropEnabled(),pt=t.getDragSession(),mt=Os(()=>pt==null?null:new Set(pt.draggedPaths),[pt]),ht=pt?.target??null,gt=pt?.primaryPath??null,_t=_c(o),{overlayHeight:z,overlayRows:vt,snapshot:B,visibleRows:yt}=He,bt=B.physical.viewportHeight,xt=Os(()=>({end:B.window.endIndex,start:B.window.startIndex}),[B.window.endIndex,B.window.startIndex]),St=vt,Ct=B.sticky.rows,V=B.physical.totalHeight,wt=B.sticky.height,Tt=Os(()=>new Set(Ct.map(e=>Rs(e.row))),[Ct]),Et=R>=0&&R>=xt.start&&R<=xt.end,Dt=ks((e,t)=>u?.({item:gc(e,t),row:e})??null,[u]),Ot=ks(e=>Qo(e==null?null:T.current.get(e)??null)?!0:Qo(S.current),[]),kt=ks(e=>{Ot(t.focusNearestPath(e))},[t,Ot]),At=Y(kt);At.current=kt;let jt=Y(!0),Mt=Y(()=>{}),Nt=ks((t=!0)=>{let n=Ee.current;n!=null&&(jt.current=jt.current&&t,Te(null),e?.contextMenu?.onClose?.(),jt.current&&kt(n.path))},[e?.contextMenu,kt]);Mt.current=Nt;let Pt=ks(e=>{let t=e==null?null:uc(S.current,e);be(e=>e===t?e:t)},[]),Ft=ks((e,n,r)=>{let i=t.getItem(n);if(i==null)return;let a=rt(n);if(a?.dataset.fileTreeStickyRow===`true`){let e=C.current;Fe(n,e?.scrollTop??null),j.current=!0,ge(e=>e===n?e:n)}i.focus(),Pt(a),jt.current=!0,Te({anchorRect:r?.anchorRect??null,item:gc(e,n),path:n,source:r?.source??`keyboard`})},[t,rt,Pt]),It=ks(e=>{if(l){if(t.isSearchOpen()){let e=C.current,t=es(e,bt);ne.current=R<0||e==null?null:Math.max(0,Math.min(R*s-e.scrollTop,Math.max(0,t-s))),te.current=!0}t.startRenaming(e)!==!1&&(Se(`focus`),me(e=>e+1))}},[t,R,s,l,bt]),Lt=ks((e,{restoreTreeFocus:n=!0,targetOffset:r=`live-overlay`}={})=>{let i=C.current;if(i==null)return!1;t.focusPath(e);let a=t.getFocusedIndex();if(a<0)return!1;let o=t.getVisibleRows(a,a)[0]??null;if(o==null)return!1;let l=es(i,bt),u=t.getVisibleCount()*s,d=r===`sticky-parents`?o.ancestorPaths.length*s:Vs({controller:t,itemHeight:s,overscan:c,scrollTop:i.scrollTop,stickyFolders:h,viewportHeight:l}).snapshot.sticky.height;return j.current=!0,as(i,a,s,l,u,d),D.current(),De.current=n?e:null,!0},[t,s,c,bt,h]),Rt=()=>y.current===!0||fe.current!=null||ue.current===!0,zt=e=>typeof window.requestAnimationFrame==`function`?window.requestAnimationFrame(()=>{e()}):window.setTimeout(e,16),Bt=e=>{if(e!=null){if(typeof window.cancelAnimationFrame==`function`){window.cancelAnimationFrame(e);return}window.clearTimeout(e)}},Vt=()=>{ae.current!=null&&(clearTimeout(ae.current),ae.current=null),ie.current=null},Ht=()=>{se.current?.remove(),se.current=null},Ut=()=>{Bt(re.current),re.current=null,oe.current=null},Wt=e=>{let t=S.current?.getRootNode();if(t instanceof ShadowRoot){t.append(e);return}document.body.append(e)},Gt=()=>{le.current?.(),le.current=null,fe.current!=null&&(clearTimeout(fe.current),fe.current=null),ue.current=!1,P.current=null,de.current=null,F.current!=null&&(F.current.setAttribute(`draggable`,`true`),F.current.style.removeProperty(`touch-action`),F.current=null),Ht(),Vt(),Ut(),ce.current=null},Kt=(e,n)=>{let r=S.current?.getRootNode(),i=Js(Ks(r instanceof ShadowRoot?r:document,e,n));return t.setDragTarget(i),t.getDragSession()?.target??null},qt=e=>{let n=t.getDragAndDropConfig()?.openOnDropDelay??800;if(e==null||e.kind!==`directory`||e.directoryPath==null||n<=0){Vt();return}let r=t.getItem(e.directoryPath),i=ec(r)?r:null;if(i==null||i.isExpanded()){Vt();return}let a=`${e.directoryPath}::${e.flattenedSegmentPath??``}`;ie.current!==a&&(Vt(),ie.current=a,ae.current=setTimeout(()=>{let n=t.getDragSession()?.target;n?.kind!==`directory`||n.directoryPath!==e.directoryPath||n.flattenedSegmentPath!==e.flattenedSegmentPath||i.expand()},n))},Jt=()=>{re.current=null;let e=oe.current,n=C.current;if(e==null||n==null||t.getDragSession()==null)return;let r=n.getBoundingClientRect(),i=Zs(e.clientY,r);if(i===0)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),o=Math.max(0,Math.min(a,n.scrollTop+i));o!==n.scrollTop&&(n.scrollTop=o,D.current()),qt(Kt(e.clientX,e.clientY)),re.current=zt(Jt)},Yt=(e,t)=>{oe.current={clientX:e,clientY:t},re.current??=zt(Jt)},Xt=(e,n,r)=>{let i=e.currentTarget;if(i!=null){if(Gt(),Ht(),Vt(),Ut(),t.startDrag(r)===!1){e.preventDefault();return}if(ce.current=n,e.dataTransfer!=null&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.dropEffect=`move`,e.dataTransfer.setData(`text/plain`,r),Xs())){let t=Ys(i),n=i.getBoundingClientRect();Object.assign(t.style,{height:`${n.height}px`,opacity:`0.85`,transform:`translate3d(-9999px, 0px, 0)`,width:`${n.width}px`}),Wt(t),se.current=t,e.dataTransfer.setDragImage(t,Math.max(0,e.clientX-n.left),Math.max(0,e.clientY-n.top))}}},Zt=()=>{Ht(),Vt(),Ut(),ce.current=null,t.cancelDrag()},Qt=(e,n,r)=>{if(fe.current!=null||ue.current)return;let i=e.touches[0],a=e.currentTarget;if(i==null||a==null)return;de.current={clientX:i.clientX,clientY:i.clientY},F.current=a,a.setAttribute(`draggable`,`false`);let o=(e={})=>{let t=e.restoreNativeDraggable??!ue.current;fe.current!=null&&(clearTimeout(fe.current),fe.current=null),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),le.current===o&&(le.current=null),t&&(a.setAttribute(`draggable`,`true`),F.current===a&&(F.current=null),de.current=null)},s=e=>{let t=e.touches[0],n=de.current;if(t==null||n==null)return;let r=t.clientX-n.clientX,i=t.clientY-n.clientY;r*r+i*i<=Us*Us||o()},c=()=>{o()};document.addEventListener(`touchmove`,s,{passive:!0}),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c),le.current=o,fe.current=setTimeout(()=>{if(o({restoreNativeDraggable:!1}),t.startDrag(r)===!1){a.setAttribute(`draggable`,`true`),F.current===a&&(F.current=null),de.current=null;return}ue.current=!0,F.current=a,a.setAttribute(`draggable`,`false`),a.style.setProperty(`touch-action`,`none`),ce.current=n;let e=a.getBoundingClientRect(),s=Ys(a);Object.assign(s.style,{height:`${e.height}px`,opacity:`0.85`,transform:`translate3d(${e.left}px, ${e.top}px, 0)`,width:`${e.width}px`}),Wt(s),se.current=s,P.current={x:i.clientX-e.left,y:i.clientY-e.top};let c=e=>{let t=e.touches[0];if(t==null)return;e.preventDefault();let n=P.current;n!=null&&se.current!=null&&(se.current.style.transform=`translate3d(${t.clientX-n.x}px, ${t.clientY-n.y}px, 0)`),qt(Kt(t.clientX,t.clientY)),Yt(t.clientX,t.clientY)},l=e=>{let n=e.changedTouches[0];n!=null&&Kt(n.clientX,n.clientY),t.completeDrag(),Gt()},u=()=>{t.cancelDrag(),Gt()};le.current=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`touchend`,l),document.removeEventListener(`touchcancel`,u)},document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`touchend`,l),document.addEventListener(`touchcancel`,u)},Hs)},$t=e=>{if(I!=null){if(e.key===`Escape`){Nt(),e.preventDefault(),e.stopPropagation();return}oc.has(e.key)&&(e.preventDefault(),e.stopPropagation());return}if(ot.isActive()){if(e.key===`Escape`)ot.cancel();else if(e.key===`Enter`)ot.commit();else return;Se(`focus`),me(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(l&&e.key===`F2`){It(L??void 0),e.preventDefault(),e.stopPropagation();return}if(lt){if(e.key===`Escape`)te.current=!1,ne.current=null,t.closeSearch();else if(e.key===`Enter`){let e=t.getFocusedPath();e!=null&&t.selectOnlyPath(e);let n=C.current,r=es(n,bt);ne.current=R<0||n==null?null:Math.max(0,Math.min(R*s-n.scrollTop,Math.max(0,r-s))),te.current=!0,t.closeSearch()}else if(e.key===`ArrowDown`)t.focusNextSearchMatch();else if(e.key===`ArrowUp`)t.focusPreviousSearchMatch();else return;Se(`focus`),me(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(f&&nc(e)){t.openSearch(e.key),me(e=>e+1),e.preventDefault(),e.stopPropagation();return}let n=Ke&&ic(e),r=ac(e,Ke),i=r&&S.current!=null?$o(S.current):null,a=r?new Set(pc(S.current)):new Set,o=i?.dataset.fileTreeStickyPath??null,c=i?.dataset.fileTreeStickyRow===`true`&&o!=null;if(c&&o!==L&&a.has(o)){let e=C.current;Fe(o,e?.scrollTop??null),t.focusPath(o)}let u=t.getFocusedPath(),d=t.getFocusedIndex(),p=t.getFocusedItem();if(p==null)return;let m=ec(p)?p:null,h=u!=null&&(Tt.has(u)||c&&o===u&&a.has(u)),g=e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`ArrowRight`&&m!=null&&m.isExpanded(),_=e.key===`ArrowLeft`&&h&&m!=null&&m.isExpanded(),v=C.current,y=!0;if(e.shiftKey&&e.key===`ArrowDown`)t.extendSelectionFromFocused(1);else if(e.shiftKey&&e.key===`ArrowUp`)t.extendSelectionFromFocused(-1);else if(n&&u!=null&&d>=0){let e=t.getVisibleRows(d,d)[0]??null,n=fc(u,E.current,T.current);e==null||n==null?y=!1:Ft(e,u)}else if((e.ctrlKey||e.metaKey)&&tc(e))t.toggleFocusedSelection();else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`)t.selectAllVisiblePaths();else switch(e.key){case`ArrowDown`:t.focusNextItem();break;case`ArrowUp`:t.focusPreviousItem();break;case`ArrowRight`:m==null||m.isExpanded()?t.focusNextItem():m.expand();break;case`ArrowLeft`:m!=null&&m.isExpanded()?m.collapse():t.focusParentItem();break;case`Home`:t.focusFirstItem();break;case`End`:t.focusLastItem();break;default:y=!1}if(!y)return;Se(`focus`);let b=t.getFocusedPath(),x=b!=null&&(Tt.has(b)||a.has(b)),w=g&&b!==u,D=n&&c&&o===u&&b===u;if((h||D)&&b!=null&&(w&&x||D))Fe(b,v?.scrollTop??null),j.current=!0,ge(e=>e===b?e:b);else{let t=e.key===`ArrowUp`&&h&&b!==u;b!=null&&(t||_&&b===u)?(Ie(b,hc(S.current,v,i,u,s,wt,bt)),j.current=!0,ge(e=>e===b?e:b)):Pe()}me(e=>e+1),e.preventDefault(),e.stopPropagation()};Ds(()=>{if(!(!f||!lt)){if(Le.current){Le.current=!1;return}Qo(w.current)}},[lt,f]),Ds(()=>{let e=x.current;switch(ss({hasRenderedInput:e!=null,previousRenamingPath:N.current,renamingPath:st})){case`reset`:N.current=null;return;case`reveal-canonical`:st!=null&&Lt(st,{restoreTreeFocus:!1,targetOffset:`live-overlay`});return;case`ignore`:return;case`focus-input`:e!=null&&(De.current=null,N.current=st,Qo(e),e.select());return}},[xt.end,xt.start,st,Lt,Tt]),Ds(()=>{let e=S.current;if(e==null)return;let t=null,n=()=>{t!=null&&(clearTimeout(t),t=null)},r=()=>{let t=$o(e)?.dataset.itemPath??null;ge(e=>e===t?e:t)},i=()=>{n(),j.current=!0,r()},a=i=>{let a=i.relatedTarget;if(a==null){n(),t=setTimeout(()=>{if(t=null,$o(e)!=null){r();return}j.current=!1,ge(null)},0);return}if(!(a instanceof Node)||!e.contains(a)){n(),j.current=!1,ge(null);return}let o=a instanceof HTMLElement?a.dataset.itemPath??null:null;ge(e=>e===o?e:o)};return e.addEventListener(`focusin`,i),e.addEventListener(`focusout`,a),()=>{n(),e.removeEventListener(`focusin`,i),e.removeEventListener(`focusout`,a)}},[]),Ds(()=>{let e=S.current;e!=null&&(B.physical.scrollTop<=0?e.dataset.scrollAtTop=`true`:delete e.dataset.scrollAtTop)},[B.physical.scrollTop]),Ds(()=>{let e=null,n=C.current,r=b.current,i=S.current;if(n==null)return;O.current=es(n,g);let a=()=>{let e=t.getVisibleCount(),r=ts(O.current,g),i=Math.max(0,e*s-r);n.scrollTop>i&&(n.scrollTop=i),Ue(Vs({controller:t,itemHeight:s,overscan:c,scrollTop:Math.min(n.scrollTop,i),stickyFolders:h,viewportHeight:r}))};if(!k.current){k.current=!0;let e=t.getFocusedIndex();if(e>=0){let r=ts(O.current,g),i=t.getVisibleRows(e,e)[0]??null;rs(n,e,s,r,h&&i!=null?Math.max(0,Math.min(i.ancestorPaths.length*s,Math.max(0,r-s))):0)}}D.current=a;let o=!1,l=t.subscribe(()=>{o?me(e=>e+1):o=!0,a()}),u=()=>{Me.current!==!0&&(r!=null&&(r.dataset.isScrolling??=``),i!=null&&(i.dataset.isScrolling??=``),y.current=!0,e!=null&&clearTimeout(e),e=setTimeout(()=>{r!=null&&delete r.dataset.isScrolling,i!=null&&delete i.dataset.isScrolling,y.current=!1,we(e=>e+1),e=null},50))},d=null,f=()=>{i!=null&&delete i.dataset.overlayReveal,d!=null&&(clearTimeout(d),d=null)},p=()=>{i==null||Me.current===!0||n.scrollTop>0||(i.dataset.overlayReveal=`true`,d!=null&&clearTimeout(d),d=setTimeout(()=>{f()},200))},m=()=>{if(a(),n.scrollTop>0&&f(),Ee.current!=null&&y.current&&Mt.current(),Me.current===!0){y.current=!1;return}ve(e=>e==null?e:null),u()},_=()=>{u(),p()},v=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`]),x=e=>{v.has(e.key)&&_()};n.addEventListener(`scroll`,m,{passive:!0}),n.addEventListener(`wheel`,_,{passive:!0}),n.addEventListener(`touchmove`,_,{passive:!0}),n.addEventListener(`keydown`,x);let w=typeof ResizeObserver<`u`?new ResizeObserver(e=>{O.current=(e[0]==null?null:ns(e[0]))??es(n,g),a()}):null;return w?.observe(n),()=>{D.current=()=>{},l(),n.removeEventListener(`scroll`,m),n.removeEventListener(`wheel`,_),n.removeEventListener(`touchmove`,_),n.removeEventListener(`keydown`,x),e!=null&&clearTimeout(e),d!=null&&clearTimeout(d),r!=null&&delete r.dataset.isScrolling,i!=null&&(delete i.dataset.isScrolling,delete i.dataset.overlayReveal),y.current=!1,O.current=null,w?.disconnect()}},[t,g,s,c,h]),Ds(()=>{Ke||I==null||Nt(!1)},[Nt,Ke,I]);let en=Os(()=>I==null?null:`${I.path}::${I.source}`,[I]);Ds(()=>{if(en==null){m?.clearSlotContent(Xe);return}let t=Ee.current;if(t==null)return;let n=v.current??_.current;if(n==null)return;let r={anchorElement:n,anchorRect:t.anchorRect??cc(n.getBoundingClientRect()),close:e=>{Mt.current(e?.restoreFocus??!0)},restoreFocus:()=>{jt.current&&At.current(Ee.current?.path??null)}},i=e?.contextMenu?.render?.(t.item,r)??null;return m?.setSlotContent(Xe,i),e?.contextMenu?.onOpen?.(t.item,r),xc(i),queueMicrotask(()=>{i==null||!i.isConnected||document.activeElement===i&&xc(i)}),()=>{m?.clearSlotContent(Xe)}},[en,e?.contextMenu,m]),Ds(()=>{I!=null&&t.getItem(I.path)==null&&Nt()},[Nt,I,t]),Ds(()=>{if(I==null)return;let e=S.current?.getRootNode(),t=e instanceof ShadowRoot?e.host:S.current,n=e=>{let n=e.target;n instanceof Node&&(sc(e)||_.current?.contains(n)!==!0&&t?.contains(n)!==!0&&Nt())},r=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),Nt())};return document.addEventListener(`mousedown`,n,!0),document.addEventListener(`keydown`,r,!0),()=>{document.removeEventListener(`mousedown`,n,!0),document.removeEventListener(`keydown`,r,!0)}},[Nt,I]),Ds(()=>{let e=C.current,n=S.current;if(e==null||n==null){M.current=L;return}let r=L==null?null:T.current.get(L)??null,i=$o(n),a=i?.dataset.itemPath??null,o=ct&&x.current===i,c=f&&w.current===i,l=te.current&&!lt,u=ne.current??0,d=De.current,p=Oe.current,m=ke.current,g=Ae.current,_=i!=null,v=j.current||_,y=M.current!==L,b=p!=null&&p===L&&L!=null,E=!1,O=!1;if(dt!=null&&dt.id!==ee.current){ee.current=dt.id;let n=dt.visibleIndex,r=t.getVisibleRows(n,n)[0]??null;if(r!=null){let t=h?Math.max(0,Math.min(r.ancestorPaths.length*s,Math.max(0,bt-s))):wt;E=!0,O=is(e,n,s,bt,V,dt.offset,t)}t.clearScrollRequest(dt.id)}let k=!E&&l&&as(e,R,s,bt,V,u),A=!E&&d!=null&&d===L&&as(e,R,s,bt,V,wt),N=!E&&m!=null&&m.path===L&&as(e,R,s,bt,V,m.viewportOffset),re=!E&&g!=null&&g.path===L&&e.scrollTop!==g.scrollTop;if(re&&(e.scrollTop=g.scrollTop),(re||O||A||N||k||v&&y&&d!==L&&!b&&rs(e,R,s,bt,wt))&&D.current(),E){M.current=L;return}if(!v){M.current=L;return}if(o){M.current=L;return}if(c&&!l){M.current=L;return}if(r==null){l&&R>=0&&(as(e,R,s,bt,V,u),D.current()),M.current=L;return}(y||l||d===L||p===L||m?.path===L||g?.path===L||a==null||a!==L)&&(Qo(r),d===L&&(De.current=null),p===L&&(Oe.current=null),m?.path===L&&(ke.current=null),g?.path===L&&(Ae.current=null),te.current=!1,ne.current=null),M.current=L},[t,R,L,Et,s,ct,lt,xt,bt,f,dt,h,wt,V,yt]);let tn=R>=0&&R>=B.visible.startIndex&&R<=B.visible.endIndex,nn=L!=null&&St.some(e=>Rs(e.row)===L),rn=tn||nn,an=Je&&j.current===!0&&rn?L:null,on=xe===`pointer`?_e:null,sn=I?.path??je.current??on??an??_e,cn=I?.source===`right-click`;Ds(()=>{y.current&&I==null||Pt(rt(sn))},[I,rt,xt,bt,Ce,St,sn,Pt,yt]);let ln=ks(e=>{if(y.current||sc(e))return;let t=e.target;if(!(t instanceof HTMLElement)||t.closest?.(`[data-type="context-menu-trigger"]`)!=null)return;let n=t.closest?.(`[data-file-tree-sticky-row="true"]`),r=t.closest?.(`[data-type="item"]`),i=n instanceof HTMLElement?n.dataset.fileTreeStickyPath??null:r instanceof HTMLElement?r.dataset.itemPath??null:null;i!=null&&Se(e=>e===`pointer`?e:`pointer`),ve(e=>e===i?e:i)},[]),un=ks(()=>{ve(null)},[]);Ds(()=>{if(!ft)return;let e=()=>{Gt(),t.cancelDrag()};return window.addEventListener(`dragend`,e),()=>{window.removeEventListener(`dragend`,e),Gt(),t.cancelDrag()}},[t,ft]);let dn=e=>{if(!ft||t.getDragSession()==null||ue.current)return;let n=Js(e.target instanceof HTMLElement?e.target:null);t.setDragTarget(n),qt(t.getDragSession()?.target??null),Yt(e.clientX,e.clientY),e.dataTransfer!=null&&(e.dataTransfer.dropEffect=`move`),e.preventDefault()},fn=e=>{if(!ft||t.getDragSession()==null||ue.current)return;let n=e.relatedTarget;n instanceof Node&&S.current?.contains(n)===!0||(Vt(),Ut(),t.setDragTarget(null))},pn=e=>{!ft||t.getDragSession()==null||ue.current||(e.preventDefault(),Kt(e.clientX,e.clientY),t.completeDrag(),Ht(),Vt(),Ut(),ce.current=null)},mn=B.window.height,hn=B.window.offsetTop,gn=Math.min(0,bt-mn),_n=Math.min(0,bt-mn-wt),vn=he===L||te.current,yn=L!=null&&vn&&!Et&&R>=0?yt[R]??t.getVisibleRows(R,R)[0]??null:null,bn=yn==null?null:os(R,s,xt,mn),xn=ce.current,Sn=gt!=null&&xn!=null&&xn.path===gt&&xn.index>=xt.start&&xn.index<=xt.end,Cn=gt!=null&&xn!=null&&xn.path===gt&&!Sn&&xn.path!==yn?.path?xn:null,wn=Cn==null?null:os(Cn.index,s,xt,mn),Tn=rc((R>=0?yt[R]??t.getVisibleRows(R,R)[0]??null:null)?.ancestorPaths.at(-1)??null),En=lt&&L!=null?vc(o,L,!Et):void 0,Dn=I?.path??(lt?L:he),On=I?.path??_e,kn=rt(sn),An=Ke&&Je&&!cn&&!ct&&kn!=null&&ye!=null&&sn!=null,jn=Ke&&(An||I!=null),Mn=I?.anchorRect,Nn=Mn==null&&kn!=null&&ye!=null&&(I!=null||An)?ye:null,Pn=Mn==null?Nn==null?void 0:{top:`${Nn}px`}:{left:`${Mn.left}px`,position:`fixed`,right:`auto`,top:`${Mn.top}px`},Fn=cn?{opacity:`0`}:void 0,In=ks((e,n,r,i)=>{let a=us({event:{ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey},isDirectory:n.kind===`directory`,isSearchOpen:lt,mode:i}),o=a.toggleDirectory&&n.kind===`directory`,s=o?t.resolveMountedDirectoryPathFromInput(r):null;if(o&&s==null)return;let c=s??r;switch(a.selection.kind){case`range`:t.selectPathRange(c,a.selection.additive);break;case`toggle`:t.togglePathSelectionFromInput(c);break;case`single`:t.selectOnlyMountedPathFromInput(c);break}let l=e.currentTarget instanceof HTMLElement?e.currentTarget:null,u=n.index>=B.visible.startIndex&&n.index<=B.visible.endIndex,d=i===`flow`&&u&&l!=null&&l.dataset.itemParked!==`true`;t.focusMountedPathFromInput(c),d&&(j.current=!0,ge(e=>e===c?e:c),Se(`focus`)),o&&t.toggleMountedDirectoryFromInput(c),a.closeSearch&&t.closeSearch(),a.revealCanonical&&Lt(c,{targetOffset:`sticky-parents`})},[t,lt,B.visible.endIndex,B.visible.startIndex,Lt]),Ln=()=>{if(y.current||!Je||sn==null||kn==null)return;let e=t.getItem(sn);e!=null&&(Pt(kn),jt.current=!0,Te({anchorRect:null,item:{kind:e.isDirectory()?`directory`:`file`,name:kn.getAttribute(`aria-label`)??sn,path:e.getPath()},path:e.getPath(),source:`button`}))},Rn={contextHoverPath:On,contextMenuButtonTriggerEnabled:Je,contextMenuButtonVisibility:Qe,contextMenuEnabled:Ke,contextMenuRightClickEnabled:$e,contextMenuTriggerMode:qe,controller:t,directoriesWithGitChanges:i,dragAndDropEnabled:ft,draggedPathSet:mt,dragTarget:ht,gitLaneActive:it,gitStatusByPath:n,handleRowDragEnd:Zt,handleRowDragStart:Xt,handleRowTouchStart:Qt,ignoredGitDirectories:r,ignoredInheritanceCache:pe,instanceId:o,itemHeight:s,onKeyDown:$t,onRowClick:In,openContextMenuForRow:Ft,registerButton:et,registerRenameInput:nt,renameView:ot,renderDecorationForRow:Dt,resolveIcon:at,shouldSuppressContextMenu:Rt,visualFocusPath:Dn},zn={...Rn,registerButton:tt};return K(`div`,{ref:S,id:_t,"data-file-tree-context-menu-button-visibility":Ke&&Je?Qe:void 0,"data-file-tree-context-menu-trigger-mode":Ke?qe:void 0,"data-file-tree-has-context-menu-action-lane":Ke&&Je?`true`:void 0,"data-file-tree-has-git-lane":it?`true`:void 0,"data-file-tree-virtualized-root":`true`,onDragLeave:ft?fn:void 0,onDragOver:ft?dn:void 0,onDrop:ft?pn:void 0,onKeyDown:$t,onPointerLeave:Ke?un:void 0,onPointerOver:Ke?ln:void 0,role:`tree`,tabIndex:-1,style:{outline:`none`,position:`relative`},children:[K(`style`,{"data-file-tree-guide-style":`true`,dangerouslySetInnerHTML:{__html:Tn}}),K(`slot`,{name:Ye,"data-type":`header-slot`}),f?K(`div`,{"data-file-tree-search-container":!0,"data-open":lt?`true`:`false`,children:K(`input`,{ref:w,"aria-activedescendant":En,"aria-controls":_t,placeholder:`Search…`,"data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":Re?`true`:void 0,value:ut,onBlur:()=>{d===`retain`&&!Be.current||t.closeSearch()},onFocus:Ve,onPointerDown:Ve,onInput:e=>{Ve();let n=e.currentTarget;t.setSearch(n.value)}})}):null,K(`div`,{ref:C,"data-file-tree-virtualized-scroll":`true`,children:[h&&We&&St.length>0?K(`div`,{"aria-hidden":`true`,"data-file-tree-sticky-overlay":`true`,children:K(`div`,{"data-file-tree-sticky-overlay-content":`true`,style:{height:`${z}px`},children:St.map((e,t)=>Cc(zn,e.row,`sticky:${Rs(e.row)}`,{mode:`sticky`,style:{left:`0`,position:`absolute`,right:`0`,top:`${e.top}px`,zIndex:`${St.length-t}`}}))})}):null,K(`div`,{ref:b,"data-file-tree-virtualized-list":`true`,style:{height:`${V}px`},children:[K(`div`,{"data-file-tree-virtualized-sticky-offset":`true`,"aria-hidden":`true`,style:{height:`${hn}px`}}),K(`div`,{"data-file-tree-virtualized-sticky":`true`,style:{height:`${mn}px`,top:`${gn}px`,bottom:`${_n}px`},children:[wc(Rn,xt,Tt),yn!=null&&bn!=null?Cc(Rn,yn,`parked:${yn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:gt===yn.path?`none`:void 0,position:`absolute`,right:`0`,top:`${bn}px`}}):null,Cn!=null&&wn!=null?Cc(Rn,Cn,`parked-drag:${Cn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:`none`,position:`absolute`,right:`0`,top:`${wn}px`}}):null]})]})]}),Ke?K(`div`,{ref:_,"data-type":`context-menu-anchor`,"data-visible":jn?`true`:`false`,style:Pn,children:[K(`button`,{ref:v,type:`button`,"data-type":Ze,"aria-label":`Options`,"aria-haspopup":`menu`,"aria-expanded":I==null?`false`:`true`,"data-visible":An?`true`:`false`,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(e.preventDefault(),e.stopPropagation(),I!=null){Nt();return}Ln()},tabIndex:-1,style:Fn,children:K(xo,{...at(`file-tree-icon-ellipsis`)})}),I==null?null:K(`slot`,{name:Xe})]}):null,I==null?null:K(`div`,{"data-type":`context-menu-wash`,"aria-hidden":`true`,onMouseDownCapture:e=>{e.preventDefault(),Nt()},onTouchStartCapture:e=>{e.preventDefault(),e.stopPropagation(),Nt()},onTouchMoveCapture:e=>{e.preventDefault(),e.stopPropagation()},onWheelCapture:e=>{e.preventDefault(),e.stopPropagation()}})]})}var Ec={hydrateRoot:(e,t)=>{go(Ga(Tc,t),e)},renderRoot:(e,t)=>{ho(Ga(Tc,t),e)},unmountRoot:e=>{ho(null,e)}};function Dc(e,t){Ec.renderRoot(e,t)}function Oc(e,t){Ec.hydrateRoot(e,t)}function kc(e){Ec.unmountRoot(e)}var Ac=class{#e=new Map;#t=null;clearAll(){for(let e of this.#e.values())e.remove();this.#e.clear()}clearSlotContent(e){let t=this.#n(e);t!=null&&(t.remove(),this.#e.delete(e))}setHost(e){if(this.#t=e,e!=null){this.#i(e);for(let[e,t]of this.#e)this.#r(e,t)}}setSlotContent(e,t){let n=this.#n(e);if(n===t){t!=null&&(this.#e.set(e,t),this.#r(e,t));return}if(n?.remove(),t==null){this.#e.delete(e);return}this.#e.set(e,t),this.#r(e,t)}setSlotHtml(e,t){let n=t?.trim()??``;if(n.length===0){this.setSlotContent(e,null);return}let r=this.#n(e);if(r!=null&&r.innerHTML===n){this.#e.set(e,r),this.#r(e,r);return}let i=document.createElement(`div`);i.innerHTML=n,this.setSlotContent(e,i)}#n(e){let t=this.#e.get(e)??null;if(t!=null)return t;let n=this.#t;if(n==null)return null;for(let t of Array.from(n.children))if(t instanceof HTMLElement&&t.dataset.fileTreeManagedSlot===e)return t;return null}#r(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,this.#t!=null&&t.parentNode!==this.#t&&this.#t.appendChild(t)}#i(e){for(let t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;let e=t.dataset.fileTreeManagedSlot;e==null||this.#e.has(e)||this.#e.set(e,t)}}},jc=`__c`,Mc=`__k`,Nc=`__d`,Pc=`__s`,Fc=/[\s\n\\/='"\0<>]/,Ic=/^(xlink|xmlns|xml)([A-Z])/,Lc=/^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/,Rc=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,zc=new Set([`draggable`,`spellcheck`]);function Bc(e){e.__g===void 0?e[Nc]=!0:e.__g|=8}function Vc(e){e.__g===void 0?e[Nc]=!1:e.__g&=-9}function Hc(e){return e.__g===void 0?!0===e[Nc]:!!(8&e.__g)}var Uc=/["&<]/;function Wc(e){if(e.length===0||!1===Uc.test(e))return e;for(var t=0,n=0,r=``,i=``;n<e.length;n++){switch(e.charCodeAt(n)){case 34:i=`&quot;`;break;case 38:i=`&amp;`;break;case 60:i=`&lt;`;break;default:continue}n!==t&&(r+=e.slice(t,n)),r+=i,t=n+1}return n!==t&&(r+=e.slice(t,n)),r}var Gc={},Kc=new Set(`animation-iteration-count.border-image-outset.border-image-slice.border-image-width.box-flex.box-flex-group.box-ordinal-group.column-count.fill-opacity.flex.flex-grow.flex-negative.flex-order.flex-positive.flex-shrink.flood-opacity.font-weight.grid-column.grid-row.line-clamp.line-height.opacity.order.orphans.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-miterlimit.stroke-opacity.stroke-width.tab-size.widows.z-index.zoom`.split(`.`)),qc=/[A-Z]/g;function Jc(e){var t=``;for(var n in e){var r=e[n];if(r!=null&&r!==``){var i=n[0]==`-`?n:Gc[n]||(Gc[n]=n.replace(qc,`-$&`).toLowerCase()),a=`;`;typeof r!=`number`||i.startsWith(`--`)||Kc.has(i)||(a=`px;`),t=t+i+`:`+r+a}}return t||void 0}function Yc(){this.__d=!0}function Xc(e,t){return{__v:e,context:t,props:e.props,setState:Yc,forceUpdate:Yc,__d:!0,__h:[]}}function Zc(e,t,n){if(!e.s){if(n instanceof Qc){if(!n.s)return void(n.o=Zc.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Zc.bind(null,e,t),Zc.bind(null,e,2));e.s=t,e.v=n;let r=e.o;r&&r(e)}}var Qc=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,i=this.s;if(i){var a=1&i?t:n;if(a){try{Zc(r,1,a(this.v))}catch(e){Zc(r,2,e)}return r}return this}return this.o=function(e){try{var i=e.v;1&e.s?Zc(r,1,t?t(i):i):n?Zc(r,1,n(i)):Zc(r,2,i)}catch(e){Zc(r,2,e)}},r},e}(),$c,el,tl,nl,rl={},il=Array.isArray,al=Object.assign,ol=``,sl=`<!--$s-->`,cl=`<!--/$s-->`;function ll(e,t){var n,r=e.type,i=!0;return e[jc]?(i=!1,(n=e[jc]).state=n[Pc]):n=new r(e.props,t),e[jc]=n,n.__v=e,n.props=e.props,n.context=t,Bc(n),n.state??=rl,n[Pc]??(n[Pc]=n.state),r.getDerivedStateFromProps?n.state=al({},n.state,r.getDerivedStateFromProps(n.props,n.state)):i&&n.componentWillMount?(n.componentWillMount(),n.state=n[Pc]===n.state?n.state:n[Pc]):!i&&n.componentWillUpdate&&n.componentWillUpdate(),tl&&tl(e),n.render(n.props,n.state,t)}function ul(e,t,n,r,i,a,o){if(e==null||!0===e||!1===e||e===ol)return ol;var s=typeof e;if(s!=`object`)return s==`function`?ol:s==`string`?Wc(e):e+ol;if(il(e)){var c,l=ol;i[Mc]=e;for(var u=e.length,d=0;d<u;d++){var f=e[d];if(f!=null&&typeof f!=`boolean`){var p,m=ul(f,t,n,r,i,a,o);typeof m==`string`?l+=m:(c||=Array(u),l&&c.push(l),l=ol,il(m)?(p=c).push.apply(p,m):c.push(m))}}return c?(l&&c.push(l),c):l}if(e.constructor!==void 0)return ol;e.__=i,$c&&$c(e);var h=e.type,g=e.props;if(typeof h==`function`){var _,v,y,b=t;if(h===qa){if(`tpl`in g){for(var x=ol,S=0;S<g.tpl.length;S++)if(x+=g.tpl[S],g.exprs&&S<g.exprs.length){var C=g.exprs[S];if(C==null)continue;typeof C!=`object`||C.constructor!==void 0&&!il(C)?x+=C:x+=ul(C,t,n,r,e,a,o)}return x}if(`UNSTABLE_comment`in g)return`<!--`+Wc(g.UNSTABLE_comment)+`-->`;v=g.children}else{if((_=h.contextType)!=null){var w=t[_.__c];b=w?w.props.value:_.__}var T=h.prototype&&typeof h.prototype.render==`function`;if(T)v=ll(e,b),y=e[jc];else{e[jc]=y=Xc(e,b);for(var E=0;Hc(y)&&E++<25;){Vc(y),tl&&tl(e);try{v=h.call(y,g,b)}catch(t){throw a&&t&&typeof t.then==`function`&&(e._suspended=!0),t}}Bc(y)}if(y.getChildContext!=null&&(t=al({},t,y.getChildContext())),T&&G.errorBoundaries&&(h.getDerivedStateFromError||y.componentDidCatch)){v=v!=null&&v.type===qa&&v.key==null&&v.props.tpl==null?v.props.children:v;try{return ul(v,t,n,r,e,a,!1)}catch(i){return h.getDerivedStateFromError&&(y[Pc]=h.getDerivedStateFromError(i)),y.componentDidCatch&&y.componentDidCatch(i,rl),Hc(y)?(v=ll(e,t),(y=e[jc]).getChildContext!=null&&(t=al({},t,y.getChildContext())),ul(v=v!=null&&v.type===qa&&v.key==null&&v.props.tpl==null?v.props.children:v,t,n,r,e,a,o)):ol}finally{el&&el(e),nl&&nl(e)}}}v=v!=null&&v.type===qa&&v.key==null&&v.props.tpl==null?v.props.children:v;try{var D=ul(v,t,n,r,e,a,o);return el&&el(e),G.unmount&&G.unmount(e),e._suspended?typeof D==`string`?sl+D+cl:il(D)?(D.unshift(sl),D.push(cl),D):D.then(function(e){return sl+e+cl}):D}catch(i){if(!a&&o&&o.onError){var O=function i(s){return o.onError(s,e,function(e,s){try{return ul(e,t,n,r,s,a,o)}catch(e){return i(e)}})}(i);if(O!==void 0)return O;var ee=G.__e;return ee&&ee(i,e),ol}if(!a||!i||typeof i.then!=`function`)throw i;return i.then(function i(){try{var s=ul(v,t,n,r,e,a,o);return e._suspended?sl+s+cl:s}catch(e){if(!e||typeof e.then!=`function`)throw e;return e.then(i)}})}}var k,A=`<`+h,j=ol;for(var M in g){var N=g[M];if(typeof(N=fl(N)?N.value:N)!=`function`||M===`class`||M===`className`){switch(M){case`children`:k=N;continue;case`key`:case`ref`:case`__self`:case`__source`:continue;case`htmlFor`:if(`for`in g)continue;M=`for`;break;case`className`:if(`class`in g)continue;M=`class`;break;case`defaultChecked`:M=`checked`;break;case`defaultSelected`:M=`selected`;break;case`defaultValue`:case`value`:switch(M=`value`,h){case`textarea`:k=N;continue;case`select`:r=N;continue;case`option`:r!=N||`selected`in g||(A+=` selected`)}break;case`dangerouslySetInnerHTML`:j=N&&N.__html;continue;case`style`:typeof N==`object`&&(N=Jc(N));break;case`acceptCharset`:M=`accept-charset`;break;case`httpEquiv`:M=`http-equiv`;break;default:if(Ic.test(M))M=M.replace(Ic,`$1:$2`).toLowerCase();else{if(Fc.test(M))continue;M[4]!==`-`&&!zc.has(M)||N==null?n?Rc.test(M)&&(M=M===`panose1`?`panose-1`:M.replace(/([A-Z])/g,`-$1`).toLowerCase()):Lc.test(M)&&(M=M.toLowerCase()):N+=ol}}N!=null&&!1!==N&&(A=!0===N||N===ol?A+` `+M:A+` `+M+`="`+(typeof N==`string`?Wc(N):N+ol)+`"`)}}if(Fc.test(h))throw Error(h+` is not a valid HTML tag name in `+A+`>`);if(j||(typeof k==`string`?j=Wc(k):k!=null&&!1!==k&&!0!==k&&(j=ul(k,t,h===`svg`||h!==`foreignObject`&&n,r,e,a,o))),el&&el(e),nl&&nl(e),!j&&dl.has(h))return A+`/>`;var te=`</`+h+`>`,ne=A+`>`;return il(j)?[ne].concat(j,[te]):typeof j==`string`?ne+j+te:[ne,j,te]}var dl=new Set([`area`,`base`,`br`,`col`,`command`,`embed`,`hr`,`img`,`input`,`keygen`,`link`,`meta`,`param`,`source`,`track`,`wbr`]);function fl(e){return typeof e==`object`&&!!e&&typeof e.peek==`function`&&`value`in e}var pl=0;function ml(e){return e!=null&&e.length>0?e:(pl+=1,`pst_ft_${pl}`)}function hl({initialVisibleRowCount:e,itemHeight:t}){return e==null?420:Math.max(0,e)*(t??Di)}function gl(e){if(typeof document>`u`)return;let t=document.createElement(`div`);t.innerHTML=e;let n=t.querySelector(`svg`);return n instanceof SVGElement?n:void 0}function _l(e){return e.querySelector(`#file-tree-icon-chevron`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-file`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-dot`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-lock`)instanceof SVGElement}function vl(e){return Array.from(e.children).filter(e=>e instanceof SVGElement)}var yl=class{static LoadedCustomComponent=!0;#e;#t;#n;#r;#i;#a;#o;#s;#c;#l=new Ac;#u;#d;#f;#p;#m;#h;#g;#_;#v;#y=null;#b;#x=!1;#S=!1;constructor(e){let{composition:t,density:n,fileTreeSearchMode:r,gitStatus:i,id:a,initialSearchQuery:o,icons:s,itemHeight:c,onSearchChange:l,onSelectionChange:u,overscan:d,renderRowDecoration:f,renaming:p,search:m,searchBlurBehavior:h,searchFakeFocus:g,stickyFolders:_,unsafeCSS:v,initialVisibleRowCount:y,...b}=e;this.#e=t,this.#n=ml(a),this.#p=ka(i),this.#m=s,this.#h=v,this.#r=u,this.#i=f,this.#a=p!=null&&p!==!1,this.#o=h,this.#s=m===!0,this.#c=g===!0,this.#u=Ei(n,c),this.#d={itemHeight:this.#u.itemHeight,overscan:d,stickyFolders:_,initialVisibleRowCount:y},this.#t=new wa({...b,fileTreeSearchMode:r,initialSearchQuery:o,onSearchChange:l,renaming:p}),this.#v=this.#t.getSelectionVersion(),this.#y=this.#r==null?null:this.subscribe(()=>{this.#D()})}unmount(){this.#b!=null&&(kc(this.#b),delete this.#b.dataset.fileTreeVirtualizedWrapper,this.#b=void 0),this.#l.clearAll(),this.#l.setHost(null),this.#f!=null&&(delete this.#f.dataset.fileTreeVirtualized,this.#I(this.#f),this.#f=void 0)}cleanUp(){this.unmount(),this.#y?.(),this.#y=null,this.#t.destroy()}getFileTreeContainer(){return this.#f}getItem(e){return this.#t.getItem(e)}getFocusedItem(){return this.#t.getFocusedItem()}getFocusedPath(){return this.#t.getFocusedPath()}getSelectedPaths(){return this.#t.getSelectedPaths()}getComposition(){return this.#e}getItemHeight(){return this.#u.itemHeight}getDensityFactor(){return this.#u.factor}subscribe(e){let t=!1;return this.#t.subscribe(()=>{if(!t){t=!0;return}e()})}focusPath(e){this.#t.focusPath(e)}scrollToPath(e,t){this.#t.scrollToPath(e,t)}focusNearestPath(e){return this.#t.focusNearestPath(e)}add(e){this.#t.add(e)}batch(e){this.#t.batch(e)}move(e,t,n){this.#t.move(e,t,n)}onMutation(e,t){return this.#t.onMutation(e,t)}setSearch(e){this.#t.setSearch(e)}openSearch(e){this.#t.openSearch(e)}closeSearch(){this.#t.closeSearch()}isSearchOpen(){return this.#t.isSearchOpen()}getSearchValue(){return this.#t.getSearchValue()}getSearchMatchingPaths(){return this.#t.getSearchMatchingPaths()}focusNextSearchMatch(){this.#t.focusNextSearchMatch()}focusPreviousSearchMatch(){this.#t.focusPreviousSearchMatch()}startRenaming(e,t){return this.#t.startRenaming(e,t)}remove(e,t){this.#t.remove(e,t)}resetPaths(e,t){this.#t.resetPaths(e,t)}setComposition(e){this.#e=e;let t=this.#T();t!=null&&(this.#O(),Dc(t.wrapper,this.#w()))}setGitStatus(e){this.#p=ka(e,this.#p);let t=this.#T();t!=null&&Dc(t.wrapper,this.#w())}setIcons(e){this.#m=e;let t=this.#T();t!=null&&(this.#E(t.host,t.wrapper),Dc(t.wrapper,this.#w()))}hydrate({fileTreeContainer:e}){let t=this.#P(e),n=this.#N(t);this.#O(),Oc(n,this.#w())}render({containerWrapper:e,fileTreeContainer:t}){let n=this.#P(t??this.#f,e),r=this.#N(n);this.#O(),Dc(r,this.#w())}#C(){return{initialViewportHeight:hl({initialVisibleRowCount:this.#d.initialVisibleRowCount,itemHeight:this.#d.itemHeight}),itemHeight:this.#d.itemHeight,overscan:this.#d.overscan,stickyFolders:this.#d.stickyFolders}}#w(){return{composition:this.#e,controller:this.#t,gitStatusByPath:this.#p?.statusByPath,ignoredGitDirectories:this.#p?.ignoredDirectoryPaths,directoriesWithGitChanges:this.#p?.directoriesWithChanges,icons:this.#m,instanceId:this.#n,renamingEnabled:this.#a,renderRowDecoration:this.#i,searchBlurBehavior:this.#o,searchEnabled:this.#s,searchFakeFocus:this.#c,slotHost:this.#l,...this.#C()}}#T(){let e=this.#f,t=this.#b;return e==null||t==null?null:{host:e,wrapper:t}}#E(e,t){let n=e.shadowRoot;n!=null&&(this.#k(n),this.#A(n)),this.#j(t)}#D(){let e=this.#r;if(e==null)return;let t=this.#t.getSelectionVersion();t!==this.#v&&(this.#v=t,e(this.#t.getSelectedPaths()))}#O(){let e=this.#e?.header?.render;if(e!=null){this.#l.setSlotContent(Ye,e());return}this.#l.setSlotHtml(Ye,this.#e?.header?.html??null)}#k(e){let t=vl(e).find(e=>_l(e)),n=gl(ge(Ce(this.#m).set));n!=null&&(t!=null&&t.outerHTML===n.outerHTML||(t==null?e.prepend(n):t.replaceWith(n)))}#A(e){let t=vl(e),n=t.find(e=>_l(e)),r=t.filter(e=>e!==n),i=Ce(this.#m).spriteSheet?.trim()??``;if(i.length===0){for(let e of r)e.remove();return}let a=gl(i);if(a==null){for(let e of r)e.remove();return}if(!(r.length===1&&r[0].outerHTML===a.outerHTML)){for(let e of r)e.remove();e.appendChild(a)}}#j(e){let t=Ce(this.#m);t.colored&&ke(t.set)?e.dataset.fileTreeColoredIcons=`true`:delete e.dataset.fileTreeColoredIcons}#M(e){let t=e.querySelector(`style[${Ge}]`);if(this.#g==null&&t instanceof HTMLStyleElement&&(this.#g=t),this.#h==null||this.#h===``){this.#g?.remove(),this.#g=void 0,this.#_=void 0;return}this.#g?.parentNode===e&&this.#_===this.#h||(this.#g??=document.createElement(`style`),this.#g.setAttribute(Ge,``),this.#g.parentNode!==e&&e.appendChild(this.#g),this.#g.textContent=ji(this.#h),this.#_=this.#h)}#N(e){if(this.#b!=null)return this.#b;let t=e.shadowRoot;if(t==null)throw Error(`FileTree requires a shadow root`);let n=Array.from(t.children).filter(e=>e instanceof HTMLDivElement&&typeof e.dataset.fileTreeId==`string`&&e.dataset.fileTreeId.length>0),r=n.find(e=>e.dataset.fileTreeId===this.#n)??n[0];return r!=null&&(this.#n=r.dataset.fileTreeId??this.#n),this.#b=r??document.createElement(`div`),this.#b.dataset.fileTreeId=this.#n,this.#b.dataset.fileTreeVirtualizedWrapper=`true`,this.#E(e,this.#b),this.#b.parentNode!==t&&t.appendChild(this.#b),this.#b}#P(e,t){let n=e??this.#f??document.createElement(`file-tree-container`);t!=null&&n.parentNode!==t&&t.appendChild(n);let r=n.shadowRoot??n.attachShadow({mode:`open`});return Li(n,r),this.#M(r),n.dataset.fileTreeVirtualized=`true`,n.style.display=`flex`,this.#F(n),this.#l.setHost(n),this.#f=n,n}#F(e){e.style.getPropertyValue(`--trees-item-height`)===``&&(e.style.setProperty(`--trees-item-height`,`${String(this.#u.itemHeight)}px`),this.#x=!0),e.style.getPropertyValue(`--trees-density-override`)===``&&(e.style.setProperty(`--trees-density-override`,String(this.#u.factor)),this.#S=!0)}#I(e){this.#x&&=(e.style.removeProperty(`--trees-item-height`),!1),this.#S&&=(e.style.removeProperty(`--trees-density-override`),!1)}},X=g(p(),1),bl=typeof window>`u`?X.useEffect:X.useLayoutEffect;function xl({file:e,options:t,lineAnnotations:n,selectedLines:r,prerenderedHTML:i,metrics:a,hasGutterRenderUtility:o,hasCustomHeader:s,disableWorkerPool:c,contentEditable:l}){let u=ie(),d=r!==void 0,f=(0,X.useContext)(Me),p=I(),m=(0,X.useRef)(null),h=se(r=>{if(r!=null){if(m.current!=null)throw Error(`File: An instance should not already exist when a node is created`);u==null?m.current=new M(Sl({controlledSelection:d,contentEditable:l,hasCustomHeader:s,hasEditor:p!==void 0,hasGutterRenderUtility:o,options:t}),c?void 0:f,!0):m.current=new A(Sl({controlledSelection:d,contentEditable:l,hasCustomHeader:s,hasEditor:p!==void 0,hasGutterRenderUtility:o,options:t}),u,a,c?void 0:f,!0),m.current.hydrate({file:e,fileContainer:r,lineAnnotations:n,prerenderedHTML:i})}else{if(m.current==null)throw Error(`File: A File instance should exist when unmounting`);m.current.cleanUp(),m.current=null}});return bl(()=>{if(m.current==null)return;let i=Sl({controlledSelection:d,contentEditable:l,hasCustomHeader:s,hasEditor:p!==void 0,hasGutterRenderUtility:o,options:t}),a=!ve(m.current.options,i);m.current.setOptions(i),m.current.render({file:e,lineAnnotations:n,forceRender:a}),r!==void 0&&m.current.setSelectedLines(r)}),bl(()=>{if(l&&m.current!=null){if(p===void 0)throw Error(`File: Editor is not attached`);return p.edit(m.current)}},[l,p]),{ref:h,getHoveredLine:(0,X.useCallback)(()=>m.current?.getHoveredLine(),[])}}function Sl({options:e,controlledSelection:t,contentEditable:n,hasCustomHeader:r,hasEditor:i,hasGutterRenderUtility:a}){let o=n&&i,s=t||a||r;if(!s&&!o)return e;let c={...e};return s&&(c={...c,controlledSelection:t,renderCustomHeader:r?Fe:e?.renderCustomHeader,renderGutterUtility:a?Fe:e?.renderGutterUtility}),o&&(c={...c,useTokenTransformer:!0}),c}var Z=g(n(),1);function Cl({file:e,lineAnnotations:t,selectedLines:n,options:r,metrics:i,className:a,style:o,renderAnnotation:s,renderCustomHeader:c,renderHeaderPrefix:l,renderHeaderMetadata:u,prerenderedHTML:d,renderGutterUtility:f,disableWorkerPool:p=!1,contentEditable:m=!1}){let{ref:h,getHoveredLine:g}=xl({file:e,options:r,metrics:i,lineAnnotations:t,selectedLines:n,prerenderedHTML:d,hasGutterRenderUtility:f!=null,hasCustomHeader:c!=null,disableWorkerPool:p,contentEditable:m});return(0,Z.jsx)(ce,{ref:h,className:a,style:o,children:re(O({file:e,renderAnnotation:s,renderCustomHeader:c,renderHeaderPrefix:l,renderHeaderMetadata:u,renderGutterUtility:f,lineAnnotations:t,getHoveredLine:g}),d)})}var wl=100,Tl=class{#e=[];#t=[];#n;constructor(e){this.#n=Math.max(1,e?.maxEntries??wl)}get canUndo(){return this.#e.length>0}get canRedo(){return this.#t.length>0}clear(){this.#e.length=0,this.#t.length=0}clearRedo(){this.#t.length=0}push(e){this.#e.push(e),this.clearRedo(),this.#e.length>this.#n&&this.#e.shift()}setLastUndoSelectionsAfter(e){let t=this.#e[this.#e.length-1];t!==void 0&&(t.selectionsAfter=e.map(e=>({...e})))}setLastUndoLineAnnotations(e,t){let n=this.#e[this.#e.length-1];n!==void 0&&(n.lineAnnotationsBefore=e.slice(),n.lineAnnotationsAfter=t.slice())}peekUndo(){return this.#e[this.#e.length-1]}replaceLastUndo(e){if(this.#e.length===0){this.push(e);return}this.#e[this.#e.length-1]=e,this.clearRedo()}popUndoToRedo(){let e=this.#e.pop();if(e!==void 0)return this.#t.push(e),e}popRedoToUndo(){let e=this.#t.pop();if(e!==void 0)return this.#e.push(e),e}};function El(e,t,n,r,i,a,o,s){let c=[...t].sort((e,t)=>e.start-t.start),l=[];for(let t=0,n=0;t<c.length;t++){let r=c[t],i=e.getTextSlice(r.start,r.end),a=r.start+n;l.push({start:a,end:a+r.text.length,text:i}),n+=r.text.length-(r.end-r.start)}return{forwardEdits:c.map(e=>({...e})),inverseEdits:l,versionBefore:n,versionAfter:r,selectionsBefore:i?.map(e=>({...e})),selectionsAfter:a?.map(e=>({...e})),lineAnnotationsBefore:o?.slice(),lineAnnotationsAfter:s?.slice()}}function Dl(e,t){if(e===void 0||e.forwardEdits.length===0||e.forwardEdits.length!==e.inverseEdits.length||e.forwardEdits.length!==t.forwardEdits.length||t.forwardEdits.length!==t.inverseEdits.length)return!1;let n;for(let r=0;r<e.forwardEdits.length;r++){let i=e.forwardEdits[r],a=e.inverseEdits[r],o=t.forwardEdits[r],s=t.inverseEdits[r],c=Al(o.start,e.forwardEdits),l=i.start<=i.end&&i.text.length>0&&!i.text.includes(`
`)&&!a.text.includes(`
`),u=o.start===o.end&&o.text.length>0&&s.text.length===0;if(l&&u){if(c!==i.end||(n??=`insert`,n!==`insert`))return!1;continue}let d=i.text.length===0&&i.end>i.start&&a.text.length>0,f=o.text.length===0&&o.end>o.start&&s.text.length>0;if(d&&f){if(c===i.end){if(n??=`delete`,n!==`delete`)return!1;continue}if(c+(o.end-o.start)!==i.start||(n??=`backspace`,n!==`backspace`))return!1;continue}return!1}return n!==void 0}function Ol(e,t){let n=[],r=[];for(let i=0;i<e.forwardEdits.length;i++){let a=e.forwardEdits[i],o=e.inverseEdits[i],s=t.forwardEdits[i],c=t.inverseEdits[i],l=Al(s.start,e.forwardEdits);if(a.text.length>0){n.push({start:a.start,end:a.end,text:a.text+s.text}),r.push(o.text);continue}if(l===a.end){n.push({start:a.start,end:l+(s.end-s.start),text:``}),r.push(o.text+c.text);continue}n.push({start:Math.min(a.start,l),end:a.end,text:``}),r.push(c.text+o.text)}return{forwardEdits:n,inverseEdits:kl(n,r),versionBefore:e.versionBefore,versionAfter:t.versionAfter,selectionsBefore:e.selectionsBefore?.slice(),selectionsAfter:t.selectionsAfter?.slice(),lineAnnotationsBefore:e.lineAnnotationsBefore?.slice(),lineAnnotationsAfter:t.lineAnnotationsAfter?.slice()}}function kl(e,t){let n=[];for(let r=0,i=0;r<e.length;r++){let a=e[r],o=a.start+i;n.push({start:o,end:o+a.text.length,text:t[r]}),i+=a.text.length-(a.end-a.start)}return n}function Al(e,t){let n=e;for(let e of t){let t=e.end-e.start,r=e.text.length,i=r-t;if(!(n<e.start)){if(n>=e.start+r){n-=i;continue}n=e.start+Math.min(n-e.start,t)}}return n}var jl=1e5,Ml=`\`~!@#$%^&*()-=+[{]}\\|;:'",.<>/?`,Nl=class{static Original=0;static Added=1;constructor(e,t,n,r,i){this.source=e,this.offset=t,this.length=n,this.lineOffsetStart=r,this.lineOffsetEnd=i}get lineBreakCount(){return this.lineOffsetEnd-this.lineOffsetStart}},Pl=class{lineOffsets;constructor(e){this.text=e,this.lineOffsets=ze(e)}append(e){let t=this.text.length,n=ze(e);for(let e=1;e<n.length;e++)this.lineOffsets.push(t+n[e]);return this.text+=e,t}},Fl=class{left=null;right=null;parent=null;constructor(e,t=e.length,n=e.lineBreakCount){this.piece=e,this.subtreeLength=t,this.subtreeLineBreakCount=n}updateSubtreeLength(){this.subtreeLength=(this.left?.subtreeLength??0)+this.piece.length+(this.right?.subtreeLength??0),this.subtreeLineBreakCount=(this.left?.subtreeLineBreakCount??0)+this.piece.lineBreakCount+(this.right?.subtreeLineBreakCount??0)}},Il=class{#e;#t=new Pl(``);#n=null;#r=[];#i=0;#a=0;#o=null;#s=null;constructor(e){this.#e=new Pl(e),this.#y([this.#_(Nl.Original,0,e.length)])}get lineCount(){return this.#a}getText(e){if(e===void 0)return this.#m();let t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this.getTextSlice(t,n)}getLineText(e,t=!1){if(this.#o!==null&&this.#o[0]===e&&this.#o[1]===t)return this.#o[2];let n=this.#d(e);if(n===void 0)throw Error(`Line index out of range: ${e}`);let r=this.getTextSlice(n[0],n[1],!t);return this.#o=[e,t,r],this.#s=[e,t,r.length],r}getLineLength(e,t=!1){let n=this.#s,r=this.#o;if(n!==null&&n[0]===e&&n[1]===t)return n[2];if(r!==null&&r[0]===e&&r[1]===t){let n=r[2].length;return this.#s=[e,t,n],n}let i=this.#d(e);if(i===void 0)throw Error(`Line index out of range: ${e}`);let[a,o]=i,s=o-a;if(!t)for(;s>0&&Ll(this.charAt(a+s-1).charCodeAt(0));)s--;return this.#s=[e,t,s],s}getTextSlice(e,t,n=!1){if(e>=t)return``;let r=Rl(e,0,this.#i),i=Rl(t,r,this.#i);if(r>=i)return``;let a=this.#l(r);if(a===void 0)return``;let o=[],[s,c]=a,l=i-r;for(;s!==null&&l>0;){let e=Math.min(s.piece.length-c,l),t=this.#g(s.piece.source),r=s.piece.offset+c,i=r+e;if(n)for(;i>r&&Ll(t.text.charCodeAt(i-1));)i--;o.push(t.text.slice(r,i)),l-=e,c=0,s=this.#u(s)}return o.join(``)}charAt(e){let t=this.#l(e);if(t===void 0)return``;let[n,r]=t;return this.#g(n.piece.source).text.charAt(n.piece.offset+r)}includes(e){if(e.length===0)return!0;let t=zl(e),n=0,r=!1;return this.#h(i=>{for(let a=i.start;a<i.end;a++){let o=i.text.charCodeAt(a);for(;n>0&&o!==e.charCodeAt(n);)n=t[n-1];if(o===e.charCodeAt(n)&&n++,n===e.length)return r=!0,!1}return!0}),r}findNextNonOverlappingSubstring(e,t){if(e.length===0||e.length>this.#i)return;let n=Bl(t,this.#i),r=n.reduce((e,[,t])=>Math.max(e,t),0),i=zl(e),a=0,o=0,s,c;return this.#h(t=>{for(let l=t.start;l<t.end;l++){let u=t.text.charCodeAt(l);for(;a>0&&u!==e.charCodeAt(a);)a=i[a-1];if(u===e.charCodeAt(a)&&a++,a===e.length){let t=o-e.length+1;if(!Vl(n,t,t+e.length)){if(t>=r)return c=t,!1;s??=t}a=i[a-1]}o++}return!0}),c??s}search(e){if(e.text.length===0||this.#i===0||e.text.includes(`
`)||e.text.includes(`\r`)||e.regex&&(e.text.includes(`\\n`)||e.text.includes(`\\r`)))return[];let t;try{t=Jl(e.text,e.regex,e.caseSensitive)}catch{return[]}return this.#c(t,e.wholeWord,jl)}#c(e,t,n){let r=[],i=this.#i,a=e=>this.charAt(e);for(let o=0;o<this.#a;o++){let s=this.getLineText(o),c=this.offsetAt({line:o,character:0}),l=new RegExp(e.source,e.flags);l.lastIndex=0;let u;for(;(u=l.exec(s))!==null;){let e=u.index,o=u[0];if(o.length===0){l.lastIndex=Zl(s,e);continue}let d=c+e;if((!t||Kl(d,o.length,i,a))&&(r.push([d,d+o.length]),r.length>=n))return r;e===l.lastIndex&&(l.lastIndex=Zl(s,e))}}return r}insert(e,t){if(e.length===0)return;let n=Rl(t,0,this.#i),r=this.#t.append(e),i=this.#_(Nl.Added,r,e.length),a=this.#v(),o=[],s=0,c=!1;for(let e of a){let t=s+e.length;if(!c&&n<=t){let t=n-s;t>0&&o.push(this.#_(e.source,e.offset,t)),o.push(i),t<e.length&&o.push(this.#_(e.source,e.offset+t,e.length-t)),c=!0}else o.push(e);s=t}c||o.push(i),this.#y(o),this.#o=null,this.#s=null}delete(e,t){if(t<=0||this.#i===0)return;let n=Rl(e,0,this.#i),r=Rl(n+t,n,this.#i);if(n===r)return;let i=[],a=0;for(let e of this.#v()){let t=a,o=a+e.length,s=Rl(n-t,0,e.length),c=Rl(o-r,0,e.length);s>0&&i.push(this.#_(e.source,e.offset,s)),c>0&&i.push(this.#_(e.source,e.offset+e.length-c,c)),a=o}this.#y(i),this.#o=null,this.#s=null}applyEdits(e){if(e.length===0)return;let t=0,n=0,r=0,i=this.#v(),a=e.map(e=>e.text.length===0?void 0:this.#_(Nl.Added,this.#t.append(e.text),e.text.length)),o=[],s=()=>{let e=i[t];e!==void 0&&(n+=e.length,t++)},c=(e,r)=>{let a=Rl(e,0,this.#i),c=Rl(r,a,this.#i);for(;t<i.length&&n+i[t].length<=a;)s();for(;t<i.length&&a<c;){let e=i[t],r=n+e.length,l=Rl(a-n,0,e.length),u=Math.min(r,c),d=u-(n+l);d>0&&o.push(l===0&&d===e.length?e:this.#_(e.source,e.offset+l,d)),a=u,a>=r&&s()}};for(let t=0;t<e.length;t++){let n=e[t],i=Rl(n.start,r,this.#i),s=Rl(n.end,i,this.#i);c(r,i);let l=a[t];l!==void 0&&o.push(l),r=s}c(r,this.#i),this.#y(o),this.#o=null,this.#s=null}positionAt(e){let t=Rl(e,0,this.#i);if(this.#i===0)return{line:0,character:0};let n=this.#f(t);return{line:n,character:t-(n===0?0:this.#p(n-1))}}positionsAt(e){let t=Array.from({length:e.length});if(e.length===0)return t;if(this.#i===0)return t.fill({line:0,character:0});for(let n=0;n<e.length;n++)t[n]=this.positionAt(e[n]);return t}offsetAt(e){if(e.line<0||this.#i===0)return 0;if(e.line>=this.#a)throw Error(`Line index out of range: ${e.line}`);let t=this.#d(e.line);if(t===void 0)throw Error(`Line index out of range: ${e.line}`);let n=Rl(e.character,0,t[1]-t[0]);return t[0]+n}#l(e){if(e<0||e>=this.#i)return;let t=this.#n,n=e;for(;t!==null;){let e=t.left?.subtreeLength??0;if(n<e){t=t.left;continue}if(n-=e,n<t.piece.length)return[t,n];n-=t.piece.length,t=t.right}}#u(e){if(e.right!==null){let t=e.right;for(;t.left!==null;)t=t.left;return t}let t=e;for(;t.parent!==null&&t===t.parent.right;)t=t.parent;return t.parent}#d(e){if(e<0)throw Error(`Line index out of range: ${e}`);if(this.#i===0){if(e===0)return[0,0];throw Error(`Line index out of range: ${e}`)}if(e>=this.#a)throw Error(`Line index out of range: ${e}`);return[e===0?0:this.#p(e-1),e<this.#a-1?this.#p(e):this.#i]}#f(e){let t=this.#n,n=Rl(e,0,this.#i),r=0;for(;t!==null;){let e=t.left?.subtreeLength??0;if(n<e){t=t.left;continue}if(r+=t.left?.subtreeLineBreakCount??0,n-=e,n<=t.piece.length){let e=this.#g(t.piece.source);return r+=Ul(e.lineOffsets,t.piece.offset+n)-t.piece.lineOffsetStart,r}r+=t.piece.lineBreakCount,n-=t.piece.length,t=t.right}return this.#a-1}#p(e){let t=this.#n,n=e,r=0;for(;t!==null;){let e=t.left?.subtreeLineBreakCount??0;if(n<e){t=t.left;continue}let i=t.left?.subtreeLength??0;if(r+=i,n-=e,n<t.piece.lineBreakCount){let e=this.#g(t.piece.source).lineOffsets[t.piece.lineOffsetStart+n];return r+(e-t.piece.offset)}r+=t.piece.length,n-=t.piece.lineBreakCount,t=t.right}return this.#i}#m(){let e=[];return this.#h(t=>{e.push(t.text.slice(t.start,t.end))}),e.join(``)}#h(e){this.#x(this.#n,t=>{let n=this.#g(t.piece.source);return e({text:n.text,lineOffsets:n.lineOffsets,lineOffsetStart:t.piece.lineOffsetStart,lineOffsetEnd:t.piece.lineOffsetEnd,start:t.piece.offset,end:t.piece.offset+t.piece.length})})}#g(e){return e===Nl.Original?this.#e:this.#t}#_(e,t,n){let r=this.#g(e);return new Nl(e,t,n,Ul(r.lineOffsets,t),Ul(r.lineOffsets,t+n))}#v(){return this.#r}#y(e){let t=Hl(e);this.#r=t;let n=0,r=0;for(let e of t)n+=e.length,r+=e.lineBreakCount;this.#n=this.#b(t,0,t.length,null),this.#i=n,this.#a=r+1}#b(e,t,n,r){if(t>=n)return null;let i=t+Math.floor((n-t)/2),a=new Fl(e[i]);return a.parent=r,a.left=this.#b(e,t,i,a),a.right=this.#b(e,i+1,n,a),a.updateSubtreeLength(),a}#x(e,t){return e===null?!0:!this.#x(e.left,t)||t(e)===!1?!1:this.#x(e.right,t)}};function Ll(e){return e===10||e===13}function Rl(e,t,n){return Math.min(Math.max(e,t),n)}function zl(e){let t=Array.from({length:e.length}).fill(0),n=0;for(let r=1;r<e.length;r++){let i=e.charCodeAt(r);for(;n>0&&i!==e.charCodeAt(n);)n=t[n-1];i===e.charCodeAt(n)&&n++,t[r]=n}return t}function Bl(e,t){let n=[];for(let[r,i]of e){let e=Rl(r,0,t),a=Rl(i,e,t);e<a&&n.push([e,a])}n.sort((e,t)=>e[0]-t[0]);let r=[];for(let e of n){let t=r[r.length-1];if(t!==void 0&&e[0]<=t[1]){t[1]=Math.max(t[1],e[1]);continue}r.push(e)}return r}function Vl(e,t,n){let r=0,i=e.length;for(;r<i;){let n=r+Math.floor((i-r)/2);e[n][1]<=t?r=n+1:i=n}let a=e[r];return a!==void 0&&a[0]<n}function Hl(e){let t=[];for(let n of e){if(n.length===0)continue;let e=t[t.length-1];if(e!==void 0&&e.source===n.source&&e.offset+e.length===n.offset){t[t.length-1]=new Nl(e.source,e.offset,e.length+n.length,e.lineOffsetStart,n.lineOffsetEnd);continue}t.push(n)}return t}function Ul(e,t){let n=0,r=e.length;for(;n<r;){let i=n+Math.floor((r-n)/2);e[i]<=t?n=i+1:r=i}return n}function Wl(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function Gl(e){if(e<=32||e===127)return!0;let t=String.fromCharCode(e);return Ml.includes(t)}function Kl(e,t,n,r){let i=e<=0||Gl(ql(r,e-1)),a=e+t>=n||Gl(ql(r,e+t));return i&&a}function ql(e,t){let n=e(t);return n.length===0?0:n.charCodeAt(0)}function Jl(e,t,n){let r=t?e:Wl(e);return new RegExp(r,`g${n?``:`i`}${t?`m`:``}`)}function Yl(e,t){return e.replace(/\$([$&]|\d+)/g,(e,n)=>n===`$`?`$`:n===`&`?t[0]??``:t[Number(n)]??``)}function Xl(e,t,n,r,i,a){if(!r.regex)return r.replaceText;let o=e(i),s=n(o.line),c=i-t({line:o.line,character:0}),l=s.slice(c,c+(a-i)),u;try{u=Jl(r.text,!0,r.caseSensitive)}catch{return r.replaceText}let d=new RegExp(u.source,u.flags.replace(`g`,``)).exec(l);return d===null||d[0].length!==l.length?r.replaceText:Yl(r.replaceText,d)}function Zl(e,t){if(t+1<e.length){let n=e.charCodeAt(t),r=e.charCodeAt(t+1);if(n>=55296&&n<=56319&&r>=56320&&r<=57343)return t+2}return t+1}var Ql=class{#e;#t;#n;#r;#i;constructor(e,t,n=`plaintext`,r=0,i=new Tl){this.#e=new URL(e,`file://`).toString(),this.#t=n,this.#n=r,this.#r=new Il(t),this.#i=i}get uri(){return this.#e}get languageId(){return this.#t}get version(){return this.#n}get lineCount(){return this.#r.lineCount}get canUndo(){return this.#i.canUndo}get canRedo(){return this.#i.canRedo}positionAt(e){return this.#r.positionAt(e)}positionsAt(e){return this.#r.positionsAt(e)}offsetAt(e){return this.#r.offsetAt(this.normalizePosition(e))}getText(e){return this.#r.getText(e)}getLineText(e,t){return this.#r.getLineText(e,t)}getLineLength(e,t){return this.#r.getLineLength(e,t)}charAt(e){return typeof e==`number`?this.#r.charAt(e):this.#r.charAt(this.offsetAt(e))}getTextSlice(e,t){return this.#r.getTextSlice(e,t)}findNextNonOverlappingSubstring(e,t){return this.#r.findNextNonOverlappingSubstring(e,t)}search(e){return this.#r.search(e)}applyEdits(e,t=!1,n,r){if(e.length!==0)return this.applyResolvedEdits(e.map(e=>this.#a(e)),t,n,r)}applyResolvedEdits(e,t=!1,n,r){if(e.length===0)return;let i=this.#o(e);if(t){let e=El(this,i,this.#n,this.#n+1,n,r),t=this.#i.peekUndo(),a=this.#s(i);return this.#n++,a.lineDelta===0&&Dl(t,e)?this.#i.replaceLastUndo(Ol(t,e)):this.#i.push(e),a}let a=this.#s(i);return this.#n++,a}setLastUndoSelectionsAfter(e){this.#i.setLastUndoSelectionsAfter(e)}setLastUndoLineAnnotations(e,t){this.#i.setLastUndoLineAnnotations(e,t)}undo(){let e=this.#i.popUndoToRedo();if(e===void 0)return;let t=this.#s(e.inverseEdits);if(t!==void 0)return this.#n=e.versionBefore,[t,e.selectionsBefore?.slice(),e.lineAnnotationsBefore?.slice()]}redo(){let e=this.#i.popRedoToUndo();if(e===void 0)return;let t=this.#s(e.forwardEdits);if(t!==void 0)return this.#n=e.versionAfter,[t,e.selectionsAfter?.slice(),e.lineAnnotationsAfter?.slice()]}normalizePosition(e){let t=Math.max(0,Math.min(e.line,this.lineCount-1));return{line:t,character:Math.max(0,Math.min(e.character,this.getLineLength(t)))}}#a(e){let t=this.offsetAt(e.range.start),n=this.offsetAt(e.range.end);if(t>n){let e=t;t=n,n=e}return{start:t,end:n,text:e.newText}}#o(e){let t=[...e].sort((e,t)=>e.start-t.start);for(let e=0;e<t.length-1;e++)if(t[e].end>t[e+1].start)throw Error(`Overlapping text edits are not supported`);return t}#s(e){let t=this.#r.lineCount,n=this.positionsAt(e.flatMap(e=>[e.start,e.end])),r=this.#c(e,n),i=n[0];this.#r.applyEdits(e);let a=this.#r.lineCount;return{startLine:r.startLine,startCharacter:i.character,endLine:Math.min(r.endLine,Math.max(0,a-1)),previousLineCount:t,lineCount:a,lineDelta:a-t,changedLineRanges:r.ranges}}#c(e,t){let n=1/0,r=0,i=0,a=[];for(let o=0;o<e.length;o++){let s=e[o],c=t[o*2].line,l=t[o*2+1].line,u=$l(s.text),d=c+i,f=d+u;n=Math.min(n,c),r=Math.max(r,f);let p=a[a.length-1];p!==void 0&&d<=p[1]+1?a[a.length-1]=[p[0],Math.max(p[1],f)]:a.push([d,f]),i+=u-(l-c)}return n===1/0?{startLine:0,endLine:0,ranges:[[0,0]]}:{startLine:n,endLine:r,ranges:a}}};function $l(e){let t=0;for(let n=0;n<e.length;n++)e.charCodeAt(n)===10&&t++;return t}var eu=void 0,tu=void 0,nu=void 0;function ru(){return eu??=/macOS|MacIntel|iPhone|iPad|iPod/i.test(cu())}function iu(){return tu??=/Linux/i.test(cu())}function au(){return nu??=`safari`in window&&`pushNotification`in window.safari||/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function ou({metaKey:e,ctrlKey:t},n=ru()){return n?e&&!t:t&&!e}function su(e){if((ru()||iu())&&e.ctrlKey&&!e.altKey&&!e.metaKey)switch(e.key){case`a`:return`start`;case`e`:return`end`;case`p`:return`up`;case`n`:return`down`;case`f`:return`right`;case`b`:return`left`}if(!e.altKey&&!e.ctrlKey&&!e.metaKey){if(e.key===`ArrowUp`)return`up`;if(e.key===`ArrowDown`)return`down`;if(e.key===`ArrowLeft`)return`left`;if(e.key===`ArrowRight`)return`right`}if(ou(e)){if(e.key===`ArrowLeft`)return`textStart`;if(e.key===`ArrowRight`)return`end`}}function cu(){let e=globalThis.navigator;return e?.platform??e?.userAgentData?.platform??`unknown`}var lu={a:`selectAll`,d:`findNextMatch`};function uu(e,t=ru()){let n=ou(e,t),{shiftKey:r,altKey:i,key:a}=e,o=a.length===1?a.toLowerCase():a;if(n&&(o===`f`||e.code===`KeyF`))return i?`openSearchReplacePanel`:`openSearchPanel`;if(!i){if(!n&&o===`Tab`)return r?`outdent`:`indent`;if(n)return o===`z`?r?`redo`:`undo`:!t&&o===`y`?`redo`:o===`Home`||t&&o===`ArrowUp`?r?`expandSelectionDocStart`:`moveCursorToDocStart`:o===`End`||t&&o===`ArrowDown`?r?`expandSelectionDocEnd`:`moveCursorToDocEnd`:lu[o]}}var du=`@layer base,theme,rendered,unsafe;::selection{background-color:#0000}@keyframes blinking{0%{opacity:1}50%{opacity:0}to{opacity:1}}:host,[data-code],[data-content]{position:relative}[data-content]{caret-color:var(--diffs-bg-caret);background-color:#0000;outline:none}[data-gutter-buffer],[data-line]:not([data-selected-line]),[data-line]:not([data-selected-line]) span,[data-line-annotation]{background-color:#0000}[data-column-number]{color:var(--diffs-editor-line-number-fg)}[data-column-number][data-selected-line]{background-color:var(--diffs-editor-line-number-active-bg);color:var(--diffs-editor-line-number-active-fg)}[data-column-number][data-active]{color:var(--diffs-editor-line-number-active-fg)}[data-line]{cursor:text}[data-line][data-selected-line]{background-color:var(--diffs-editor-line-highlight-bg)}[data-line][data-line-type=change-deletion]{background-color:var(--diffs-line-bg)}[data-editor-overlay]{display:contents}[data-caret],[data-selection-range],[data-match-range],[data-marker-range]{height:1lh;line-height:var(--diffs-line-height);pointer-events:none;position:absolute;top:0;left:0}[data-caret]{background-color:var(--diffs-bg-caret-override,var(--diffs-editor-cursor-fg,light-dark(color-mix(in lab, var(--diffs-fg) 50%, var(--diffs-bg)),color-mix(in lab, var(--diffs-fg) 75%, var(--diffs-bg)))));visibility:hidden;width:2px;animation:1.2s .8s infinite blinking}[data-selection-range]{z-index:-10;background-color:var(--diffs-editor-selection-bg)}[data-selection-corner]{background-color:var(--diffs-bg);width:100%;height:100%}[data-match-range]{z-index:-10;background-color:var(--diffs-editor-match-bg,var(--diffs-editor-selection-bg))}[data-match-range]:not([data-focus]){background-color:var(--diffs-editor-match-highlight-bg,light-dark(#ff963288,#ff963266))}[data-marker-range]{z-index:1;mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjMiPjxwYXRoIGQ9Im0wIDIuNSBsMiAtMS41IGwxIDAgbDIgMS41IGwxIDAiIHN0cm9rZT0iI2ZmZiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+);mask-position:0 100%;mask-size:6px 3px;mask-repeat:repeat-x}[data-marker-error]{background-color:var(--diffs-editor-error-fg,red)}[data-marker-warning]{background-color:var(--diffs-editor-warning-fg,#cca700)}[data-marker-info]{background-color:var(--diffs-editor-info-fg,#3794ff)}[data-marker-hint]{background-color:var(--diffs-editor-hint-fg,#6a6a6a)}[data-rtl]{border-top-left-radius:3px}[data-rtr]{border-top-right-radius:3px}[data-rbl]{border-bottom-left-radius:3px}[data-rbr]{border-bottom-right-radius:3px}@media (width>=480px){[data-content]{caret-color:#0000}[data-selection-action]{caret-color:currentColor}[data-content]:focus~[data-editor-overlay] [data-caret]{visibility:visible}}[data-editor-widget]{--diffs-widget-bg:color-mix(in lab, var(--diffs-fg) 4%, var(--diffs-bg));--diffs-widget-border:color-mix(in lab, var(--diffs-fg) 20%, transparent);--diffs-widget-shadow:inset 0 0 0 1px var(--diffs-bg), 0 4px 8px #00000013, 0 6px 18px #00000013;z-index:100;border:1px solid var(--diffs-widget-border);background-color:var(--diffs-widget-bg);width:fit-content;max-width:calc(100% - 24px);box-shadow:var(--diffs-widget-shadow);background-clip:padding-box;border-radius:9px;position:absolute;top:0;left:0}[data-marker-popup]{pointer-events:auto;min-width:180px;font-family:var(--diffs-header-font-fallback);padding:8px 12px;font-size:14px;line-height:1.4}[data-marker-popup] code{background-color:#0000;display:inline}[data-selection-action-icon]{z-index:10;width:1lh;height:1lh;color:color-mix(in lab, var(--diffs-fg) 40%, var(--diffs-bg));cursor:pointer;visibility:hidden;border-radius:4px;justify-content:center;align-items:center;transition:background-color .1s ease-in-out,color .1s ease-in-out;display:flex;position:absolute;top:0;left:-1lh}[data-selection-action-icon][data-visible=true]{visibility:visible}[data-selection-action-icon]:hover{background-color:color-mix(in lab, var(--diffs-fg) 8%, var(--diffs-bg));color:var(--diffs-fg)}[data-selection-action]{padding-inline-end:1ch}[data-search-panel]{z-index:100;flex-direction:column;justify-content:right;width:100%;height:fit-content;margin-bottom:4px;display:flex;position:sticky;top:12px;right:12px}[data-search-panel] [data-editor-widget]{z-index:100;max-width:100%;font-family:var(--diffs-header-font-fallback);align-items:flex-start;gap:8px;margin-inline:auto 12px;padding:4px;font-size:14px;display:flex;position:relative}[data-search-grid]{grid-template-columns:auto auto auto;align-items:center;gap:4px 6px;display:grid}[data-search-grid][data-mode=find] [data-replace-cell]{display:none}[data-input-box]{align-items:center;width:200px;display:flex;position:relative}[data-input-box] input{width:100%;min-width:0;color:var(--diffs-fg);background-color:var(--diffs-bg);border:1px solid color-mix(in lab, var(--diffs-fg) 12%, var(--diffs-bg));border-radius:6px;outline:none;flex-grow:1;padding-inline:6px;font-size:13px;line-height:24px}[data-input-box][data-find] input{padding-inline-end:72px}[data-input-box] input::selection{background-color:color-mix(in lab, var(--diffs-fg) 8%, var(--diffs-bg))}[data-search-toggles]{align-items:center;gap:1px;display:flex;position:absolute;top:50%;right:4px;transform:translateY(-50%)}[data-matches]{white-space:nowrap;min-width:50px;color:color-mix(in lab, var(--diffs-fg) 50%, var(--diffs-bg));flex-shrink:0;font-size:12px;font-weight:500;line-height:20px}[data-matches][data-no-matches]{color:color-mix(in lab, var(--diffs-fg) 35%, var(--diffs-bg))}[data-replace-actions],[data-search-nav]{align-items:center;display:flex}[data-search-panel] svg{fill:currentColor;display:block}[data-search-panel] [data-icon]{width:24px;height:24px;color:color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg));cursor:pointer;border-radius:4px;flex-shrink:0;justify-content:center;align-items:center;transition:background-color .1s ease-in-out,color .1s ease-in-out;display:flex}[data-search-panel] [data-icon][data-disabled=true]{opacity:.25;pointer-events:none}[data-search-panel] [data-icon]:hover{color:var(--diffs-fg)}[data-search-panel] [data-icon][data-active=true]{color:light-dark(var(--diffs-modified-light),var(--diffs-modified-dark))}`;function Q(e,t,n){let{style:r,dataset:i,children:a,...o}=t??{},s=document.createElement(e);return Object.assign(s,o),r!==void 0&&(typeof r==`string`?s.style.cssText=r:Object.assign(s.style,r)),i!==void 0&&(typeof i==`string`?s.dataset[i]=``:Array.isArray(i)?i.forEach(e=>{s.dataset[e]=``}):Object.assign(s.dataset,i)),a!==void 0&&s.replaceChildren(...a),n!==void 0&&n.appendChild(s),s}function $(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function fu(e,t=`line`){let n=e.dataset[t];if(n===void 0)return;let r=parseInt(n,10);if(!Number.isNaN(r))return r}function pu(e,t){if(e.nodeType===3){let n=e.textContent?.length??0;return Math.max(0,Math.min(t,n))}return e.nodeType===1?Math.max(0,Math.min(t,e.childNodes.length)):0}function mu(e,t){return Object.assign(e,t)}function hu(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>e.apply(this,r),t)}}function gu(e,t=1e3){return Math.round(e*t)/t}function _u(e,t){if(e.lineDelta===0)return;let n=e.startCharacter,r=Math.max(0,-e.lineDelta),i=r===0?void 0:e.startLine+(n===0?0:1),a=i===void 0?void 0:i+r,o=r>0?e.startLine+r:e.startLine+(n===0?0:1),s=[],c=!1;for(let n of t){if(n.side===`deletions`){s.push(n);continue}let t=n.lineNumber-1;if(i!==void 0&&a!==void 0&&t>=i&&t<a){c=!0;continue}if(t>=o){s.push({...n,lineNumber:t+e.lineDelta+1}),c=!0;continue}s.push(n)}return c?s:void 0}function vu(e,t,n){let r=new Map,i=new Map;for(let t of e){let e=t.lineNumber;r.has(e)||r.set(e,[]),i.has(e)||i.set(e,[]),(t.side===`deletions`?i:r).get(e).push(le(t))}let a=t.parentElement?.previousElementSibling,o,s;if(a!=null&&a instanceof HTMLElement&&a.dataset.deletions!==void 0)for(let e of a.children){let t=e,{gutter:n,content:r}=t.dataset;n===void 0?r!==void 0&&(s=t):o=t}yu(t,n),s!==void 0&&yu(s,o);let c=bu(r,t,n);if(s===void 0)return;let l=bu(i,s,o);requestAnimationFrame(()=>{xu(r,i,c,l)})}function yu(e,t){let n=[];for(let r=1;r<e.childElementCount;r++){let i=e.children[r];i.dataset.lineAnnotation!==void 0&&(n.push(i),t!==void 0&&n.push(t.children[r]))}for(let e of n)e.remove()}function bu(e,t,n){let r=new Map;for(let n of t.children){let t=fu(n);if(t!==void 0){let i=e.get(t);if(i!==void 0){let e=Q(`div`,{dataset:{lineAnnotation:`0,`+(t-1)},children:[Q(`div`,{dataset:`annotationContent`,children:i.map(e=>Q(`slot`,{name:e}))})]});n.after(e),r.set(t,e)}}}if(n!==void 0)for(let t of n.children){let n=fu(t,`columnNumber`);if(n!==void 0&&e.has(n)){let e=Q(`div`,{dataset:{gutterBuffer:`annotation`,bufferSize:`1`},style:{gridRow:`span 1`}});t.after(e)}}return r}function xu(e,t,n,r){let i=new Map;for(let[t,n]of e.entries()){let e=r.get(t);if(n.length===0&&e!==void 0){let n=Su(e);n>0&&i.set(t,n)}}for(let[e,r]of t.entries()){let t=n.get(e);if(r.length===0&&t!==void 0){let n=Su(t);n>0&&i.set(e,n)}}Cu(e,n,i),Cu(t,r,i)}function Su(e){let t=e.firstElementChild;return t instanceof HTMLElement?t.getBoundingClientRect().height:0}function Cu(e,t,n){for(let[r,i]of t.entries()){let t=e.get(r),a=n.get(r);t?.length===0&&a!==void 0&&i.style.setProperty(`--diffs-annotation-min-height`,`${a}px`)}}function wu(e,t=0){let n=ad(e.startContainer,e.startOffset),r=ad(e.endContainer,e.endOffset);if(!(n===null||r===null))return{start:n,end:r,direction:t}}function Tu(e,t,n,r){if(e===void 0)return[[],t];let{start:i,end:a}=t,o=[],s={...t},c=a.line;i.line<a.line&&a.character===0&&c--;for(let t=i.line;t<=c;t++){let c=e.getLineText(t);if(c===void 0)continue;let l=c.startsWith(`	`)?`	`:` `.repeat(n),u=0,d=l;if(r){if(c.startsWith(`	`))u=1;else if(c.startsWith(` `)){let e=c.length-c.trimStart().length;u=Math.min(l.length,e)}if(u===0)continue;d=``}o.push({range:{start:{line:t,character:0},end:{line:t,character:u}},newText:d});let f=d.length-u;t===i.line&&(s={...s,start:{...i,character:Math.max(0,i.character+f)}}),t===a.line&&(s={...s,end:{...a,character:Math.max(0,a.character+f)}})}return[o,s]}function Eu(e,t,n){let r=e.lineCount;return t.map(t=>{let{line:i,character:a}=n===`up`||n===`left`?t.start:t.end;if(n===`textStart`||n===`start`||n===`end`){if(n===`textStart`){let t=nd(e.getLineText(i));a=a===t?0:t}else a=n===`start`?0:e.getLineLength(i);i=t.direction===-1?t.start.line:t.end.line}else if(n===`up`)i=Math.max(0,i-1);else if(n===`down`)i=Math.min(Math.max(r-1,0),i+1);else if(Pu(t)){let t=e.getLineLength(i);a=Math.min(a,t),n===`left`?(a--,a<0&&(i===0?a=0:(i=Math.max(0,i-1),a=e.getLineLength(i)))):(a++,a>t&&(i===r-1?a--:(i=Math.min(Math.max(r-1,0),i+1),a=0)))}let o={line:i,character:a};return{start:o,end:o,direction:0}})}function Du(e,t,n){return t.map(t=>{let[r,i]=$u(e,t),a=e.positionAt(i),[o]=Eu(e,[{start:a,end:a,direction:0}],n);return zu(e,r,e.offsetAt(o.start))})}function Ou(e,t,n,r,i=2){if(t[t.length-1]===void 0)return{nextSelections:[]};let a=[];for(let e of t)a.push(e.start,e.end);let o=a.map(t=>e.offsetAt(t)),s=o[(t.length-1)*2],c=o[(t.length-1)*2+1],l=[],u=!0;for(let e=0;e<t.length;e++){let t={index:e,start:o[e*2],end:o[e*2+1]},n=l[l.length-1];n!==void 0&&(t.start<n.start||t.start===n.start&&t.end<n.end)&&(u=!1),l.push(t)}u||l.sort((e,t)=>{let n=e.start-t.start;if(n!==0)return n;let r=e.end-t.end;return r===0?e.index-t.index:r});let d=id(e,n,i),f=[],p=Array.from({length:t.length}),m=0,h,g=()=>{if(h===void 0)return;let t=id(e,{start:h.start,end:h.end,text:d.text},i),n=td(e,t.text,t.start);f.push({start:t.start,end:t.end,text:n});let r=[h.start+m+n.length,h.start+m+n.length];for(let e of h.indices)p[e]=r;m+=n.length-(t.end-t.start),h=void 0};for(let e of l){let t=Math.max(0,e.start+(d.start-s)),n=Math.max(t,e.end+(d.end-c));if(h!==void 0&&t<h.end){h.end=Math.max(h.end,n),h.indices.push(e.index);continue}g(),h={start:t,end:n,indices:[e.index]}}g();let _=e.applyResolvedEdits(f,!0,t),v=rd(e,p.map(e=>{if(e===void 0)throw Error(`Missing next selection offsets`);return e}));if(e.setLastUndoSelectionsAfter(v),_!==void 0&&r!==void 0){let t=_u(_,r);t!==void 0&&e.setLastUndoLineAnnotations(r,t)}return{nextSelections:v,change:_}}function ku(e,t,n,r){if(t.length!==n.length)throw Error(`Selection text replacements must match the selection count`);let i=[];for(let e of t)i.push(e.start,e.end);let a=i.map(t=>e.offsetAt(t)),o=[],s=!0;for(let e=0;e<t.length;e++){let t={index:e,start:a[e*2],end:a[e*2+1],text:n[e]},r=o[o.length-1];r!==void 0&&(t.start<r.start||t.start===r.start&&t.end<r.end)&&(s=!1),o.push(t)}s||o.sort((e,t)=>{let n=e.start-t.start;if(n!==0)return n;let r=e.end-t.end;return r===0?e.index-t.index:r});let c=n.every(e=>e===``),l,u=Array.from({length:t.length});if(c){l=[];let e=!1;for(let t of o){if(u[t.index]=t.end,t.start>=t.end)continue;e=!0;let n=l[l.length-1];n!==void 0&&t.start<n.end?l[l.length-1]={start:n.start,end:Math.max(n.end,t.end),text:``}:l.push({start:t.start,end:t.end,text:``})}if(!e)return{nextSelections:t};for(let e of o){let t=e.end,n=0,r=t;for(let e of l){if(t<=e.start)break;if(t>=e.end){n-=e.end-e.start;continue}r=e.start+n;break}r===t&&(r+=n),u[e.index]=r}}else{l=[];let t=0,n=-1;for(let r of o){if(r.start<n)throw Error(`Overlapping multi-selection edits are not supported`);n=r.end;let i=td(e,r.text,r.start);l.push({start:r.start,end:r.end,text:i}),u[r.index]=r.start+t+i.length,t+=i.length-(r.end-r.start)}}let d=e.applyResolvedEdits(l,!0,t),f=rd(e,u.map(e=>[e,e]));if(e.setLastUndoSelectionsAfter(f),d!==void 0&&r!==void 0){let t=_u(d,r);t!==void 0&&e.setLastUndoLineAnnotations(r,t)}return{nextSelections:f,change:d}}function Au(e,t,n){let r=e.getText(),i=[],a=[];for(let n of t){let[t,o]=$u(e,n);if(!Pu(n)){a.push([t,o]);continue}let{line:s,character:c}=n.start,l=t,u=e.getLineLength(s),d;if(c>0&&c<u)d={start:l-1,end:l+1,text:r[l]+r[l-1]},a.push([l+1,l+1]);else if(c===u&&u>=2)d={start:l-2,end:l,text:r[l-1]+r[l-2]},a.push([l,l]);else if(c===0&&s>0&&u>0){let t=s-1,n=e.getLineLength(t),i=e.offsetAt({line:t,character:n}),o=n>0?i-1:i;d={start:o,end:l+1,text:r[l]+r.slice(i,l)+r.slice(o,i)},a.push([l+1,l+1])}else{a.push([t,o]);continue}i.push(d)}if(i.length===0)return{nextSelections:t};i.sort((e,t)=>e.start-t.start);for(let e=1;e<i.length;e++)if(i[e].start<i[e-1].end)throw Error(`Overlapping multi-selection edits are not supported`);let o=e.applyResolvedEdits(i,!0,t),s=rd(e,a);if(e.setLastUndoSelectionsAfter(s),o!==void 0&&n!==void 0){let t=_u(o,n);t!==void 0&&e.setLastUndoLineAnnotations(n,t)}return{nextSelections:s,change:o}}function ju(e,t,n){let r=t.map(t=>{let n=ed(e,t);return{start:n.start,end:n.end,direction:0}});return ku(e,r,r.map(()=>``),n)}function Mu(e,t,n,r){let i=t.map(t=>{if(!Pu(t))return{start:t.start,end:t.end,direction:0};let r=Fu(t),{line:i,character:a}=r,o=n?.(i,a)??0;if(a>o)return{start:{line:i,character:o},end:{line:i,character:a},direction:0};if(i===0)return{start:r,end:r,direction:0};let s=e.getLineLength(i-1);return{start:{line:i-1,character:s},end:{line:i,character:0},direction:0}});return ku(e,i,i.map(()=>``),r)}function Nu(e,t,n){let r=t.map(t=>{let[n,r]=Zu(e,t);return{start:n,end:r,direction:0}});return ku(e,r,r.map(()=>``),n)}function Pu(e){return e.start.line===e.end.line&&e.start.character===e.end.character}function Fu(e){let{start:t,end:n,direction:r}=e;return r===-1?t:n}function Iu(e){return e===`context`||e===`context-expanded`||e===`change-addition`}function Lu(e,t){let n=Pu(e),r=Pu(t);return n&&r?Ru(e.start,t.start)===0:n?Ru(t.start,e.start)<=0&&Ru(e.start,t.end)<=0:r?Ru(e.start,t.start)<=0&&Ru(t.start,e.end)<=0:Ru(e.start,t.end)<0&&Ru(t.start,e.end)<0}function Ru(e,t){return e.line===t.line?e.character-t.character:e.line-t.line}function zu(e,t,n){let r=t===n?0:t<n?1:-1,i=Math.min(t,n),a=Math.max(t,n);return{start:e.positionAt(i),end:e.positionAt(a),direction:r}}function Bu(e,t){let n=e.direction===-1?e.end:e.start,r=Ru(n,t.start),i=Ru(n,t.end),a=t.end;a=r<=0?t.end:i>=0?t.start:r===0?t.end:t.start;let o=Ru(n,a);return{start:o<=0?n:a,end:o<=0?a:n,direction:o===0?0:o<0?1:-1}}function Vu(e,t){let n=Ru(t.start,e.start)<0,r=Ru(t.end,e.end)>0;return n&&!r?{start:t.start,end:e.end,direction:-1}:r&&!n?{start:e.start,end:t.end,direction:1}:e.direction===-1?{start:t.start,end:e.end,direction:Ru(t.start,e.end)===0?0:-1}:{start:e.start,end:t.end,direction:Ru(e.start,t.end)===0?0:1}}function Hu(e,t){return Uu(e.map(e=>Vu(e,t)))}function Uu(e){if(e.length<=1)return e;let t=new Set,n=[];for(let r=e.length-1;r>=0;r--){let i=e[r];if(i===void 0)continue;let a=0,o=n.length;for(;a<o;){let e=Math.floor((a+o)/2),t=n[e]?.selection;if(t===void 0)break;Ru(t.start,i.start)<0?a=e+1:o=e}let s=n[a-1]?.selection,c=n[a]?.selection;s!==void 0&&Lu(s,i)||c!==void 0&&Lu(c,i)||(n.splice(a,0,{index:r,selection:i}),t.add(r))}return e.filter((e,n)=>t.has(n))}function Wu(e,t){if(t.length===0)return;let n=t.map(t=>Pu(t)?Yu(e,t):t),r=n.map(t=>e.getText(t)),i=r[0];if(i.length===0||r.some(e=>e!==i))return;let a=n.map(t=>[e.offsetAt(t.start),e.offsetAt(t.end)]),o=e.findNextNonOverlappingSubstring(i,a);if(o===void 0)return n.some((e,n)=>{let r=t[n];return Ru(e.start,r.start)!==0||Ru(e.end,r.end)!==0||e.direction!==r.direction})?n:void 0;let s=zu(e,o,o+i.length);return[...n,s]}function Gu(e){let t=e.lineCount-1;return{start:{line:0,character:0},end:{line:t,character:e.getLineLength(t)},direction:1}}function Ku(e,t){let n=t?e.lineCount-1:0,r={line:n,character:t?e.getLineLength(n):0};return{start:r,end:r,direction:1}}function qu(e,t){return[...t].sort((e,t)=>{let n=Ru(e.start,t.start);return n===0?Ru(e.end,t.end):n}).map(t=>Pu(t)?e.getLineText(t.start.line,!1):e.getText(t)).join(`
`)}function Ju(e,t){let n=Math.max(0,t),r=od(e),i=null;for(let e of r){i=e;let t=md(e);if(n<=t+(e.textContent?.length??0)){let r=sd(e,n<t?0:n-t);if(r!==null)return r}}if(i!==null){let e=sd(i,i.textContent?.length??0);return e===null?[i,0]:e}let a=0,o=null;for(let t of e.childNodes){if(t.nodeType===1&&t.tagName===`BR`)return[t,0];if(t.nodeType!==3)continue;o=t;let e=hd(o.textContent,o.textContent?.length??0);if(n<=a+e)return[o,hd(o.textContent,n-a)];a+=e}return o===null?[e,0]:[o,hd(o.textContent,o.textContent?.length??0)]}function Yu(e,t){let{line:n,character:r}=t.start,i=e.getLineText(n),a=Xu(i,Math.max(0,Math.min(r,i.length)));return a===void 0?t:{start:{line:n,character:a.start},end:{line:n,character:a.end},direction:1}}function Xu(e,t){let n=new Intl.Segmenter(void 0,{granularity:`word`});for(let r of n.segment(e)){if(r.isWordLike!==!0)continue;let e=r.index,n=e+r.segment.length;if(t>=e&&t<=n)return{start:e,end:n}}}function Zu(e,t){if(!Pu(t))return[t.start,t.end];let n=Fu(t),{line:r,character:i}=n;if(i===0){if(r===0)return[n,n];let t=e.getLineLength(r-1);return[{line:r-1,character:t},{line:r,character:0}]}let a=e.getLineText(r),o=[0],s=new Intl.Segmenter(void 0,{granularity:`grapheme`});for(let e of s.segment(a))e.index>0&&o.push(e.index);let c=i,l;for(;c>0;){let e=Qu(a,c,!1,o),t=a.slice(e,c),n=/\S/.test(t)?/\p{Alphabetic}|\p{Number}|_/u.test(t)?1:2:0;if(l!==void 0&&n!==l)break;(t!==` `||c!==i)&&(l=n),c=e}return[{line:r,character:c},{line:r,character:i}]}function Qu(e,t,n,r){if(n){for(let e of r)if(e>t)return e;return e.length}for(let e=r.length-1;e>=0;e--){let n=r[e];if(n<t)return n}return 0}function $u(e,t){let n=t.direction===-1;return[e.offsetAt(n?t.end:t.start),e.offsetAt(Fu(t))]}function ed(e,t){if(!Pu(t))return{start:t.start,end:t.end};let{line:n,character:r}=t.start,i=e.getLineText(n).length;return r<i?{start:{line:n,character:r},end:{line:n,character:i}}:n<e.lineCount-1?{start:{line:n,character:r},end:{line:n+1,character:0}}:{start:{line:n,character:r},end:{line:n,character:r}}}function td(e,t,n){if(t!==`
`&&t!==`\r
`)return t;let r=e.positionAt(n).line,i=e.getLineText(r),a=nd(i);return a===0?t:t+i.slice(0,a)}function nd(e){let t=0;for(;t<e.length;t++){let n=e.charCodeAt(t);if(n!==32&&n!==9)break}return t}function rd(e,t){let n=[];for(let[e,r]of t)n.push(Math.min(e,r),Math.max(e,r));let r=e.positionsAt(n);return t.map(([e,t],n)=>{let i=e===t?0:e<t?1:-1;return{start:r[n*2],end:r[n*2+1],direction:i}})}function id(e,t,n){if(t.text!==``||t.start!==t.end-1)return t;let r=e.positionAt(t.end);if(r.character===0)return t;let i=e.getLineText(r.line),a=i.slice(0,r.character);if(/[^ \t]/.test(a)||i[r.character-1]===`	`)return t;let o=Math.max(0,r.character-n),s=i.slice(o,r.character);return s.length===n&&/^ +$/.test(s)?{...t,start:t.end-s.length}:t}function ad(e,t){let n=e.nodeType===1?e:e.parentElement;for(;n!==null&&pd(n)===void 0;)n=n.parentElement;if(n===null)return null;let r=pd(n);if(r===void 0)return null;if(e.nodeType===3)return e.parentElement===null?null:dd(e.parentElement)===null?{line:r,character:ud(n,e)+hd(e.textContent,t)}:{line:r,character:fd(e,t)};if(e.nodeType===1){let i=e;if(i.tagName===`DIV`){let e=0;for(let n=0;n<t;n++)e=fd(i.childNodes[n]);return{line:r,character:e}}if(i.tagName===`BR`)return{line:r,character:0};if(i.tagName===`SPAN`){if(t<i.childNodes.length){let e=i.childNodes[t];if(e?.nodeType===1){let t=md(e);if(t!==void 0)return{line:r,character:t};let n=dd(e),i=n===null?void 0:md(n);if(i!==void 0)return{line:r,character:i}}}return{line:r,character:t>0?fd(i.childNodes[t-1]):ud(n,i)}}return{line:r,character:ud(n,i)}}return null}function od(e){let t=[];for(let n of e.childNodes){if(n.nodeType!==1)continue;let e=n;if(e.tagName===`SPAN`){if(md(e)!==void 0){t.push(e);continue}for(let n of e.childNodes)n.nodeType===1&&md(n)!==void 0&&t.push(n)}}return t}function sd(e,t){let n=Math.max(0,t),r=[{container:e,index:0}];for(;r.length>0;){let e=r[r.length-1];if(e.index>=e.container.childNodes.length){r.pop();continue}let t=e.container.childNodes[e.index];if(e.index++,t.nodeType===3){let e=hd(t.textContent,t.textContent?.length??0);if(n<=e)return[t,n];n-=e}else t.nodeType===1&&r.push({container:t,index:0})}return null}function cd(e,t){let n=0,r=[{container:e,index:0}];for(;r.length>0;){let e=r[r.length-1];if(e.index>=e.container.childNodes.length){r.pop();continue}let i=e.container.childNodes[e.index];if(i===t)return n;e.index++,i.nodeType===3?n+=hd(i.textContent,i.textContent?.length??0):i.nodeType===1&&r.push({container:i,index:0})}return n}function ld(e,t){let n=t;for(;n!==null;){if(n===e)return!0;n=n.parentElement}return!1}function ud(e,t){if(t.parentElement===e){let n=0,r=Array.prototype.indexOf.call(e.childNodes,t);for(let t=0;t<r;t++)n=fd(e.childNodes[t]);return n}for(let n of od(e))if(ld(n,t))return md(n)+(t.nodeType===3?cd(n,t):0);let n=0,r=t.nodeType===1?t:t.parentElement;for(;r!==null&&r.parentElement!==null&&pd(r.parentElement)===void 0;){let e=r.parentElement,t=Array.prototype.indexOf.call(e.childNodes,r);for(let r=0;r<t;r++)n=fd(e.childNodes[r]);r=e}return n}function dd(e){let t=e;for(;t!==null;){if(pd(t)!==void 0)return null;if(md(t)!==void 0)return t;t=t.parentElement}return null}function fd(e,t){if(e===void 0)return 0;if(e.nodeType===3){let n=e.parentElement;if(n===null)return 0;let r=dd(n);if(r===null)return 0;let i=md(r);if(i===void 0)return 0;let a=t===void 0?hd(e.textContent,e.textContent?.length??0):hd(e.textContent,t);return i+cd(r,e)+a}if(e.nodeType!==1)return 0;let n=e;if(n.tagName!==`SPAN`&&n.tagName!==`BR`)return 0;let r=md(n);if(r!==void 0)return r+(n.textContent?.length??0);let i=0;for(let e of n.childNodes)i=Math.max(i,fd(e));return i}function pd(e){let{line:t}=e.dataset;if(t!==void 0){let e=parseInt(t,10);if(!Number.isNaN(e))return e-1}}function md(e){let{char:t}=e.dataset;if(t!==void 0){let e=parseInt(t,10);if(!Number.isNaN(e))return e}}function hd(e,t){let n=e??``,r=n.search(/[\r\n]/);return Math.min(t,r===-1?n.length:r)}var gd=300,_d=100,vd=class{#e;#t=[];#n;#r;#i;#a;#o;#s;#c;#l=!1;constructor(e){this.#e=e}get markers(){return this.#t}isPopupVisible(){return this.#c!==void 0}setMarkers(e,t){this.#t=e.map(e=>({...e,start:t.normalizePosition(e.start),end:t.normalizePosition(e.end)})),this.removePopup()}listenHover(e){this.#i?.forEach(e=>e()),this.#i=void 0,this.#t.length!==0&&(this.#i=[$(e,`mouseover`,e=>{if(this.#e.isMouseDown())return;let t=e.composedPath()[0];if(t===void 0)return;let n=this.#u(t);n===void 0?(this.#d(),this.#m()):this.#p(n)}),$(e,`mouseleave`,()=>{this.#d(),this.#m()})])}removePopup(){this.#d(),this.#f(),this.#h()}cleanup(){this.#i?.forEach(e=>e()),this.#i=void 0,this.removePopup(),this.#t=[]}#u(e){let t=e.closest(`[data-line]`);if(t==null)return;let n=fu(t);if(n===void 0)return;let r;if(e.tagName===`SPAN`){let t=e.dataset.char;if(t===void 0||(r=parseInt(t,10),Number.isNaN(r)))return}else if(e.tagName===`BR`)r=0;else return;let i={line:n-1,character:r};for(let e=this.#t.length-1;e>=0;e--)if(Lu({start:i,end:i},this.#t[e]))return e}#d(){this.#a!==void 0&&(clearTimeout(this.#a),this.#a=void 0),this.#s=void 0}#f(){this.#o!==void 0&&(clearTimeout(this.#o),this.#o=void 0)}#p(e){if(e===this.#c||e===this.#s){this.#f();return}if(this.#d(),this.#f(),this.#n!==void 0){this.#g(e);return}this.#s=e,this.#a=setTimeout(()=>{this.#a=void 0,this.#s=void 0,this.#g(e)},gd)}#m(){this.#l||(this.#f(),this.#o=setTimeout(()=>{this.#o=void 0,this.#l||this.removePopup()},_d))}#h(){this.#r?.forEach(e=>e()),this.#r=void 0,this.#n?.remove(),this.#n=void 0,this.#c=void 0,this.#l=!1}#g(e){if(e===this.#c)return;let t=this.#e.getFileContainer()?.shadowRoot?.querySelector(`pre`),n=t?.querySelector(`[data-code]`);if(e>=this.#t.length||t==null||n==null)return;let{start:r,message:i}=this.#t[e],{line:a,character:o}=r,{getCharX:s,getLineY:c,getLineHeight:l}=this.#e,[u,d]=s(a,o),f=l(),p=c(a)+d*f+f,m=`translateX(${n.offsetLeft+u}px) translateY(${n.offsetTop+p}px)`,h=this.#n;if(h!==void 0){h.style.transform=m;let t=h.firstElementChild;t?.dataset.markerMessage!==void 0&&(typeof i==`string`?t.textContent=i:i instanceof HTMLElement?t.replaceChildren(i):t.innerHTML=i.html),this.#c=e;return}this.#n=Q(`div`,{dataset:[`editorWidget`,`markerPopup`],style:{transform:m},children:[Q(`div`,{dataset:`markerMessage`,...typeof i==`string`?{textContent:i}:i instanceof HTMLElement?{children:[i]}:{innerHTML:i.html}})]},t),this.#c=e,this.#r=[$(this.#n,`mouseenter`,()=>{this.#l=!0,this.#f()}),$(this.#n,`mouseleave`,()=>{this.#l=!1,this.#m()})]}};function yd(e){switch(e){case`error`:return`markerError`;case`warning`:return`markerWarning`;case`info`:return`markerInfo`;case`hint`:return`markerHint`}}var bd=`<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-editor-icon-close" viewBox="0 0 16 16">
    <path fill="currentColor" d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L8 6.93934L11.7197 3.21967C12.0126 2.92678 12.4874 2.92678 12.7803 3.21967C13.0732 3.51256 13.0732 3.98744 12.7803 4.28033L9.06066 8L12.7803 11.7197C13.0732 12.0126 13.0732 12.4874 12.7803 12.7803C12.4874 13.0732 12.0126 13.0732 11.7197 12.7803L8 9.06066L4.28033 12.7803C3.98744 13.0732 3.51256 13.0732 3.21967 12.7803C2.92678 12.4874 2.92678 12.0126 3.21967 11.7197L6.93934 8L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-arrow-up" viewBox="0 0 16 16">
    <path fill="currentColor" transform="rotate(-90 8 8)" d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L10.4393 7.25H3.75C3.33579 7.25 3 7.58579 3 8C3 8.41421 3.33579 8.75 3.75 8.75H10.4393L8.46967 10.7197C8.17678 11.0126 8.17678 11.4874 8.46967 11.7803C8.76256 12.0732 9.23744 12.0732 9.53033 11.7803L12.7803 8.53033C13.0732 8.23744 13.0732 7.76256 12.7803 7.46967L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-arrow-down" viewBox="0 0 16 16">
    <path fill="currentColor" transform="rotate(90 8 8)" d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L10.4393 7.25H3.75C3.33579 7.25 3 7.58579 3 8C3 8.41421 3.33579 8.75 3.75 8.75H10.4393L8.46967 10.7197C8.17678 11.0126 8.17678 11.4874 8.46967 11.7803C8.76256 12.0732 9.23744 12.0732 9.53033 11.7803L12.7803 8.53033C13.0732 8.23744 13.0732 7.76256 12.7803 7.46967L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-case" viewBox="0 0 16 16">
    <path fill="currentColor" d="M12.2969 12.9969C10.7109 12.9969 9.61719 12.0125 9.61719 10.5047C9.61719 9.06719 10.6172 8.16094 12.5 8.15312H14.6641V7.31719C14.6641 6.23906 14.0391 5.64531 12.9297 5.64531C11.875 5.64531 11.2734 6.18437 11.1953 7.00469H9.92969C10.0156 5.56719 10.9922 4.52031 12.9766 4.52031C14.7266 4.52031 16 5.47344 16 7.2V12.8641H14.7109V11.8406H14.6719C14.2578 12.5047 13.5078 12.9969 12.2969 12.9969ZM12.6562 11.8797C13.8047 11.8797 14.6641 11.1609 14.6641 10.1375V9.18437H12.6016C11.4766 9.18437 10.9922 9.71562 10.9922 10.4578C10.9922 11.4266 11.7969 11.8797 12.6562 11.8797Z"></path>
    <path fill="currentColor" d="M1.42188 12.8641H0L3.79688 2H5.1875L8.98438 12.8641H7.54688L6.46875 9.66094H2.5L1.42188 12.8641ZM4.50781 3.60938H4.46875L2.86719 8.55937H6.10156L4.50781 3.60938Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-whole-word" viewBox="0 0 16 16">
    <path fill="currentColor" d="M11.4089 9.99449C11.1417 9.99449 10.8961 9.95595 10.6722 9.87887C10.4519 9.80179 10.2605 9.69167 10.098 9.54852C9.93551 9.40537 9.81453 9.23469 9.73508 9.03648H9.67007V9.91191H8.5V2H9.70258V5.01721H9.76758C9.81092 4.86671 9.88314 4.7309 9.98426 4.60977C10.089 4.48497 10.2136 4.37853 10.358 4.29043C10.5025 4.19867 10.6668 4.13076 10.851 4.08672C11.0352 4.039 11.2302 4.01514 11.436 4.01514C11.8802 4.01514 12.2648 4.11792 12.5898 4.32347C12.9149 4.52535 13.164 4.81532 13.3374 5.19339C13.5107 5.57146 13.5974 6.02478 13.5974 6.55334V7.45079C13.5974 7.97568 13.5089 8.429 13.332 8.81074C13.1586 9.1888 12.9076 9.48061 12.579 9.68617C12.2504 9.89172 11.8604 9.99449 11.4089 9.99449ZM11.0785 8.99243C11.353 8.99243 11.5859 8.92636 11.7773 8.79422C11.9723 8.66208 12.1204 8.46937 12.2215 8.2161C12.3226 7.95916 12.3732 7.65267 12.3732 7.29663V6.73503C12.3732 6.37164 12.3208 6.06332 12.2161 5.81005C12.115 5.55311 11.9669 5.35673 11.7719 5.22092C11.5769 5.08511 11.3385 5.01721 11.0568 5.01721C10.7824 5.01721 10.5422 5.08328 10.3364 5.21542C10.1341 5.34389 9.97704 5.52925 9.86509 5.77151C9.75675 6.01009 9.70258 6.2964 9.70258 6.63042V7.47281C9.70258 7.77013 9.76036 8.03441 9.87592 8.26566C9.99509 8.49323 10.1576 8.67125 10.3635 8.79972C10.5729 8.92819 10.8113 8.99243 11.0785 8.99243Z"></path>
    <path fill="currentColor" d="M4.70482 9.99449C4.15229 9.99449 3.70087 9.83482 3.35057 9.51548C3.00388 9.19247 2.83054 8.75935 2.83054 8.2161C2.83054 7.70223 3.00207 7.28745 3.34515 6.97178C3.69184 6.65244 4.19562 6.49277 4.8565 6.49277H6.30284V5.94769C6.30284 5.61367 6.20533 5.36774 6.01032 5.20991C5.81531 5.04841 5.55349 4.96765 5.22485 4.96765C5.00817 4.96765 4.82941 4.99702 4.68857 5.05575C4.54773 5.11081 4.43758 5.18789 4.35813 5.28699C4.27868 5.38243 4.22271 5.49621 4.19021 5.62835H3.04722C3.06527 5.3861 3.12305 5.16586 3.22056 4.96765C3.32168 4.76577 3.46252 4.59326 3.64309 4.4501C3.82727 4.30328 4.05297 4.19133 4.32021 4.11425C4.59106 4.03716 4.90525 3.99862 5.26277 3.99862C5.67086 3.99862 6.04463 4.06286 6.38409 4.19133C6.72356 4.31613 6.99441 4.52168 7.19665 4.80798C7.39888 5.09429 7.5 5.4797 7.5 5.96421V9.9064H6.35701V9.1521H6.30284C6.21978 9.29892 6.10783 9.43657 5.96698 9.56504C5.82614 9.69351 5.65099 9.79812 5.44153 9.87887C5.23569 9.95595 4.99012 9.99449 4.70482 9.99449ZM5.07318 9.04749C5.3043 9.04749 5.51196 8.99977 5.69613 8.90434C5.88031 8.80523 6.02657 8.67309 6.13491 8.50791C6.24686 8.34274 6.30284 8.1537 6.30284 7.94081V7.31314H5.04609C4.69579 7.31314 4.43939 7.39206 4.27688 7.5499C4.11798 7.70773 4.03853 7.90961 4.03853 8.15554C4.03853 8.4602 4.14326 8.68594 4.35272 8.83276C4.56578 8.97591 4.80594 9.04749 5.07318 9.04749Z"></path>
    <path fill="currentColor" d="M2.5 12.5L13.5 12.5C14.3284 12.5 15 11.8284 15 11V9.5C15 9.22386 15.2239 9 15.5 9C15.7761 9 16 9.22386 16 9.5V11C16 12.3807 14.8807 13.5 13.5 13.5L2.5 13.5C1.11929 13.5 -7.56324e-07 12.3807 0 11L6.55675e-08 9.5C3.58362e-07 9.22386 0.223858 9 0.5 9C0.776142 9 1 9.22386 1 9.5L1 11C0.999999 11.8284 1.67157 12.5 2.5 12.5Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-regex" viewBox="0 0 16 16">
    <path fill="currentColor" d="M8.60788 6.59074C8.78227 6.46701 9.02141 6.60508 9.00146 6.81797L8.77564 9.22666C8.76189 9.37331 8.87726 9.5 9.02455 9.5H9.97548C10.1228 9.5 10.2381 9.37331 10.2244 9.22667L9.99858 6.81801C9.97862 6.60513 10.2178 6.46706 10.3922 6.59079L12.3652 7.99066C12.4853 8.07589 12.6527 8.03932 12.7264 7.91177L13.2018 7.08823C13.2755 6.96068 13.2234 6.79742 13.0896 6.73601L10.8907 5.72723C10.6963 5.63807 10.6963 5.36193 10.8907 5.27277L13.0896 4.264C13.2234 4.20258 13.2755 4.03932 13.2018 3.91177L12.7263 3.08824C12.6527 2.96068 12.4853 2.92411 12.3652 3.00934L10.3922 4.40921C10.2178 4.53294 9.97862 4.39486 9.99858 4.18198L10.2244 1.77334C10.2381 1.62669 10.1228 1.5 9.97548 1.5H9.02455C8.87726 1.5 8.76189 1.62669 8.77564 1.77334L9.00146 4.18203C9.02141 4.39491 8.78227 4.53298 8.60788 4.40926L6.63479 3.00934C6.51466 2.92411 6.34726 2.96068 6.27362 3.08823L5.79815 3.91177C5.72451 4.03932 5.77654 4.20258 5.91041 4.26399L8.10929 5.27277C8.30363 5.36193 8.30363 5.63807 8.10929 5.72723L5.91041 6.73601C5.77653 6.79742 5.7245 6.96068 5.79814 7.08824L6.27361 7.91177C6.34725 8.03932 6.51466 8.07589 6.63478 7.99066L8.60788 6.59074Z"></path>
    <path fill="currentColor" d="M4 11C3.44772 11 3 11.4477 3 12V13C3 13.5523 3.44772 14 4 14H5C5.55228 14 6 13.5523 6 13V12C6 11.4477 5.55228 11 5 11H4Z"></path>
  </symbol>
  <symbol id="diffs-editor-icon-quick" viewBox="0 0 20 20">
    <polygon points="11 3 9 9 16 9 9 17 11 11 4 11 11 3" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
  </symbol>
  <symbol id="diffs-editor-icon-replace" viewBox="0 0 20 20">
   <path d="m3,11h11c1.657,0,3-1.343,3-3v-3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
   <polyline points="7 7 3 11 7 15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></polyline>
  </symbol>
  <symbol id="diffs-editor-icon-replace-all" viewBox="0 0 20 20">
    <path d="m16,6H6c-1.657,0-3,1.343-3,3v1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
    <polyline points="13.25 8.75 16 6 13.25 3.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></polyline>
    <path d="m4,14h10c1.657,0,3-1.343,3-3v-1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
    <polyline points="6.75 11.25 4 14 6.75 16.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></polyline>
  </symbol>
</svg>`,xd=()=>{let e=document.createElement(`div`);e.innerHTML=bd;let t=e.firstElementChild;if(t===null||!(t instanceof SVGSVGElement))throw Error(`Failed to create sprite element`);return t},Sd=(e,t=16)=>`<svg width="${t}" height="${t}" aria-hidden="true" focusable="false">
<use href="#diffs-editor-icon-${e}"></use>
</svg>`,Cd=class{#e;#t;#n;#r;constructor(e){let{textDocument:t,containerElement:n,defaultQuery:r,mode:i=`find`,initialMatch:a,scrollToMatch:o,applyReplace:s,onUpdate:c,onClose:l}=e,u={text:r,replaceText:``,caseSensitive:!1,wholeWord:!1,regex:!1},d={all:[],current:void 0},f=Q(`div`,{dataset:{matches:``,noMatches:``},textContent:`No results`}),p=e=>{if(d.all=u.text===``?[]:t.search(u),this.#e.querySelectorAll(`[data-icon][data-disabled]`).forEach(e=>{e.dataset.disabled=String(d.all.length===0)}),u.text===``){f.textContent=`No results`,f.dataset.noMatches=``;return}if(d.all.length===0){f.textContent=`No results`,f.dataset.noMatches=``,d.current=void 0,c([]);return}if(delete f.dataset.noMatches,e?.syncSelection===!1){m(c(d.all,{syncSelection:!1}));return}m(c(d.all))};this.#n=p;let m=e=>{if(e===void 0)f.textContent=`${d.all.length} results`;else{let[t,n]=e;f.textContent=`${d.all.findIndex(e=>e[0]===t&&e[1]===n)+1} of ${d.all.length}`}d.current=e},h=(e,t)=>{u[e]=t,p()},g=(e=!1,t=!1)=>{let n=d.all,r=n[0];if(n.length>0)if(e){let e=d.current?.[0]??0;r=n.at(-1);for(let t of n)if(t[1]<=e)r=t;else break}else{let e=d.current?.[1]??0;for(let t of n)if(t[0]>=e){r=t;break}}r!==void 0&&(m(r),o(r,t)),d.current=r},_=(e,n)=>({start:e,end:n,text:Xl(e=>t.positionAt(e),e=>t.offsetAt(e),e=>t.getLineText(e),u,e,n)}),v=()=>{if(u.text===``||d.all.length===0)return;let e=d.current;if(e===void 0&&(g(!1,!0),e=d.current,e===void 0))return;let[t,n]=e,r=_(t,n);s([r]),o([t+r.text.length,t+r.text.length],!0),d.current=void 0,p()},y=()=>{u.text===``||d.all.length===0||(s(d.all.map(([e,t])=>_(e,t))),d.current=void 0,p())},b=()=>{this.cleanup(),l()},x=(e,t,n)=>{let r=Q(`div`,{dataset:{icon:e,active:String(u[n])},title:t,innerHTML:Sd(e),onclick:()=>{let e=!u[n];r.dataset.active=String(e),h(n,e)}});return r},S=x(`case`,`Match Case`,`caseSensitive`),C=x(`whole-word`,`Whole Word`,`wholeWord`),w=x(`regex`,`Regexp`,`regex`),T=Q(`input`,{type:`text`,placeholder:`Replace`,dataset:`replace`,value:``,oninput:e=>{u.replaceText=e.target.value}});this.#t=Q(`input`,{type:`text`,placeholder:`Search`,dataset:`search`,value:r,oninput:e=>{u.text=e.target.value,d.current=void 0,p()},onkeydown:e=>{e.key===`Escape`?(e.preventDefault(),b()):e.key===`Enter`?(e.preventDefault(),g(!1,!0)):ou(e)&&(e.key===`f`||e.code===`KeyF`)&&(e.preventDefault(),j(e.altKey?`replace`:`find`))}});let E=Q(`div`,{dataset:`searchToggles`,children:[S,C,w]}),D=Q(`div`,{dataset:{inputBox:``,find:``},children:[this.#t,E]}),O=Q(`div`,{dataset:{inputBox:``,replace:``,replaceCell:``},children:[T]}),ee=Q(`div`,{dataset:{replaceActions:``,replaceCell:``},children:[Q(`div`,{dataset:{icon:`replace`},title:`Replace`,innerHTML:Sd(`replace`),onclick:()=>{v()}}),Q(`div`,{dataset:{icon:`replace-all`},title:`Replace All`,innerHTML:Sd(`replace-all`),onclick:()=>{y()}})]}),k=Q(`div`,{dataset:`searchNav`,children:[Q(`div`,{dataset:{icon:`arrow-up`,disabled:`true`},title:`Previous`,innerHTML:Sd(`arrow-up`),onclick:()=>{g(!0)}}),Q(`div`,{dataset:{icon:`arrow-down`,disabled:`true`},title:`Next`,innerHTML:Sd(`arrow-down`),onclick:()=>{g()}}),Q(`div`,{dataset:{icon:`close`},title:`Close`,innerHTML:Sd(`close`),onclick:b})]}),A=Q(`div`,{dataset:{searchGrid:``,mode:i},children:[D,f,k,O,ee]}),j=e=>{A.dataset.mode=e,this.#t.focus(),this.#t.select()};this.#r=j,this.#e=Q(`div`,{dataset:`searchPanel`,children:[Q(`div`,{dataset:`editorWidget`,children:[A]})]}),d.current=a,n.before(this.#e),requestAnimationFrame(()=>{a===void 0?c([]):p(),this.#t.select()})}focus(){this.#t.focus()}updateMatches(e){this.#n?.(e)}setMode(e){this.#r?.(e)}cleanup(){this.#e.remove()}},wd=class{static renderIcon(e,t,n,r){return Q(`div`,{dataset:{selectionActionIcon:``,visible:`false`},title:`Selection Action`,style:{transform:`translateY(${t}px) translateX(${e}px)`},innerHTML:Sd(`quick`),onclick:r},n)}#e;#t;#n;#r;#i;constructor(e,t,n,r=0,i){this.line=e;let a=`selection-action-`+e;this.#n=Q(`div`,{dataset:`selectionActionSlot`,slot:a,style:`white-space: normal`,children:[t]},n),this.#e=Q(`div`,{dataset:{gutterBuffer:`selectionAction`,bufferSize:`1`},style:`grid-row: span 1`}),this.#t=Q(`div`,{dataset:{selectionAction:String(e)},style:{paddingInlineStart:r+1+`ch`},contentEditable:`false`,children:[Q(`slot`,{name:a})]}),this.#r=new ResizeObserver(i),this.#r.observe(this.#n),this.#i=i}render(e){let t=e.previousElementSibling,n=this.line+1,r=t?.querySelector(`[data-column-number="${n}"]`),i=e.querySelector(`[data-line="${n}"]`);t!=null&&r!=null&&i!=null&&(r.after(this.#e),i.after(this.#t),t.style.gridRow=`span `+t.children.length,e.style.gridRow=`span `+e.children.length,this.#i())}cleanup(){let e=this.#e.parentElement,t=this.#t.parentElement;this.#e.remove(),this.#t.remove(),e!=null&&t!=null&&(e.style.gridRow=`span `+e.children.length,t.style.gridRow=`span `+t.children.length),this.#i(),this.#n.remove(),this.#r.disconnect()}},Td=class{#e;#t;#n;ch=-1;tabSize=2;lineHeight=20;paddingTop=0;init(e){if(this.#e===e&&this.#t!==void 0&&this.ch!==-1)return;if(this.#e=e,this.#t??=document.createElement(`canvas`).getContext(`2d`)??void 0,this.#t===void 0)throw Error(`Could not get canvas context`);let t=e.parentElement;if(t!==null){let{paddingTop:e}=getComputedStyle(t);e.endsWith(`px`)&&(this.paddingTop=parseFloat(e.slice(0,-2)))}let{fontSize:n,fontFamily:r,tabSize:i,lineHeight:a}=getComputedStyle(e);a.endsWith(`px`)?this.lineHeight=parseFloat(a.slice(0,-2)):n.endsWith(`px`)&&(this.lineHeight=gu(parseFloat(n.slice(0,-2))*parseFloat(a)));let o=n+` `+r;(this.#n!==o||this.ch===-1)&&(this.#n=o,this.#t.font=o,this.ch=this.canvasMeasureTextWidth(`0`)),this.tabSize=parseInt(i,10)}measureTextWidth(e){let t=e.replaceAll(`	`,` `.repeat(this.tabSize));return Ed(t)?this.domMeasureTextWidth(t):this.canvasMeasureTextWidth(t)}canvasMeasureTextWidth(e){if(this.#t===void 0)throw Error(`Metrics not initialized`);return gu(this.#t.measureText(e).width)}domMeasureTextWidth(e){if(this.#e===void 0)throw Error(`Metrics not initialized`);let t=Q(`span`,{style:{position:`absolute`,top:`0`,left:`0`,visibility:`hidden`,pointerEvents:`none`,whiteSpace:`pre`,font:`inherit`},textContent:e},this.#e);try{return t.getBoundingClientRect().width}finally{t.remove()}}};function Ed(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=57343||n===8205||n===65038||n===65039)return!0}return!1}function Dd(e,t){let n=Math.max(0,Math.min(t,e.length));if(n===0||n===e.length||!Ed(e))return n;let r=new Intl.Segmenter(void 0,{granularity:`grapheme`});for(let t of r.segment(e)){let e=t.index,r=e+t.segment.length;if(n>e&&n<r)return r;if(n<=e)break}return n}function Od(e){if(!Ed(e))return;let t=[0],n=new Intl.Segmenter(void 0,{granularity:`grapheme`});for(let r of n.segment(e))t.push(r.index+r.segment.length);return t}function kd(e,t){let n=0;for(let r=0;r<e.length;r++){if(e.charCodeAt(r)>127)return-1;n+=e.charCodeAt(r)===9?t:1}return n}var Ad=class e{static TOKENIZE_TIME_LIMIT=500;#e;#t;#n;#r;#i;#a;#o;#s;#c;#l;#u;#d=[P];#f=-1;#p=!0;#m=!1;#h=0;#g;#_=0;#v=!1;#y=hu(async e=>{let{startingLine:t=0,totalLines:n=1/0}=e??{},r=Math.min(n===1/0?1/0:t+n,this.#a.lineCount);this.#t===void 0&&!Nd(this.#a.languageId)&&(await this.#e.loadLanguage(this.#a.languageId),this.#t=this.#e.getLanguage(this.#a.languageId)),this.#O(r)},500);#b=({data:e})=>{if(typeof e!=`object`||!e)return;let{type:t,jobId:n}=e;t===`tokenize`&&typeof n==`number`&&n===this.#h&&this.#k(n)};get themeType(){return this.#r}constructor({codeOptions:e,highlighter:t,textDocument:n,setStyle:r,onDeferTokenize:i,__debug:a}){let{themeType:o=`system`,theme:s=pe,tokenizeMaxLineLength:c=1e3}=e;if(this.#n=window.matchMedia(`(prefers-color-scheme: dark)`),o===`system`?this.#r=this.#n.matches?`dark`:`light`:this.#r=o,typeof s!=`string`){let e=new MutationObserver(e=>{for(let{type:t,attributeName:n}of e)if(t===`attributes`&&n!==null&&(n===`class`||n.startsWith(`data-`))){let e=getComputedStyle(document.body).colorScheme===`dark`?`dark`:`light`;this.#x(s[e],e);break}});e.observe(document.documentElement,{attributes:!0}),e.observe(document.body,{attributes:!0}),this.#u=[$(this.#n,`change`,e=>{let t=e.matches?`dark`:`light`;this.#x(s[t],t)}),()=>e.disconnect()]}this.#e=t,this.#a=n,this.#o=c,this.#s=r,this.#c=i,this.#l=a??!1,!Nd(n.languageId)&&t.getLoadedLanguages().includes(n.languageId)&&(this.#t=t.getLanguage(n.languageId)),this.#i=[],this.#S(typeof s==`string`?s:s[this.#r])}#x(e,t){this.#r=t,this.#S(e),this.stopBackgroundTokenize(),this.#d=[P],this.#t!==void 0&&this.#a.lineCount>0&&this.#E(0)}#S(e){this.#i=this.#e.setTheme(e).colorMap;let{colors:t={}}=this.#e.getTheme(e),n=t[`editor.selectionBackground`],r=t[`editor.lineHighlightBackground`],i=t[`editorLineNumber.foreground`],a=t[`editorLineNumber.activeForeground`],o=t[`editorCursor.foreground`],s=t[`editor.findMatchBackground`],c=t[`editor.findMatchHighlightBackground`],l=t[`editorHint.foreground`],u=t[`editorInfo.foreground`],d=t[`editorWarning.foreground`],f=t[`editorError.foreground`];this.#s(`:host {
      --diffs-editor-selection-bg: ${n??`var(--diffs-line-bg)`};
      --diffs-editor-line-highlight-bg: ${r??`var(--diffs-line-bg)`};
      --diffs-editor-line-number-fg: ${i??`var(--diffs-fg-number)`};
      --diffs-editor-line-number-active-bg: ${r??`var(--diffs-line-bg, var(--diffs-bg))`};
      --diffs-editor-line-number-active-fg: ${a??`var(--diffs-selection-number-fg)`};
      --diffs-editor-match-bg: ${s??`unset`};
      --diffs-editor-match-highlight-bg: ${c??`unset`};
      --diffs-editor-cursor-fg: ${o??`unset`};
      --diffs-editor-hint-fg: ${l??`unset`};
      --diffs-editor-info-fg: ${u??`unset`};
      --diffs-editor-warning-fg: ${d??`unset`};
      --diffs-editor-error-fg: ${f??`unset`};
    }`)}cleanUp(){this.stopBackgroundTokenize(),this.#w(),this.#u?.forEach(e=>e()),this.#u=void 0}tokenize(e,t){if(this.#t===void 0&&!Nd(this.#a.languageId))throw Error(`Grammar not loaded`);let{lineCount:n}=this.#a,{startingLine:r=0,totalLines:i=1/0}=t??{},a=i===1/0?n:Math.min(r+i,n),o=e.startLine,s=Math.max(r,o),c=t!==void 0&&i!==1/0&&e.lineDelta>0&&o<a&&e.endLine>=a,l=e.lineDelta===0,u=l||t===void 0||o>=s,d=l?e.changedLineRanges??[[o,e.endLine]]:[[o,e.endLine]],f=-1;if(o<s)for(let[e,t]of d)e<s&&(f=Math.max(f,Math.min(t,s-1)));let p=f>=o&&(l||e.lineDelta<0);l?this.#O(o):(this.#d.length=Math.min(this.#d.length,o+1),(t===void 0||o>=s)&&this.#O(s));let m=0,h=d[m][1],g,_=0,v=l?d[m][0]:s,y=this.#d[v]??P,b=!1,x=new Map,S=p?new Map:void 0;if(S!==void 0&&!l){let e=Math.min(f+1,s,a);if(e>o){this.#O(e);let t=o,n=this.#d[t]??P;for(;t<e;t++){let e=this.#D(t,n);n=e.state,S.set(t,e.resolvedTokens)}u&&(this.#d[e]=n)}}for(;v<a;){let e=l?this.#d[v+1]:void 0;u&&(this.#d[v]=y);let{resolvedTokens:t,state:n}=this.#D(v,y);if(y=n,v>=s?x.set(v,t):S?.set(v,t),u&&(this.#d[v+1]=y),b=v>=h&&l&&e!==void 0&&y.equals(e),b){m++;let e=d[m];if(e===void 0)break;if(e[0]>=a){g=e[0],_=m;break}this.#d[e[0]]===void 0?(h=e[1],v++):(v=e[0],y=this.#d[v]??y,h=e[1]),b=!1;continue}v++}if(u&&(v<a?this.#d[v+1]=y:this.#d[v]=y),S!==void 0&&S.size>0&&this.#c(S,this.#r),g!==void 0)this.#E(g,d,_);else if(!b&&v<n){let e=c&&o>=s?a:o<s&&!l?o:v;this.#E(e,l?d:void 0,m)}return x}prebuildStateStack(e){this.#y(e)}stopBackgroundTokenize(){this.#p||(this.#p=!0,this.#m=!1,this.#f=-1,this.#g=void 0,this.#_=0,this.#w())}pauseBackgroundTokenize(){this.#p||this.#m||(this.#l&&console.log(`[diffs/editor] background tokenization paused`,{jobId:this.#h}),this.#m=!0)}resumeBackgroundTokenize(){this.#p||!this.#m||this.#t===void 0||this.#f<0||(this.#l&&console.log(`[diffs/editor] background tokenization resumed`,{jobId:this.#h}),this.#m=!1,this.#T(this.#h))}#C(){this.#v||=(globalThis.addEventListener(`message`,this.#b),!0)}#w(){this.#v&&=(globalThis.removeEventListener(`message`,this.#b),!1)}#T(e){globalThis.postMessage({type:`tokenize`,jobId:e})}#E(e,t,n=0){if(Nd(this.#a.languageId))return;let r=++this.#h;this.#l&&console.log(`[diffs/editor] background tokenization scheduled`,{jobId:r,startLine:e,changedLineRanges:t,changedRangeIndex:n}),this.#p=!1,this.#m=!1,this.#f=e,this.#g=t,this.#_=n,this.#C(),this.#T(r)}#D(t,n){let r=this.#a.getLineText(t);if(r.length>this.#o)return console.warn(`[diffs] Line(${t}) too long to tokenize: ${r.length}`),{resolvedTokens:[[0,``,r]],state:n};if(this.#t===void 0||r===``||r.trim()===``)return{resolvedTokens:[[0,``,r]],state:n};let i=jd(this.#t,this.#i,r,n,e.TOKENIZE_TIME_LIMIT);return{resolvedTokens:i.resolvedTokens,state:i.ruleStack}}#O(t){let n=Math.min(Math.max(0,t),this.#a.lineCount);if(this.#d.length>n||this.#t===void 0)return;let r=this.#d.length-1,i=this.#d[r]??P;for(;r<n;r++){this.#d[r]=i;let t=this.#a.getLineText(r);t.length<=this.#o&&t!==``&&t.trim()!==``&&(i=this.#t.tokenizeLine2(t,i,e.TOKENIZE_TIME_LIMIT).ruleStack)}this.#d[r]=i}#k(t){if(this.#p||this.#m||this.#t===void 0||t!==this.#h)return;let n=performance.now(),r=new Map,i=this.#a.lineCount,a=this.#g,o=this.#f,s=this.#d[o]??P,c=!1,l=this.#_,u=a?.[l]?.[1];for(;o<i;){this.#d[o]=s;let t=u===void 0?void 0:this.#d[o+1],i=this.#a.getLineText(o);if(i.length>this.#o)console.warn(`[diffs] Line(${o}) too long to tokenize: ${i.length}`),r.set(o,[[0,``,i]]);else if(i===``||i.trim()===``)r.set(o,[[0,``,i]]);else{let t=jd(this.#t,this.#i,i,s,e.TOKENIZE_TIME_LIMIT);r.set(o,t.resolvedTokens),s=t.ruleStack}if(this.#d[o+1]=s,c=u!==void 0&&o>=u&&t!==void 0&&s.equals(t),o++,c){l++;let e=a?.[l];if(e===void 0)break;if(u=e[1],this.#d[e[0]]===void 0)c=!1;else{o=e[0],s=this.#d[o]??s,c=!1;continue}}if(performance.now()-n>1)break}if(this.#c(r,this.#r),!(this.#p||this.#m||t!==this.#h)){if(c||o>=i){this.stopBackgroundTokenize();return}this.#f=o,this.#_=l,this.#T(t)}}};function jd(e,t,n,r,i){let a=e.tokenizeLine2(n,r,i);a.stoppedEarly&&console.warn(`[diffs] Time limit reached when tokenizing line: ${n.substring(0,100)}`);let o=a.tokens,s=o.length/2,c=[];for(let e=0;e<s;e++){let r=o[2*e],i=e+1<s?o[2*e+2]:n.length;if(r===i)continue;let a=o[2*e+1],l=t[we.getForeground(a)],u=n.slice(r,i);c.push([r,l,u])}return{ruleStack:a.ruleStack,resolvedTokens:c}}function Md(e,t){return e.map(([e,n,r])=>e===0&&n===``?r===``?Q(`br`):r:Q(`span`,{dataset:{char:e.toString()},style:`--diffs-token-${t}:${n};`,textContent:r}))}function Nd(e){return e===`text`||e===`ansi`}var Pd=class{#e;#t=!1;#n=new Td;#r;#i;#a;#o;#s;#c;#l;#u=new Map;#d=new Map;#f;#p;#m;#h;#g;#_;#v;#y;#b;#x;#S;#C;#w;#T;#E;#D;#O;#k;#A;#j;#M;#N=!1;#P=!1;#F=!1;#I=!1;#L;#R;#z;#B;#V;#H;#U;#W=!1;#G=!1;#K=(e,t)=>{if(this.#T?.updateRenderCache(e,t),this.#k!==void 0&&this.#k.totalLines!==1/0){let{startingLine:n,totalLines:r}=this.#k,i=Math.min(n+r,this.#O?.lineCount??0);for(let[r,a]of e)if(r>=n&&r<i){let e=this.#Te(r);e!==void 0&&e.replaceChildren(...Md(a,t))}}};constructor(e={}){this.#e=e}edit(e){let{useTokenTransformer:t,expandUnchanged:n,diffStyle:r,...i}=e.options,a=e.type===`file-diff`;return(t!==!0||n!==!0&&a||r===`unified`&&a)&&(e.setOptions({...i,useTokenTransformer:!0,expandUnchanged:!0,diffStyle:`split`}),e.rerender()),this.#T=e,this.#Y(),this.#s=e.attachEditor(this),()=>this.cleanUp()}applyEdits(e,t=!1){let n=this.#O;if(n==null)throw Error(`Editor is not attached`);let r=n.applyEdits(e,t,this.#B);r!==void 0&&this.#Ce(r,void 0,this.#we(r))}getState(){let e=this.#Se();if(e===void 0)throw Error(`Editor is not attached`);return{file:{...e,cacheKey:`edited-at-`+Date.now()},selections:this.#B,lineAnnotations:this.#D,renderRange:this.#k}}setState({file:e,lineAnnotations:t,renderRange:n,selections:r}){this.#q(),this.#J(),this.#z=r,this.#T?.render({file:{...e,cacheKey:`edited-at-`+Date.now()},lineAnnotations:t,renderRange:n})}setSelections(e){let t=this.#O;if(t===void 0)throw Error(`Text document is not initialized`);let n=e.map(e=>{let n=t.normalizePosition(e.start),r=t.normalizePosition(e.end);return{direction:e.direction===`none`?0:e.direction===`backward`?-1:1,start:n,end:r}});this.#oe(n),this.#re(!1,`center`)}setMarkers(e){let t=this.#O;if(t===void 0)throw Error(`Text document is not initialized`);if(e.length===0){this.#A?.cleanup(),this.#A=void 0,this.#oe(this.#B??[]);return}this.#A??=new vd({getLineHeight:()=>this.#n.lineHeight,getFileContainer:()=>this.#v,getCharX:(e,t)=>this.#ke(e,t),getLineY:e=>this.#Oe(e),isMouseDown:()=>this.#F||this.#P}),this.#A.setMarkers(e,t),this.#b!==void 0&&this.#A.listenHover(this.#b),this.#oe(this.#B??[])}focus(e){let t=e?.preventScroll??!1,n=this.#B?.at(-1);if(n!==void 0){let e=n.direction===-1?n.end:n.start;this.#te(e,t)}else this.#te(void 0,t)}blur(){this.#b?.blur()}cleanUp(){this.#r?.cleanUp(),this.#r=void 0,this.#a?.forEach(e=>e()),this.#a=void 0,this.#i?.forEach(e=>e()),this.#i=void 0,this.#o?.forEach(e=>e()),this.#o=void 0,this.#s?.(),this.#s=void 0,this.#c=void 0,this.#l=void 0,this.#u.clear(),this.#d.clear(),this.#f=void 0,this.#p=void 0,this.#m?.remove(),this.#m=void 0,this.#h?.remove(),this.#h=void 0,this.#g?.remove(),this.#g=void 0,this.#_?.remove(),this.#_=void 0,this.#v=void 0,this.#y=void 0,this.#b?.removeAttribute(`contentEditable`),this.#b=void 0,this.#x?.remove(),this.#x=void 0,this.#w?.disconnect(),this.#w=void 0,this.#J()}__postponeBackgroundTokenizeToNextFrame(){let e=this.#r;e!==void 0&&(e.pauseBackgroundTokenize(),requestAnimationFrame(()=>{e.resumeBackgroundTokenize()}))}__syncRenderView=(e,t,n,r,i)=>{let a=t.shadowRoot;if(a==null){console.error(`[editor] Could not find the shadow root.`);return}let o,s,c;for(let e of a.querySelectorAll(`[data-code]`))if(e.dataset.deletions===void 0){o=e;for(let t of e.children){let e=t,{gutter:n,content:r}=e.dataset;n===void 0?r!==void 0&&(c=e):s=e}break}if(!(o===void 0||c===void 0)){if(this.#v!==t&&(this.#v=t,this.#m!==void 0&&t.appendChild(this.#m),this.#h!==void 0&&a.appendChild(this.#h),this.#g!==void 0&&a.appendChild(this.#g),this.#_!==void 0&&a.prepend(this.#_)),this.#O===void 0||this.#E===void 0||this.#E.name!==n.name||this.#E.contents!==n.contents||this.#E.lang!==n.lang||this.#E.cacheKey!==n.cacheKey){let t=new Tl({maxEntries:this.#e.historyMaxEntries}),r=new Ql(n.name,n.contents,n.lang??Re(n.name),0,t);this.#E=n,this.#O=r,this.#r?.cleanUp(),this.#r=new Ad({highlighter:e,textDocument:r,codeOptions:this.#T?.options??{},onDeferTokenize:this.#K,setStyle:e=>{this.#g.textContent=e},__debug:this.#e.__debug}),this.#J(),this.#B=this.#z,this.#e.onAttach?.(this,this.#T),this.#O!==void 0&&this.#e.__debug===!0&&console.log(`[diffs/editor] text document changed !!!`)}if(this.#b!==c&&(this.#y=s,this.#b=mu(c,{contentEditable:`true`,role:`textbox`,ariaMultiLine:`true`,autocapitalize:`off`,writingSuggestions:`off`,autocorrect:!1,spellcheck:!1,translate:!1}),this.#x!==void 0&&c.after(this.#x),this.#n.init(c),this.#X(c,s),this.#b!==void 0&&this.#e.__debug===!0&&console.log(`[diffs/editor] full re-render triggered !!!`)),this.#q(),this.#t=this.#T?.options.overflow===`wrap`,this.#D=r,this.#k=i,this.#r?.prebuildStateStack(i),(this.#B!==void 0||this.#V!==void 0||this.#A!==void 0)&&this.#oe(this.#B??[]),this.#z!==void 0&&this.#C!==void 0?(this.#z=void 0,this.#re(!1,`center`)):this.#H===void 0?this.#B!==void 0&&this.#B.length>0&&!this.#G&&this.focus({preventScroll:!0}):this.#ae(this.#H,this.#U,this.#W),this.#G&&this.#j?.focus(),this.#M!==void 0&&this.#Me(this.#M.line)&&this.#b!==void 0&&this.#M.render(this.#b),this.#e.__debug===!0&&i!==void 0){let{startingLine:e,totalLines:t}=i;console.log(`[diffs/editor] render file:`,n.name,`RenderRange:`,e+`-`+(e+t),`of`,this.#O.lineCount,`lines`)}}};#q(){this.#u.clear(),this.#d.clear(),this.#f=void 0,this.#p=void 0}#J(){this.#c=void 0,this.#l=void 0,this.#T?.setSelectedLines(null),this.#N=!1,this.#S?.forEach(e=>e.remove()),this.#S=void 0,this.#B=void 0,this.#R=void 0,this.#H=void 0,this.#A?.cleanup(),this.#A=void 0,this.#j?.cleanup(),this.#j=void 0,this.#M?.cleanup(),this.#M=void 0}#Y(){this.#m=Q(`style`,{dataset:`editorGlobalCss`,textContent:`
        [data-annotation-slot] {
          user-select: none;
          -webkit-user-select: none;
        }
      `}),this.#h=Q(`style`,{dataset:`editorCss`,textContent:du}),this.#g=Q(`style`,{dataset:`editorThemeCss`}),this.#_=xd(),this.#x=Q(`div`,{dataset:`editorOverlay`}),this.#a=[$(document,`selectionchange`,()=>{let e=this.#v?.shadowRoot;if(this.#N||e==null||this.#B!==void 0&&this.#B.length>1&&!this.#F)return;let t=document.getSelection()?.getComposedRanges({shadowRoots:[e]})?.[0];if(t===void 0||!this.#je(t))return;let n=wu(t,0);if(n!==void 0){if(this.#F&&this.#I&&this.#B!==void 0&&this.#B.length>0){let e=this.#B.at(-1);this.#oe([Vu(e,n)]);return}this.#F?this.#L===void 0?this.#L=n:n=Bu(this.#L,n):this.#L!==void 0&&(n.direction=Bu(this.#L,n).direction),this.#R===void 0?this.#oe([n]):this.#oe([...this.#R.filter(e=>!Lu(e,n)),n])}},{passive:!0}),$(document,`pointerup`,e=>{e.pointerType===`mouse`&&(this.#o?.forEach(e=>e()),this.#o=void 0,this.#P&&(this.#P=!1,this.#te()),this.#N=!1,this.#F=!1,this.#I=!1,this.#L=void 0,this.#R=void 0,this.#S?.forEach((e,t)=>{t.startsWith(`selectionActionIcon-`)&&(e.dataset.visible=`true`)}))},{passive:!0}),$(document,`keydown`,e=>{e.key===`Shift`&&(this.#L=this.#B?.at(-1))},{passive:!0}),$(document,`keyup`,e=>{e.key===`Shift`&&(this.#L=void 0)},{passive:!0})]}#X(e,t){let n=t=>{let n=t.composedPath()[0];return n!==void 0&&(n===e||e.contains(n))};if(this.#i?.forEach(e=>e()),this.#i=[$(e,`pointerdown`,t=>{if(t.pointerType===`mouse`&&(this.#A?.removePopup(),au()&&this.#D!==void 0&&this.#D.length>0&&(this.#o=[...e.querySelectorAll(`[data-line-annotation]`)].map(e=>[$(e,`mouseenter`,()=>{this.#N=!0}),$(e,`mouseleave`,()=>{this.#N=!1})]).flat()),this.#F=!0,this.#L=void 0,t.button===0&&ou(t)&&(this.#R=this.#B?.map(e=>({...e}))),t.shiftKey)){let e=this.#B?.at(-1);if(e!==void 0){let t=e.direction===-1?e.end:e.start;this.#ne({start:t,end:t,direction:0})}this.#I=!0}},{passive:!0}),$(e,`keydown`,e=>{if(e.key===`Escape`){if(e.preventDefault(),this.#j?.cleanup(),this.#j=void 0,this.#G=!1,this.#M?.cleanup(),this.#M=void 0,this.#B!==void 0&&this.#B.length>0){let e=this.#B.at(-1);if(!Pu(e)||this.#B.length>1){let t=Fu(e);this.#oe([{start:t,end:t,direction:0}]),this.#te(t)}}return}if(!n(e))return;let t=su(e),r=this.#O;if(this.#B!==void 0&&this.#B.length>0&&t!==void 0&&r!==void 0){e.shiftKey?this.#oe(Du(r,this.#B,t)):this.#oe(Eu(r,this.#B,t)),this.#re(),e.preventDefault();return}let i=uu(e);i!==void 0&&(e.preventDefault(),this.#Z(i))}),$(e,`copy`,e=>{n(e)&&(e.preventDefault(),e.clipboardData?.setData(`text`,this.#me()))}),$(e,`cut`,e=>{n(e)&&(e.preventDefault(),e.clipboardData?.setData(`text`,this.#me()),this.#he(``))}),$(e,`paste`,e=>{if(!n(e))return;e.preventDefault();let t=e.clipboardData?.getData(`text`);t!==void 0&&this.#he(t)}),$(e,`beforeinput`,e=>{n(e)&&(e.preventDefault(),this.#ee(e.inputType,e.data))}),$(e,`drop`,e=>{n(e)&&e.preventDefault()}),$(e,`compositionstart`,e=>{n(e)&&(this.#N=!0)},{passive:!0}),$(e,`compositionend`,e=>{n(e)&&(this.#N=!1,this.#ee(`insertText`,e.data))},{passive:!0})],t!==void 0){let e=(e,t=!1)=>{let n=e;return n?.dataset.lineNumberContent===void 0?t&&n?.tagName===`SPAN`&&(n=n.closest(`[data-line]`)):n=n.parentElement??void 0,n},n=e=>{if(e===void 0)return;let t=e.dataset.lineType,n=fu(e)??fu(e,`columnNumber`);if(!(n===void 0||t===void 0||!Iu(t)))return n-1};this.#i.push($(t,`pointerdown`,t=>{if(this.#T?.options.enableLineSelection===!0)return;let r=this.#O,i=n(e(t.composedPath()[0]));if(i===void 0||r===void 0)return;this.#A?.removePopup();let a={start:{line:i,character:0},end:{line:i,character:r.getLineText(i).length},direction:1};this.#P=!0,this.#L=a,this.#oe([a]),this.#te(a.end),this.#o=[$(document,`mousemove`,t=>{if(!this.#P)return;let r=this.#O,i=n(e(t.composedPath()[0],!0));if(i===void 0||r===void 0)return;let a={start:{line:i,character:0},end:{line:i,character:r.getLineText(i).length},direction:1};this.#L===void 0?this.#L=a:a=Bu(this.#L,a),this.#oe([a]),this.#te(a.end)},{passive:!0})]},{passive:!0}))}this.#A?.listenHover(e),this.#w?.disconnect(),this.#w=new ResizeObserver(()=>{this.#Q()}),this.#w.observe(e),this.#w.observe(e.parentElement)}#Z(e){let t=this.#O;if(t!==void 0)switch(e){case`openSearchPanel`:this.#fe(`find`);break;case`openSearchReplacePanel`:this.#fe(`replace`);break;case`findNextMatch`:{let e=this.#B;if(e===void 0)break;if(e.some(Pu)){let n=e.map(e=>Pu(e)?Yu(t,e):e);this.#oe(n),this.focus()}else{let n=Wu(t,e);n!==void 0&&(this.#oe(n),this.#re())}break}case`indent`:case`outdent`:if(this.#B!==void 0){let n=[],r=[];for(let i of this.#B){let a=i.start.line,o=e===`outdent`;if(a!==i.end.line||o){let e=Tu(t,i,this.#n.tabSize,o);n.push(...e[0]),r.push(e[1])}else{let e=t.charAt({line:a,character:0});this.#he(e===`	`?`	`:` `.repeat(this.#n.tabSize))}}let i=t.applyEdits(n,!0,this.#B,r);i!==void 0&&this.#Ce(i,r)}break;case`selectAll`:this.#oe([Gu(t)]),this.focus();break;case`moveCursorToDocStart`:case`moveCursorToDocEnd`:{let n=e===`moveCursorToDocEnd`;this.#oe([Ku(t,n)]),this.#re()}break;case`expandSelectionDocStart`:case`expandSelectionDocEnd`:{let n=e===`expandSelectionDocEnd`,r=this.#B;r!==void 0&&(this.#oe(Hu(r,Ku(t,n))),this.#re())}break;case`undo`:if(this.#O?.canUndo===!0){let e=this.#O.undo();e!==void 0&&this.#Ce(...e)}break;case`redo`:if(this.#O?.canRedo===!0){let e=this.#O.redo();e!==void 0&&this.#Ce(...e)}break}}#Q(){let e=this.#D?.length??0,t=this.#c,n=this.#l;this.#c=void 0,this.#l=void 0;let r=this.#Ee()!==t,i=this.#De()!==n;!r&&!i||(this.#f=void 0,this.#p=void 0,i&&(this.#t||e>0)&&(this.#u.clear(),this.#d.clear()),(this.#B!==void 0||this.#V!==void 0||this.#A!==void 0)&&(this.#oe(this.#B??[]),this.#B!==void 0&&this.focus()),this.#A?.removePopup())}#$(e,t,n=this.#k,r){let i=this.#r,a=this.#T,o=this.#E,s=this.#O,c=this.#y,l=this.#b;if(i===void 0||a===void 0||o===void 0||s===void 0||l===void 0)return;i.stopBackgroundTokenize();let u=performance.now(),d=i.tokenize(e,n),f=performance.now();if(d.size>0){let t=l.children,r=new Set(d.keys()),a=n?.startingLine??0;for(let n=e.startLine-a;n<t.length;n++){let e=t[n];if(e!==void 0){let t=fu(e);if(t!==void 0){let n=t-1;if(d.has(n)){let t=d.get(n);if(e.replaceChildren(...Md(t,i.themeType)),r.delete(n),r.size===0)break}}}}if(r.size>0)for(let e of r){let t=d.get(e),n=String(e+1);Q(`div`,{dataset:{line:n,lineType:`context`,lineIndex:e.toString()},children:Md(t,i.themeType)},l),c!==void 0&&Q(`div`,{dataset:{lineType:`context`,columnNumber:n,lineIndex:e.toString()},children:[Q(`span`,{dataset:{lineNumberContent:``},textContent:n})]},c)}}if(e.lineDelta<0)for(let t of[l.children,c?.children??[]])for(let n=t.length-1;n>=0;n--){let r=t[n],i=fu(r)??fu(r,`columnNumber`);if(i!==void 0){if(i-1<e.lineCount)break;r.remove()}}let p=Object.hasOwn(a,`fileDiff`),m=e.lineDelta!==0;if(m){let e=l.children.length;for(let t of l.children){let{bufferSize:n}=t.dataset;n!==void 0&&(e+=parseInt(n)-1)}l.style.gridRow=`span `+e,c!==void 0&&(c.style.gridRow=`span `+e)}a.updateRenderCache(d,i.themeType,p?!m:void 0),m&&a.applyDocumentChange(s,t,r),t!==void 0&&(this.#D=t,vu(t,l,c)),this.#e.__debug===!0&&console.log(`[diffs/editor] re-render in: ${gu(performance.now()-f)}ms,`,`tokenize in: ${gu(f-u)}ms (${d.size} dirty lines)`)}#ee(e,t){switch(e){case`insertText`:this.#he(t??``);break;case`insertParagraph`:this.#he(`
`);break;case`deleteContentBackward`:this.#ge();break;case`deleteContentForward`:this.#ge(!0);break;case`deleteSoftLineBackward`:this.#_e();break;case`deleteHardLineForward`:this.#ye();break;case`deleteWordBackward`:this.#ve();break;case`insertTranspose`:this.#be();break;default:console.warn(`[diffs] Unknown input type: ${e}`,t);break}}#te(e,t=!0){e===void 0?this.#b?.focus({preventScroll:t}):(this.#N=!0,this.#ne({start:e,end:e,direction:0}),requestAnimationFrame(()=>{this.#b?.focus({preventScroll:t}),requestAnimationFrame(()=>{this.#N=!1})}))}#ne(e){let t=window.getSelection();if(t===null)return;let{start:n,end:r,direction:i}=e;Ru(n,r)>0&&([n,r]=[r,n]);let a=this.#Te(n.line),o=this.#Te(r.line);if(a===void 0||o===void 0)return;let[s,c]=Ju(a,n.character),[l,u]=Ju(o,r.character);i===-1&&([s,c,l,u]=[l,u,s,c]);try{t.setBaseAndExtent(s,pu(s,c),l,pu(l,u))}catch(e){console.error(`[diffs/editor] failed to update window selection:`,e)}}#re(e=!1,t=`nearest`){let n=this.#B?.at(-1);if(n===void 0)return;let r=this.#C;if(r!==void 0)r.scrollIntoView({block:t,inline:`nearest`}),e||this.#te(n.direction===-1?n.end:n.start);else{let t=Fu(n);this.#ae(t.line,t.character,e)}}#ie(){let e=this.#T?.top??0,t=this.#j===void 0?0:48,n=this.#Ee()+this.#n.ch,r=this.#n.ch;return`${e+t}px ${r}px 0 ${n}px`}#ae(e,t=0,n=!1){this.__postponeBackgroundTokenizeToNextFrame();let r=Q(`div`,{style:{position:`absolute`,left:`0`,width:`2px`,height:this.#n.lineHeight+`px`,scrollMargin:this.#ie()}});if(this.#Te(e)!==void 0){let[i,a]=this.#ke(e,t),o=this.#Oe(e)+a*this.#n.lineHeight;r.style.top=o+`px`,r.style.left=i+`px`,this.#x?.appendChild(r),r.scrollIntoView({block:`center`,inline:`nearest`}),n||this.#te({line:e,character:t}),this.#H=void 0,this.#U=void 0,this.#W=!1}else{let i=0;if(this.#H===e&&this.#b!==void 0)for(let t=this.#b.childElementCount-1;t>=0;t--){let n=this.#b.children[t],r=n.dataset.lineType,a=fu(n);if(r!==void 0&&Iu(r)&&a!==void 0){i=(e-a)*this.#n.lineHeight;break}}let a=((this.#D??[]).filter(t=>t.lineNumber<e).length+e)*this.#n.lineHeight+i;r.style.top=a+`px`,this.#v?.shadowRoot?.appendChild(r),r.scrollIntoView({block:`center`,inline:`nearest`}),this.#H===e&&i===0?(this.#H=void 0,this.#U=void 0,this.#W=!1):(this.#H=e,this.#U=t,this.#W=n)}r.remove()}#oe(e){if(this.__postponeBackgroundTokenizeToNextFrame(),this.#C=void 0,this.#T?.setSelectedLines(null),this.#y?.querySelectorAll(`[data-active]`).forEach(e=>e.removeAttribute(`data-active`)),e.length===0&&this.#V===void 0&&this.#A===void 0){this.#B=void 0,this.#S?.forEach(e=>e.remove()),this.#S?.clear();return}let t=document.createDocumentFragment(),n={fragment:t,elements:new Map};if(e.length>0){let t=Uu(e),r=t.at(-1);if(this.#B=t,Pu(r)){let e=r.start.line+1;this.#T?.setSelectedLines({start:e,end:e})}else if(this.#y!==void 0){let e=Fu(r);this.#y.querySelector(`[data-column-number="${e.line+1}"]`)?.setAttribute(`data-active`,``)}for(let e of t)Pu(e)||this.#se(n,`selection`,e),this.#ue(n,e,e===r);this.#e.enabledSelectionAction===!0&&!Pu(r)&&this.#de(n,r)}let r=this.#O;if(this.#V!==void 0&&r!==void 0){let e=this.#B?.at(-1),t=e===void 0?-1:r.offsetAt(e.start),i=e===void 0?-1:r.offsetAt(e.end);for(let[e,a]of this.#V){let o={start:r.positionAt(e),end:r.positionAt(a)},s=t===e&&i===a;this.#se(n,`match`,o,s?`focus`:void 0)}}if(this.#A!==void 0&&r!==void 0)for(let e of this.#A.markers)this.#se(n,`marker`,e,yd(e.severity));this.#x?.appendChild(t),this.#S?.forEach(e=>e.remove()),this.#S?.clear(),this.#S=n.elements}#se(e,t,n,r){if(this.#O===void 0)return;let{start:i,end:a}=n;for(let n=i.line;n<=a.line;n++){if(!this.#Me(n))continue;let o=n===a.line,s=this.#O.getLineText(n),c=n===i.line?i.character:0,l=o?a.character:s.length;if(this.#t){let i=this.#De();if(2*this.#n.ch+this.#n.measureTextWidth(s)>i){this.#ce(e,n,s,c,l,o,t,r);continue}}let u=0,d=0,f=0;u=c===0?this.#Ee()+this.#n.ch:this.#ke(n,c)[0],!o&&t===`selection`&&(f=this.#n.ch),d=c===l?f:this.#ke(n,l)[0]-u+f,this.#le(e,t,n,0,u,d,r)}}#ce(e,t,n,r,i,a,o,s){let c=this.#Ae(t),l=c.length-1,u=this.#Ee()+this.#n.ch;for(let d=0;d<l;d++){let f=c[d],p=c[d+1],m=Math.max(r,f),h=Math.min(i,p);if(m>h)continue;let g,_,v=0;if(m===0)g=u;else{let e=n.slice(f,m),t=kd(e,this.#n.tabSize);g=u+(t===-1?this.#n.measureTextWidth(e):t*this.#n.ch)}if(!a&&d===l-1&&o===`selection`&&(v=this.#n.ch),m===h)_=v;else{let e=n.slice(m,h),t=kd(e,this.#n.tabSize);_=t===-1?this.#n.measureTextWidth(e):t*this.#n.ch,_+=v}this.#le(e,o,t,d,g,_,s)}}#le(e,t,n,r,i,a,o){if(a===0)return;let{ch:s,lineHeight:c}=this.#n,l=this.#Oe(n)+r*c,u=`width:${a}px;transform:translateX(${i}px) translateY(${l}px);`,d=`${t}-${i}-${l}-${a}${o??``}`,f=this.#S,p=(this.#e.roundedSelection??!0)&&t===`selection`,m=(n,r,i,a)=>{let o=this.#Oe(n)+r*c,l=`width:${s}px;transform:translateX(${i}px) translateY(${o}px);`,u={selectionCorner:``,[a]:``},d=`${t}-block-${i}-${o}-1ch`,p=d+`-`+a;if(a===`rbl`){let t=d+`-rtl`,n=e.elements.get(t);n!==void 0&&(n.remove(),e.elements.delete(t),p+=`-rtl`,u.rtl=``)}let m=e.elements.get(p);m===void 0&&(f?.has(p)===!0?(m=f.get(p),f.delete(p)):m=Q(`div`,{dataset:`selectionRange`,style:{cssText:l},children:[Q(`div`,{dataset:u})]},e.fragment),e.elements.set(p,m))},h=t=>{let o=i+a,c=t.dataset,l=e.previousSelectionRange;if((l===void 0||l.line!==n||l.wrapLine!==r)&&(e.previousSelectionRange={element:t,line:n,wrapLine:r,left:i,width:a}),l===void 0||o<=l.left)[`rtl`,`rtr`,`rbl`,`rbr`].forEach(e=>{c[e]=``});else{let e=l.line,t=l.wrapLine,a=l.left,u=l.element.dataset,d=a+l.width;a>i&&m(e,t,a-s,`rbr`),delete u.rbl,delete c.rtl,delete c.rtr,o>=d&&delete u.rbr,o>d&&(m(e,t,d,`rbl`),c.rtr=``),o<d&&m(n,r,o,`rtl`),i<a&&(c.rtl=``),c.rbl=``,c.rbr=``}},g=e.elements.get(d);if(g!==void 0){p&&h(g);return}f?.has(d)===!0?(g=f.get(d),f.delete(d)):g=Q(`div`,{dataset:o?[t+`Range`,o]:t+`Range`,style:{cssText:u}},e.fragment),p&&h(g),e.elements.set(d,g)}#ue(e,t,n){let{line:r,character:i}=Fu(t);if(!this.#Me(r))return;let[a,o]=this.#ke(r,i),s=`caret-`+r+`/`+o+`:`+i;if(e.elements.has(s))return;let c=Q(`div`,{dataset:`caret`,style:{transform:`translateX(${a-1}px) translateY(${this.#Oe(r)+o*this.#n.lineHeight}px)`}},e.fragment);e.elements.set(s,c),n&&(c.style.scrollMargin=this.#ie(),this.#C=c)}#de(e,t){let n=Fu(t).line;if(!this.#Me(n))return;let[r,i]=this.#ke(n,0),a=`selectionActionIcon-`+n+`(`+i+`)`;if(e.elements.has(a))return;let o=wd.renderIcon(r,this.#Oe(n)+i*this.#n.lineHeight,e.fragment,()=>{let e=()=>{this.#M?.cleanup(),this.#M=void 0},n=()=>{this.#u.clear(),this.#B!==void 0&&this.#oe(this.#B)};e();let r=this.#O,i=this.#e.renderSelectionAction,a=this.#v;if(r===void 0||i===void 0||a==null)return;let o=t.end.line,s=r.getLineText(o),c=i({textDocument:r,selection:t,applyEdits:e=>this.applyEdits(e,!0),getSelectionText:()=>this.#O?.getText(t)??``,replaceSelectionText:e=>{this.#he(e,[t])},close:()=>{e(),n(),this.#re()}}),l=0;for(let e=0;e<s.length;e++){let t=s.charCodeAt(e);if(t===32)l++;else if(t===9)l+=this.#n.tabSize;else break}this.#M=new wd(o,c,a,l,n),this.#oe([t]),this.#Me(o)&&this.#b!==void 0&&this.#M.render(this.#b)});e.elements.set(a,o)}#fe(e){if(this.#j!==void 0){this.#j.setMode(e);return}this.#pe(e)}#pe(e){this.#j?.cleanup();let t=this.#O,n=this.#v?.shadowRoot?.querySelector(`pre`),r=this.#B;if(t===void 0||n==null)return;let i=``,a;if(r!==void 0&&r.length>0){let e=r.at(-1);if(Pu(e)){e=Yu(t,e),this.#oe([...r.slice(0,-1),e]);let n=t.getText(e);n!==``&&!n.includes(`
`)&&(i=n,a=[t.offsetAt(e.start),t.offsetAt(e.end)])}}let o=([e,n],r)=>{let i=zu(t,e,n);this.#oe([i]),this.#re(!0),this.#G=r};this.#j=new Cd({textDocument:t,containerElement:n,defaultQuery:i,mode:e,initialMatch:a,scrollToMatch:o,applyReplace:e=>{if(e.length===0)return;let n=t.applyEdits(e.map(e=>({range:{start:t.positionAt(e.start),end:t.positionAt(e.end)},newText:e.text})),!0,this.#B);n!==void 0&&this.#Ce(n,void 0,this.#we(n),{skipSearchRefresh:!0})},onUpdate:(e,n)=>{if(e.length===0){this.#V=void 0,this.#oe(this.#B??[]);return}if(this.#V=e,n?.syncSelection===!1){this.#oe(this.#B??[]);let n=this.#B?.at(-1);if(n!==void 0){let r=t.offsetAt(n.start),i=t.offsetAt(n.end);for(let t of e)if(t[0]===r&&t[1]===i)return t}return}let r=this.#B?.at(-1),i=0,a;r!==void 0&&(i=t.offsetAt(r.start));for(let t of e)if(t[0]>=i){a=t;break}return a===void 0?this.#oe(this.#B??[]):o(a,!0),a},onClose:()=>{this.#j=void 0,this.#G=!1,this.#V=void 0,this.#oe(this.#B??[])}}),this.#G=!1}#me(){let e=this.#O,t=this.#B;return e===void 0||t===void 0?``:qu(e,t)}#he(e,t=this.#B){if(t===void 0)return;let n=this.#O,r=t.at(-1);if(n===void 0||r===void 0)return;let{nextSelections:i,change:a}=Array.isArray(e)&&e.length===t.length?ku(n,t,e,this.#D):Ou(n,t,{start:n.offsetAt(r.start),end:n.offsetAt(r.end),text:Array.isArray(e)?e.join(`
`):e},this.#D);a!==void 0&&this.#Ce(a,i,this.#we(a))}#ge(e=!1){let t=this.#B,n=this.#O;if(t===void 0||n===void 0)return;let r=t.at(-1);if(r===void 0)return;let i;if(Pu(r)){let t=n.offsetAt(r.start),a=e?Math.min(n.getText().length,t+1):Math.max(0,t-1);i={start:Math.min(t,a),end:Math.max(t,a),text:``}}else i={start:n.offsetAt(r.start),end:n.offsetAt(r.end),text:``};this.#xe(i)}#_e(){let e=this.#B,t=this.#O;if(e===void 0||t===void 0)return;let{nextSelections:n,change:r}=Mu(t,e,this.#t?(e,t)=>{let n=this.#Ae(e);for(let e=0;e+1<n.length;e++){let r=n[e],i=n[e+1];if(t>=r&&t<=i)return r}return 0}:void 0,this.#D);r!==void 0&&this.#Ce(r,n,this.#we(r))}#ve(){let e=this.#B,t=this.#O;if(e===void 0||t===void 0)return;let{nextSelections:n,change:r}=Nu(t,e,this.#D);r!==void 0&&this.#Ce(r,n,this.#we(r))}#ye(){let e=this.#B,t=this.#O;if(e===void 0||t===void 0)return;let{nextSelections:n,change:r}=ju(t,e,this.#D);r!==void 0&&this.#Ce(r,n,this.#we(r))}#be(){let e=this.#B,t=this.#O;if(e===void 0||t===void 0)return;let{nextSelections:n,change:r}=Au(t,e,this.#D);r!==void 0&&this.#Ce(r,n,this.#we(r))}#xe(e){if(this.#B===void 0||this.#O===void 0)return;let{nextSelections:t,change:n}=Ou(this.#O,this.#B,e,this.#D,this.#n.tabSize);n!==void 0&&this.#Ce(n,t,this.#we(n))}#Se(){let e=this.#E,t=this.#O;if(e===void 0||t===void 0)return;let{contents:n,...r}=e;return Object.defineProperty(r,"contents",{enumerable:!0,get:()=>t.getText()}),r}#Ce(e,t,n,r){let i=this.#Se(),a=this.#e.onChange;if(i!==void 0&&a!==void 0&&a(i,n??this.#D),e.lineDelta!==0)for(let t of this.#u.keys())t>=e.startLine&&this.#u.delete(t);if(this.#t)for(let t of this.#d.keys())t>=e.startLine&&this.#d.delete(t);this.#p=void 0;let o=this.#k,s;if(o!==void 0&&t!==void 0&&t.length>0){let e=t.at(-1),n=o.startingLine+o.totalLines;e.end.line===n?o={...o,totalLines:o.totalLines+1}:e.end.line>n&&(s=!0)}if(this.#$(e,n,o,s),r?.skipSearchRefresh!==!0&&this.#j!==void 0&&this.#V!==void 0&&this.#j.updateMatches({syncSelection:!1}),t!==void 0){if(this.#oe(t),this.#C!==void 0)this.#C.scrollIntoView({block:`nearest`,inline:`nearest`});else if(t.length>0){let e=Fu(t.at(-1));this.#ae(e.line,e.character)}this.focus({preventScroll:!0})}}#we(e){if(this.#D!==void 0){let t=_u(e,this.#D);if(t!==void 0)return this.#O?.setLastUndoLineAnnotations(this.#D,t),t}}#Te(e){let t=this.#f;if(t!==void 0&&t[0]===e)return t[1];let n=this.#b;if(n===void 0)return;let r=null;if(this.#k!==void 0){let{startingLine:t}=this.#k,{children:i}=n;for(let n=e-t;n<=i.length;n++){let t=i[n];if(t===void 0)break;let a=fu(t),o=t.dataset.lineType;if(a!==void 0&&a===e+1&&o!==void 0&&Iu(o)){r=t;break}}}if(r??=n.querySelector(`[data-line="${e+1}"]`),r!==null)return t===void 0?this.#f=[e,r]:(t[0]=e,t[1]=r),r}#Ee(){if(this.#y===void 0)return 0;if(this.#c===void 0){let e=this.#b?.parentElement?.style.getPropertyValue(`--diffs-column-number-width`);e!==void 0&&e.length>2&&e.endsWith(`px`)?this.#c=parseInt(e.slice(0,-2),10):this.#c=this.#y.offsetWidth}return this.#c}#De(){if(this.#b===void 0)return 0;if(this.#l===void 0){let e=this.#b.parentElement?.style.getPropertyValue(`--diffs-column-content-width`);e!==void 0&&e.length>2&&e.endsWith(`px`)?this.#l=parseFloat(e.slice(0,-2)):this.#l=this.#b.offsetWidth}return this.#l}#Oe(e){let t=this.#u.get(e);if(t!==void 0)return t;let n=this.#Te(e);if(n===void 0)return-1;let r=n.offsetTop+this.#n.paddingTop;return this.#u.set(e,r),r}#ke(e,t){if(this.#p!==void 0&&this.#p[0]===e&&this.#p[1]===t)return[this.#p[2],this.#p[3]];let n=this.#O?.getLineText(e),r=this.#Ee()+this.#n.ch;if(n===void 0||n.length===0||t<=0)return[r,0];let i=Dd(n,Math.min(t,n.length)),a=n.slice(0,i),o=kd(a,this.#n.tabSize),s=0,c=0;if(s=o===-1?r+this.#n.measureTextWidth(a):r+o*this.#n.ch,this.#t){let t=this.#De();if(2*this.#n.ch+this.#n.measureTextWidth(n)>t){let t=this.#Ae(e);for(let e=0;e+1<t.length;e++){let a=t[e];if(i<=t[e+1]){c=e;let t=n.slice(a,i),o=kd(t,this.#n.tabSize);s=o===-1?r+this.#n.measureTextWidth(t):r+o*this.#n.ch;break}}}}return this.#p===void 0?this.#p=[e,t,s,c]:(this.#p[0]=e,this.#p[1]=t,this.#p[2]=s,this.#p[3]=c),[s,c]}#Ae(e){let t=this.#d.get(e);if(t!==void 0)return t;let n=this.#O?.getLineText(e);if(n===void 0||n.length===0){let t=new Uint32Array([0]);return this.#d.set(e,t),t}let r=Q(`div`,{style:{position:`absolute`,top:`0`,left:`0`,width:`100%`,boxSizing:`border-box`,visibility:`hidden`,pointerEvents:`none`,whiteSpace:`pre-wrap`,wordBreak:`break-word`,font:`inherit`,paddingInline:`1ch`,tabSize:this.#n.tabSize.toString()},textContent:n},this.#b),i=r.firstChild,a=document.createRange(),o=[];try{let t=Od(n),s=r.getBoundingClientRect().left+this.#n.ch,c=0,l=-1/0;for(let e=0,r=0;e<n.length;){let n=t===void 0?e+1:t[r+1];a.setStart(i,e),a.setEnd(i,n);let{left:u,top:d}=a.getBoundingClientRect();if(d>l){let t=au()&&o.length>0&&u-s>this.#n.ch/2;o.push(t?c:e),l=d}c=e,e=n,r++}let u=new Uint32Array(o.length+1);for(let e=0;e<o.length;e++)u[e]=o[e];return u[o.length]=n.length,this.#d.set(e,u),u}finally{r.remove()}}#je({startContainer:e,endContainer:t}){let n=this.#b;return n===void 0?!1:n.contains(e)&&n.contains(t)}#Me(e){let t=this.#O?.lineCount??0;if(e<0||e>=t)return!1;if(this.#k===void 0)return!0;let{startingLine:n,totalLines:r}=this.#k;return e<n?!1:r===1/0?!0:e<n+r}},Fd=typeof window>`u`?X.useEffect:X.useLayoutEffect;function Id(e,t,n){let r=e==null?null:(0,Z.jsx)(`div`,{slot:Ye,children:e}),i=t!=null&&n!=null?(0,Z.jsx)(`div`,{slot:Xe,children:t(n.item,n.context)}):null;return r==null&&i==null?null:(0,Z.jsxs)(Z.Fragment,{children:[r,i]})}function Ld(e,t){return typeof window>`u`&&t!=null?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t.shadowHtml}}),e]}):(0,Z.jsx)(Z.Fragment,{children:e})}function Rd(e){let t=e.shadowRoot;return t?.querySelector(`[data-file-tree-id]`)instanceof HTMLElement||t?.querySelector(`[data-file-tree-id]`)instanceof SVGElement?!0:e.querySelector(`template[shadowrootmode="open"]`)instanceof HTMLTemplateElement}function zd(e,t,n,r,i){let a={...e??{}};if(t!=null&&delete a.header,n){let t=e?.contextMenu,n=t?.onClose,o=t?.onOpen;a.contextMenu={...t??{},enabled:!0,onClose:()=>{n?.(),r()},onOpen:(e,t)=>{i(e,t),o?.(e,t)}},delete a.contextMenu.render}return a.header!=null||a.contextMenu!=null?a:void 0}function Bd({header:e,id:t,model:n,preloadedData:r,renderContextMenu:i,...a}){let[o,s]=(0,X.useState)(null),[c,l]=(0,X.useState)(null),u=(0,X.useRef)(n.getComposition()),d=(0,X.useRef)(n);d.current!==n&&(d.current=n,u.current=n.getComposition());let f=i!=null,p=(0,X.useCallback)(()=>{s(null)},[]),m=(0,X.useCallback)((e,t)=>{s({context:t,item:e})},[]),h=u.current,g=(0,X.useMemo)(()=>zd(h,e,f,p,m),[h,p,m,f,e]),_=(0,X.useCallback)(e=>{l(e)},[]);(0,X.useEffect)(()=>{f||s(null)},[f]),Fd(()=>{n.setComposition(g)},[g,n]),Fd(()=>{if(c!=null)return r!=null&&Rd(c)?n.hydrate({fileTreeContainer:c}):n.render({fileTreeContainer:c}),()=>{n.unmount(),n.setComposition(h)}},[h,c,n,r]);let v=Ld(Id(e,i,o),r),y=t??r?.id,b={"--trees-item-height":`${String(n.getItemHeight())}px`,"--trees-density-override":n.getDensityFactor(),...a.style};return(0,Z.jsx)(Ue,{...a,id:y,ref:_,style:b,suppressHydrationWarning:r!=null,children:v})}function Vd(e){let[t]=(0,X.useState)(()=>new yl(e)),n=(0,X.useRef)({timeout:null,model:t});return(0,X.useEffect)(()=>{let{current:e}=n;return e.timeout!=null&&(clearTimeout(e.timeout),e.timeout=null),()=>{e.timeout=setTimeout(()=>e.model.cleanUp(),1)}},[]),{model:t}}var Hd=l(),Ud=``;function Wd(e,t,n){return Pe.optimisticFile({environmentId:e,cwd:t,relativePath:n})}function Gd(e,t){return Pe.listEntries({environmentId:e,input:{cwd:t}})}function Kd(e,t,n){return Pe.readFile({environmentId:e,input:{cwd:t,relativePath:n??Ud}})}function qd(e,t,n,r){w.set(Wd(e,t,n),{confirmedAgainst:void 0,data:{relativePath:n,contents:r,byteLength:new TextEncoder().encode(r).byteLength,truncated:!1}})}function Jd(e,t,n){return w.get(Wd(e,t,n))?.data??null}function Yd(e,t,n,r){let i=Wd(e,t,n),a=w.get(i);if(a?.data.contents!==r)return!1;let o=Kd(e,t,n),s={...a,confirmedAgainst:w.get(o)};return w.set(i,s),w.refresh(o),f(w,o,{reportDefect:!1,reportFailure:!1}).then(e=>{e._tag===`Success`&&w.get(i)===s&&w.set(i,null)}),!0}function Xd(e){if(e._tag!==`Failure`)return null;let t=r(e.cause);return t instanceof Error?t.message:`Workspace query failed.`}function Zd(e,t){let n=(0,Hd.c)(14),r;n[0]!==t||n[1]!==e?(r=Gd(e,t),n[0]=t,n[1]=e,n[2]=r):r=n[2];let i=r,a=_(i),o=x(i),s;n[3]===o?s=n[4]:(s=()=>o(),n[3]=o,n[4]=s);let l=s,u;n[5]===a?u=n[6]:(u=y(c(a)),n[5]=a,n[6]=u);let d;n[7]===a?d=n[8]:(d=Xd(a),n[7]=a,n[8]=d);let f;return n[9]!==l||n[10]!==a.waiting||n[11]!==u||n[12]!==d?(f={data:u,error:d,isPending:a.waiting,refresh:l},n[9]=l,n[10]=a.waiting,n[11]=u,n[12]=d,n[13]=f):f=n[13],f}function Qd(e,t,n){let r=(0,Hd.c)(19),i;r[0]!==t||r[1]!==e||r[2]!==n?(i=Kd(e,t,n),r[0]=t,r[1]=e,r[2]=n,r[3]=i):i=r[3];let a=i,o=_(a),s=x(a),l;r[4]===s?l=r[5]:(l=()=>s(),r[4]=s,r[5]=l);let u=l,d;r[6]===o?d=r[7]:(d=y(c(o)),r[6]=o,r[7]=d);let f=d,p=n??Ud,m;r[8]!==t||r[9]!==e||r[10]!==p?(m=Wd(e,t,p),r[8]=t,r[9]=e,r[10]=p,r[11]=m):m=r[11];let h=_(m),g=(n===null?null:h)?.data??f,v;r[12]===o?v=r[13]:(v=Xd(o),r[12]=o,r[13]=v);let b;return r[14]!==u||r[15]!==o.waiting||r[16]!==g||r[17]!==v?(b={data:g,error:v,isPending:o.waiting,refresh:u},r[14]=u,r[15]=o.waiting,r[16]=g,r[17]=v,r[18]=b):b=r[18],b}var $d=`
  :host {
    --trees-bg-override: transparent;
    --trees-selected-bg-override: color-mix(in srgb, currentColor 12%, transparent);
    --trees-hover-bg-override: color-mix(in srgb, currentColor 7%, transparent);
    --trees-border-color-override: color-mix(in srgb, currentColor 14%, transparent);
    --trees-font-family-override: var(--font-sans);
    --trees-font-size-override: 12px;
  }
  button[data-type='item'] { border-radius: 5px; }
`;function ef(e){return e.kind===`directory`?`${e.path}/`:e.path}function tf({environmentId:e,cwd:t,projectName:n,onOpenFile:r}){let{resolvedTheme:i}=Le(),a=Zd(e,t),o=a.data?.entries??[],s=(0,X.useMemo)(()=>new Map(o.map(e=>[e.path,e.kind])),[o]),c=(0,X.useRef)(s),l=(0,X.useMemo)(()=>o.map(ef),[o]),u=(0,X.useRef)([]),{model:d}=Vd({density:`compact`,fileTreeSearchMode:`hide-non-matches`,flattenEmptyDirectories:!0,initialExpansion:1,icons:Oe,onSelectionChange:e=>{let t=e.at(-1)?.replace(/\/$/,``);t&&c.current.get(t)===`file`&&r(t)},paths:[],search:!0,unsafeCSS:$d});(0,X.useEffect)(()=>{u.current!==l&&(c.current=s,u.current=l,d.resetPaths(l))},[s,d,l]);let f=(0,X.useMemo)(()=>o.reduce((e,t)=>e+ +(t.kind===`file`),0),[o]);return(0,Z.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col bg-background`,"data-file-browser-panel":`${e}:${t}`,children:[(0,Z.jsxs)(`div`,{className:`flex h-9 shrink-0 items-center gap-2 border-b border-border/60 px-3`,children:[(0,Z.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,Z.jsx)(`div`,{className:`truncate text-xs font-medium text-foreground`,children:n}),(0,Z.jsxs)(`div`,{className:`truncate text-[10px] leading-none text-muted-foreground`,children:[a.isPending&&a.data===null?`Indexing…`:`${f.toLocaleString()} files`,a.data?.truncated?` · partial`:``]})]}),(0,Z.jsx)(`button`,{type:`button`,className:`rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground`,"aria-label":`Search workspace files`,onClick:()=>d.openSearch(),children:(0,Z.jsx)(Ae,{className:`size-3.5`})}),(0,Z.jsx)(`button`,{type:`button`,className:`rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground`,"aria-label":`Refresh workspace files`,onClick:a.refresh,children:(0,Z.jsx)(Te,{className:m(`size-3.5`,a.isPending&&`animate-spin`)})})]}),a.error&&a.data===null?(0,Z.jsx)(`div`,{className:`p-4 text-xs leading-relaxed text-destructive`,children:a.error}):(0,Z.jsx)(Bd,{model:d,"aria-label":`${n} files`,className:`min-h-0 flex-1 overflow-hidden`,style:{colorScheme:i,"--trees-fg-override":`var(--foreground)`}})]})}function nf({root:e,editor:t,onDismiss:n}){n(),t.setSelections([]);let r=e.querySelector(`diffs-container`)?.shadowRoot?.activeElement;r instanceof HTMLElement&&r.blur()}function rf(e){return e.querySelector(`diffs-container`)?.shadowRoot?.activeElement?.hasAttribute(`data-content`)===!0}function af({root:e,editor:t,isBlocked:n,onDismiss:r}){let i=i=>{n()||i.composedPath().includes(e)||nf({root:e,editor:t,onDismiss:r})},a=i=>{i.key!==`Escape`||n()||!rf(e)||(i.preventDefault(),i.stopImmediatePropagation(),nf({root:e,editor:t,onDismiss:r}))};return document.addEventListener(`pointerdown`,i,!0),document.addEventListener(`keydown`,a,!0),()=>{document.removeEventListener(`pointerdown`,i,!0),document.removeEventListener(`keydown`,a,!0)}}function of(e){let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return`${e.length}:${(t>>>0).toString(36)}`}function sf(e,t,n){return`${e}:${t}:${of(n)}`}function cf(e,t){let n=t.split(`/`).filter(Boolean);return[{label:e,path:``,kind:`project`},...n.map((e,t)=>({label:e,path:n.slice(0,t+1).join(`/`),kind:t===n.length-1?`file`:`directory`}))]}var lf=e=>/\.(?:md|mdx)$/i.test(e);function uf(e,t,n){return t<0||e[t]!==`[`||!/[ xX]/.test(e[t+1]??``)||e[t+2]!==`]`?e:`${e.slice(0,t+1)}${n?`x`:` `}${e.slice(t+2)}`}var df=class{options;timer=null;latestContents=``;latestRevision=0;lastChangeAt=0;saving=!1;disposed=!1;constructor(e){this.options=e}change(e){this.latestContents=e,this.latestRevision+=1,this.lastChangeAt=Date.now(),this.options.onPendingChange(!0),this.schedule(this.options.debounceMs)}dispose(){this.disposed=!0,this.clearTimer(),this.latestRevision>0&&this.persistLatest()}schedule(e){this.clearTimer(),this.timer=setTimeout(()=>{this.timer=null,this.persistLatest()},e)}clearTimer(){this.timer!==null&&(clearTimeout(this.timer),this.timer=null)}async persistLatest(){if(this.saving||this.latestRevision===0)return;this.saving=!0;let e=this.latestContents,t=this.latestRevision,n=(await this.options.persist(e))._tag===`Success`;if(n&&this.options.onConfirmed(e),this.saving=!1,t===this.latestRevision){n&&this.options.onPendingChange(!1);return}let r=Math.max(0,this.options.debounceMs-(Date.now()-this.lastChangeAt));this.disposed?this.persistLatest():this.schedule(r)}},ff=`t3code.fileExplorerOpen`,pf=500,mf=`data-file-link-reveal`,hf=`
  [${mf}][data-line] {
    background-color: light-dark(
      color-mix(
        in lab,
        var(--diffs-computed-diff-line-bg) 82%,
        var(--diffs-bg-selection-override, var(--diffs-selection-base))
      ),
      color-mix(
        in lab,
        var(--diffs-computed-diff-line-bg) 75%,
        var(--diffs-bg-selection-override, var(--diffs-selection-base))
      )
    ) !important;
  }

  [${mf}][data-column-number] {
    background-color: light-dark(
      color-mix(
        in lab,
        var(--diffs-computed-diff-line-bg) 75%,
        var(--diffs-bg-selection-number-override, var(--diffs-selection-base))
      ),
      color-mix(
        in lab,
        var(--diffs-computed-diff-line-bg) 60%,
        var(--diffs-bg-selection-number-override, var(--diffs-selection-base))
      )
    ) !important;
    color: var(--diffs-selection-number-fg) !important;
  }
`;function gf(e,t){let n=1;for(let t=0;t<e.length;t+=1){let r=e.charCodeAt(t);r===10?n+=1:r===13&&(n+=1,e.charCodeAt(t+1)===10&&(t+=1))}return Math.min(Math.max(1,t),n)}function _f(e,t){let n=e.shadowRoot??e;for(let e of n.querySelectorAll(`[${mf}]`))e.removeAttribute(mf);t!==null&&(n.querySelector(`[data-line="${t}"]`)?.setAttribute(mf,``),n.querySelector(`[data-column-number="${t}"]`)?.setAttribute(mf,``))}function vf(e,t,n){let r=(0,Hd.c)(7),[i]=(0,X.useState)(xf),[a]=(0,X.useState)(bf),[o]=(0,X.useState)(yf),s;return r[0]!==i||r[1]!==a||r[2]!==o||r[3]!==e||r[4]!==t||r[5]!==n?(s=(r,s,c)=>{if(e===null)return;let l=()=>{let t=o.get(e);t!==void 0&&(cancelAnimationFrame(t),o.delete(e))};if(c===`unmount`){l();return}let u=t===null?null:gf(s.file?.contents??``,t);if(_f(r,u),!(s instanceof A))return;if(a.get(e)!==n&&(l(),a.set(e,n)),u===null){r.style.minHeight=``;return}let d=r.closest(`.file-preview-virtualizer`);!d||(r.style.minHeight=`${Math.ceil(Math.max(s.height,d.clientHeight))}px`,i.get(e)===n||o.has(e))||o.set(e,requestAnimationFrame(()=>{if(o.delete(e),a.get(e)!==n||!r.isConnected)return;let t=s.getLinePosition(u);if(!t)return;let c=d.scrollTop+r.getBoundingClientRect().top-d.getBoundingClientRect().top,l=Math.max(0,c+t.top-Math.max(0,(d.clientHeight-t.height)/2)),f=Math.max(0,d.scrollHeight-d.clientHeight);d.scrollTop=Math.min(l,f),i.set(e,n)}))},r[0]=i,r[1]=a,r[2]=o,r[3]=e,r[4]=t,r[5]=n,r[6]=s):s=r[6],s}function yf(){return new Map}function bf(){return new Map}function xf(){return new Map}function Sf(e){let t=(0,Hd.c)(19),{environmentId:n,cwd:r,relativePath:i,onPendingChange:a}=e,o=S(Pe.writeFile),s;t[0]!==a||t[1]!==i?(s=e=>a(i,e),t[0]=a,t[1]=i,t[2]=s):s=t[2];let c;t[3]!==r||t[4]!==n||t[5]!==i||t[6]!==o?(c=e=>o({environmentId:n,input:{cwd:r,relativePath:i,contents:e}}),t[3]=r,t[4]=n,t[5]=i,t[6]=o,t[7]=c):c=t[7];let l;t[8]!==r||t[9]!==n||t[10]!==i?(l=e=>{Yd(n,r,i,e)},t[8]=r,t[9]=n,t[10]=i,t[11]=l):l=t[11];let u;t[12]!==s||t[13]!==c||t[14]!==l?(u=new df({debounceMs:pf,onPendingChange:s,persist:c,onConfirmed:l}),t[12]=s,t[13]=c,t[14]=l,t[15]=u):u=t[15];let d=u,f,p;return t[16]===d?(f=t[17],p=t[18]):(f=()=>()=>d.dispose(),p=[d],t[16]=d,t[17]=f,t[18]=p),(0,X.useEffect)(f,p),d}function Cf(e){let t=(0,Hd.c)(74),{environmentId:n,cwd:r,relativePath:i,composerDraftTarget:a,contents:o,resolvedTheme:s,revealRequestId:c,wordWrap:l,onPostRender:u,onPendingChange:d}=e,f=v(Af),p=v(kf),m;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(m=[],t[0]=m):m=t[0];let[h,g]=(0,X.useState)(m),[_,y]=(0,X.useState)(null),b=_?.revealRequestId===c?_.range:null,x;t[1]===c?x=t[2]:(x=e=>{y({revealRequestId:c,range:e})},t[1]=c,t[2]=x);let S=x,C=(0,X.useRef)(null),w=(0,X.useRef)(null),T;t[3]!==r||t[4]!==n||t[5]!==d||t[6]!==i?(T={environmentId:n,cwd:r,relativePath:i,onPendingChange:d},t[3]=r,t[4]=n,t[5]=d,t[6]=i,t[7]=T):T=t[7];let O=Sf(T),A;t[8]!==f||t[9]!==a||t[10]!==r||t[11]!==n||t[12]!==i||t[13]!==O?(A=new Pd({onChange:(e,t)=>{if(qd(n,r,i,e.contents),O.change(e.contents),t){let n=ee(t);g(n);for(let t of n)for(let n of t.metadata.entries)n.kind===`comment`&&f(a,E({id:n.id,filePath:i,startLine:n.startLine,endLine:n.endLine,text:n.text,contents:e.contents}))}}}),t[8]=f,t[9]=a,t[10]=r,t[11]=n,t[12]=i,t[13]=O,t[14]=A):A=t[14];let M=A,te,re;t[15]===M?(te=t[16],re=t[17]):(te=()=>()=>{M.cleanUp()},re=[M],t[15]=M,t[16]=te,t[17]=re),(0,X.useEffect)(te,re);let ie;t[18]!==a||t[19]!==p||t[20]!==S?(ie=e=>{S(null),p(a,e),g(t=>t.flatMap(t=>{let n=t.metadata.entries.filter(t=>t.id!==e);return n.length>0?[{...t,metadata:{entries:n}}]:[]}))},t[18]=a,t[19]=p,t[20]=S,t[21]=ie):ie=t[21];let ae=ie,oe;t[22]!==f||t[23]!==a||t[24]!==o||t[25]!==h||t[26]!==i||t[27]!==S?(oe=(e,t)=>{S(null);let n=h.flatMap(Of).find(t=>t.id===e);n&&f(a,E({id:n.id,filePath:i,startLine:n.startLine,endLine:n.endLine,text:t,contents:o})),g(n=>n.map(n=>({...n,metadata:{entries:n.metadata.entries.map(n=>n.id===e?{...n,kind:`comment`,text:t}:n)}})))},t[22]=f,t[23]=a,t[24]=o,t[25]=h,t[26]=i,t[27]=S,t[28]=oe):oe=t[28];let se=oe,ce;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(ce=e=>{let{startLine:t,endLine:n}=j(e),r={id:k(),kind:`draft`,startLine:t,endLine:n,text:``};g(e=>{let t=e.flatMap(Ef),i=t.findIndex(e=>e.lineNumber===n);return i<0?[...t,{lineNumber:n,metadata:{entries:[r]}}]:t.map((e,t)=>t===i?{...e,metadata:{entries:[...e.metadata.entries,r]}}:e)})},t[29]=ce):ce=t[29];let le=ce,ue;t[30]===h?ue=t[31]:(ue=h.some(wf),t[30]=h,t[31]=ue);let P=ue,de,pe;t[32]!==M||t[33]!==P||t[34]!==S?(de=()=>{let e=C.current;if(e)return af({root:e,editor:M,isBlocked:()=>P,onDismiss:()=>S(null)})},pe=[M,P,S],t[32]=M,t[33]=P,t[34]=S,t[35]=de,t[36]=pe):(de=t[35],pe=t[36]),(0,X.useEffect)(de,pe);let me;t[37]===S?me=t[38]:(me=e=>{S(e),e&&le(e)},t[37]=S,t[38]=me);let he=me,ge;t[39]!==u||t[40]!==b?(ge=(e,t,n)=>{u(e,t,n),w.current!==null&&(cancelAnimationFrame(w.current),w.current=null),n!==`unmount`&&(w.current=requestAnimationFrame(()=>{w.current=null,e.isConnected&&t.setSelectedLines(b,{notify:!1})}))},t[39]=u,t[40]=b,t[41]=ge):ge=t[41];let _e=ge,ve;t[42]===Symbol.for(`react.memo_cache_sentinel`)?(ve={overscrollSize:600,intersectionObserverMargin:1200},t[42]=ve):ve=t[42];let ye;t[43]!==o||t[44]!==r||t[45]!==i?(ye=sf(r,i,o),t[43]=o,t[44]=r,t[45]=i,t[46]=ye):ye=t[46];let be;t[47]!==o||t[48]!==i||t[49]!==ye?(be={name:i,contents:o,cacheKey:ye},t[47]=o,t[48]=i,t[49]=ye,t[50]=be):be=t[50];let xe=!P,Se=!P,Ce=l?`wrap`:`scroll`,we;t[51]===s?we=t[52]:(we=ne(s),t[51]=s,t[52]=we);let I;t[53]!==he||t[54]!==_e||t[55]!==s||t[56]!==S||t[57]!==xe||t[58]!==Se||t[59]!==Ce||t[60]!==we?(I={disableFileHeader:!0,enableGutterUtility:xe,enableLineSelection:Se,onGutterUtilityClick:S,onLineSelectionChange:S,onLineSelectionEnd:he,overflow:Ce,theme:we,themeType:s,unsafeCSS:hf,onPostRender:_e},t[53]=he,t[54]=_e,t[55]=s,t[56]=S,t[57]=xe,t[58]=Se,t[59]=Ce,t[60]=we,t[61]=I):I=t[61];let Te;t[62]!==ae||t[63]!==se?(Te=e=>(0,Z.jsx)(`div`,{className:`py-1`,children:e.metadata.entries.map(e=>(0,Z.jsx)(D,{kind:e.kind,rangeLabel:N(e.startLine,e.endLine),text:e.text,onCancel:()=>ae(e.id),onComment:t=>se(e.id,t),onDelete:()=>ae(e.id)},e.id))}),t[62]=ae,t[63]=se,t[64]=Te):Te=t[64];let Ee;t[65]!==h||t[66]!==b||t[67]!==be||t[68]!==I||t[69]!==Te?(Ee=(0,Z.jsx)(`div`,{ref:C,className:`flex min-h-0 flex-1`,children:(0,Z.jsx)(fe,{className:`file-preview-virtualizer min-h-0 flex-1 overflow-auto`,config:ve,children:(0,Z.jsx)(Cl,{file:be,options:I,selectedLines:b,lineAnnotations:h,renderAnnotation:Te,className:`min-h-full`,contentEditable:!0})})}),t[65]=h,t[66]=b,t[67]=be,t[68]=I,t[69]=Te,t[70]=Ee):Ee=t[70];let De;return t[71]!==M||t[72]!==Ee?(De=(0,Z.jsx)(F,{editor:M,children:Ee}),t[71]=M,t[72]=Ee,t[73]=De):De=t[73],De}function wf(e){return e.metadata.entries.some(Tf)}function Tf(e){return e.kind===`draft`}function Ef(e){let t=e.metadata.entries.filter(Df);return t.length>0?[{...e,metadata:{entries:t}}]:[]}function Df(e){return e.kind!==`draft`}function Of(e){return e.metadata.entries}function kf(e){return e.removeReviewComment}function Af(e){return e.addReviewComment}function jf(e){let t=(0,Hd.c)(16),{environmentId:n,cwd:r,relativePath:i,contents:a,threadRef:o,onPendingChange:s}=e,c;t[0]!==r||t[1]!==n||t[2]!==s||t[3]!==i?(c={environmentId:n,cwd:r,relativePath:i,onPendingChange:s},t[0]=r,t[1]=n,t[2]=s,t[3]=i,t[4]=c):c=t[4];let l=Sf(c),u;t[5]!==a||t[6]!==r||t[7]!==n||t[8]!==i||t[9]!==l?(u=e=>{let{markerOffset:t,checked:o}=e,s=Jd(n,r,i)?.contents??a,c=uf(s,t,o);c!==s&&(qd(n,r,i,c),l.change(c))},t[5]=a,t[6]=r,t[7]=n,t[8]=i,t[9]=l,t[10]=u):u=t[10];let d;return t[11]!==a||t[12]!==r||t[13]!==u||t[14]!==o?(d=(0,Z.jsx)(ue,{className:`min-h-0 flex-1`,children:(0,Z.jsx)(je,{text:a,cwd:r,threadRef:o,className:`mx-auto max-w-4xl px-6 py-5`,onTaskListChange:u})}),t[11]=a,t[12]=r,t[13]=u,t[14]=o,t[15]=d):d=t[15],d}function Mf(){try{return C(ff,t)??!0}catch(e){return console.error(e),!0}}function Nf(e){let t=(0,Hd.c)(74),{environmentId:n,cwd:r,projectName:c,relativePath:l,threadRef:u,composerDraftTarget:f,keybindings:p,availableEditors:g,revealLine:_,revealRequestId:v,onOpenFile:y,onPendingChange:x}=e,{resolvedTheme:C}=Le(),w=oe(Ff),E=i(),D=s(n),O;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(O={reportFailure:!1},t[0]=O):O=t[0];let ee=ae(te.createUrl,O),k;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(k={reportFailure:!1},t[1]=k):k=t[1];let A=S(me.open,k),j=Qd(n,r,l),[M,N]=(0,X.useState)(Mf),re;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(re={path:null,revealRequestId:null},t[2]=re):re=t[2];let[ie,se]=(0,X.useState)(re),ce=(0,X.useRef)(null),le;t[3]===l?le=t[4]:(le=l?lf(l):!1,t[3]=l,t[4]=le);let P=le,F=P&&ie.path===l&&(_===null||ie.revealRequestId===v),pe;t[5]===l?pe=t[6]:(pe=l!==null&&Be()&&Ee(l),t[5]=l,t[6]=pe);let ge=pe,ve;t[7]!==r||t[8]!==l?(ve=l?be(l,r):null,t[7]=r,t[8]=l,t[9]=ve):ve=t[9];let Ce=ve,we;t[10]!==c||t[11]!==l?(we=l?cf(c,l):[],t[10]=c,t[11]=l,t[12]=we):we=t[12];let I=we,Te=vf(l,_,v),Oe;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=()=>{(ce.current?.querySelector(`[data-current-file-crumb='true']`))?.scrollIntoView({block:`nearest`,inline:`end`})},t[13]=Oe):Oe=t[13];let ke;t[14]===l?ke=t[15]:(ke=[l],t[14]=l,t[15]=ke),(0,X.useEffect)(Oe,ke);let Ae;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=()=>{N(Pf)},t[16]=Ae):Ae=t[16];let je=Ae,Me;t[17]!==Ce||t[18]!==ee||t[19]!==D||t[20]!==A||t[21]!==u?(Me=()=>{!Ce||!D||(async()=>{let e=await Se({threadRef:u,filePath:Ce,httpBaseUrl:D,createAssetUrl:ee,openPreview:A});if(e._tag===`Success`||d(e))return;let t=b(e);he.add(de({type:`error`,title:`Unable to open file in browser`,description:t instanceof Error?t.message:`An error occurred.`}))})()},t[17]=Ce,t[18]=ee,t[19]=D,t[20]=A,t[21]=u,t[22]=Me):Me=t[22];let Ne=Me,Pe;t[23]!==Ce||t[24]!==g||t[25]!==I||t[26]!==ge||t[27]!==n||t[28]!==M||t[29]!==Ne||t[30]!==P||t[31]!==p||t[32]!==E||t[33]!==c||t[34]!==l||t[35]!==F||t[36]!==v?(Pe=l?(0,Z.jsxs)(`div`,{className:`surface-subheader gap-2 px-3`,"data-surface-subheader":!0,children:[(0,Z.jsx)(ue,{ref:ce,hideScrollbars:!0,scrollFade:!0,className:`min-w-0 flex-1 rounded-none`,"data-file-breadcrumbs":!0,children:(0,Z.jsx)(`div`,{className:`flex h-full w-max min-w-full items-center text-xs`,children:I.map((e,t)=>(0,Z.jsxs)(`div`,{className:`flex min-w-0 shrink-0 items-center`,"data-current-file-crumb":e.kind===`file`,children:[t>0?(0,Z.jsx)(a,{className:`mx-1 size-3.5 shrink-0 text-muted-foreground/60`}):null,(0,Z.jsx)(`span`,{className:m(`max-w-40 truncate`,e.kind===`file`?`font-medium text-foreground`:`text-muted-foreground`),title:e.path||c,children:e.label})]},e.path||`project`))})}),Ce&&n===E?(0,Z.jsx)(_e,{environmentId:n,keybindings:p,availableEditors:g,openInCwd:Ce,compact:!0,enableShortcut:!1}):null,P?(0,Z.jsxs)(T,{children:[(0,Z.jsx)(o,{render:(0,Z.jsx)(ye,{className:`shrink-0`,pressed:F,onPressedChange:e=>{se({path:e?l:null,revealRequestId:e?v:null})},"aria-label":F?`Show markdown source`:`Show rendered markdown`,variant:`ghost`,size:`sm`,children:F?(0,Z.jsx)(Ve,{className:`size-3.5`}):(0,Z.jsx)(xe,{className:`size-3.5`})})}),(0,Z.jsx)(h,{children:F?`Show markdown source`:`Show rendered markdown`})]}):null,ge?(0,Z.jsxs)(T,{children:[(0,Z.jsx)(o,{render:(0,Z.jsx)(ye,{className:`shrink-0`,pressed:!1,onPressedChange:Ne,"aria-label":`Open file in preview browser`,variant:`ghost`,size:`sm`,children:(0,Z.jsx)(Ie,{className:`size-3.5`})})}),(0,Z.jsx)(h,{children:`Open file in preview browser`})]}):null,(0,Z.jsxs)(T,{children:[(0,Z.jsx)(o,{render:(0,Z.jsx)(ye,{className:`shrink-0`,pressed:M,onPressedChange:je,"aria-label":M?`Hide file explorer`:`Show file explorer`,variant:`ghost`,size:`sm`,children:(0,Z.jsx)(He,{className:`size-3.5`})})}),(0,Z.jsx)(h,{children:M?`Hide file explorer`:`Show file explorer`})]})]}):null,t[23]=Ce,t[24]=g,t[25]=I,t[26]=ge,t[27]=n,t[28]=M,t[29]=Ne,t[30]=P,t[31]=p,t[32]=E,t[33]=c,t[34]=l,t[35]=F,t[36]=v,t[37]=Pe):Pe=t[37];let Fe;t[38]!==j||t[39]!==l?(Fe=l&&j.data?.truncated?(0,Z.jsxs)(`div`,{className:`shrink-0 border-b border-amber-500/20 bg-amber-500/8 px-3 py-1.5 text-[11px] text-amber-700 dark:text-amber-300`,children:[`Preview limited to the first 1 MB of a `,j.data.byteLength.toLocaleString(),` byte file.`]}):null,t[38]=j,t[39]=l,t[40]=Fe):Fe=t[40];let Re=l?`flex`:`hidden`,ze;t[41]===Re?ze=t[42]:(ze=m(`min-w-0 flex-1 flex-col overflow-hidden`,Re),t[41]=Re,t[42]=ze);let Ue;t[43]!==f||t[44]!==r||t[45]!==n||t[46]!==j||t[47]!==P||t[48]!==Te||t[49]!==x||t[50]!==l||t[51]!==F||t[52]!==C||t[53]!==v||t[54]!==u||t[55]!==w?(Ue=l&&j.error&&j.data===null?(0,Z.jsx)(`div`,{className:`flex min-h-0 flex-1 items-center justify-center px-6 text-center text-xs leading-relaxed text-destructive`,children:j.error}):l&&j.data===null?(0,Z.jsx)(`div`,{className:`flex min-h-0 flex-1 items-center justify-center text-muted-foreground`,children:(0,Z.jsx)(De,{className:`size-5 animate-spin`})}):l&&j.data?P&&F?(0,Z.jsx)(jf,{environmentId:n,cwd:r,relativePath:l,threadRef:u,contents:j.data.contents,onPendingChange:x}):j.data.truncated?(0,Z.jsx)(fe,{className:`file-preview-virtualizer min-h-0 flex-1 overflow-auto`,config:{overscrollSize:600,intersectionObserverMargin:1200},children:(0,Z.jsx)(Cl,{file:{name:l,contents:j.data.contents,cacheKey:sf(r,l,j.data.contents)},options:{disableFileHeader:!0,overflow:w?`wrap`:`scroll`,theme:ne(C),themeType:C,unsafeCSS:hf,onPostRender:Te},className:`min-h-full`})},`${l}:${C}:${j.data.byteLength}`):(0,Z.jsx)(Cf,{environmentId:n,cwd:r,relativePath:l,composerDraftTarget:f,contents:j.data.contents,resolvedTheme:C,revealRequestId:v,wordWrap:w,onPostRender:Te,onPendingChange:x},`${l}:${C}`):null,t[43]=f,t[44]=r,t[45]=n,t[46]=j,t[47]=P,t[48]=Te,t[49]=x,t[50]=l,t[51]=F,t[52]=C,t[53]=v,t[54]=u,t[55]=w,t[56]=Ue):Ue=t[56];let We;t[57]!==ze||t[58]!==Ue?(We=(0,Z.jsx)(`div`,{className:ze,children:Ue}),t[57]=ze,t[58]=Ue,t[59]=We):We=t[59];let Ge;t[60]!==r||t[61]!==n||t[62]!==M||t[63]!==y||t[64]!==c||t[65]!==l?(Ge=M||l===null?(0,Z.jsx)(`aside`,{className:m(`flex min-h-0 shrink-0 bg-background`,l?`w-[min(22rem,46%)] min-w-64 border-l border-border/60`:`min-w-0 flex-1`),children:(0,Z.jsx)(tf,{environmentId:n,cwd:r,projectName:c,onOpenFile:y},`${n}:${r}`)}):null,t[60]=r,t[61]=n,t[62]=M,t[63]=y,t[64]=c,t[65]=l,t[66]=Ge):Ge=t[66];let Ke;t[67]!==We||t[68]!==Ge?(Ke=(0,Z.jsxs)(`div`,{className:`flex min-h-0 flex-1 overflow-hidden`,children:[We,Ge]}),t[67]=We,t[68]=Ge,t[69]=Ke):Ke=t[69];let qe;return t[70]!==Pe||t[71]!==Fe||t[72]!==Ke?(qe=(0,Z.jsxs)(`div`,{className:`flex min-h-0 flex-1 flex-col overflow-hidden bg-background`,children:[Pe,Fe,Ke]}),t[70]=Pe,t[71]=Fe,t[72]=Ke,t[73]=qe):qe=t[73],qe}function Pf(n){let r=!n;try{e(ff,r,t)}catch(e){console.error(e)}return r}function Ff(e){return e.wordWrap}export{Nf as default};
//# sourceMappingURL=FilePreviewPanel-BYhEUsiQ.js.map