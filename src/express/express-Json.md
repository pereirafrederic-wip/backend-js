
inflate : true -> Enables handling deflated (compressed) bodies
limitre: 	"100kb" ->  maximum request body size.
revival -> transformation function

       exemple : JSON.parse('{"p": 5}', (key, value) =>
                    typeof value === 'number'
                        ? value * 2 // return value * 2 for numbers
                        : value     // return everything else unchanged
                );
strict  :  true -> strict with json format              
verify : function ->    (req, res, buf, encoding) =>    The parsing can be aborted by throwing an error.


express.json ([options])

-------------------------------------------------------------------

en + de json
extended : true   -> querystring library (when false) or the qs library (when true)
parameterLimit : 1000, This option controls the maximum number of parameters that are allowed in the URL-encoded data

type : "application/x-www-form-urlencoded" -> type encodage


express.urlencoded([options])
