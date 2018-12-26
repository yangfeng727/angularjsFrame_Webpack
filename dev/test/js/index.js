import resultA from './a';
import resultB from './b';
import '../css/index.less';
import '../css/a.less';

import $ from 'jquery'

document.getElementById('test').innerText=resultA;

$(".wrapb").html(resultB);