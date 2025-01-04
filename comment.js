const SteamCommunity = require('steamcommunity');
let community = new SteamCommunity();

var details = {
	"accountName": "gaben@valvesoftware.com", //
	"password": "MoolyFTW", //
    "steamguard": process.argv[2], // only required if logging in with a Steam Guard authorization
    "authCode": process.argv[3], // only required if logging in with a new email auth code
    "twoFactorCode": "", // only required if logging in with a Steam Guard app code
    "captcha": "", // only required if you have been prompted with a CAPTCHA
    "disableMobile": false // pass `true` here to have node-steamcommunity not use the mobile login flow. This might help keep your login session alive longer, but you won't get an oAuth token in the login response.
}

function PostComment()
{
	community.postUserComment('76561199806777339', '<3', err => {
		if(err)
		{
			console.log(err);
			process.exit(1);
		}
	});

	console.log('posting success');
}

function Post6Comments()
{
	for(var i = 0; i < 6; i++)
		setTimeout(PostComment, 2000);
}

community.login(details, err => {
	if(err)
	{
		console.log(err)
		process.exit(1);
	}
});

console.log('login success');
setInterval(Post6Comments, 120000);
