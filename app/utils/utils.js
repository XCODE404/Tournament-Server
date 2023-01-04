module.exports = {
  /**
 * @description Get user device information from the request
 * @param {Request} u request
 * @returns {Promise<{browser: string, version: string, os: string, platform:
 * string, isMobile: boolean, isBot: boolean}>}
  */
  async userAgent(agent) {
    return {
      browser: agent.browser,
      version: agent.version,
      os: agent.os,
      platform: agent.platform,
      isMobile: agent.isMobile,
      isBot: agent.isBot,
    };
  }, // Get user device information
}