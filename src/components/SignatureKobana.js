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
        phone = `(${numbers.substring(0, 2)}) ${numbers.substring(2, 11)}`
      } else if (format === 2) {
        phone = `+55${numbers}`;
      }
      return phone;
    }
  }

  const photoUrl = (email) => {
    let parts = email.split('@');
    let url = null;

    if (parts[0]) {
      url = `https://kobana-public.s3.sa-east-1.amazonaws.com/email-signature/${parts[0]}.png`;
    } else {
      url = ''
    }
    return url;
  }

  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      style={{
        caretColor: "rgb(0, 0, 0)",
        verticalAlign: "-webkit-baseline-middle",
        fontSize: "medium",
        fontFamily: "Verdana"
      }}
    >
      <tbody>
        <tr style={{ color: "black !important" }}>
          <td>
            <table
              cellPadding={0}
              cellSpacing={0}
              style={{ verticalAlign: "-webkit-baseline-middle" }}
            >
              <tbody>
                <tr>
                  <td width={100} style={{ verticalAlign: "middle" }}>
                    <span style={{ marginRight: 20, display: "block" }}>
                      <img
                        alt={props.nome}
                        src={photoUrl(props.email)}
                        width={100}
                        style={{ maxWidth: 100 }}
                      />
                    </span>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <h3 color="#000000" style={{ margin: 0, fontSize: '18px' }}>
                      {props.nome}
                      <br />
                    </h3>
                    <p color="#000000" style={{ margin: 0, lineHeight: '26px' }}>
                      {props.cargo}
                    </p>
                    <p color="#000000" style={{ margin: 0, lineHeight: '26px' }}>
                      <img
                        alt="Kobana"
                        src="https://kobana-public.s3.sa-east-1.amazonaws.com/email-signature/kobana.png"
                        width={200}
                        height={27}
                      />
                      <br />
                    </p>
                  </td>
                  <td width={30}>
                    <div style={{ width: 30 }} />
                  </td>
                  <td
                    color="#000000"
                    width={1}
                    style={{
                      width: 1,
                      borderBottomStyle: "none",
                      borderLeftWidth: 1,
                      borderLeftStyle: "solid",
                      borderLeftColor: "rgb(0, 0, 0)"
                    }}
                  />
                  <td width={30}>
                    <div style={{ width: 30 }} />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      style={{ verticalAlign: "-webkit-baseline-middle" }}
                    >
                      <tbody>
                        <tr height={25} style={{ verticalAlign: "middle" }}>
                          <td width={30} style={{ verticalAlign: "middle" }}>
                            <img
                              src="https://kobana-public.s3.sa-east-1.amazonaws.com/email-signature/icon-phone.png"
                              alt="phone"
                              width={14}
                              height={14}
                              style={{ marginTop: "5px", marginRight: "20px" }}
                            />
                          </td>
                          <td style={{ padding: 0 }}>
                            <a
                              href={`tel:${parsedPhone(props.telefone, 2)}`}
                              color="#000000"
                              style={{ color: "rgb(0, 0, 0)", fontSize: '12px' }}
                            >
                              {parsedPhone(props.telefone, 1)}
                            </a>
                          </td>
                        </tr>
                        <tr height={25} style={{ verticalAlign: "middle" }}>
                          <td width={30} style={{ verticalAlign: "middle" }}>
                            <img
                              src="https://kobana-public.s3.sa-east-1.amazonaws.com/email-signature/icon-email.png"
                              alt="email"
                              width={14}
                              height={14}
                              style={{ marginTop: "5px", marginRight: "20px" }}
                            />
                          </td>
                          <td style={{ padding: 0 }}>
                            <a
                              href={`mailto:${props.email}`}
                              color="#000000"
                              style={{ color: "rgb(0, 0, 0)", fontSize: '12px' }}
                            >
                              {props.email}
                            </a>
                          </td>
                        </tr>
                        <tr height={25} style={{ verticalAlign: "middle" }}>
                          <td width={30} style={{ verticalAlign: "middle" }}>
                            <img
                              src="https://kobana-public.s3.sa-east-1.amazonaws.com/email-signature/icon-link.png"
                              alt="site"
                              width={14}
                              height={14}
                              style={{ marginTop: "5px", marginRight: "20px" }}
                            />
                          </td>
                          <td style={{ padding: 0 }}>
                            <a
                              href="https://www.kobana.com.br/"
                              color="#000000"
                              data-toggle="tooltip"
                              title="https://www.kobana.com.br/"
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontSize: '12px',
                                display: "inline"
                              }}
                            >
                              kobana.com.br
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table >
  )
}

export default Signature;