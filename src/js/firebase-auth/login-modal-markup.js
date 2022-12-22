export function loginModalMarkup() {
  return `
    <form class="form__signup slide-up">
      <a href="#"
        ><h2 class="form__title" id="signup"><span>or</span>Sign up</h2></a
      >
      <div class="inputs__wrapper">
        <input
          name="userName"
          type="text"
          class="form__input"
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          class="form__input"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          class="form__input"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="form__submit-btn">Sign up</button>
      <div class="error__wrapper">
        <p class="form__notification--error"></p>
      </div>

      <ul class="auth-providers auth-providers--signup">
        <li class="auth-providers__item">
          <a
            class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--signup"
            id="fb"
            href="#"
          >
            <svg class="auth-providers__icon" width="20" height="20">
              <use href="../images/icons.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li class="auth-providers__item">
          <a
            class="auth-providers__link auth-providers__link--google-login auth-providers__link--signup"
            id="google"
            href="#"
          >
            <svg class="auth-providers__icon" width="20" height="20">
              <use href="./images/icons.svg#icon-google"></use>
            </svg>
          </a>
        </li>
      </ul>
    </form>
    <form class="form__login">
      <div class="center">
        <a href="#"
          ><h2 class="form__title" id="login"><span>or</span>Log in</h2></a
        >
        <div class="inputs__wrapper">
          <input
            name="email"
            type="email"
            class="form__input"
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            class="form__input"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="form__submit-btn">Log in</button>
        <div class="error__wrapper">
          <p class="form__notification--error">.</p>
        </div>
        <ul class="auth-providers auth-providers--login">
          <li class="auth-providers__item">
            <a
              class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--login"
              id="fb"
              href="#"
            >
              <svg
                class="auth-providers__icon auth-providers__icon--login"
                width="20"
                height="20"
              >
                <use href="./images/icons.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="auth-providers__item">
            <a
              class="auth-providers__link auth-providers__link--google-login auth-providers__link--login"
              id="google"
              href="#"
            >
              <svg
                class="auth-providers__icon auth-providers__icon--login"
                width="20"
                height="20"
              >
                <use href="./images/icons.svg#icon-google"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </form>
  `;
}

export function signupModalMarkup() {
  return `
    <form class="form__signup">
      <a href="#"
        ><h2 class="form__title" id="signup"><span>or</span>Sign up</h2></a
      >
      <div class="inputs__wrapper">
        <input
          name="userName"
          type="text"
          class="form__input"
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          class="form__input"
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          class="form__input"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="form__submit-btn">Sign up</button>
      <div class="error__wrapper">
        <p class="form__notification--error"></p>
      </div>

      <ul class="auth-providers auth-providers--signup">
        <li class="auth-providers__item">
          <a
            class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--signup"
            id="fb"
            href="#"
          >
            <svg class="auth-providers__icon" width="20" height="20">
              <use href="../images/icons.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li class="auth-providers__item">
          <a
            class="auth-providers__link auth-providers__link--google-login auth-providers__link--signup"
            id="google"
            href="#"
          >
            <svg class="auth-providers__icon" width="20" height="20">
              <use href="./images/icons.svg#icon-google"></use>
            </svg>
          </a>
        </li>
      </ul>
    </form>
    <form class="form__login slide-up">
      <div class="center">
        <a href="#"
          ><h2 class="form__title" id="login"><span>or</span>Log in</h2></a
        >
        <div class="inputs__wrapper">
          <input
            name="email"
            type="email"
            class="form__input"
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            class="form__input"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="form__submit-btn">Log in</button>
        <div class="error__wrapper">
          <p class="form__notification--error">.</p>
        </div>
        <ul class="auth-providers auth-providers--login">
          <li class="auth-providers__item">
            <a
              class="auth-providers__link auth-providers__link--facebook-login auth-providers__link--login"
              id="fb"
              href="#"
            >
              <svg
                class="auth-providers__icon auth-providers__icon--login"
                width="20"
                height="20"
              >
                <use href="./images/icons.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="auth-providers__item">
            <a
              class="auth-providers__link auth-providers__link--google-login auth-providers__link--login"
              id="google"
              href="#"
            >
              <svg
                class="auth-providers__icon auth-providers__icon--login"
                width="20"
                height="20"
              >
                <use href="./images/icons.svg#icon-google"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </form>
  `;
}
