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
            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>
          </a>
        </li>
        <li class="auth-providers__item">
          <a
            class="auth-providers__link auth-providers__link--google-login auth-providers__link--signup"
            id="google"
            href="#"
          >
            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>
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
              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>
            </a>
          </li>
          <li class="auth-providers__item">
            <a
              class="auth-providers__link auth-providers__link--google-login auth-providers__link--login"
              id="google"
              href="#"
            >
              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>
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
            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>
          </a>
        </li>
        <li class="auth-providers__item">
          <a
            class="auth-providers__link auth-providers__link--google-login auth-providers__link--signup"
            id="google"
            href="#"
          >
            <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>
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
              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"/></svg>
              </svg>
            </a>
          </li>
          <li class="auth-providers__item">
            <a
              class="auth-providers__link auth-providers__link--google-login auth-providers__link--login"
              id="google"
              href="#"
            >
              <svg class="auth-providers__icon" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16.319 13.713V19.2h9.075c-.369 2.356-2.744 6.9-9.075 6.9C10.856 26.1 6.4 21.575 6.4 16s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181C24.25 1.576 20.638 0 16.319 0c-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.05-.113-1.85-.25-2.65l-15.113-.006z"/></svg>
            </a>
          </li>
        </ul>
      </div>
    </form>
  `;
}
