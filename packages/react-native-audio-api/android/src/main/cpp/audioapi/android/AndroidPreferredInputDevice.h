#pragma once

#include <cstdint>

namespace audioapi {

void setPreferredInputDeviceId(int32_t deviceId);
int32_t getPreferredInputDeviceId();

} // namespace audioapi
