/*
 * @Software: Visual Studio Code
 * @Author: StudentCWZ
 * @Email: StudentCWZ@outlook.com
 * @Date: 2023-11-17 14:10:45
 * @Last Modified by: StudentCWZ
 * @Description:
 */

import axios from "../utils/request";
import path from "./path";

const api = {
    // 成品详情地址
    getChengpin() {
        return axios.get(path.baseUrl + path.chengpin)
    }

};

export default api