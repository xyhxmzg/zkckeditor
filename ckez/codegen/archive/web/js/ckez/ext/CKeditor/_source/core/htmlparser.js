CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:new RegExp("<(?:(?:\\/([^>]+)>)|(?:!--([\\S|\\s]*?)-->)|(?:([^\\s>]+)\\s*((?:(?:\"[^\"]*\")|(?:'[^']*')|[^\"'>])*)\\/?>))","g")}};(function(){var b=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,a={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(h){var f,e,i=0,n;while((f=this._.htmlPartsRegex.exec(h))){var l=f.index;if(l>i){var o=h.substring(i,l);if(n){n.push(o)}else{this.onText(o)}}i=this._.htmlPartsRegex.lastIndex;if((e=f[1])){e=e.toLowerCase();if(n&&CKEDITOR.dtd.$cdata[e]){this.onCDATA(n.join(""));n=null}if(!n){this.onTagClose(e);continue}}if(n){n.push(f[0]);continue}if((e=f[3])){e=e.toLowerCase();if(/="/.test(e)){continue}var c={},d,g=f[4],k=!!(g&&g.charAt(g.length-1)=="/");if(g){while((d=b.exec(g))){var j=d[1].toLowerCase(),m=d[2]||d[3]||d[4]||"";if(!m&&a[j]){c[j]=j}else{c[j]=m}}}this.onTagOpen(e,c,k);if(!n&&CKEDITOR.dtd.$cdata[e]){n=[]}continue}if((e=f[2])){this.onComment(e)}}if(h.length>i){this.onText(h.substring(i,h.length))}}}})();