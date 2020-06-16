/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date;

    tokens: AuthToken[];

    comparePassword: (password: string) => Promise<boolean>;
}

export type AuthToken = {
    accessToken: string,
    kind: string
};


// export default connections.db.model < IUserModel > ('UserModel', UserSchema);