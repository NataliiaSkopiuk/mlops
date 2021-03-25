(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{108:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=t,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return r?o.a.createElement(m,i(i({ref:n},u),{},{components:r})):o.a.createElement(m,i({ref:n},u))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},76:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(6),a=(r(0),r(108)),c={id:"advanced",title:"Advanced Usage"},i={unversionedId:"lab/advanced",id:"lab/advanced",isDocsHomePage:!1,title:"Advanced Usage",description:"This section is optional.",source:"@site/docs/lab/advanced.md",slug:"/lab/advanced",permalink:"/mlops/docs/lab/advanced",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/lab/advanced.md",version:"current",sidebar:"someSidebar",previous:{title:"Install - Part 3",permalink:"/mlops/docs/lab/install3"},next:{title:"Introduction",permalink:"/mlops/docs/about-kd/intro"}},l=[{value:"Change VM CPU or Memory",id:"change-vm-cpu-or-memory",children:[]},{value:"Reference",id:"reference",children:[]}],u={rightToc:l};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section is optional."),Object(a.b)("h2",{id:"change-vm-cpu-or-memory"},"Change VM CPU or Memory"),Object(a.b)("p",null,"You can change the cpus and memory allocated to your VM by providing extra configuration in your Vagrantfile:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ruby"}),'config.vm.provider "virtualbox" do |v|\n  v.memory = 4096\n  v.cpus = 4\nend\n')),Object(a.b)("p",null,"For example, here I am specifying 4096 memory and 4 vcpus."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ruby"}),'# -*- mode: ruby -*-\n# vi: set ft=ruby :\n\nVagrant.configure("2") do |config|\n\n  config.vm.provider "virtualbox" do |v|\n    v.memory = 4096\n    v.cpus = 4\n  end\n\n  config.vm.box = "chris-snow/kubedirector-lab"\n  config.vm.box_version = "0.0.3-20200904"\n\n  config.vm.network "forwarded_port", guest: 3000, host: 3001\n\n  config.vm.synced_folder \'.\', \'/vagrant\', disabled: true\n  config.vm.synced_folder "./kubedirector", "/vagrant/src/github.com/bluek8s/kubedirector", owner: "vagrant", group: "vagrant"\n\n  config.vm.provision "shell", privileged: false, inline: <<-SCRIPT\n    sudo chmod 777 /vagrant/\n  SCRIPT\n\nend\n')),Object(a.b)("p",null,"Run ",Object(a.b)("inlineCode",{parentName:"p"},"vagrant reload")," for changes in the Vagrantfile to take effect."),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("p",null,"See  ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.vagrantup.com/docs/providers/virtualbox/configuration"}),"https://www.vagrantup.com/docs/providers/virtualbox/configuration")))}p.isMDXComponent=!0}}]);