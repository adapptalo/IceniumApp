var data = (function()
{
    return {
      artists:  new kendo.data.DataSource({
            pageSize: 20,
            page:1, 
            serverPaging: true,
            transport: {
                read: {
                  url: "http://www.adapptalo.com/BBF/content/beers.json",
                  dataType: "json"
                },
                parameterMap: function(options) {
                    var parameters = {
                        pageSize: options.pageSize,
                        page: options.page,
                    };
                
                    return parameters;
                }
            },
            schema: {
                data: function (data) {
                    return data.Data;
                    
                },
                total: function (data) {
                    return data.Count;
                }
            }
          })
    };
})();