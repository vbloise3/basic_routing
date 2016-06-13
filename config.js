/**
 * Created by vincebloise on 6/12/16.
 */
System.config({
    baseURL: "/",
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            "defaultExtension": "ts",
            "main": "main.ts"
        }
    }
});