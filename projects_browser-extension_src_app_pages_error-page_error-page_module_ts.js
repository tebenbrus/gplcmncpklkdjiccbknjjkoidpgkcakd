"use strict";

(self.webpackChunkbrowser_extension = self.webpackChunkbrowser_extension || []).push([
    ["projects_browser-extension_src_app_pages_error-page_error-page_module_ts"],
    {
        9785: (b, p, t) => {
            t.r(p);
            t.d(p, {
                ErrorPageModule: () => i
            });
            var l = t(8267),
                d = t(7072),
                g = t(9252),
                u = t(8806),
                h = t(7245),
                e = t(4001),
                x = t(5936),
                v = t(7456),
                f = t(6024);

            function M(r, n) {
                1 & r && (e.TgZ(0, "span", 6), e._uU(1, "Come back tomorrow!"), e.qZA());
            }

            class s {
                constructor(n, o, c) {
                    this._authService = n;
                    this._paymentSvc = o;
                    this._activateRoute = c;
                    this.hideBottomMessage = !1;
                }
                ngOnInit() {
                    var n, o, c, m;
                    return u.mG(this, void 0, void 0, function* () {
                        this.userBalance = yield this._paymentSvc.getExtensionUserBalanceAsync();
                        this.isOrganizationMember = this.userBalance.accountType == h.Q.SharedAccount;
                        this.hideBottomMessage = null != (o = null != (n = this._activateRoute.snapshot) ? n.queryParams : void 0) ? o.hideBottomMessage : void 0;
                        this.user = this._authService.user;
                        this.errMsg = null !== (m = null != (c = this._activateRoute.snapshot) ? c.queryParams.errormsg : void 0) && void 0 !== m ? m : "something went wrong, please try again later";
                    });
                }
                goToLink() {
                    chrome.tabs.create({
                        url: "https://copyleaks.com"
                    });
                }
            }
            s.ɵfac = function (n) {
                return new (n || s)(e.Y36(x.l), e.Y36(v.v), e.Y36(g.gz));
            };
            s.ɵcmp = e.Xpm({
                type: s,
                selectors: [
                    ["app-error-page"]
                ],
                decls: 6,
                vars: 4,
                consts: [
                    [1, "main-container"],
                    [3, "user", "isOrganizationMember"],
                    [1, "error-msg-container"],
                    ["src", "assets/images/under-maintenance-icon.svg", 1, "error-img"],
                    [1, "error-text", 3, "innerHTML"],
                    ["class", "bottom-msg", 4, "ngIf"],
                    [1, "bottom-msg"]
                ],
                template: function (n, o) {
                    1 & n && (e.TgZ(0, "div", 0), e._UZ(1, "app-ext-header", 1), e.TgZ(2, "div", 2), e._UZ(3, "img", 3), e._UZ(4, "span", 4), e.YNc(5, M, 2, 0, "span", 5), e.qZA(), e.qZA()), 2 & n && (e.xp6(1), e.Q6J("user", o.user)("isOrganizationMember", o.isOrganizationMember), e.xp6(3), e.Q6J("innerHTML", o.errMsg, e.oJD), e.xp6(1), e.Q6J("ngIf", !o.hideBottomMessage));
                },
                directives: [f.T, l.O5],
                styles: [".main-container[_ngcontent-%COMP%]{padding:16px;box-sizing:border-box;width:560px;height:313px;display:flex;flex-direction:column;grid-gap:8px;gap:8px}.main-container[_ngcontent-%COMP%]   app-ext-header[_ngcontent-%COMP%]{padding-bottom:8px}.main-container[_ngcontent-%COMP%]   .error-msg-container[_ngcontent-%COMP%]{height:190px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:4px;grid-gap:4px;gap:4px;flex:1}.main-container[_ngcontent-%COMP%]   .error-msg-container[_ngcontent-%COMP%]   .error-img[_ngcontent-%COMP%]{width:101px;height:109px}.main-container[_ngcontent-%COMP%]   .error-msg-container[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{text-align:center;font:normal normal 600 16px/20px Open Sans;letter-spacing:.1px;color:#040f21;opacity:1}.main-container[_ngcontent-%COMP%]   .bottom-msg[_ngcontent-%COMP%]{color:#3f9af5;font-size:18px;font-weight:bold}[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f2f6f9;border-radius:5px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#c9d6df;border-radius:5px}"]
            });
            const P = [{
                path: "",
                component: s
            }];

            class a { }
            a.ɵfac = function (n) {
                return new (n || a);
            };
            a.ɵmod = e.oAB({
                type: a
            });
            a.ɵinj = e.cJS({
                imports: [
                    [g.Bz.forChild(P)],
                    g.Bz
                ]
            });

            class i { }
            i.ɵfac = function (n) {
                return new (n || i);
            };
            i.ɵmod = e.oAB({
                type: i
            });
            i.ɵinj = e.cJS({
                imports: [l.ez, a, d.X]
            });
        }
    }
]);
//# sourceMappingURL=projects_browser-extension_src_app_pages_error-page_error-page_module_ts.js.map
