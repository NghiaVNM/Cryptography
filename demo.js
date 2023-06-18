var jwt = require('jsonwebtoken');
var fs = require('fs');

var public1 = fs.readFileSync('./key/public.crt');

var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDhlZWMyNGZlYTJiZWZlODA4MjA2MGUiLCJpYXQiOjE2ODcwOTI0ODV9.oBe0o7oOQiBR8jnyxReeuHr2UIJSMHINd3w2DvZKgda-lOBegmgQBDh9wHWq4wwDdYt2mgKrSMOQrf4KwAKTS6syrZ7bGNNJy_RdFj2r5vDyA9-nxTilZIcL6ObsSxFwIscmLiwHcnPGbe65tcZPpfhFzvo3fZgwK-4z04TcNEWYfAEeGU8fidy6DTcDW4dAZUQul-rwp3jKTSD0MK75TItbEZWO_kjDpHp8hkenktjeXZqHijU9xYg1IsVocQki3weOR0DjvbwfL-2X7epb2Nckp9tvBSglWWTSi6JYwJv10zTOAGMvcJsL-0s48CFTalzAoXCLJssfS2VeG0Pfcg'

// Server authentication
var decoded = jwt.verify(token, public1, { algorithm: 'RS256' });
console.log('Decoded:', decoded);
