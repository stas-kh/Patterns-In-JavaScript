export class Utils {
	static generateNullObject(proto) {
		/*
		 * Please be aware!
		 * In different cases the NullOperation class can be extended by different prototypes
		 */
		class NullOperation extends proto {
			method(methodName, callback) {
				this[methodName] = function () {
					if (callback !== null && callback !== undefined) {
						callback.call();
					}
				};
				return this;
			}
		}
		return new NullOperation();
	}

	static log(message) {
		let logger = document.querySelector(".logger");
		logger.innerText = logger.innerHTML + "\n" + message;
		logger.scrollTop = logger.scrollHeight;
	}
}