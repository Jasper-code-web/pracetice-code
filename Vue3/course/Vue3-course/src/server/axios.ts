export const axios = {
    get <T>(url: string): Promise<T> {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url)
            xhr.onreadystatechange = () => {
                if(xhr.status === 200 && xhr.readyState === 4) {
                    setTimeout(() => {
                        resolve(JSON.parse(xhr.responseText))
                    }, 2000)
                }
            }
            xhr.send(null)
        })
    }
}