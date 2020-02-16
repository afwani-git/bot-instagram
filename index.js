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
				const cookies =  ""//your cookies 
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