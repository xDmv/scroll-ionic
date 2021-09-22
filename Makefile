#COLORS
RED    := $(shell tput -Txterm setaf 1)
GREEN  := $(shell tput -Txterm setaf 2)
WHITE  := $(shell tput -Txterm setaf 7)
YELLOW := $(shell tput -Txterm setaf 3)
RESET  := $(shell tput -Txterm sgr0)

help:
	@echo '		$(YELLOW)Available the following targets$(RESET):'
	@echo '$(YELLOW)init environment$(RESET):'
	@echo '  $(GREEN)init  $(RESET) - install ionic last version and install all npm packages'
	@echo '$(YELLOW)Development$(RESET):'
	@echo '  $(GREEN)serve  $(RESET) - start emulate app browser'
	@echo '  $(GREEN)build  $(RESET) - build ionic'

	@echo '$(YELLOW)IOS version$(RESET):'
	@echo '  $(GREEN)add-ios $(RESET) - add ios platform'
	@echo '  $(GREEN)del-ios $(RESET) - delete ios platform'
	@echo '  $(GREEN)build-ios  $(RESET) - build ios version'
	@echo '  $(GREEN)sync-ios  $(RESET) - sync, copy www and build'

	@echo '$(YELLOW)Android version$(RESET):'
	@echo '  $(GREEN)add-android $(RESET) - add android platform'
	@echo '  $(GREEN)del-android $(RESET) - delete android platform'
	@echo '  $(GREEN)build-android  $(RESET) - build android version, prod, build environment: production'
	@echo '  $(GREEN)sync-android  $(RESET) - sync, copy www and build'

serve:
	ionic serve
res:
	npm run resources
build:
	ionic build --prod
init:
	npm install -g @ionic/cli && npm install && ionic info

# ios application use capacitor
add-ios:
	ionic capacitor add ios --prod
run-ios:
	ionic capacitor run ios --prod
sync-ios:
	ionic capacitor sync ios --prod
del-ios:
	rm -Rfv ./ios

# android application use capacitor
add-android:
	ionic capacitor add android --prod
run-android:
	ionic capacitor run android --prod
sync-android:
	ionic capacitor sync android --prod
del-android:
	rm -Rfv ./android

