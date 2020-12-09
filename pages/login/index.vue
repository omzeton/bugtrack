<template>
    <div class="signup-page">
        <div class="signup-card">
            <form action="">
                <h2>Register an account</h2>
                <div class="input-field">
                    <p>Username</p>
                    <input type="text" />
                </div>
                <div class="input-field">
                    <p>Email</p>
                    <input type="text" />
                </div>
                <div class="input-field">
                    <p>Password</p>
                    <input type="text" />
                </div>
                <div class="input-field" style="margin-bottom:24px">
                    <p>Retype password</p>
                    <input type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
.signup-card {
    width: 500px;
    height: auto;
    background-color: $white1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    box-shadow: 0px 0px 23px -1px rgba(255, 127, 17, 0.1);
}
</style>
