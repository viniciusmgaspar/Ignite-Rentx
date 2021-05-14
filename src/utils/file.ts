

import fs from "fs"

export const deleteFile = async(filename: string) => {


    try{
        // stat => verifica a existencia do arquivo
        await fs.promises.stat(filename)
    }catch{
        return
    }

    await fs.promises.unlink(filename)
}