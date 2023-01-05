// module.exports = {
//   /**
//  * @description Get user device information from the request
//  * @param {Request} u request
//  * @returns {Promise<{browser: string, version: string, os: string, platform:
//  * string, isMobile: boolean, isBot: boolean}>}
//   */
//   async userAgent(agent) {
//     return {
//       browser: agent.browser,
//       version: agent.version,
//       os: agent.os,
//       platform: agent.platform,
//       isMobile: agent.isMobile,
//       isBot: agent.isBot,
//     };
//   } // Get user device information
// }

exports.userAgent = async (agent) => {
	return {
		browser: agent.browser,
		version: agent.version,
		os: agent.os,
		platform: agent.platform,
		isMobile: agent.isMobile,
		isBot: agent.isBot,
	}
}

exports.checkExist = async (data) => {
	if (data == null || !data || data.length == 0) {
		return false;
	}
	return true;
}