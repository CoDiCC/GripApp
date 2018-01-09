"use strict";angular.module("gripApp",["ngAnimate","ngCookies","ngSanitize","ngTouch","ui.bootstrap","ngCsv","schemaForm"]),angular.module("gripApp").controller("FormularioCtrl",["$scope","registos","schema","formDefinition",function(a,b,c,d){a.model={},a.schema=c,a.form=d.newForm(),a.registoForm=null,a.index=null,a.$on("edit-record",function(b,c){a.model=c.record,a.index=c.index}),a.onReset=function(b){a.model={},b&&(b.$setPristine(),b.$setUntouched()),a.$broadcast("schemaFormRedraw")},a.onSubmit=function(c){a.$broadcast("schemaFormValidate");for(var d in a.model)a.model.hasOwnProperty(d)&&a.model[d]&&/^data/.test(d)&&(a.model[d]=new Date(a.model[d]));a.$broadcast("schemaForm.error.doencacronica","doencacronicaNaoSeleccionada",!0);try{b.validateRecord(a.model)}catch(e){if(!angular.isUndefined(e.dataPath)&&""===e.dataPath&&angular.isArray(e.subErrors))for(var f=0;f<e.subErrors.length;++f)"/doencacronica"===e.subErrors[f].dataPath&&a.$broadcast("schemaForm.error.doencacronica","doencacronicaNaoSeleccionada",'Tendo seleccionado o campo "Doença Crónica" como "Sim", deverá seleccionar pelo menos um destes valores')}c.$valid?(b.add(a.model),a.onReset(c),window.alert("Registo inserido com sucesso!")):window.alert("O formulário tem erros. Por favor verifique a informação (assinalada a vermelho).")}}]),angular.module("gripApp").controller("RegistosCtrl",["$scope","registos","$uibModal","CsvParser",function(a,b,c,d){a.headers=b.getHeaders(!0),a.props=b.getProps(),a.registos=b.getAll(),a.options={filename:"registos",fieldSeparator:";"},a.getArray=function(){return JSON.parse(angular.toJson(b.getAll()))},a.getHeaders=function(){return b.getHeaders()},a.getProps=function(){return b.getProps()},a.reset=function(){window.confirm("Deseja mesmo apagar todos os registos?")===!0&&(b.reset(),a.registos=b.getAll())},a.countSelected=function(){for(var b=a.registos.length-1,c=0,d=b;d>=0;--d)a.registos[d].$$selected===!0&&c++;return c},a.deleteRecord=function(){if(window.confirm("Deseja mesmo apagar o(s) registo(s) seleccionados?")===!0)for(var c=a.registos.length-1,d=c;d>=0;--d)a.registos[d].$$selected===!0&&b.remove(d);a.registos=b.getAll()},a.fileLoadModalOpen=function(){var e=c.open({ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"views/uploadfilemodal.html",controller:"OpenFileModalInstanceCtrl"});e.result.then(function(c){var e=d.parse(c);a.registos=[];try{b.setAll(e)}catch(f){console.log(f),window.alert(f)}a.registos=b.getAll()},function(){})},a.editRecordModalOpen=function(){if(1===a.countSelected()){for(var d=a.registos.length-1,e={},f=null,g=d;g>=0;--g)if(a.registos[g].$$selected===!0){e=angular.copy(a.registos[g]),f=g;for(var h in e)if(e.hasOwnProperty(h)&&/^data/.test(h)&&null!==e[h]&&""!==e[h])try{e[h]=new Date(e[h])}catch(i){e[h]=null}break}if(null!==f){var j=c.open({ariaLabelledBy:"modal-title",ariaDescribedBy:"modal-body",templateUrl:"views/editrecordmodal.html",controller:"EditrecordmodalCtrl",resolve:{record:function(){return e}}});j.result.then(function(c){b.set(f,c),a.registos=b.getAll()},function(){})}}}}]),angular.module("gripApp").factory("registos",["schema",function(a){var b=[],c=[],d=angular.copy(a);for(var e in a.properties)if(a.properties.hasOwnProperty(e)){var f;c.push(e),f=a.properties[e].hasOwnProperty("title")?a.properties[e].title:e,b.push(f),angular.isUndefined(a.properties[e].format)||"date"!==a.properties[e].format||(angular.isArray(a.properties[e].type)?d.properties[e].type.push("object"):d.properties[e].type=[d.properties[e].type,"object"])}var g=[],h=function(a){return a.hasOwnProperty("$$selected")||(a.$$selected=!1),a},i=function(a){if(!tv4.validate(a,d))throw tv4.error;return!0};return{getHeaders:function(){return b},getProps:function(){return c},get:function(a){return g[a]},insertAt:function(a,b){return g.splice(a,0,b)},set:function(a,b){if(!angular.isNumber(a))throw new Error("index parameter should be an integer");return i(b)?(g[a]=h(b),a):null},add:function(a){if(!angular.isObject(a)&&!angular.isArray(a))throw new Error("record parameter should be an object or an array");return i(a)?g.push(h(a))-1:null},remove:function(a){return g.splice(a,1)[0]},getAll:function(){return g},setAll:function(a){g=[];for(var b=0;b<a.length;++b)i(a[b])&&g.push(h(a[b]));return g},reset:function(){return g=[]},validateRecord:function(a){return i(a)}}}]),angular.module("gripApp").factory("schema",function(){return{$schema:"http://json-schema.org/draft-04/schema#",id:"http://example.com/example.json",type:"object",required:["hospital","numprocessoclinico","datadeadmissao","sexo","datanascimento","datainiciosintomas","vacinado","doencacronica","feztratamento","fezprocedimento","serotipagem","datalaboratorio","alta","obito"],anyOf:[{allOf:[{required:["doencacronica"],properties:{doencacronica:{"enum":["Y"]}}},{anyOf:[{required:["asma"],properties:{asma:{"enum":[!0]}}},{required:["dpoc"],properties:{dpoc:{"enum":[!0]}}},{required:["diabetes"],properties:{diabetes:{"enum":[!0]}}},{required:["doencaoncologica"],properties:{doencaoncologica:{"enum":[!0]}}},{required:["doencacardiacacronica"],properties:{doencacardiacacronica:{"enum":[!0]}}},{required:["hiv"],properties:{hiv:{"enum":[!0]}}},{required:["doencarenalcronica"],properties:{doencarenalcronica:{"enum":[!0]}}},{required:["doencahepaticacronica"],properties:{doencahepaticacronica:{"enum":[!0]}}},{required:["doencaneuromuscular"],properties:{doencaneuromuscular:{"enum":[!0]}}},{required:["obesidade"],properties:{obesidade:{"enum":[!0]}}}]}]},{allOf:[{properties:{doencacronica:{"enum":["N","UNK"]}}},{allOf:[{properties:{asma:{"enum":[!1]}}},{properties:{dpoc:{"enum":[!1]}}},{properties:{diabetes:{"enum":[!1]}}},{properties:{doencaoncologica:{"enum":[!1]}}},{properties:{doencacardiacacronica:{"enum":[!1]}}},{properties:{hiv:{"enum":[!1]}}},{properties:{doencarenalcronica:{"enum":[!1]}}},{properties:{doencahepaticacronica:{"enum":[!1]}}},{properties:{doencaneuromuscular:{"enum":[!1]}}},{properties:{obesidade:{"enum":[!1]}}}]}]}],properties:{hospital:{id:"/properties/hospital",title:"Hospital",description:"Hospital/Centro Hospitalar",type:"string","enum":["British Hospital","Centro Hospitalar Cova da Beira - Hospital Pêro da Covilhã","Centro Hospitalar de São João - Hospital São João","Centro Hospitalar do Alto Ave - Hospital da Senhora da Oliveira, Guimarães","Centro Hospitalar e Universitário de Coimbra - Hospitais da Universidade de Coimbra","Centro Hospitalar Lisboa Central","Centro Hospitalar Lisboa Norte","Centro Hospitalar Lisboa Ocidental - Hospital de São Francisco Xavier","Centro Hospitalar Médio Tejo - Hospital Dr. Manoel Constâncio Abrantes","Centro Hospitalar Tondela Viseu - Hospital de São Teotónio","CUF Descobertas","Hospital Beatriz Ângelo","Hospital de Cascais Dr. José de Almeida","Hospital do Divino Espírito Santo de Ponta Delgada (Açores)","Hospital dos Lusíadas","Hospital Professor Doutor Fernando Fonseca","Hospital Vila Franca de Xira","Unidade Local de Saúde Castelo Branco - Hospital Amato Lusitano","Unidade Local de Saúde do Litoral Alentejano - Hospital do Litoral Alentejano"]},numprocessoclinico:{id:"/properties/numprocessoclinico",title:"N.º processo clínico",description:"Número do processo clínico no hospital",type:"string"},datadeadmissao:{id:"/properties/datadeadmissao",title:"Data de admissão",type:"string",description:"Data de Admissão na UCI",format:"date"},sexo:{id:"/properties/sexo",title:"Sexo",description:"Sexo do utente",type:"string","enum":["M","F","O"]},datanascimento:{id:"/properties/datanascimento",title:"Data de Nascimento",description:"Data de nascimento do utente",type:"string",format:"date"},datainiciosintomas:{id:"/properties/datainiciosintomas",title:"Data de início de sintomas",type:"string",format:"date"},vacinado:{id:"/properties/vacinado",title:"Vacinado",description:"O doente foi vacinado contra a gripe nesta época?",type:"string","enum":["Y","N","UNK"]},doencacronica:{id:"/properties/doencacronica",title:"Doença Crónica",description:"O doente tem alguma doença crónica?",type:"string","enum":["Y","N","UNK"]},asma:{id:"/properties/asma",title:"Asma",type:["boolean","null"],"default":!1},dpoc:{id:"/properties/dpoc",title:"DPOC",type:["boolean","null"],"default":!1},diabetes:{id:"/properties/diabetes",title:"Diabetes",type:["boolean","null"],"default":!1},doencaoncologica:{id:"/properties/doencaoncologica",title:"Doença Oncológica",type:["boolean","null"],"default":!1},doencacardiacacronica:{id:"/properties/doencacardiacacronica",title:"Doença Cardíaca Crónica",type:["boolean","null"],"default":!1},hiv:{id:"/properties/hiv",title:"VIH (ou outras imunodeficiências)",type:["boolean","null"],"default":!1},doencarenalcronica:{id:"/properties/doencarenalcronica",title:"Doença Renal Crónica",type:["boolean","null"],"default":!1},doencahepaticacronica:{id:"/properties/doencahepaticacronica",title:"Doença Hepática Crónica",type:["boolean","null"],"default":!1},doencaneuromuscular:{id:"/properties/doencaneuromuscular",title:"Doença Neuromuscular",type:["boolean","null"],"default":!1},obesidade:{id:"/properties/obesidade",title:"Obesidade",description:"IMC > 29,9kg/m2",type:["boolean","null"],"default":!1},gravidez:{id:"/properties/gravidez",title:"Gravidez",type:["string","null"],"enum":["Y","N","UNK",null]},feztratamento:{id:"/properties/feztratamento",title:"Fez tratamento",type:"string","enum":["Y","N","UNK"]},oseltamivir:{id:"/properties/oseltamivir",title:"Oseltamivir",type:["boolean","null"],"default":!1},zanamivir:{id:"/properties/zanamivir",title:"Zanamivir",type:["boolean","null"],"default":!1},fezprocedimento:{id:"/properties/fezprocedimento",title:"Realizou procedimento",description:"Realizou algum dos seguintes procedimentos durante internamento?",type:"string","enum":["Y","N","UNK"]},vni:{id:"/properties/vni",title:"Ventilação mecânica não invasiva",description:"CPAP ou BIPAP",type:["boolean","null"],"default":!1},intubacao:{id:"/properties/intubacao",title:"Ventilação mecânica invasiva",type:["boolean","null"],"default":!1},ecmo:{id:"/properties/ecmo",title:"ECMO",type:["boolean","null"],"default":!1},dialise:{id:"/properties/dialise",title:"Técnica de substituição renal",type:["boolean","null"],"default":!1},zaragatoa:{id:"/properties/zaragatoa",title:"Zaragatoa naso ou orofaríngea",type:["boolean","null"],"default":!1},lavadoalveolar:{id:"/properties/lavadoalveolar",title:"Aspirado endotraqueal ou lavado broncoalveolar",type:["boolean","null"],"default":!1},biopsia:{id:"/properties/lavadoalveolar",title:"Biópsia tecidular post-mortem",type:["boolean","null"],"default":!1},serotipagem:{id:"/properties/serotipagem",title:"Tipo e subtipo do vírus",type:"string","enum":["A","AH1","AH1N1","AH3","AH3N2","AH5","AH5N1","B","BVic","BYam","PanAH1","PanAH1N1","UNK","O"]},datalaboratorio:{id:"/properties/datalaboratorio",title:"Data da confirmação laboratorial",type:"string",format:"date"},alta:{id:"/properties/alta",title:"Alta?",description:"O utente teve alta?",type:"string","enum":["Y","N","UNK"]},dataalta:{id:"/properties/dataalta",title:"Data da alta",description:"Data de Alta na UCI",type:["string","null"],format:"date"},obito:{id:"/properties/obito",title:"Óbito?",description:"O utente faleceu?",type:"string","enum":["Y","N","UNK"]},dataobito:{id:"/properties/dataobito",title:"Data do óbito",description:"Data do óbito (se aplicável)",type:["string","null"],format:"date"},observacoes:{id:"/properties/observacoes",title:"Observações",type:["string","null"]}}}}),angular.module("gripApp").factory("formDefinition",function(){var a=function(a){return!a||new Date(a)<=new Date},b=[{type:"fieldset",title:"Informações administrativas",items:[{key:"hospital"},{key:"numprocessoclinico"},{key:"datadeadmissao",type:"date",validationMessage:{datadeadmissaoNoFuturo:"Data de admissão não pode ser no futuro",dataAdmissaoAposAlta:"Data de admissão não pode ser posterior à data de alta"},$validators:{dataAdmissaoAposAlta:function(a,b,c){return!a||!c.dataalta||new Date(a)<=new Date(c.dataalta)},datadeadmissaoNoFuturo:a}},{key:"sexo",type:"radiobuttons",titleMap:[{value:"M",name:"Masculino"},{value:"F",name:"Feminino"},{value:"O",name:"Outro"}],description:"Transsexuais devem ser incluidos em 'outro'",validationMessage:{gravidezNoHomem:"Não pode seleccionar sexo masculino e gravidez"},$validators:{gravidezNoHomem:function(a,b,c){return c.gravidez&&a?!("Y"===c.gravidez&&"M"===a):!0}}},{key:"datanascimento",type:"date",validationMessage:{nascimentoNoFuturo:"Data de nascimento não pode ser numa data futura",nascimentoAposAdmissao:"Data de nascimento não pode ser posterior à data de admissão",nascimentoAposSintomas:"Data de nascimento não pode ser posterior à data de início de sintomas",nascimentoAposLaboratorio:"Data de nascimento não pode ser posterior à data de resultasdo laboratorial",nascimentoAposAlta:"Data de nascimento não pode ser posterior à data de alta",nascimentoAposObito:"Data de nascimento não pode ser posterior à data de óbito"},$validators:{nascimentoNoFuturo:a,nascimentoAposAdmissao:function(a,b,c){return!(c.datadeadmissao&&new Date(c.datadeadmissao)<new Date(a))},nascimentoAposSintomas:function(a,b,c){return!(c.datainiciosintomas&&new Date(c.datainiciosintomas)<new Date(a))},nascimentoAposLaboratorio:function(a,b,c){return!(c.datalaboratorio&&new Date(c.datalaboratorio)<new Date(a))},nascimentoAposAlta:function(a,b,c){return!(c.dataalta&&new Date(c.dataalta)<new Date(a))},nascimentoAposObito:function(a,b,c){return!(c.dataobito&&new Date(c.dataobito)<new Date(a))}}}]},{type:"fieldset",title:"Sintomas e vacinação",items:[{key:"datainiciosintomas",type:"date",validationMessage:{inicioSintomasNoFuturo:"Data de início de sintomas não pode ser no futuro",sintomasAntesNascimento:"Data de início de sintomas não pode ser anterior à data de nascimento",sintomasAposAlta:"Data de início de sintomas não pode ser posterior à data de alta",sintomasAposObito:"Data de início de sintomas não pode ser posterior à data de óbito"},$validators:{inicioSintomasNoFuturo:a,sintomasAntesNascimento:function(a,b,c){return!c.datanascimento||!a||new Date(c.datanascimento)<=new Date(a)},sintomasAposAlta:function(a,b,c){return!c.dataalta||!a||new Date(c.dataalta)>=new Date(a)},sintomasAposObito:function(a,b,c){return!c.dataobito||!a||new Date(c.dataobito)>=new Date(a)}}},{key:"vacinado",type:"radiobuttons",titleMap:[{value:"Y",name:"Sim"},{value:"N",name:"Não"},{value:"UNK",name:"Desconhecido"}]}]},{type:"fieldset",title:"Doença Crónica",items:[{key:"doencacronica",type:"radiobuttons",titleMap:[{value:"Y",name:"Sim"},{value:"N",name:"Não"},{value:"UNK",name:"Desconhecido"}]},{type:"fieldset",condition:'model.doencacronica === "Y"',items:[{key:"asma"},{key:"dpoc"},{key:"diabetes"},{key:"doencaoncologica"},{key:"doencacardiacacronica"},{key:"hiv"},{key:"doencarenalcronica"},{key:"doencahepaticacronica"},{key:"doencaneuromuscular"},{key:"doencaneurocognitiva"},{key:"obesidade"}]},{key:"gravidez",type:"radiobuttons",condition:'model.sexo === "F"',titleMap:[{value:"Y",name:"Sim"},{value:"N",name:"Não"},{value:"UNK",name:"Desconhecido"}],validationMessage:{gravidezNoHomem:"Não pode seleccionar sexo masculino e gravidez"},$validators:{gravidezNoHomem:function(a,b,c){return a&&c.sexo?!("Y"===a&&"M"===c.sexo):!0}}}]},{type:"fieldset",title:"Tratamento",items:[{key:"feztratamento",type:"radiobuttons",titleMap:[{value:"Y",name:"Sim"},{value:"N",name:"Não"},{value:"UNK",name:"Desconhecido"}]},{type:"fieldset",condition:'model.feztratamento === "Y"',items:[{key:"oseltamivir"},{key:"zanamivir"}]}]},{type:"fieldset",title:"Procedimentos",items:[{key:"fezprocedimento",type:"radiobuttons",titleMap:[{value:"Y",name:"Sim"},{value:"N",name:"Não"},{value:"UNK",name:"Desconhecido"}]},{type:"fieldset",condition:'model.fezprocedimento === "Y"',items:[{key:"vni"},{key:"intubacao"},{key:"ecmo"},{key:"dialise"}]}]},{type:"fieldset",title:"Amostra Biológica",items:[{key:"zaragatoa"},{key:"lavadoalveolar"},{key:"biopsia"}]},{type:"fieldset",title:"Resultado Laboratorial",items:[{key:"serotipagem",titleMap:[{value:"UNK",name:"Desconhecido"},{value:"A",name:"A (não subtipado)"},{value:"AH1",name:"A(H1)"},{value:"AH1N1",name:"A(H1N1)"},{value:"AH3",name:"A(H3)"},{value:"AH3N2",name:"A(H3N2)"},{value:"B",name:"B (não subtipado)"},{value:"BVic",name:"B Victoria"},{value:"BYam",name:"B Yamagata"}]},{key:"datalaboratorio",type:"date",validationMessage:{laboratorioAntesDeHospitalizacao:"Data de confirmação laboratorial não pode ser anterior à Data de Admissão na UCI",altaNoFuturo:"Data de confirmação laboratorial não pode ser numa data futura"},$validators:{altaNoFuturo:a,laboratorioAntesDeHospitalizacao:function(a,b,c){return!a||!c.datadeadmissao||new Date(a)>=new Date(c.datadeadmissao)}}}]},{type:"fieldset",title:"Alta/Óbito",items:[{key:"alta",type:"radiobuttons",titleMap:[{value:"Y",name:"Sim"},{value:"N",name:"Não"},{value:"UNK",name:"Desconhecido"}]},{key:"dataalta",type:"date",condition:'model.alta === "Y"',validationMessage:{altaSemData:"Assinalado que o utente tem alta, mas a data de alta não foi especificada",altaAntesDeHospitalizacao:"Data da Alta não pode ser anterior à Data de Admissão na UCI",altaNoFuturo:"Data de alta não pode ser numa data futura",obitoAntesDeAlta:"Data de óbito não pode ser anterior à Data de Alta. Em caso de óbito durante o internamento, coloque a mesma data em ambos os campos"},$validators:{altaSemData:function(a,b,c){return"Y"===c.alta&&a},altaNoFuturo:a,altaAntesDeHospitalizacao:function(a,b,c){return!a||!c.datadeadmissao||new Date(c.datadeadmissao)<=new Date(a)},obitoAntesDeAlta:function(a,b,c){return!a||!c.dataobito||new Date(a)<=new Date(c.dataobito)}}},{key:"obito",type:"radiobuttons",titleMap:[{value:"Y",name:"Sim"},{value:"N",name:"Não"},{value:"UNK",name:"Desconhecido"}]},{type:"fieldset",title:"Se óbito...",condition:'model.obito === "Y"',items:[{key:"dataobito",type:"date",validationMessage:{obitoSemData:"Assinalado que o utente faleceu, mas a data de óbito não foi especificada",dataobitoNoFuturo:"Data do Óbito não pode ser no futuro",obitoAntesDeHospitalizacao:"Data de óbito não pode ser anterior à data de internamento",obitoAntesDeAlta:"Data de óbito não pode ser anterior à Data de Alta. Em caso de óbito durante o internamento, coloque a mesma data em ambos os campos"},$validators:{obitoSemData:function(a,b,c){return"Y"===c.alta&&a},dataobitoNoFuturo:a,obitoAntesDeHospitalizacao:function(a,b,c){return!a||!c.datadeadmissao||new Date(c.datadeadmissao)<=new Date(a)},obitoAntesDeAlta:function(a,b,c){return!a||!c.dataalta||new Date(c.dataalta)<=new Date(a)}}}]}]},{type:"fieldset",title:"Observações",items:[{key:"observacoes",type:"textarea"}]}];return{newForm:function(){var a=angular.copy(b);return a.push({type:"fieldset",title:"Acções",htmlClass:"stretch-all",items:[{type:"submit",title:"Carregar"},{type:"button",title:"Reset",onClick:"onReset()"}]}),a},editForm:function(){return angular.copy(b)}}}),angular.module("gripApp").factory("FileReader",["$q","$window",function(a,b){var c=function(a,b,c){return function(){c.$apply(function(){b.resolve(a.result)})}},d=function(a,b,c){return function(){c.$apply(function(){b.reject(a.result)})}},e=function(a,b){return function(a){b.$broadcast("fileProgress",{total:a.total,loaded:a.loaded})}},f=function(a,f){var g=new b.FileReader;return g.onload=c(g,a,f),g.onerror=d(g,a,f),g.onprogress=e(g,f),g},g=function(b,c){var d=a.defer(),e=f(d,c);return e.readAsDataURL(b),d.promise},h=function(b,c,d){var e=a.defer(),g=f(e,d);return g.readAsText(b,c),e.promise},i=function(b,c){var d=a.defer(),e=f(d,c);return e.readAsBinaryString(b),d.promise};return{readAsDataURL:g,readAsBinaryString:i,readAsText:h}}]),angular.module("gripApp").controller("OpenFileModalInstanceCtrl",["$uibModalInstance","$scope","FileReader",function(a,b,c){b.file=null,b.ok=function(){if(!b.file)return void a.dismiss("cancel");var d=c.readAsText(b.file,"",b);a.close(d)},b.cancel=function(){a.dismiss("cancel")}}]),angular.module("gripApp").directive("ngFileSelect",function(){return{link:function(a,b){b.bind("change",function(b){a.file=(b.srcElement||b.target).files[0]})}}}),angular.module("gripApp").service("CsvParser",function(){var a=";";return{setDelimiter:function(b){a=b},parse:function(b){b=b.replace(/\r\n/g,"\n");for(var c=b.split("\n"),d=c.shift().split(a),e=c.length;e>=0;--e)if(c[e]){for(var f=c[e].split(a),g={},h=0;h<d.length;++h)if(!angular.isUndefined(f[h])){var i=f[h];i=i.replace(/^"*/,"").replace(/"*$/,""),i=i.trim(),""===i?i=null:"TRUE"===i||"true"===i?i=!0:("FALSE"===i||"false"===i)&&(i=!1),g[d[h]]=i}c[e]=g}else c.splice(e,1);return c}}}),angular.module("gripApp").controller("EditrecordmodalCtrl",["$uibModalInstance","$scope","registos","schema","formDefinition","record",function(a,b,c,d,e,f){b.model=f,b.schema=d,b.form=e.editForm(),b.ok=function(){a.close(b.model)},b.cancel=function(){a.dismiss("cancel")}}]),angular.module("gripApp").run(["$templateCache",function(a){a.put("views/editrecordmodal.html",'<div class="modal-header"> <h4>Editar Registo</h4> </div> <div class="modal-body"> <form id="editRecordForm" name="editRecordForm" sf-schema="schema" data-sf-form="form" data-sf-model="model"></form> </div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="ok()">Guardar</button> <button class="btn" ng-click="cancel()">Cancelar</button> </div>'),a.put("views/formulario.html",'<header> <h2>Formulário</h2> </header> <section> <form id="registoForm" name="registoForm" sf-schema="schema" data-sf-form="form" data-sf-model="model" ng-submit="onSubmit(registoForm)"></form> </section> '),a.put("views/instrucoes.html",'<header> <h2>Instruções</h2> <p><i>Caro colega</i>,</p> <p>Bem-vindo à GripApp, a nova aplicação para a vigilância da gripe em Unidades de Cuidados Intensivos. Esta aplicação pretende simplificar e “tornar mais amigável” o preenchimento dos dados dos doentes com gripe, internados em Unidades de Cuidados Intensivos. Permitirá ainda contribuir para a vigilância europeia da gripe, uma vez que os dados serão enviados para o <a href="https://ecdc.europa.eu/en/publications-data/european-surveillance-system-tessy">ECDC/TESSy</a>. </p> </header> <section> <h3 id="criação-de-registo">Criação de registo</h3> <p>Para iniciar o registo dos casos de gripe, siga as seguintes instruções:</p> <ol> <li>Clique no separador <em><code>“Formulário”</code></em> e preencha os campos apresentados. <strong>Todos os campos de preenchimento obrigatório estão identificados com uma estrela a vermelho; <i class="fa fa-asterisk text-danger" aria-hidden="true"></i></strong></li> <li>Quando terminar, clique em <em><code>“Carregar”</code></em>, no final da página, e a informação ficará guardada, temporariamente, no separador <em><code>“Registos”</code></em>;</li> <li>Repita este passo tantas vezes quantos os casos de gripe que vai reportar;</li> <li>Aceda ao separador <em><code>“Registos”</code></em>. Nele encontrará todos os casos de gripe que introduziu no separador <em><code>“Formulário”</code></em>;</li> <li>Clique em <em><i class="fa fa-lg fa-fw fa-floppy-o"></i> <code>“Guardar ficheiro”</code></em> para criar um documento com essa informação, que deverá guardar no seu computador. <strong>Se fechar a página sem completar este passo, irá perder a informação registada até ao momento;</strong></li> <li>Envie o ficheiro, como anexo, para <a href="&#109;&#97;il&#116;o&#58;ce&#115;&#112;&#37;4&#48;%64%67%&#55;3%2&#69;min%2D%&#55;3a%&#55;5d&#37;6&#53;&#46;pt">&#99;esp&#64;dg&#115;&#46;&#109;&#105;n&#45;s&#97;&#117;&#100;&#101;&#46;p&#116;</a> (ou então poderá fazer reply ao email enviado, semanalmente, à 2ª feira).</li> </ol> </section> <section> <h5 id="alterar-registo">Alterar registo</h5> <p>Uma vez o ficheiro criado, não deverá ser feita nenhuma alteração/atualização diretamente no ficheiro. Se pretender alterar/atualizar os registos:</p> <ul> <li>Se guardou previamente o ficheiro, selecione a opção <em><i class="fa fa-lg fa-fw fa-folder-open-o"></i><code>“Abrir ficheiro”</code></em> no separador <em><code>“Registos”</code></em>;</li> <li>Procure o ficheiro no computador, seleccione-o e clique no botão <em><code>"Abrir"</code></em></li> <li>Selecione o registo que pretende alterar/atualizar, clicando no <i class="fa fa-square-o"></i> "quadradinho" à esquerda; </li> <li>Clique em <em><i class="fa fa-lg fa-fw fa-pencil"></i><code>“Editar registo selecionado”</code></em> e surgirá uma janela pop-up com os dados registados previamente, que lhe permite alterar os campos;</li> <li>Feita a alteração/atualização, clique em <em><code>“Guardar”</code></em>, no final do pop-up, e a informação ficará novamente guardada, temporariamente, no separador <em><code>“Registos”</code></em>;</li> <li>Clique em <em><i class="fa fa-lg fa-fw fa-floppy-o"></i> <code>“Guardar ficheiro”</code></em> para criar um novo documento com essa nova informação, que deverá guardar uma vez mais no seu computador. <strong>Se fechar a página sem completar este passo, irá perder a informação que alterou/atualizou;</strong></li> <li>Envie o ficheiro que alterou/atualizou, como anexo, para <a href="&#109;&#97;il&#116;o&#58;ce&#115;&#112;&#37;4&#48;%64%67%&#55;3%2&#69;min%2D%&#55;3a%&#55;5d&#37;6&#53;&#46;pt">&#99;esp&#64;dg&#115;&#46;&#109;&#105;n&#45;s&#97;&#117;&#100;&#101;&#46;p&#116;</a> (ou então poderá fazer reply ao email enviado, semanalmente, à 2ª feira).</li> </ul> </section> <section> <h5 id="contactos">Contactos</h5> <p>Se tiver qualquer problema com a utilização da GripApp, avise-nos por email (<a href="&#109;&#97;il&#116;o&#58;ce&#115;&#112;&#37;4&#48;%64%67%&#55;3%2&#69;min%2D%&#55;3a%&#55;5d&#37;6&#53;&#46;pt">&#99;esp&#64;dg&#115;&#46;&#109;&#105;n&#45;s&#97;&#117;&#100;&#101;&#46;p&#116;</a>; <a href="m&#97;ilto&#58;&#105;f%61l&#99;ao%40d%6&#55;s&#46;m&#105;%6E&#45;&#115;&#97;u%&#54;&#52;e&#46;pt">ifa&#108;&#99;&#97;o&#64;&#100;g&#115;&#46;min-s&#97;u&#100;e&#46;pt</a>) ou por telefone (<a href="tel:914600381">914600381</a>).</p> </section>'),a.put("views/registos.html",'<header> <h2>Registos</h2> </header> <section id="registos" class="table-responsive"> <div class="panel panel-default"> <!-- Default panel contents --> <div class="panel-heading panel-button-top"> <!-- guardar como CSV --> <span class="fa-btn" ng-csv="getArray" data-csv-header="getProps()" data-csv-column-order="getProps()" data-filename="{{options.filename}}.csv" data-field-separator="{{ options.fieldSeparator }}" data-tooltip-placement="bottom" uib-tooltip="Guardar ficheiro"> <i class="fa fa-lg fa-fw fa-floppy-o"></i> </span> <!-- Abrir ficheiro CSV --> <span class="fa-btn" ng-click="fileLoadModalOpen()" data-tooltip-placement="bottom" uib-tooltip="Abrir ficheiro"> <i class="fa fa-lg fa-fw fa-folder-open-o"></i> </span> <!-- Editar registo --> <span class="fa-btn" ng-show="countSelected() === 1" ng-click="editRecordModalOpen()" data-tooltip-placement="bottom" uib-tooltip="Editar registo seleccionado"> <i class="fa fa-lg fa-fw fa-pencil"></i> </span> <!-- Apagar registo seleccionado --> <span class="fa-btn" ng-click="deleteRecord()" data-tooltip-placement="bottom" uib-tooltip="Apagar registo seleccionado"> <i class="fa fa-lg fa-fw fa-eraser" aria-hidden="true"></i> </span> <!-- Apagar todos os registos --> <span class="fa-btn" ng-click="reset()" data-tooltip-placement="bottom" uib-tooltip="Apagar todos os registos"> <i class="fa fa-lg fa-fw fa-trash-o" aria-hidden="true"></i> </span> </div> <div class="panel-table-wrapper"> <table class="table table-condensed table-hover table-overflow-x"> <thead class="thead-inverse"> <tr> <th></th> <th>#</th> <th ng-repeat="header in headers">{{::header}}</th> </tr> </thead> <tbody> <tr ng-repeat="item in registos" ng-class="{\'info\': item.$$selected}" ng-click="item.$$selected = !item.$$selected"> <th class="table-select-row"> <i class="fa" ng-class="{\'fa-square-o\': !item.$$selected, \'fa-check-square-o\': item.$$selected}" aria-hidden="true"></i> </th> <th>{{ $index }}</th> <td ng-repeat="prop in props">{{::item[prop]}}</td> </tr> </tbody> </table> </div> </div> </section>'),a.put("views/uploadfilemodal.html",'<div class="modal-header"> <h4>Seleccionar ficheiro</h4> </div> <div class="modal-body"> <input class="btn btn-primary" ng-file-select="onFileSelect($files)" type="file" accept=".csv"> </div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="ok()">Ok</button> <button class="btn" ng-click="cancel()">Cancelar</button> </div>')}]);