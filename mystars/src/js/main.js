function IDBCon(t){this.db,this.dbname="mystars",this.version="1",this.tables=["stars","tags","cates","colors","lan"];var e=this;this.open=function(){var n=indexedDB.open(e.dbname,e.version);n.onerror=function(t,e){console.log("error")},n.onsuccess=function(n,o){e.db=n.target.result,t(e)},n.onupgradeneeded=function(t,n){e.db=t.target.result,console.log("onupgradeneeded"),e.tables.forEach(function(t){console.log(t),e.db.createObjectStore(t,{keyPath:"id"})})}},this.get=function(t,n,o){e.db.transaction([t],"readwrite").objectStore(t).get(n).onsuccess=function(t){o(t.target.result)}},this.set=function(t,n){var o=e.db.transaction([t],"readwrite").objectStore(t);console.log(o),o.put(n)},this.forEach=function(t,n,o){e.db.transaction(t).objectStore(t).openCursor().onsuccess=function(t){var e=t.target.result;e?(n(e.key,e.value),e.continue()):o()}}}function tags(){return{}}function cates(){return{}}function colors(){return{}}function myStars(){}myStars.prototype.refresh=function(){},myStars.prototype.set=function(){};