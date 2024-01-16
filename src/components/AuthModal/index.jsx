import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import styled from "styled-components";
import { useAuthContext } from "@contexts/AuthContext";
import cn from "@utils/cn";
import { MODAL_TYPES } from "@constants/generals";

const AuthModalContainer = styled.div`
  display: ${(props) => (props?.isShow ? "block" : "none")};
`;

const AuthModal = () => {
  const [selectedTab, setSelectedTab] = useState(MODAL_TYPES.login);
  const { showedModal, handleShowModal, handleCloseModal } = useAuthContext();

  const _onTabChange = (e, tab) => {
    e.preventDefault();
    setSelectedTab(tab);
    handleShowModal?.(tab);
  };

  return (
    <AuthModalContainer
      className={cn(`modal fade`, {
        show: !!showedModal,
      })}
      isShow={!!showedModal}
      // className="modal fade"
      // id="signin-modal"
      // tabIndex={-1}
      // role="dialog"
      // aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              // data-dismiss="modal"
              // aria-label="Close"
              onClick={handleCloseModal}
            >
              <span aria-hidden="true">
                <i className="icon-close" />
              </span>
            </button>
            <div className="form-box">
              <div className="form-tab">
                <ul
                  className="nav nav-pills nav-fill nav-border-anim"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className={cn(`nav-link`, {
                        active: showedModal === MODAL_TYPES.login,
                      })}
                      // className="nav-link active"
                      // id="signin-tab"
                      // data-toggle="tab"
                      href="#signin"
                      // role="tab"
                      // aria-controls="signin"
                      // aria-selected="true"
                      onClick={(e) => _onTabChange(e, MODAL_TYPES.login)}
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={cn(`nav-link`, {
                        active: showedModal === MODAL_TYPES.register,
                      })}
                      // className="nav-link"
                      // id="register-tab"
                      // data-toggle="tab"
                      href="#register"
                      // role="tab"
                      // aria-controls="register"
                      // aria-selected="false"
                      onClick={(e) => _onTabChange(e, MODAL_TYPES.register)}
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="tab-content-5">
                  <div className="tab-pane fade show active">
                    {selectedTab === MODAL_TYPES.login && <LoginForm />}
                    {/* .End .tab-pane */}
                    {selectedTab === MODAL_TYPES.register && <RegisterForm />}
                    {/* .End .tab-pane */}
                  </div>
                </div>
                {/* End .tab-content */}
              </div>
              {/* End .form-tab */}
            </div>
            {/* End .form-box */}
          </div>
          {/* End .modal-body */}
        </div>
        {/* End .modal-content */}
      </div>
      {/* End .modal-dialog */}
      <div
        style={{ zIndex: -1 }}
        className={cn(`modal-backdrop`, {
          "fade show": !!showedModal,
        })}
        onClick={handleCloseModal}
      />
    </AuthModalContainer>
  );
};

export default AuthModal;
