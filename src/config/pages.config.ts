const baseURL = "/"

class PagesConfig {
	home = baseURL
	about = baseURL + "about/"
	academics = baseURL + "academics/"
	admissions = baseURL + "admissions/"
	studentLife = baseURL + "student-life/"
	contact = baseURL + "contact/"
	termsService = baseURL + "terms-of-service/"
	privacyPolicy = baseURL + "privacy-policy/"
	cookiePolicy = baseURL + "cookie-policy/"
}

export const pagesConfig = new PagesConfig()
