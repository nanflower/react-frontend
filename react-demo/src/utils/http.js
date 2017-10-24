import $ from 'webpack-zepto'

let http = function (instance) {
  // 处理请求时候显示遮罩的问题
  $.ajaxSettings.beforeSend = () => {
    // instance.$ui.loading.show();
  }
  $.ajaxSettings.complete = (xhr) => {
    // instance.$ui.loading.hide();
  }

  let deviceInfo;

  let baseRequest = opt => {
    let options = {
      url: opt.url,
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      headers: {
        deviceInfo
      },
      success: (_data) => {
      },
      error: () => {
      }
    }
    $.ajax(Object.assign({}, options, opt));
  }

  let ret = {
    get (url, callback) {
      baseRequest({
        url,
        callback,
        type: 'GET'
      })
    },
    post (url, params, callback) {
      baseRequest({
        url,
        callback,
        data: JSON.stringify(params),
        type: 'POST'
      })
    },
    request (option) {
      $.ajax(option);
    }
  }

  return ret;
}

export default http
