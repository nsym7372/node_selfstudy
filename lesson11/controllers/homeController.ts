import express from "express";

export const respondWithName = (
    req: express.Request,
    res: express.Response
) => {
    // エラー処理確認のため、存在しないviewを指定
    res.render("index_xxx");
};
