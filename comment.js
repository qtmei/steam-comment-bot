const SteamCommunity = require('steamcommunity');

let community = new SteamCommunity();

function postcomment()
{
	community.postUserComment('76561197960287930', '<3', err => { //
		if(err)
		{
			console.log('posting failed');
			console.log(err);
			process.exit(1);
		}
		else
		{
			console.log('posting success');
		}
	});
}

function post6comments()
{
	for(var i = 0; i < 6; i++)
	{
		setTimeout(postcomment, 2000);
	}
}

var details = {
	"accountName": "gaben@valvesoftware.com", //username
	"password": "MoolyFTW", //password
    "steamguard": "", // only required if logging in with a Steam Guard authorization
    "authCode": "", // only required if logging in with a new email auth code
    "twoFactorCode": "XXXXX", // only required if logging in with a Steam Guard app code
    "captcha": "", // only required if you have been prompted with a CAPTCHA
    "disableMobile": false // pass `true` here to have node-steamcommunity not use the mobile login flow. This might help keep your login session alive longer, but you won't get an oAuth token in the login response.
}

community.login(details, err => {
	if(err)
	{
		console.log('login failed');
		console.log(err)
	}
	else
	{
		console.log('login success');

		setInterval(post6comments, 120000);
	}
});
