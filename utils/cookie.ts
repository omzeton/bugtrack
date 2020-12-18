class Cookie {
    public bake<T>(name: string, value: T) {
        const cookie = [name, "=", JSON.stringify(value), "; domain=.", window.location.host.toString(), "; path=/;"].join("");
        console.log(cookie);
        document.cookie = cookie;
        console.log(document);
        console.log(document.cookie);
    }
    public read(name: string) {
        let result = document.cookie.match(new RegExp(name + "=([^;]+)"));
        result && (result = JSON.parse(result[1]));
        return result;
    }
    public delete(name: string) {
        document.cookie = [name, "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.", window.location.host.toString()].join("");
    }
}

export default new Cookie();
