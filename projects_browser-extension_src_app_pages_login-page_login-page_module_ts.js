"use strict";

(self.webpackChunkbrowser_extension = self.webpackChunkbrowser_extension || []).push([
    ["projects_browser-extension_src_app_pages_login-page_login-page_module_ts"],
    {
        7297: (m, p, r) => {
            r.r(p);
            r.d(p, {
                LoginPageModule: () => g
            });
            var c, t, s, b = r(8267),
                u = r(9252),
                d = r(2555);
            (t = c || (c = {}))[t.ConnectWithGoogle = 0] = "ConnectWithGoogle";
            t[t.ConnectWithApple = 1] = "ConnectWithApple";
            t[t.ManualSignup = 2] = "ManualSignup";
            t[t.ManualLogin = 3] = "ManualLogin";
            (function (t) {
                t[t.Website = 0] = "Website";
                t[t.WebsiteAPI = 3] = "WebsiteAPI";
                t[t.AiDetectorIframe = 11] = "AiDetectorIframe";
                t[t.AiDetectorExtension = 12] = "AiDetectorExtension";
            })(s || (s = {}));
            var n = r(4001);

            class l {
                constructor() {
                    this.eAuthenticateActionButtons = c;
                }
                goToLink(o) {
                    let e;
                    const i = decodeURIComponent();
                    switch (o) {
                        case c.ConnectWithGoogle:
                            e = `${d.N.dashboardWebsite}/login-redirect?isLogin=true&ssoProvider=1&redirect=${i}&regSource=${s.AiDetectorExtension}`;
                            break;
                        case c.ConnectWithApple:
                            e = `${d.N.dashboardWebsite}/login-redirect?isLogin=true&ssoProvider=0&redirect=${i}&regSource=${s.AiDetectorExtension}`;
                            break;
                        case c.ManualSignup:
                            e = `${d.N.dashboardWebsite}/signup?redirectUrl=${i}&regSource=${s.AiDetectorExtension}`;
                            break;
                        case c.ManualLogin:
                            e = `${d.N.dashboardWebsite}/login-redirect?isLogin=true&redirect=${i}`;
                            break;
                        default:
                            return;
                    }
                    chrome.tabs.create({
                        url: e
                    });
                }
            }
            l.ɵfac = function (o) {
                return new (o || l);
            };
            l.ɵcmp = n.Xpm({
                type: l,
                selectors: [
                    ["app-login-page"]
                ],
                decls: 19,
                vars: 0,
                consts: [
                    [1, "main-container"],
                    [1, "logo-title-container"],
                    ["width", "251.32px", "height", "50.02px", "src", "assets/images/NeuLogo.jpg", "alt", "dashboard-logo"],
                    [1, "title"],
                    [1, "action-btns-container"],
                    [1, "btns-container"],
                    [1, "raised-btn", 3, "click"],
                    ["src", "assets/images/google-icon.svg", 1, "btn-logo"],
                    ["src", "assets/images/facebook-icon.svg", 1, "btn-logo"],
                    [1, "divider"],
                    [1, "outlined-btn", 3, "click"]
                ],
                template: function (o, e) {
                    1 & o && (n.TgZ(0, "div", 0), n.TgZ(1, "div", 1), n._UZ(2, "img", 2), n.TgZ(3, "span", 3), n._uU(4, "AI Content Detector"), n.qZA(), n.qZA(), n.TgZ(5, "div", 4), n.TgZ(6, "div", 5), n.TgZ(7, "button", 6), n.NdJ("click", function () {
                        return e.goToLink(e.eAuthenticateActionButtons.ConnectWithGoogle);
                    }), n._UZ(8, "img", 7), n._uU(9, " Continue with Google "), n.qZA(), n.TgZ(10, "button", 6), n.NdJ("click", function () {
                        return e.goToLink(e.eAuthenticateActionButtons.ConnectWithApple);
                    }), n._UZ(11, "img", 8), n._uU(12, " Continue with Facebook "), n.qZA(), n.qZA(), n._UZ(13, "div", 9), n.TgZ(14, "div", 5), n.TgZ(15, "button", 10), n.NdJ("click", function () {
                        return e.goToLink(e.eAuthenticateActionButtons.ManualSignup);
                    }), n._uU(16, "Signup"), n.qZA(), n.TgZ(17, "button", 10), n.NdJ("click", function () {
                        return e.goToLink(e.eAuthenticateActionButtons.ManualLogin);
                    }), n._uU(18, "Login"), n.qZA(), n.qZA(), n.qZA(), n.qZA());
                },
                styles: [".main-container[_ngcontent-%COMP%]{width:510px;height:334px;padding:32px;grid-gap:16px;gap:16px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.main-container[_ngcontent-%COMP%]   .logo-title-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.main-container[_ngcontent-%COMP%]   .logo-title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#3f9af5;font-size:22px;font-weight:600}.main-container[_ngcontent-%COMP%]   .action-btns-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;grid-gap:8px;gap:8px;justify-content:flex-start;width:100%}.main-container[_ngcontent-%COMP%]   .action-btns-container[_ngcontent-%COMP%]   .btns-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;grid-gap:4px;gap:4px;width:100%}.main-container[_ngcontent-%COMP%]   .action-btns-container[_ngcontent-%COMP%]   .btns-container[_ngcontent-%COMP%]   .raised-btn[_ngcontent-%COMP%]{cursor:pointer;width:100%;height:40px;border:none;font-weight:bold;background-color:#3f9af5;font-size:18px;border-radius:4px;color:#fff;position:relative}.main-container[_ngcontent-%COMP%]   .action-btns-container[_ngcontent-%COMP%]   .btns-container[_ngcontent-%COMP%]   .raised-btn[_ngcontent-%COMP%]   .btn-logo[_ngcontent-%COMP%]{position:absolute;left:37.35px;top:8px}.main-container[_ngcontent-%COMP%]   .action-btns-container[_ngcontent-%COMP%]   .btns-container[_ngcontent-%COMP%]   .outlined-btn[_ngcontent-%COMP%]{cursor:pointer;width:100%;height:40px;font-weight:600;font-size:18px;background-color:#fff;border-radius:4px;border:2px #3f9af5 solid;color:#3f9af5}.main-container[_ngcontent-%COMP%]   .action-btns-container[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]{width:252px;border-top:1px solid #c9d6df}"]
            });

            const f = [{
                path: "",
                component: l
            }];

            class a { }
            a.ɵfac = function (o) {
                return new (o || a);
            };
            a.ɵmod = n.oAB({
                type: a
            });
            a.ɵinj = n.cJS({
                imports: [
                    [u.Bz.forChild(f)],
                    u.Bz
                ]
            });

            class g { }
            g.ɵfac = function (o) {
                return new (o || g);
            };
            g.ɵmod = n.oAB({
                type: g
            });
            g.ɵinj = n.cJS({
                imports: [
                    [b.ez, a]
                ]
            });
        }
    }
]);
//# sourceMappingURL=projects_browser-extension_src_app_pages_login-page_login-page_module_ts.js.map
