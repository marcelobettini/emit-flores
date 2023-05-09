import { LoggerFactory } from "./abstract-factory";
const logger = LoggerFactory.createLogger();
logger.debug("Quitando 🐛 del código");
logger.warn("Advertencia: se está por desmoronar todo el código");
logger.info("Está todo bien!! 😍");
logger.error("Esto acaba de essssplotar 😓");