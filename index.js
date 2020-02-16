require('dotenv').config();
const puppeteer = require('puppeteer');

class Instagram {

		constructor() {
				this.browser = null;
				this.page = null;
		}

		async init() {
				try {
						this.browser = await puppeteer.launch({
								headless: false,
								slowMo: 200,
								devTools: true
						});
				} catch (e) {
						console.log("Msg Err => ", e);
				}
		}

		async login() {
				await this.init();
				const cookies = [{
								"domain": ".instagram.com",
								"expirationDate": 1894529765.5854,
								"hostOnly": false,
								"httpOnly": true,
								"name": "ig_did",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": false,
								"storeId": "0",
								"value": "E7CF9FDE-E099-4E81-AE5D-D8FB257FAED1",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"expirationDate": 1894529765.585608,
								"hostOnly": false,
								"httpOnly": false,
								"name": "mid",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": false,
								"storeId": "0",
								"value": "XiA35QAEAAHu17PDActgAOeIMlTy",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"expirationDate": 1610619449.95578,
								"hostOnly": false,
								"httpOnly": false,
								"name": "csrftoken",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": false,
								"storeId": "0",
								"value": "Roqy2dDqJzoK3NenkKc8ZfMdGVauNlFx",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"expirationDate": 1579774595.20889,
								"hostOnly": false,
								"httpOnly": true,
								"name": "shbid",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": false,
								"storeId": "0",
								"value": "17510",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"expirationDate": 1579774595.208946,
								"hostOnly": false,
								"httpOnly": true,
								"name": "shbts",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": false,
								"storeId": "0",
								"value": "1579169795.096189",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"expirationDate": 1586945849.955949,
								"hostOnly": false,
								"httpOnly": false,
								"name": "ds_user_id",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": false,
								"storeId": "0",
								"value": "5863580219",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"expirationDate": 1610705795.209098,
								"hostOnly": false,
								"httpOnly": true,
								"name": "sessionid",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": false,
								"storeId": "0",
								"value": "5863580219%3AahkXKsDgo9CnIT%3A1",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"hostOnly": false,
								"httpOnly": true,
								"name": "rur",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": true,
								"storeId": "0",
								"value": "FRC",
								"origin": "https://www.instagram.com"
						},
						{
								"domain": ".instagram.com",
								"hostOnly": false,
								"httpOnly": true,
								"name": "urlgen",
								"path": "/",
								"sameSite": "unspecified",
								"secure": true,
								"session": true,
								"storeId": "0",
								"value": "\"{\\\"103.119.66.8\\\": 63859}:1is2DR:kTulULkzRV0JdjwQvevyXybEnxI\"",
								"origin": "https://www.instagram.com"
						}
				]
				this.page = await this.browser.newPage();
				await this.page.setCookie(...cookies);
		}

		async autoLike(tags) {
			await this.login();
			await this.page.goto('https://www.instagram.com');
			await this.page.click("[class='aOOlW   HoLwm ']");
			await this.page.click("[class='LWmhU _0aCwM']");//class=""
			await this.page.type("[class='XTCLo x3qfX focus-visible']",tags[0]=="#"?tags:`#${tags}`,{delay:100});//XTCLo x3qfX
		
			await this.page.keyboard.press('ArrowDown');
			let totalPost = await this.page.$eval("[class='Fy4o8']",e => e.children[0].children[0].textContent);
			totalPost = parseInt(totalPost.split(",").join(""));
			await this.page.keyboard.press('Enter');
			await this.page.waitForNavigation({ waitUntil: 'networkidle0' });
			await this.page.click("[class*='_9AhH0']");

			for(let x=0;x<totalPost;x++){
				await this.page.waitFor(2000);

				const checkLike = await this.page.$eval("[class='wpO6b ']",(e) => {
					return e.children[0].getAttribute("aria-label");	
				});

				if(checkLike != "Batal Suka") await this.page.click("[class='wpO6b ']");

				await this.page.click("[class='HBoOv coreSpriteRightPaginationArrow']");
				await this.page.cl
			}

			this.page.close();
		}
}

const automated = new Instagram("afwani321@gmail.com", "oraududorauwu");

automated.autoLike("#like4like	");	