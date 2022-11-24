import React, { useEffect } from 'react';

const Signature = (props) => {
  useEffect(() => {

  }, [])

  const parsedPhone = (input, format) => {
    let numbers = input.replace(/\D/g, "");
    let phone = '';
    if (numbers.length !== 11 && numbers.length !== 10) {
      return '';
    } else {
      if (format === 1) {
        phone = `(${numbers.substring(0, 2)}) ${numbers.substring(2, 7)} ${numbers.substring(7, 11)}`
      } else if (format === 2) {
        phone = `+55${numbers}`;
      }
      return phone;
    }
  }

  const photoUrl = (email) => {
    let parts = email.split('@');
    let url = '';

    if (parts[0]) {
      url = `https://viden-public.s3.sa-east-1.amazonaws.com/email-signature/${parts[0]}.png`;
    }
    return url;
  }

  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      style={{
        fontFamily: "Arial,Helvetica,sans-serif",
        // lineHeight: 0,
        fontSize: 1,
        padding: "0px!important",
        borderSpacing: 0,
        margin: 0,
        borderCollapse: "collapse",
        width: 600
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "0px!important" }}>
            <table
              cellPadding={0}
              cellSpacing={0}
              style={{
                fontFamily: "Arial,Helvetica,sans-serif",
                // lineHeight: 0,
                fontSize: 1,
                padding: "0px!important",
                borderSpacing: 0,
                margin: 0,
                borderCollapse: "collapse"
              }}
            >
              <tbody>
                <tr>
                  <td width={129} style={{ paddingRight: 10 }}>
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        fontFamily: "Arial,Helvetica,sans-serif",
                        // lineHeight: 0,
                        fontSize: 1,
                        padding: "0px!important",
                        borderSpacing: 0,
                        margin: 0,
                        borderCollapse: "collapse"
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              borderCollapse: "collapse",
                              // lineHeight: 0,
                              paddingRight: 1
                            }}
                          >
                            <img
                              alt={props.nome}
                              src={photoUrl(props.email)}
                              width={129}
                              style={{ maxWidth: 129 }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td style={{ padding: "0px!important" }}>
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        fontFamily: "Arial,Helvetica,sans-serif",
                        // lineHeight: 0,
                        fontSize: 1,
                        padding: "0px!important",
                        borderSpacing: 0,
                        margin: 0,
                        borderCollapse: "collapse"
                      }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: 10 }}>
                            <table
                              cellPadding={0}
                              cellSpacing={0}
                              style={{
                                fontFamily: "Arial,Helvetica,sans-serif",
                                // lineHeight: 0,
                                fontSize: 1,
                                padding: "0px!important",
                                borderSpacing: 0,
                                margin: 0,
                                borderCollapse: "collapse"
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      borderCollapse: "collapse",
                                      fontFamily: "Verdana, Geneva, sans-serif",
                                      fontSize: 21,
                                      fontStyle: "normal",
                                      // lineHeight: 23,
                                      fontWeight: 700,
                                      paddingBottom: 2
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "21.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 23,
                                        fontWeight: 700,
                                        color: "#0baca9",
                                        display: "inline"
                                      }}
                                    >
                                      {props.nome}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{
                                      borderCollapse: "collapse",
                                      fontFamily: "Verdana, Geneva, sans-serif",
                                      fontSize: 12,
                                      fontStyle: "normal",
                                      // lineHeight: 14,
                                      fontWeight: 700,
                                      paddingBottom: 10
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "12.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 14,
                                        fontWeight: 700,
                                        color: "#2e2f39",
                                        display: "inline"
                                      }}
                                    >
                                      {props.cargo}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{
                                      borderCollapse: "collapse",
                                      fontFamily: "Verdana, Geneva, sans-serif",
                                      fontSize: 12,
                                      fontStyle: "normal",
                                      // lineHeight: 14,
                                      fontWeight: 700,
                                      paddingBottom: 4
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "12.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 14,
                                        fontWeight: 400,
                                        color: "#0baca9",
                                        display: "inline"
                                      }}
                                    >
                                      Email.
                                    </span>{" "}
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "12.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 14,
                                        fontWeight: 700,
                                        color: "#2e2f39",
                                        display: "inline"
                                      }}
                                    >
                                      <a
                                        href={`mailto:${props.email}`}
                                        color="#000000"
                                        style={{ color: "rgb(0, 0, 0)", fontSize: '12px' }}
                                      >
                                        {props.email}
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{
                                      borderCollapse: "collapse",
                                      fontFamily: "Verdana, Geneva, sans-serif",
                                      fontSize: 12,
                                      fontStyle: "normal",
                                      // lineHeight: 14,
                                      fontWeight: 700,
                                      paddingBottom: 4
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "12.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 14,
                                        fontWeight: 400,
                                        color: "#0baca9",
                                        display: "inline"
                                      }}
                                    >
                                      Mobile.
                                    </span>{" "}
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "12.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 14,
                                        fontWeight: 700,
                                        color: "#2e2f39",
                                        display: "inline"
                                      }}
                                    >
                                      <a
                                        href={`tel:${parsedPhone(props.telefone, 2)}`}
                                        color="#000000"
                                        style={{ color: "rgb(0, 0, 0)", fontSize: '12px' }}
                                      >
                                        {parsedPhone(props.telefone, 1)}
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    style={{
                                      borderCollapse: "collapse",
                                      fontFamily: "Verdana, Geneva, sans-serif",
                                      fontSize: 12,
                                      fontStyle: "normal",
                                      // lineHeight: 14,
                                      fontWeight: 700,
                                      paddingBottom: 10
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "12.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 14,
                                        fontWeight: 400,
                                        color: "#0baca9",
                                        display: "inline"
                                      }}
                                    >
                                      Web.
                                    </span>{" "}
                                    <span
                                      style={{
                                        fontFamily: "Verdana, Geneva, sans-serif",
                                        fontSize: "12.0px",
                                        fontStyle: "normal",
                                        // lineHeight: 14,
                                        fontWeight: 700,
                                        color: "#2e2f39",
                                        display: "inline"
                                      }}
                                    >
                                      <a
                                        href="https://www.viden.ventures"
                                        color="#000000"
                                        style={{ color: "rgb(0, 0, 0)", fontSize: '12px' }}
                                      >
                                        www.viden.ventures
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td
                            style={{
                              borderCollapse: "collapse",
                              backgroundColor: "#0baca9",
                              width: 1,
                              verticalAlign: "super",
                              padding: "0px!important"
                            }}
                          />
                          <td
                            style={{ borderCollapse: "collapse", paddingRight: 10 }}
                          />
                          <td style={{ padding: "0px!important" }}>
                            <table
                              cellPadding={0}
                              cellSpacing={0}
                              style={{
                                fontFamily: "Arial,Helvetica,sans-serif",
                                // lineHeight: 0,
                                fontSize: 1,
                                padding: "0px!important",
                                borderSpacing: 0,
                                margin: 0,
                                borderCollapse: "collapse"
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style={{
                                      borderCollapse: "collapse",
                                      // lineHeight: 0,
                                      paddingRight: 1
                                    }}
                                  >
                                    <img
                                      height={64}
                                      width={209}
                                      alt="Viden Ventures"
                                      src="https://viden-public.s3.sa-east-1.amazonaws.com/email-signature/Logo-Viden-64x209.png"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <table
                      cellPadding={0}
                      cellSpacing={0}
                      style={{
                        fontFamily: "Arial,Helvetica,sans-serif",
                        // lineHeight: 0,
                        fontSize: 1,
                        padding: "0px!important",
                        borderSpacing: 0,
                        margin: 0,
                        borderCollapse: "collapse"
                      }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: 10 }}>
                            <img
                              height={21}
                              width={21}
                              alt="slack"
                              src="https://viden-public.s3.sa-east-1.amazonaws.com/email-signature/Slack.png"
                            />
                          </td>
                          <td style={{ paddingRight: 10 }}>
                            <img
                              height={21}
                              width={21}
                              alt="discord"
                              src="https://img2.gimm.io/5262e686-7ab0-4a79-ac40-a6a7bc140b33/img.png"
                            />
                          </td>
                          <td style={{ paddingRight: 10 }}>
                            <img
                              height={21}
                              width={21}
                              alt="linkedin"
                              src="https://img2.gimm.io/6674b654-2b8c-401b-a110-e829ca0aafc0/img.png"
                            />
                          </td>
                          <td style={{ paddingRight: 10 }}>
                            <img
                              height={21}
                              width={21}
                              alt="instagram"
                              src="https://img2.gimm.io/621e0074-2264-4335-8756-cb095eba6345/img.png"
                            />
                          </td>
                          <td style={{ paddingRight: 1 }}>
                            <img
                              height={21}
                              width={21}
                              alt="spotify"
                              src="https://img2.gimm.io/ec75c320-e1f8-4994-aadb-f52abdb8eda8/img.png"
                            />
                          </td>
                          <td style={{ padding: "0px!important" }} />
                        </tr>
                      </tbody>
                    </table> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Signature;