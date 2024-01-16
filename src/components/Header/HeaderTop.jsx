import { MODAL_TYPES } from "@constants/generals";
import PATHS from "@constants/paths";
import { useAuthContext } from "@contexts/AuthContext";
import tokenMethod from "@utils/token";
import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  const { handleShowModal, handleLogout, profile } = useAuthContext();
  const { firstName, email } = profile || {};

  const _onShowAuthModal = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    handleShowModal?.(MODAL_TYPES.login);
  };

  const _onSignOut = (e) => {
    e?.preventDefault();
    handleLogout();
  };

  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:0989596912">
            <i className="icon-phone" /> Hotline: 098 9596 912{" "}
          </a>
        </div>
        <div className="header-right">
          {!!!tokenMethod.get() ? (
            <>
              {/* Not LogIn */}
              <ul className="top-menu top-link-menu">
                <li>
                  <a
                    href="#signin-modal"
                    //  data-toggle="modal"
                    className="top-menu-login"
                    onClick={_onShowAuthModal}
                  >
                    <i className="icon-user"></i>Login | Resgister{" "}
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              {/* Logged In */}
              <ul className="top-menu">
                <li>
                  <a href="#" className="top-link-menu">
                    <i className="icon-user" />
                    {firstName}{" "}
                  </a>
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <Link to={PATHS.DASHBOARD}>Account Details</Link>
                        </li>
                        <li>
                          <Link to={PATHS.DASHBOARD}>Your Orders</Link>
                        </li>
                        <li>
                          <Link to={PATHS.DASHBOARD}>
                            Wishlist <span>(3)</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={PATHS.HOME} onClick={_onSignOut}>
                            Sign Out
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
