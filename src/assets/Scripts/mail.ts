/* SmtpJS.com - v2.0.1 */
export class Email {
  public hugo: string;

  public send(e, o, t, n, a, s, r, c) {
    const d = Math.floor(1e6 * Math.random() + 1);
    let i = "From=" + e;
    (i += "&to=" + o),
      (i += "&Subject=" + encodeURIComponent(t)),
      (i += "&Body=" + encodeURIComponent(n)),
      void 0 === a.token
        ? ((i += "&Host=" + a),
          (i += "&Username=" + s),
          (i += "&Password=" + r),
          (i += "&Action=Send"))
        : ((i += "&SecureToken=" + a.token),
          (i += "&Action=SendFromStored"),
          (c = a.callback)),
      (i += "&cachebuster=" + d),
      this.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", i, c);
  }
  sendWithAttachment(e, o, t, n, a, s, r, c, d) {
    const i = Math.floor(1e6 * Math.random() + 1);
    let m = "From=" + e;
    (m += "&to=" + o),
      (m += "&Subject=" + encodeURIComponent(t)),
      (m += "&Body=" + encodeURIComponent(n)),
      (m += "&Attachment=" + encodeURIComponent(c)),
      void 0 === a.token
        ? ((m += "&Host=" + a),
          (m += "&Username=" + s),
          (m += "&Password=" + r),
          (m += "&Action=Send"))
        : ((m += "&SecureToken=" + a.token), (m += "&Action=SendFromStored")),
      (m += "&cachebuster=" + i),
      this.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", m, d);
  }
  ajaxPost(e, o, t) {
    const n = this.createCORSRequest("POST", e);
    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (n.onload = function() {
        e = n.responseText;
        void 0 !== t && t(e);
      }),
      n.send(o);
  }
  ajax(e, o) {
    const t = this.createCORSRequest("GET", e);
    (t.onload = function() {
      e = t.responseText;
      void 0 !== o && o(e);
    }),
      t.send();
  }
  createCORSRequest(e, o) {
    let t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, o, !0)
        : "undefined" !== typeof XDomainRequest
          ? (t = new XDomainRequest()).open(e, o)
          : (t = null),
      t
    );
  }
}

// class Hugo {
//   send(txt) {
//     console.log(txt);
//     this.getname('esta es una prueba');
//   }

//   getname(txt) {
//     console.log(txt);
//   }
// }
